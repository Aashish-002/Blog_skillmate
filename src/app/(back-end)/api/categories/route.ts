import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { getAuthSession } from "@/lib/authOptions";
import { ApiResponse } from "@/types/response";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    await new Promise(resolve => setTimeout(resolve, 1000))
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};

export async function POST(req: NextRequest) {
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
  try {
    const body = await req.json();
    const cat = await prisma.category.create({
      data: { ...body },
    });
    await new Promise(resolve => setTimeout(resolve, 1000))

    // @ts-ignore
    return new NextResponse(JSON.stringify(cat.slug));
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
}
