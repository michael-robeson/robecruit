const navigation = [
  { label: 'Dashboard', icon: '▦', current: true },
  { label: 'Opportunities', icon: '◇' },
  { label: 'Workflows', icon: '↗' },
  { label: 'Resumes', icon: '▤' },
  { label: 'Audit Trail', icon: '◷' },
  { label: 'Settings', icon: '⚙' },
]

export function Sidebar() {
  return (
    <aside className="bg-slate-950 text-slate-300 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col">
      <div className="flex items-center gap-3 px-5 py-6 sm:px-8 lg:px-6">
        <div aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
          R
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">Robecruit</p>
          <p className="text-xs text-slate-400">Your search, in focus</p>
        </div>
      </div>

      <nav aria-label="Main navigation" className="px-3 pb-4 sm:px-6 lg:mt-6 lg:px-4">
        <p className="hidden px-3 pb-3 text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase lg:block">
          Workspace
        </p>
        <ul className="flex flex-wrap gap-1 lg:flex-col">
          {navigation.map((item) => (
            <li key={item.label}>
              {item.current ? (
                <a
                  href="#dashboard"
                  aria-current="page"
                  className="flex items-center gap-3 rounded-lg bg-indigo-500/15 px-3 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-indigo-400/20"
                >
                  <span aria-hidden="true" className="w-5 text-center text-lg text-indigo-300">{item.icon}</span>
                  {item.label}
                </a>
              ) : (
                <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400">
                  <span aria-hidden="true" className="w-5 text-center text-lg text-slate-500">{item.icon}</span>
                  {item.label}
                  <span className="sr-only"> (coming soon)</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden border-t border-slate-800 px-6 py-5 text-xs leading-5 text-slate-500 lg:mt-auto lg:block">
        Built for a more intentional job search.
      </div>
    </aside>
  )
}
