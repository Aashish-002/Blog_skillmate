import Image from 'next/image'
import React from 'react'

type Props = {}

const ThemeToggle = (props: Props) => {
  return (
    <div className='w-10 h-5 rounded-full mt-1 cursor-pointer flex items-center justify-between bg-black relative'>
        <Image src={'/images/moon.png'} width={14} height={14} alt=''/>
        <div className=' absolute w-[15px] h-[15px] rounded-full bg-white left-[1px]'></div>
        <Image src={'/images/sun.png'} width={14} height={14} alt=''/>
        
    </div>
  )
}

export default ThemeToggle