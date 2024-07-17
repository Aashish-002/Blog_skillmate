import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const getData = async () => {
  const res = await fetch(`${process.env.API}/api/categories`, {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("Request Failed");
  }

  return res.json();
};

async function CategoryList({}: Props) {
  const data = await getData();

  const categoryColors: { [key: string]: string } = {
    marketing: "bg-pink-100 hover:bg-pink-200",
    design: "bg-red-100 hover:bg-red-200",
    "content-creation": "bg-orange-100 hover:bg-orange-200",
    developing: "bg-yellow-100 hover:bg-yellow-200",
  };

  return (
    <>
      <h1 className="my-12 mx-0 text-2xl font-bold" id="popular-categories">
        Popular Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <Link
          className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          href={`/blog#popular-categories`}
        >
          All
        </Link>
        {data?.map((item: any) => (
          <Link
            key={item._id}
            className={`flex items-center gap-2 capitalize text-nowrap p-4 h-16 justify-center rounded-lg ${
              categoryColors[item.slug.toLowerCase().replace(" ", "-")] ||
              "bg-gray-100 hover:bg-gray-200"
            } transition`}
            href={`/blog?cat=${item.slug}#popular-categories`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="ml-2">{item.slug}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategoryList;
