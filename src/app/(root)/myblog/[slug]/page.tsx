"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { slugify } from '@/helpers/slugify';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

 function EditBlog({ params }:{params:any}){
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const [otherCategory, setOtherCategory] = useState<string>('');
  const { data: session, status } = useSession();
  const router = useRouter();
  const { slug }  = params;

  useEffect(() => {
    if (slug) {
      fetch(`/api/blogs/${slug}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setTitle(data.title);
            setFilePreview(data.img);
            setCategory(data.catSlug);
            setContent(data.desc);
          }
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  },[]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile));
    }
  };

  const handleCategoryClick = (cat: string) => {
    setCategory(category === cat ? null : cat);
    if (cat !== 'Other') {
      setOtherCategory('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalCategory = category === 'Other' ? 'other' : category;
    if (!title || !finalCategory || !content) {
      alert('Please fill in all fields');
      return;
    }

    // image file
    const formData = new FormData();

    formData.append('file', file!);

    const imageReq = await fetch('/api/upload', { method: "POST", body: formData})
    const data = await imageReq.json();

    // formData.append('title', title);
    // formData.append('file', file);
    // formData.append('catSlug', finalCategory.toLowerCase());
    // formData.append('desc', content);
    // formData.append('slug', slugify(title))
    // /uploads/${originalFileName}
    const postData = JSON.stringify({
      title: title,
      slug: slugify(title),
      catSlug: finalCategory.toLowerCase(),
      desc: content,
      img: `/uploads/${data.imgUrl}` 
    })

    const response = await fetch(`/api/blogs/post/${slug}`, {
      method: "PUT",
      body: postData
    });

    if (response.ok) {
      alert('Blog updated successfully!');
      setTitle('');
      setFile(null);
      setFilePreview(null);
      setCategory(null);
      setContent('');
      setOtherCategory('');
      router.push('/'); // Redirect to the blogs list or any other page
    } else {
      alert('Failed to update blog');
    }
  };

  if (status === "unauthenticated") {
    router.push('/login');
  }

  if (status === 'authenticated' && session.user.role === "USER") {
    throw new Error("Only ADMIN can access this page");
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Edit Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="fileUpload" className="block text-lg font-medium text-gray-700 mb-2">Upload media</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            {filePreview ? (
              <div className="mt-4">
                <Image width={500} height={500}  src={filePreview} alt="Preview" className="w-full h-auto rounded-md" />
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setFilePreview(null)}
                >
                  Change Image
                </button>
              </div>
            ) : (
              <label htmlFor="fileUpload" className="cursor-pointer">
                <div className="flex justify-center items-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <p className="mt-1 text-sm text-gray-600">Image must be less than 5 MB</p>
              </label>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Choose blog category</label>
          <div className="flex flex-wrap gap-2">
            {['marketing', 'design', 'content', 'developing', 'other'].map(cat => (
              <button
                type="button"
                key={cat}
                className={`px-4 py-2 rounded-full capitalize border-2 ${category === cat ? 'bg-green-500 text-white border-green-500' : 'bg-transparent text-gray-700 border-gray-300'}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {category === 'Other' && (
          <div className="mb-6">
            <label htmlFor="otherCategory" className="block text-lg font-medium text-gray-700 mb-2">Specify other category</label>
            <input
              type="text"
              id="otherCategory"
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        )}
        <div className="mb-6 h-96">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Edit your blog here</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="h-60"
          />
        </div>
        <div className='my-5'>
          <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-md">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;