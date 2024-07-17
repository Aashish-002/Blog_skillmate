"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { slugify } from "@/helpers/slugify";
import { CategoryListType } from "@/types/category";
import { ApiResponse } from "@/types/response";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

/**
 * Write Blog Page component that renders everything
 * title, categories,
 * handle image upload, category change, publish blog
 * use's category API and post blog API
 * @returns Write Blog JSX element
 */
const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  /** category to be selected */
  const [category, setCategory] = useState<string | null>(null);
  /** if other category, input a new category */
  const [otherCategory, setOtherCategory] = useState<string>("");
  /** list of category from the DB */
  const [categoryList, setCategoryList] = useState<CategoryListType[]>();

  const [content, setContent] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "authenticated" && session.user.role === "USER") {
    throw new Error("Only ADMIN can access this page");
  }

  useEffect(() => {
    /**
     * Fetches category list from backend API
     */
    const getCat = async () => {
      const res = await fetch(`/api/categories`);
      if (!res.ok) {
        throw new Error("Request Failed");
      }
      const data: CategoryListType[] = await res.json();
      console.log(data);

      const dummy = {
        id: "other",
        title: "other",
        slug: "other",
      };
      const newData = [...data, dummy];
      console.log(newData);

      setCategoryList(newData);
      // setCategoryList((prev) => ([...prev, dummy]))
    };

    getCat();
  }, []);
  console.log(categoryList);

  /**
   * Handles image upload and stores in File state
   * @param e HTML event
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile));
    }
  };

  const handleCategoryClick = (cat: string) => {
    setCategory(category === cat ? null : cat);
    if (cat !== "other") {
      setOtherCategory("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newCategory;
    // only create new category if other is clicked
    if (otherCategory) {
      //* create a new category
      newCategory = await fetch("/api/categories", {
        method: "POST",
        body: JSON.stringify({
          slug: otherCategory,
          title: otherCategory,
          img: null,
        }),
      })
        .then((res) => res.json())
        .then((data) => data);
    }

    // check if otherCategory is present and select Category accordingly
    const finalCategory = otherCategory ? newCategory : category;

    if (!title || !finalCategory || !content) {
      alert("Please fill in all fields");
      return;
    }

    // upload image file
    const formData = new FormData();

    formData.append("file", file!);

    const imageURL = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    const postData = JSON.stringify({
      title: title,
      slug: slugify(title),
      catSlug: finalCategory?.toLowerCase(),
      desc: content,
      img: `/uploads/${imageURL}`,
    });

    console.log(postData);

    const response = await fetch("/api/blogs/post", {
      method: "POST",
      body: postData,
    });

    if (response.ok) {
      alert("Blog uploaded successfully!");
      setTitle("");
      setFile(null);
      setFilePreview(null);
      setCategory(null);
      setContent("");
      setOtherCategory("");
      router.replace("/myblog");
    } else {
      alert("Failed to upload blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add new blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Add Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="fileUpload"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Upload media
          </label>
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
                <img
                  src={filePreview}
                  alt="Preview"
                  className="w-full h-auto rounded-md"
                />
              </div>
            ) : (
              <label htmlFor="fileUpload" className="cursor-pointer">
                <div className="flex justify-center items-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Image must be less than 5 MB
                </p>
              </label>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Choose blog category
          </label>
          <div className="flex flex-wrap gap-2">
            {categoryList &&
              categoryList?.map((cat: any) => (
                <button
                  type="button"
                  key={cat.id}
                  className={`px-4 py-2 rounded-full border-2 capitalize ${
                    category === cat.slug
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-transparent text-gray-700 border-gray-300"
                  }`}
                  onClick={() => handleCategoryClick(cat.slug)}
                >
                  {cat.slug}
                </button>
              ))}
          </div>
        </div>
        {category === "other" && (
          <div className="mb-6">
            <label
              htmlFor="otherCategory"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Specify other category
            </label>
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
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Write your blog here
          </label>
          <ReactQuill value={content} onChange={setContent} className="h-60" />
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
