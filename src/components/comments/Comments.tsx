"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaComment } from "react-icons/fa";

type Props = {
  postSlug: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

function Comment({ postSlug }: Props) {
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  /**
   * Submit Handler to submit POST request to API and add
   * new comment
   */
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };

  /**
   *
   * @param date get date as string
   * @returns string
   */
  const getNoOfDays = (date: string) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date);
    const secondDate = new Date();

    // JS
    // const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    // TS
    const diffDays: number = Math.round(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
    );

    if (diffDays === 0) {
      return `${diffDays + 1} day ago...`;
    }

    return `${diffDays + 1} days ago...`;
  };

  return (
    <>
      <h1 className="title text-gray-600 mb-3 text-2xl font-semibold">
        Comments
      </h1> 
      {status === "authenticated" ? (
        // if auth
        <div className="write flex items-center justify-between gap-0 mb-1">
          <textarea
            placeholder="Write a comment..."
            className="input p-4 border rounded-l-full w-full outline-none resize-none overflow-hidden h-12"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button
            className="button flex items-center justify-center bg-brandgreen text-white font-bold rounded-md p-5 h-12 rounded-r-full disabled:cursor-not-allowed disabled:bg-brandgreen/40"
            onClick={handleSubmit}
            disabled={desc.length === 0 ? true : false}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className=" text-lg md:text-2xl "
            />
          </button>
        </div>
      ) : (
        <Link href="/login" className="text-teal-500 hover:underline">
          Login to write a comment
        </Link>
      )}

      <div className="comments mt-12 space-y-12">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
          </div>
        ) : (
          data?.map((item: any) => (
            <div className="comment p-4 border rounded-md mb-12" key={item._id}>
              <div className="user flex items-center gap-8 mb-8">
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className="image rounded-full"
                  />
                )}
                <div className="userInfo flex flex-col gap-1 text-gray-600">
                  <span className="username font-medium">{item.user.name}</span>
                  <span className="date text-sm">
                    {item.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className="desc text-lg font-light">{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </>
  );

  // return (
  //   <div className="comments flex flex-col mt-10 ">
  //         <h1 className="font-inter text-xl font-bold ">Comments</h1>
  //         <div>
  //           <div className="flex flex-col gap-4">
  //             <div className="mt-10 flex flex-row gap-4">
  //               <Image
  //                 src={"/images/google.svg"}
  //                 alt=""
  //                 width={30}
  //                 height={30}
  //                 className="avatar"
  //               />

  //               <div className=" flex flex-col ">
  //                 <span className="font-inter font-bold ">David</span>
  //                 <span className="font-inter ">3 hours ago</span>
  //               </div>
  //             </div>

  //             <p className="font-inter">
  //               This article was incredibly insightful! The tips on resume
  //               building were particularly helpful. I loved the part about
  //               building a personal brand. Any suggestions on good resources to
  //               get started?
  //             </p>
  //           </div>

  //           <div className="flex flex-col gap-4 ml-12">
  //             <div className="mt-10 flex flex-row gap-4">
  //               <Image
  //                 src={"/images/google.svg"}
  //                 alt=""
  //                 width={30}
  //                 height={30}
  //                 className="avatar"
  //               />

  //               <div className=" flex flex-col ">
  //                 <span className="font-inter font-bold ">Skillmate</span>
  //                 <span className="font-inter ">1 hours ago</span>
  //               </div>
  //             </div>

  //             <p className="font-inter">
  //               Hi David, glad you liked it! For personal branding, check out
  //               books like “Crush It!” by Gary Vaynerchuk and “Building a
  //               StoryBrand” by Donald Miller. We’ll cover more in upcoming
  //               posts.
  //             </p>
  //           </div>

  //           <div className="flex flex-col gap-4 mb-10">
  //             <div className="mt-10 flex flex-row gap-4">
  //               <Image
  //                 src={"/images/google.svg"}
  //                 alt=""
  //                 width={30}
  //                 height={30}
  //                 className="avatar"
  //               />

  //               <div className=" flex flex-col ">
  //                 <span className="font-inter font-bold ">David</span>
  //                 <span className="font-inter ">1 day ago</span>
  //               </div>
  //             </div>

  //             <p className="font-inter">
  //               I never thought of using networking events the way you
  //               suggested. Can’t wait to try it out at the next event!
  //             </p>
  //           </div>
  //           <hr className="w-full border-gray-400 mb-6"></hr>

  //           <div>
  //             <Link
  //               href=""
  //               className="text-black  flex items-center justify-center mb-2"
  //             >
  //               Read More
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  // )
}

export default Comment;

// {
  /**
   * {/* <button className="bg-[#0dba4a]/40 p-3">
        Trigger Sheet
      </button> */

      // <Sheet>
      //   <SheetTrigger className="cursor-pointer">
      //     <FaComment />
      //   </SheetTrigger>
      //   <SheetContent>
      //     <SheetHeader>
      //       <SheetTitle className="text-left">
      //         {" "}
      //         Comments{`(${data?.length})`}{" "}
      //       </SheetTitle>
      //       <SheetDescription className="">
      //         <ScrollArea className="w-full overflow-x-auto">

      //         {/* COMMENT TEXTAREA */}
      //         {status === "authenticated" ? (
      //           // if auth
      //           <div className="write flex items-center justify-between gap-0 mb-8">
      //             <textarea
      //               placeholder="Write a comment..."
      //               // placeholder={getRandomComment()}
      //               className="input p-4 border rounded-l-full w-full outline-none resize-none overflow-hidden h-12 text-start"
      //               onChange={(e) => setDesc(e.target.value)}
      //               value={desc}
      //             />
      //             <button
      //               className="button flex items-center justify-center bg-brandgreen/40 text-white font-bold rounded-md p-5 hover:bg-brandgreen/90 h-12 rounded-r-full"
      //               onClick={handleSubmit}
      //             >
      //               <FontAwesomeIcon
      //                 icon={faPaperPlane}
      //                 className=" text-lg md:text-2xl "
      //               />
      //             </button>
      //           </div>
      //         ) : (
      //           <Link href="/login" className="text-gray-800 hover:underline">
      //             Login to write a comment...
      //           </Link>
      //         )}

      //         {/* COMMENTS */}
      //         <div className="comments mt-12 space-y-12">
      //           {isLoading ? (
      //             <div className="flex items-center justify-center">
      //               <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      //             </div>
      //           ) : (
      //             data?.map((item: any) => (
      //               <div
      //                 className="comment p-4 border rounded-md mb-12 grid grid-row-2 "
      //                 key={item._id}
      //               >
      //                 <div className="user flex items-center gap-6 mb-8">
      //                   {item?.user?.image && (
      //                     <Image
      //                       src={item.user.image}
      //                       alt=""
      //                       width={50}
      //                       height={50}
      //                       className="image rounded-full"
      //                     />
      //                   )}
      //                   <div className="userInfo  flex flex-col items-start gap-1 text-gray-600">
      //                     <span className="username font-medium">
      //                       {item.user.name}
      //                     </span>
      //                     <span className="date text-sm">
      //                       {/* {item.createdAt.substring(0, 10)} */}{" "}
      //                       {`${getNoOfDays(item.createdAt)}`}
      //                     </span>
      //                   </div>
      //                 </div>

      //                 <p className="desc  text-lg font-light text-left ">
      //                   {item.desc}
      //                 </p>
      //               </div>
      //             ))
      //           )}
      //         </div>
      //         <ScrollBar orientation="vertical" />

      //         </ScrollArea>
      //       </SheetDescription>
      //     </SheetHeader>
      //   </SheetContent>
      // </Sheet>
// }
