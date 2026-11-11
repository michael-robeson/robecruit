import { Sidebar } from './components/Sidebar'
import { StatCard } from './components/StatCard'

const stats = [
  {
    label: 'Active Opportunities',
    value: '12',
    description: 'Roles you are keeping an eye on',
    accent: 'bg-indigo-50 text-indigo-700',
    icon: 'opportunities',
  },
  {
    label: 'Applications Submitted',
    value: '8',
    description: 'Applications sent so far',
    accent: 'bg-sky-50 text-sky-700',
    icon: 'applications',
  },
  {
    label: 'Upcoming Interviews',
    value: '2',
    description: 'Conversations on the horizon',
    accent: 'bg-violet-50 text-violet-700',
    icon: 'interviews',
  },
  {
    label: 'Follow-ups Needed',
    value: '3',
    description: 'Opportunities to reconnect',
    accent: 'bg-amber-50 text-amber-700',
    icon: 'followups',
  },
] as const

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 lg:flex">
      <Sidebar />

      <main id="dashboard" className="min-w-0 flex-1">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-indigo-600 uppercase">
                Your job search, organized
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Dashboard
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                A clear view of your search, all in one place.
              </p>
            </div>
            <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
              Preview mode
            </span>
          </div>

          <section aria-labelledby="overview-heading" className="mt-10">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 id="overview-heading" className="text-lg font-semibold text-slate-900">
                  Your overview
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  A snapshot of your progress.
                </p>
              </div>
              <p className="text-xs font-medium text-slate-500">Example data</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="getting-started-heading"
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.15em] text-indigo-600 uppercase">
                A little more clarity
              </p>
              <h2 id="getting-started-heading" className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                Your next opportunity starts here.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Robecruit is taking shape. Soon you&apos;ll be able to organize
                opportunities, keep track of applications, and stay on top of
                what comes next.
              </p>
              <p className="mt-5 text-xs text-slate-400">
                This dashboard currently displays example data only.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
