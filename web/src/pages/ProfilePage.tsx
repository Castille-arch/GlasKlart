import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Profil</h1>

      <div className={styles.profileCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.profileName}>Martin Olsson</p>
          <p className={styles.profileEmail}>martin@glasklart.se</p>
          <span className={styles.roleBadge}>Administratör</span>
        </div>
      </div>

      <div className={styles.menuCard}>
        {[
          { label: 'Mitt företag', icon: '🏢' },
          { label: 'Inställningar', icon: '⚙️' },
          { label: 'Support', icon: '💬' },
        ].map(({ label, icon }) => (
          <button key={label} className={styles.menuRow}>
            <span className={styles.menuIcon}>{icon}</span>
            <span className={styles.menuLabel}>{label}</span>
            <ChevronIcon />
          </button>
        ))}
      </div>

      <button className={styles.logoutBtn} onClick={() => navigate('/login')}>
        Logga ut
      </button>
    </div>
  )
}

function ChevronIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
}
