import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

/**
 * 
 * @param req NextRequest 
 * @returns post 
 */
export const GET = async (req: NextRequest) => {  
    try{
      const post = await prisma.post.findMany();

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