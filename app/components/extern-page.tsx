export function ExternalPage({ date = "", title, href, spacing = true }) {
  let space = spacing ? "mb-4 md:space-x-2" : "md:space-x-2"
  return (
    <div className={space} >
      <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
        {date}
      </p>
      <a href={href}
        className="text-neutral-900 dark:text-neutral-100 tracking-tight"
      >
        {title}
      </a>
    </div>
  )
}
