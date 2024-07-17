import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../../prisma';
import { getAuthSession } from '@/lib/authOptions';

export async function GET(request: NextRequest) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: 'Not Authenticated' }, { status: 401 });
  }

  // const { searchParams } = new URL(request.url);
  // const postId = searchParams.get('id');

  // if (!postId) {
  //   return NextResponse.json({ message: 'Post ID is required' }, { status: 400 });
  // }

  try {
    const post = await prisma.post.findMany({where: {userEmail: session?.user.email!}})
    console.log(post);
    
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Success', post }, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ message: 'Failed to fetch post' }, { status: 500 });
  }
}
