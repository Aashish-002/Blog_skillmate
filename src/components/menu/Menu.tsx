"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const Menu = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/categories`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Request Failed");
      }
      const getData = await res.json();
      setData(getData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <ImSpinner9 className="animate-spin" />;
  }

  return (
    <div className="flex flex-col items-start my-[50px] mx-0  lg:flex">
      <h1 className="flex flex-col md:flex-row gap-2 md:gap-5 md:text-xl mt-4 md:mt-0 items-center md:items-end w-full md:w-auto justify-center md:justify-end text-black font-bold text-2xl mb-4">
        Categories
      </h1>
      <div className="flex flex-col gap-4 mb-4">
        {data.map((item: any) => (
          <Link
            href={`/blog?cat=${item.slug}#popular-categories`}
            key={item._id}
            className="capitalize hover:text-brandgreen/60 text-xl"
          >
            {item.slug}
          </Link>
        ))}
      </div>
      <hr className="w-72 border-gray-400 mb-6" />
      <h1 className="flex flex-col md:flex-row gap-2 md:gap-5 md:text-xl mt-4 md:mt-0 items-center md:items-end w-full md:w-auto justify-center md:justify-end text-black font-bold text-2xl mb-4">
        Popular Tags
      </h1>
      <div className="flex flex-row">
        <div className="flex">coding</div>
      </div>
    </div>
  );
};

export default Menu;
