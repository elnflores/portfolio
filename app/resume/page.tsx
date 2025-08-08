import Link from 'next'


export const metadata = {
  title: 'Resume',
  description: 'Here is my resume.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Resume</h1>
    </section>
  )
}
