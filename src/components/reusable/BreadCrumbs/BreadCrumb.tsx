import Link from 'next/link'
import React from 'react'

type Props = {
    current: string
}

const BreadCrumb = ({current}: Props) => {
  return (
    <div className="breadcrumb flex flex-row gap-4">
    {/* left arrow */}

    <Link href={`/blog#popular-categories`}  className="bg-brandgreen rounded-[100%] h-9 w-9 text-2xl text-white flex items-center justify-center pb-1 font-semibold">
      {"<"}
    </Link>

    {/* MyBlog */}
    <h6 className="text-lg md:text-2xl font-normal  gap-5">
        Skillmate Blog
        <span className='px-4'>{">"}</span>
        <span className="capitalize">{current[0].toLocaleUpperCase() + current.substring(1, current.length)}</span>
    </h6>
  </div>
  )
}

export default BreadCrumb