const icons = {
  opportunities: 'M4 7h16v12H4z M8 7V5h8v2 M4 11h16',
  applications: 'M6 3h8l4 4v14H6z M14 3v5h5 M9 12h6 M9 16h6',
  interviews: 'M4 6h16v14H4z M8 3v6 M16 3v6 M4 10h16 M8 14h2 M14 14h2',
  followups: 'M4 5h16v12H8l-4 3z M8 9h8 M8 12h5',
}

type StatCardProps = {
  label: string
  value: string
  description: string
  accent: string
  icon: keyof typeof icons
}

export function StatCard({ label, value, description, accent, icon }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`flex size-10 items-center justify-center rounded-xl ${accent}`}>
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          viewBox="0 0 24 24"
        >
          <path d={icons[icon]} />
        </svg>
      </div>
      <h3 className="mt-5 text-sm font-medium text-slate-600">{label}</h3>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </article>
  )
}
