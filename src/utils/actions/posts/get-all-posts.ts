import prisma from "../../../../prisma";

/**
 * Async method to fetch all blog posts
 * @returns blog data json
 */
export const getAllPosts = async () => {
//   const res = await fetch(`${process.env.API}/api/blogs/get`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Request Failed");
//   }
    const res = await prisma.post.findMany();

    return res
};
