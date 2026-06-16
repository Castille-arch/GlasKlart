import { Link } from 'react-router-dom'
import styles from './DashboardPage.module.css'

const TODAY_JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', time: '08:00', status: 'Pågående' },
  { id: 'JOB-082', customer: 'Lindqvist Renovering', site: 'Parkgatan 7, Linköping', time: '13:00', status: 'Ej startad' },
]

const MY_JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'Pågående', panes: 24 },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Väntar material', panes: 56 },
  { id: 'JOB-077', customer: 'Lindqvist Renovering', site: 'Parkgatan 7, Linköping', status: 'Pågående', panes: 18 },
]

const STATUS_COLOR: Record<string, string> = {
  'Pågående': 'blue',
  'Ej startad': 'grey',
  'Väntar material': 'yellow',
  'Avslutat': 'green',
}

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.greeting}>{today}</p>
          <h1 className={styles.name}>Hej, Martin</h1>
        </div>
        <div className={styles.avatar}>M</div>
      </header>

      {/* Today */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Idag</h2>
        {TODAY_JOBS.length === 0 ? (
          <div className={styles.emptyDay}>Inga jobb schemalagda idag</div>
        ) : (
          <div className={styles.todayList}>
            {TODAY_JOBS.map((job) => (
              <div key={job.id} className={styles.todayCard}>
                <div className={styles.timeCol}>
                  <span className={styles.time}>{job.time}</span>
                </div>
                <div className={styles.todayInfo}>
                  <p className={styles.todayCustomer}>{job.customer}</p>
                  <p className={styles.todaySite}>{job.site}</p>
                </div>
                <span className={`${styles.badge} ${styles[STATUS_COLOR[job.status]]}`}>
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick actions */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Snabbåtgärder</h2>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <span className={styles.actionIcon}><CameraIcon /></span>
            Lägg till foto
          </button>
          <Link to="/calculate" className={styles.actionBtn}>
            <span className={styles.actionIcon}><CalcIcon /></span>
            Kalkylera
          </Link>
          <button className={styles.actionBtn}>
            <span className={styles.actionIcon}><CheckIcon /></span>
            Markera klart
          </button>
        </div>
      </section>

      {/* My active jobs */}
      <section className={styles.section}>
        <div className={styles.sectionRow}>
          <h2 className={styles.sectionTitle}>Mina jobb</h2>
          <Link to="/jobs" className={styles.seeAll}>Visa alla</Link>
        </div>
        <div className={styles.jobList}>
          {MY_JOBS.map((job) => (
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
      </section>
    </div>
  )
}

function CameraIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
}
function CalcIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>
}
function CheckIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
}
function ChevronIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
}
