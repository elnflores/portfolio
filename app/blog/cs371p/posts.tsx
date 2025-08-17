import { formatDate } from 'app/blog/utils'
import { ExternalPage } from 'app/components/extern-page'

export default function BlogPosts() {
  return (
    <div className="mb-4">
      <ExternalPage
        date={formatDate('2024-12-01', false, true)}
        title={"Final Blog Entry"}
        href="https://medium.com/@elnflores10/cs-371p-falls-2024-final-entry-elijah-flores-1cc555016558"
      />
      <ExternalPage
        date={formatDate('2024-11-24', false, true)}
        title={"Blog #13: Week of Nov 18\u2013Nov 24"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-fde6926ee741"
      />
      <ExternalPage
        date={formatDate('2024-11-17', false, true)}
        title={"Blog #12: Week of Nov 11\u2013Nov 17"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-f972ebf76235"
      />
      <ExternalPage
        date={formatDate('2024-11-10', false, true)}
        title={"Blog #11: Week of Nov 4\u2013Nov 10"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-f87381bfed15"
      />
      <ExternalPage
        date={formatDate('2024-11-03', false, true)}
        title={"Blog #10: Week of Oct 28\u2013Nov 3"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-d8692f7ddf96"
      />
      <ExternalPage
        date={formatDate('2024-10-27', false, true)}
        title={"Blog #9: Week of Oct 21\u2013Oct 27"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-88a9f4e898b7"
      />
      <ExternalPage
        date={formatDate('2024-10-20', false, true)}
        title={"Blog #8: Week of Oct 14\u2013Oct 20"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-a8608cbaa3ac"
      />
      <ExternalPage
        date={formatDate('2024-10-13', false, true)}
        title={"Blog #7: Week of Oct 7\u2013Oct 13"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-e84ed9d99901"
      />
      <ExternalPage
        date={formatDate('2024-10-06', false, true)}
        title={"Blog #6: Week of Sep 30\u2013Oct 6"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-a42e000535aa"
      />
      <ExternalPage
        date={formatDate('2024-09-29', false, true)}
        title={"Blog #5: Week of Sep 23\u2013Sep 29"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-e325eae6ac81"
      />
      <ExternalPage
        date={formatDate('2024-09-22', false, true)}
        title={"Blog #4: Week of Sep 16\u2013Sep 22"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-6f275de37188"
      />
      <ExternalPage
        date={formatDate('2024-09-15', false, true)}
        title={"Blog #3: Week of Sep 9\u2013Sep 15"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-702f8a05253b"
      />
      <ExternalPage
        date={formatDate('2024-09-08', false, true)}
        title={"Blog #2: Week of Sep 2\u2013Sep 8"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-33a8c068107f"
      />
      <ExternalPage
        date={formatDate('2024-09-01', false, true)}
        title={"Blog #1: Week of Aug 26\u2013Sep 1"}
        href="https://medium.com/@elnflores10/cs-371p-fall-2024-elijah-flores-3d6585618845"
      />
    </div>
  )  
}
