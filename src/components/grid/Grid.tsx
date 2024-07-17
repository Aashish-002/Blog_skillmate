import Image from "next/image"

const Grid = () => {
  return (
    <div className="container flex  md:flex-row flex-col gap-5 mb-6">
        <div className='image flex flex-row md:justify-start justify-center'>
            <Image src='/images/post.svg' alt='' height={150} width={150}  className="rounded-3xl "/> 
        </div>
        <div className="flex flex-col">
            <div className="text-details  flex flex-row">
                <span className="text-black">July,2024 -  Jershik</span>
                
            </div>
            <h1 className="text-1xl font-sora font-bold">How to Plan Your First Successful Website.</h1>
            <p className="max-w-md">Planning a new website can be exciting and — if you are anything like me — a little ...</p>
        </div>
        </div>
  )
}

export default Grid