import { formatDate } from 'app/blog/utils'
import BlogPosts from './posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">CS 371p Fall 2024 Blogs</h1>
      <BlogPosts />
    </section>
  )
}
