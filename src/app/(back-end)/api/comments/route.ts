import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { getAuthSession } from "@/lib/authOptions";


// GET ALL COMMENTS OF POST
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get("postSlug")

  try{
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { user: true}
    })
    // const user = await prisma.post.findUnique({
    //   where: { slug }
    // })
    // @ts-ignore
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
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

// CREATE A COMMENT
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if(!session){
    return new NextResponse(
      JSON.stringify(
        { message: "Not Authenticated" },
        // @ts-ignore
        { status: 401 }
      )
    );
  }

  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get("postSlug")

  // verify user from session


  try{
    const body = await req.json();
    const comments = await prisma.comment.create({
      data: {...body, userEmail: session.user.email}
    })
    // const user = await prisma.post.findUnique({
    //   where: { slug }
    // })
    // @ts-ignore
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
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