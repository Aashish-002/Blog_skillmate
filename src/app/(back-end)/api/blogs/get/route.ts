import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";


export async function GET(request: NextRequest){
    // console.log(request.body);
    // const { data } = await request.json()
    // console.log('request api', data);
    const data = await getServerSession(authOptions)
    console.log('session', data);
    
    if(!data){
        throw new Error("Not Authenticated")
    }

    try {
        const blogs = await prisma.post.findMany({
            where:{
                //@ts-ignore
                user:data.user.id!
            },
        })
        return NextResponse.json({message: "success", blogs}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "failed"}, {status: 400})
        
    }
}