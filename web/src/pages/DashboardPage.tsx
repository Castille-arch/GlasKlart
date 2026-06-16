import { Link } from 'react-router-dom'
import styles from './DashboardPage.module.css'

const STATS = [
  { label: 'Aktiva jobb', value: '12', delta: '+3 denna vecka', up: true },
  { label: 'Avslutade', value: '47', delta: '+8 denna månad', up: true },
  { label: 'Väntande offert', value: '5', delta: '2 försenade', up: false },
  { label: 'Omsättning', value: '284k', delta: '+12% vs förra mån', up: true },
]

const RECENT = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'Pågående', panes: 24 },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', site: 'Lindgatan 3, Malmö', status: 'Offert', panes: 8 },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Avslutat', panes: 56 },
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
          <p className={styles.greeting}>Välkommen tillbaka</p>
          <h1 className={styles.name}>Martin Olsson</h1>
        </div>
        <div className={styles.avatar}>M</div>
      </header>

      <div className={styles.statsGrid}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.statValue}>{s.value}</span>
            <span className={`${styles.statDelta} ${s.up ? styles.up : styles.down}`}>{s.delta}</span>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <PlusIcon />
          Nytt jobb
        </button>
        <Link to="/calculate" className={styles.actionBtnSecondary}>
          <CalcIcon />
          Ny kalkyl
        </Link>
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Senaste jobb</h2>
        <Link to="/jobs" className={styles.seeAll}>Visa alla</Link>
      </div>

      <div className={styles.jobList}>
        {RECENT.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobTop}>
              <div>
                <span className={styles.jobId}>{job.id}</span>
                <p className={styles.jobCustomer}>{job.customer}</p>
                <p className={styles.jobSite}>{job.site}</p>
              </div>
              <span className={`${styles.badge} ${styles[STATUS_COLOR[job.status]]}`}>
                {job.status}
              </span>
            </div>
            <div className={styles.jobFooter}>
              <span className={styles.jobMeta}>{job.panes} glas</span>
              <ChevronIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlusIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
}
function CalcIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>
}
function ChevronIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
}
