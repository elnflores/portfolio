import Link from 'next'
import {formatDate} from 'app/blog/utils'

export const metadata = {
  title: 'Resume',
  description: 'Here is my resume.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
        Education
      </h1>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2026-05-01', false, false)}
        </p>
        <a href="https://www.cs.utexas.edu/"
           className="text-neutral-900 dark:text-neutral-100 mb-8 tracking-tight"
        >
          B.S. Computer Science, University of Texas at Austin
        </a>
      </div>


      <h2 className="font-semibold text-2xl mb-4 tracking-tighter">
        Publications
      </h2>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
          {formatDate('2024-07-01', false, false)}
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
