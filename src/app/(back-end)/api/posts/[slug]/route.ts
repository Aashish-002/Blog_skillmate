import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

// GET SINGLE POSTS
export const GET = async (req: NextRequest, { params }: any) => {
  const {slug} = params

  try{
    const post = await prisma.post.findUnique({
      where: {slug},
      include: { user: true}
    })
    // const user = await prisma.post.findUnique({
    //   where: { slug }
    // })
    // @ts-ignore
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify(
        { message: "Something went wrong", error: err },
        // @ts-ignore
        { status: 500 }
      )
    );
  }
};
