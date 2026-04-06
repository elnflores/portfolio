import { formatDate } from 'app/blog/utils'
import { ExternalPage } from 'app/components/extern-page'
import carpet from 'app/resume/carpet.png'

export const metadata = {
  title: 'Resume',
  description: 'Here is my resume.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
        Education</h1>
      <ExternalPage
        date={formatDate('2028-05-01', false, false)}
        title={"M.S. Computer Science, Specialization in Machine Learning, Georgia Institute of Technology"}
        href="https://scs.gatech.edu/"
      />
      <ExternalPage
        date={formatDate('2026-05-01', false, false)}
        title={"B.S. Computer Science, University of Texas at Austin"}
        href="https://www.cs.utexas.edu/"
      />

      <h2 className="font-semibold text-2xl mt-8 mb-4 tracking-tighter">
        Experience</h2>
      <ExternalPage
        date={formatDate('2026-01-01', false, false) + "\u2013Present"}
        title={"Undergraduate Course Assistant, CS 313E, UT Austin"}
        href="https://www.cs.utexas.edu/course-list#course-nm-994"
      />
      <ExternalPage
        date={formatDate('2025-06-01', false, false) + "\u2013" + formatDate('2025-08-01', false, false)}
        title={"Program Assistant, UTCS Academy for Machine Learning"}
        href="https://www.cs.utexas.edu/engage/outreach/academies/machine-learning"
      />
      <ExternalPage
        date={formatDate('2024-08-01', false, false) + "\u2013" + formatDate('2025-12-01', false, false)}
        title={"Undergraduate Course Assistant, CS 303E, UT Austin"}
        href="https://www.cs.utexas.edu/courses/303e-elements-computers-and-programming"
      />
      <ExternalPage
        date={formatDate('2024-06-01', false, false) + "\u2013" + formatDate('2024-08-01', false, false)}
        title={"Program Assistant, UTCS Academy for Game Development"}
        href="https://www.cs.utexas.edu/engage/outreach/academies/game-development"
        spacing={false}
      />
      <ExternalPage
        title={"Program Assistant, UTCS Academy for iOS App Development"}
        href="https://www.cs.utexas.edu/engage/outreach/academies/ios-development"
      />
      <ExternalPage
        date={formatDate('2023-06-01', false, false) + "\u2013" + formatDate('2023-07-01', false, false)}
        title={"Program Assistant, UTCS Academy for All"}
        href="https://www.cs.utexas.edu/engage/outreach/academies/all"
      />
      <ExternalPage
        date={formatDate('2023-01-01', false, false) + "\u2013" + formatDate('2024-07-01', false, false)}
        title={"Undergraduate Research Assistant, Geometry of Space Stream, FRI, UT Austin"}
        href="https://fri.cns.utexas.edu/research-streams/geometry-space"
      />

      <h3 className="font-semibold text-2xl mt-8 mb-4 tracking-tighter">
        Awards</h3>
      <ExternalPage
        date={"Spring 2023"}
        title={"CS 314 Alternative Sierpiński Carpet Contest, First Place"}
        href={carpet.src}
      />

      <h4 className="font-semibold text-2xl mt-8 mb-4 tracking-tighter">
        Publications</h4>
      <ExternalPage
        date={formatDate('2024-07-01', false, false)}
        title={"\"An Analysis of Blue Straggler Stars in Open Clusters\". Andrew Harvey, Yuvraj Sahu, Elijah Flores. Research Notes of the AAS, Volume 8, Number 7."}
        href="https://iopscience.iop.org/article/10.3847/2515-5172/ad686e"
      />
    </section>
  )
}
