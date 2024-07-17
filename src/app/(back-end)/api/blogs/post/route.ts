import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma";
import fs from "fs";
import path from "path";
import { getAuthSession } from "@/lib/authOptions";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


// CREATE NEW POST
export async function POST(request: NextRequest) {
  // const form = await request.formData();
  // console.log("server formData", form);

  // const title = form.get("title") as string;
  // const category = form.get("catSlug") as string;
  // const value = form.get("desc") as string;
  // const file = form.get("file") as File;
  // const slug = form.get("slug") as string;
  const session = await getAuthSession();

  // if (!title || !file || !category || !content) {
  //   return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  // }

  // if (!file.type.startsWith('image/')) {
  //   return NextResponse.json({ message: 'Only image files are allowed' }, { status: 400 });
  // }

  // if (file.size > 5 * 1024 * 1024) {
  //   return NextResponse.json({ message: 'Image must be less than 5 MB' }, { status: 400 });
  // }

  // const originalFileName = file.name;
  // const uploadDir = path.join(process.cwd(), "public/uploads");
  // const filePath = path.join(uploadDir, originalFileName);

  try {
    // if (!fs.existsSync(uploadDir)) {
    //   fs.mkdirSync(uploadDir, { recursive: true });
    // }

    // const buffer = Buffer.from(await file.arrayBuffer());
    // fs.writeFileSync(filePath, buffer);

    const body = await request.json()

    const newPost = await prisma.post.create({
      data: {
        ...body,
        userEmail: session?.user.email!,
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
