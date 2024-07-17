"use client"
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from 'sanitize-html';
import React from "react";

interface PropsType {
  id: string;
  slug: string;
  title: string;
  body: string;
  imageUrl: string;
  category: string;
  author: string;
  authorId: string;
  comments: string;
  createdAt: string;
  updatedAt: string;
}

type Props = {
  key: string,
  item: any
};

function Card({ key, item }: Props) {

  const sanitizedContent = sanitizeHtml(item.desc, {
    allowedTags: [],
    allowedAttributes: {},
  });

  return (
    <Link href={`/posts/${item.slug}`} key={key}>
      <div className="mb-12 flex flex-col md:flex-row items-center gap-5 hover:bg-gray-100 transition-colors duration-300 p-4 rounded-xl">
        <div className="relative flex-shrink-0 w-full md:w-1/2 h-52 md:h-52 mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
          <Image
            src={item.img || `https://blog-stage.skillmate.ai/${item.img}`}
            alt=""
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col flex-grow gap-7">
          <div className="detail">
            <span className="date text-gray-500">{item.createdAt.substring(0, 10)} . </span>
            <span className="category font-medium capitalize text-green-700">
              {item.catSlug}
            </span>
          </div>
          {/* title */}
          <h1 className="w-full flex flex-col hover:text-brandgreen transition-colors duration-300">{item.title}</h1>
          {/* body */}
          <p className="text-sm font-light text-softTextColor text-wrap">
            {sanitizedContent.substring(0, 100)}...
          </p>
          {/* read link */}
          <span className="border-b border-r-red-800 w-max px-1 py-0 hover:text-brandgreen transition-colors duration-300">Read More</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;

// const Card :React.FC<propsType> = ({ key, item}) => {
//   return (
//     <div className=" flex gap-5 mb-6" key={key}>
//         {item.imageUrl && (
//             <div className=' image flex flex-row justify-start'>
//             <Image src={item.imageUrl} alt='' height={150} width={150}  className="rounded"/>
//         </div>
//         )}

//         <div className="flex flex-col">
//             <div className="text-details  flex flex-row">
//                 {item.updatedAt && (<span className="text-black">{item.updatedAt}   </span>)}
//                 {item.author && ( <span className="text-black"> .  {item.author}</span>)}

//             </div>
//             <h1 className="text-1xl font-sora font-bold">{item.title}</h1>
//             <p className="max-w-md">{item.comments}</p>
//         </div>
//         </div>

//   )
// }

// export default Card;
