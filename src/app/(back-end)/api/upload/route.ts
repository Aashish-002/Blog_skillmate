import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const originalFileName = file.name;
  const uploadDir = path.join(process.cwd(), "public/uploads");
  const filePath = path.join(uploadDir, originalFileName);

  try {
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json(originalFileName);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
