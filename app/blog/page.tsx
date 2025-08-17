import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      {/* <BlogPosts /> */}
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {"Fall 2024"}
        </p>
        <Link href="/blog/cs371p"
          className="text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight"
        >
          CS 371p Object Oriented Programming Blogs
        </Link>
      </div>
    </section>
  )
}
