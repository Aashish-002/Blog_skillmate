import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function MenuCategories({}: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      <Link
        className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        href={"/blog"}
      >
        <Image
          src={"/images/moon.png"}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        All
      </Link>
      <Link
        className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-pink-100 hover:bg-pink-200 transition"
        href={"/blog?cat=marketing"}
      >
        <Image
          src={"/images/moon.png"}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        Marketing
      </Link>
      <Link
        className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-green-100 hover:bg-green-200 transition"
        href={"/blog?cat=design"}
      >
        <Image
          src={"/images/moon.png"}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        Design
      </Link>
      <Link
        className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-orange-100 hover:bg-orange-200 transition"
        href={"/blog?cat=content-creation"}
      >
        <Image
          src={"/images/moon.png"}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        Content Creation
      </Link>
      <Link
        className="flex items-center gap-2.5 text-capitalize p-4 h-16 justify-center rounded-lg bg-yellow-100 hover:bg-yellow-200 transition"
        href={"/blog?cat=dev"}
      >
        <Image
          src={"/images/moon.png"}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        Developing
      </Link>
    </div>
  );
}

export default MenuCategories;
