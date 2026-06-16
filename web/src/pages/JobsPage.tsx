import { useState } from 'react'
import styles from './JobsPage.module.css'

const ALL_JOBS = [
  { id: 'JOB-081', customer: 'Karlsson Bygg AB', site: 'Storgatan 14, Göteborg', status: 'Pågående', panes: 24 },
  { id: 'JOB-080', customer: 'Eriksson Fastigheter', site: 'Lindgatan 3, Malmö', status: 'Offert', panes: 8 },
  { id: 'JOB-079', customer: 'Nordic Construct', site: 'Hamngatan 9, Stockholm', status: 'Avslutat', panes: 56 },
  { id: 'JOB-078', customer: 'Svensson & Son', site: 'Kyrkogatan 2, Uppsala', status: 'Avslutat', panes: 12 },
  { id: 'JOB-077', customer: 'Lindqvist Renovering', site: 'Parkgatan 7, Linköping', status: 'Pågående', panes: 18 },
  { id: 'JOB-076', customer: 'AB Fasad & Glas', site: 'Industrigatan 1, Helsingborg', status: 'Offert', panes: 32 },
]

const FILTERS = ['Alla', 'Pågående', 'Offert', 'Avslutat']

const STATUS_COLOR: Record<string, string> = {
  'Pågående': 'blue',
  'Offert': 'yellow',
  'Avslutat': 'green',
}

export default function JobsPage() {
  const [filter, setFilter] = useState('Alla')
  const [search, setSearch] = useState('')

  const visible = ALL_JOBS.filter((j) => {
    const matchStatus = filter === 'Alla' || j.status === filter
    const matchSearch = search === '' ||
      j.customer.toLowerCase().includes(search.toLowerCase()) ||
      j.site.toLowerCase().includes(search.toLowerCase()) ||
      j.id.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Jobb</h1>
        <button className={styles.newJobBtn}>
          <PlusIcon />
          Nytt
        </button>
      </div>

      <div className={styles.searchWrap}>
        <SearchIcon />
        <input
          className={styles.search}
          placeholder="Sök jobb, kunder, adresser..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.filterScroll}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterChip} ${filter === f ? styles.filterActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visible.map((job) => (
          <div key={job.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardLeft}>
                <span className={styles.cardId}>{job.id}</span>
                <p className={styles.cardCustomer}>{job.customer}</p>
                <p className={styles.cardSite}>{job.site}</p>
              </div>
              <span className={`${styles.badge} ${styles[STATUS_COLOR[job.status]]}`}>
                {job.status}
              </span>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.cardMeta}>{job.panes} glas</span>
              <button className={styles.actionBtn}><ChevronIcon /></button>
            </div>
          </div>
        ))}
        {visible.length === 0 && (
          <p className={styles.empty}>Inga jobb hittades.</p>
        )}
      </div>
    </div>
  )
}

function PlusIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
}
function SearchIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
}
function ChevronIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
}
