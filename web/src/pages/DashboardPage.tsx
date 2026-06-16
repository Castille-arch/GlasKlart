import styles from './DashboardPage.module.css'

const STATS = [
  { label: 'Aktiva jobb', value: '12', delta: '+3 denna vecka', positive: true },
  { label: 'Avslutade', value: '47', delta: '+8 denna månad', positive: true },
  { label: 'Väntande offert', value: '5', delta: '2 försenade', positive: false },
  { label: 'Total omsättning', value: '284 000 kr', delta: '+12% vs förra månaden', positive: true },
]

const RECENT_JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'Pågående', panes: 24 },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', site: 'Lindgatan 3, Malmö', status: 'Offert', panes: 8 },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Avslutat', panes: 56 },
  { id: 'JOB-078', customer: 'Svensson & Son', site: 'Kyrkogatan 2, Uppsala', status: 'Avslutat', panes: 12 },
]

const STATUS_COLOR: Record<string, string> = {
  'Pågående': 'blue',
  'Offert': 'yellow',
  'Avslutat': 'green',
}

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Översikt</h1>
          <p className={styles.subtitle}>Välkommen tillbaka, Martin</p>
        </div>
        <button className={styles.newJobBtn}>
          <PlusIcon />
          New Job
        </button>
      </header>

      <div className={styles.statsGrid}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.statValue}>{s.value}</span>
            <span className={`${styles.statDelta} ${s.positive ? styles.positive : styles.negative}`}>
              {s.delta}
            </span>
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Jobs</h2>
          <a href="/jobs" className={styles.viewAll}>View all</a>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Customer</th>
                <th>Site</th>
                <th>Panes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_JOBS.map((job) => (
                <tr key={job.id} className={styles.row}>
                  <td className={styles.jobId}>{job.id}</td>
                  <td>{job.customer}</td>
                  <td className={styles.site}>{job.site}</td>
                  <td>{job.panes}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[STATUS_COLOR[job.status]]}`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
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
