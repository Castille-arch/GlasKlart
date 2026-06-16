import { useState } from 'react'
import styles from './JobsPage.module.css'

const ALL_JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'In Progress', panes: 24, created: '2026-06-10' },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', site: 'Lindgatan 3, Malmö', status: 'Quoting', panes: 8, created: '2026-06-09' },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Completed', panes: 56, created: '2026-06-01' },
  { id: 'JOB-078', customer: 'Svensson & Son', site: 'Kyrkogatan 2, Uppsala', status: 'Completed', panes: 12, created: '2026-05-28' },
  { id: 'JOB-077', customer: 'Lindqvist Renovering', site: 'Parkgatan 7, Linköping', status: 'In Progress', panes: 18, created: '2026-05-22' },
  { id: 'JOB-076', customer: 'AB Fasad & Glas', site: 'Industrigatan 1, Helsingborg', status: 'Quoting', panes: 32, created: '2026-05-19' },
]

const STATUSES = ['All', 'In Progress', 'Quoting', 'Completed']

const STATUS_COLOR: Record<string, string> = {
  'In Progress': 'blue',
  'Quoting': 'yellow',
  'Completed': 'green',
}

export default function JobsPage() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const visible = ALL_JOBS.filter((j) => {
    const matchStatus = filter === 'All' || j.status === filter
    const matchSearch =
      search === '' ||
      j.customer.toLowerCase().includes(search.toLowerCase()) ||
      j.site.toLowerCase().includes(search.toLowerCase()) ||
      j.id.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Jobs</h1>
          <p className={styles.subtitle}>{ALL_JOBS.length} total jobs</p>
        </div>
        <button className={styles.newJobBtn}>
          <PlusIcon />
          New Job
        </button>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <SearchIcon />
          <input
            className={styles.search}
            placeholder="Search jobs, customers, sites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          {STATUSES.map((s) => (
            <button
              key={s}
              className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ''}`}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Customer</th>
              <th>Site</th>
              <th>Panes</th>
              <th>Created</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((job) => (
              <tr key={job.id} className={styles.row}>
                <td className={styles.jobId}>{job.id}</td>
                <td className={styles.customer}>{job.customer}</td>
                <td className={styles.site}>{job.site}</td>
                <td>{job.panes}</td>
                <td className={styles.date}>{job.created}</td>
                <td>
                  <span className={`${styles.badge} ${styles[STATUS_COLOR[job.status]]}`}>
                    {job.status}
                  </span>
                </td>
                <td className={styles.actions}>
                  <button className={styles.actionBtn} title="Open job">
                    <ChevronIcon />
                  </button>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={7} className={styles.empty}>No jobs match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
