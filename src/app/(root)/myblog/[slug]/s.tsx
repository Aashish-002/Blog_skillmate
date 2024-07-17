"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useSession } from 'next-auth/react';
import {  useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const [otherCategory, setOtherCategory] = useState<string>('');
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
//   const {postId}=router.query
console.log(router)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }

    if (status === 'authenticated' && session?.user.role === "USER") {
      throw new Error("Only ADMIN can access this page");
    }

    const fetchPostData = async () => {
      if (slug) {
        const response = await fetch(`/api/blogs/${slug}`);
        if (response.ok) {
          const post = await response.json();
          setTitle(post.title);
          setFilePreview(post.imageUrl);
          setCategory(post.category);
          setContent(post.body);
        } else {
          alert('Failed to fetch post data');
        }
      }
    };

    fetchPostData();
  }, [status, session, router, slug]);

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
    const finalCategory = category === 'Other' ? otherCategory : category;
    if (!title || (!file && !filePreview) || !finalCategory || !content) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('userId', session?.user.id!);
    formData.append('title', title);
    if (file) {
      formData.append('file', file);
    }
    formData.append('category', finalCategory);
    formData.append('content', content);

    const response = await fetch(`/api/blogs/${slug ? `edit/${slug}` : 'post'}`, {
      method: slug ? 'PUT' : 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Blog uploaded successfully!');
      setTitle('');
      setFile(null);
      setFilePreview(null);
      setCategory(null);
      setContent('');
      setOtherCategory('');
      router.replace('/myblog');
    } else {
      alert('Failed to upload blog');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{slug ? 'Edit Blog' : 'Add new blog'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Add Title</label>
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
                <img src={filePreview} alt="Preview" className="w-full h-auto rounded-md" />
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
            {['Marketing', 'Design', 'Content Creation', 'Developing', 'Other'].map(cat => (
              <button
                type="button"
                key={cat}
                className={`px-4 py-2 rounded-full border-2 ${category === cat ? 'bg-green-500 text-white border-green-500' : 'bg-transparent text-gray-700 border-gray-300'}`}
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
          <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Write your blog here</label>
          <ReactQuill 
            value={content} 
            onChange={setContent}
            className="h-60"
          />
        </div>
        <div className='my-5'>
          <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-md">{slug ? 'Update Blog' : 'Upload'}</button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
