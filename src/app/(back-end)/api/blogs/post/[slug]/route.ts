import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../../prisma";

export async function PUT(request:NextRequest, { params }: any ) {
    const { slug } = params;

  
  
    try {
  
      const body = await request.json()
  
      const newPost = await prisma.post.update({
        where: {
          slug: slug
        },
        data: {
          ...body
        },
      });
  
      return NextResponse.json(
        { message: "Blog uploaded successfully!", post: newPost },
        { status: 200 }
      );
    } catch (error) {
      console.error("Failed to save file:", error);
      return NextResponse.json(
        { message: "Failed to upload blog", err: error },
        { status: 500 }
      );
    }
  }