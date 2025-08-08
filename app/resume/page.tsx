import Link from 'next'
import {formatDate} from 'app/blog/utils'

export const metadata = {
  title: 'Resume',
  description: 'Here is my resume.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Resume
      </h1>

      <h2 className="text-xl mb-4 tracking-tighter">
        Publications
      </h2>

      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
          {formatDate('2024-07-08', false, false)}
        </p>
        <a href="https://iopscience.iop.org/article/10.3847/2515-5172/ad686e"
           className="text-neutral-900 dark:text-neutral-100 tracking-tight"
        >
          "An Analysis of Blue Straggler Stars in Open Clusters". Andrew Harvey, Yuvraj Sahu, Elijah Flores. Research Notes of the AAS, Volume 8, Number 7.
        </a>
      </div>
    </section>
  )
}
