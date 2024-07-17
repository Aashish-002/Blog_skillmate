import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { getAuthSession } from "@/lib/authOptions";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page")!);
  const cat = searchParams.get("cat")!

  const POST_PER_PAGE = 2;

  try {
    // * we take 3 posts per page
    // * we are gonna skip number posts on per next page
    // example: page 1: no skip; page 2: skip first 2 posts
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat && { catSlug: cat}),
      },
    };

    // transaction method to execute multiple queries in one-go
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where: query.where}),
    ]);

    // @ts-ignore
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
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

// CREATE A NEW POST
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  
  // verify user from session

  if(!session){
    return new NextResponse(
      JSON.stringify(
        { message: "Not Authenticated" },
        // @ts-ignore
        { status: 401 }
      )
    );
  }



  try{
    const body = await req.json();
    const post = await prisma.post.create({
      data: {...body, userEmail: session.user.email}
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