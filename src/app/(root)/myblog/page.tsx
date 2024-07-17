"use client"
import Card from "@/components/card/Card";
import Grid from "@/components/grid/Grid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MyBlogPageProps = {
  params: any;
};

function MyBlog() {

  const { data: session, status } = useSession();
  const router = useRouter();

  if(status === 'unauthenticated'){
    router.push('/admin/login')
  }

  if(status === 'authenticated' && session.user.role === "USER"){
    return <h1>Only admin can access this page</h1>
  }
  return(
    <>
      <div className="breadcrumb flex flex-row gap-4">
        {/* left arrow */}

        <span className="bg-brandgreen rounded-[100%] h-9 w-9 text-2xl text-white flex items-center justify-center pb-1 font-semibold">
          {"<"}
        </span>

        {/* MyBlog */}
        <h2 className="text-3xl font-semibold  gap-5">My Blog</h2>
      </div>
      <div className="">
        <div className="flex flex-col mt-10 ">
          <div className=" text-black  font-bold text-2xl mb-6 ml-10">
            Latest Posts
          </div>
          <div className="Posts mb-24">
            <div className="post">
              

              {
                // data?.map((item: any) => {
                //   return <Card key={item._id} item={item}/>
                // })
              }
              {/* {
              blogData?.length !== 0 ? (
                blogData?.map((item) => {
                  console.log(item);
                  return (
                    <div key={item.id}>
                      <Image
                        src={item.imageUrl}
                        alt=""
                        height={32}
                        width={32}
                      />
                      <Link
                        href={`/${item.title.replace(" ", "-")}-${item.id}`}
                      >
                        <h1>{item.title}</h1>
                      </Link>
                      {item.body}
                    </div>
                  );
                  // return <p>{item}</p>
                })

              ) : (
                <p className="w-fit m-auto inset-0">
                  Create your First blog Post
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MyBlog;