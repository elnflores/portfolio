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
        Experience
      </h2>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2025-06-01', false, false)}{"\u2013"}{formatDate('2025-08-01', false, false)}
        </p>
        <a href="https://www.cs.utexas.edu/engage/outreach/academies/machine-learning"
          className="text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight"
        >
          Program Assistant, UTCS Academy for Machine Learning
        </a>
      </div>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2024-08-01', false, false)}{"\u2013Present"}
        </p>
        <a href="https://www.cs.utexas.edu/courses/303e-elements-computers-and-programming"
          className="text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight"
        >
          Undergraduate Course Assistant, CS 303E, UT Austin
        </a>   
      </div>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2024-06-01', false, false)}{"\u2013"}{formatDate('2024-07-01', false, false)}
        </p>
        <a href="https://www.cs.utexas.edu/engage/outreach/academies/game-development"
          className="text-neutral-900 dark:text-neutral-100 tracking-tight"
        >
          Program Assistant, UTCS Academy for Game Development
        </a>
        <a href="https://www.cs.utexas.edu/engage/outreach/academies/ios-development"
          className="text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight"
        >
          Program Assistant, UTCS Academy for iOS App Development
        </a>
      </div>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2023-06-01', false, false)}{"\u2013"}{formatDate('2023-07-01', false, false)}
        </p>
        <a href="https://www.cs.utexas.edu/engage/outreach/academies/all"
          className="text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight"
        >
          Program Assistant, UTCS Academy for All
        </a>
      </div>
      <div className="w-full flex flex-col space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate('2023-01-01', false, false)}{"\u2013"}{formatDate('2024-07-01', false, false)}
        </p>
        <a href="https://fri.cns.utexas.edu/research-streams/geometry-space"
          className="text-neutral-900 dark:text-neutral-100 mb-8 tracking-tight"
        >
          Undergraduate Research Assistant, Geometry of Space Stream, FRI, UT Austin
        </a>
      </div>

      <h3 className="font-semibold text-2xl mb-4 tracking-tighter">
        Publications
      </h3>
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
