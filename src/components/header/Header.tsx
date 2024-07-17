import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'

const Header= () => {
  return (

    <div id="nav" className="w-full relative z-20 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <div className="left flex justify-start items-center gap-x-14 flex-1">
          <div className="logo">
            <Link href="/#">
            <Image src={'/images/skillmate.svg'} alt='Logo' width={150} height={150} />
            </Link>
          </div>
        </div>
<div className='right flex  md:flex md:justify-end items-center gap-8'>
  <div className='flex items-center gap-3'>
    {/* <Link href="/login">
    <button className='py-2 px-4 bg-[#0DBA4B] text-white rounded-full'>Login</button>
    </Link> */}
    <AuthLinks />
  </div>
</div>

    </div>
</div>

  )
}

export default Header