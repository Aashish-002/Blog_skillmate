import { MetadataRoute } from 'next'
import { getAllPosts } from '@/utils/actions/posts/get-all-posts'

export default async function sitemap() {

    const baseUrl = 'https://blog.skillmate.ai'
    const response = await getAllPosts();

    const blogPosts = response?.map((post: any) => {
        return  {
            url: `${baseUrl}/post/${post?.slug}`,
            lastModified: post?.createdAt
          }
    })

    return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: 'https://blog.skillmate.ai/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // populate the all blog posts
    ...blogPosts
  ]
}