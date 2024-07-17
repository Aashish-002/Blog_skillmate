"use client";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

type PaginationProps = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between ">
      <button
        onClick={() => router.push(`?page=${page - 1}#popular-categories`)}
        disabled={!hasPrev}
        className="w-[100px] mb-4 rounded-xl border-none px-4p y-2 bg-brandgreen cursor-pointer text-white disabled:bg-green-200  disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <Suspense fallback={<FaSpinner className="animate-spin" />}>
        <button
          onClick={() => router.push(`?page=${page + 1}#popular-categories`)}
          disabled={!hasNext}
          className="w-[100px] mb-4 rounded-xl border-none px-4 py-2 bg-brandgreen cursor-pointer text-white flex justify-center items-center disabled:bg-green-200  disabled:cursor-not-allowed"
        >
          Next
        </button>
      </Suspense>
    </div>
  );
};

export default Pagination;
