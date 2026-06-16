import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import styles from './AppLayout.module.css'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Översikt', icon: GridIcon },
  { to: '/jobs', label: 'Jobb', icon: BriefcaseIcon },
]

export default function AppLayout() {
  const navigate = useNavigate()

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <GlasKlartMark size={36} />
          <div className={styles.wordmark}>
            <span className={styles.wordGlas}>Glas</span><span className={styles.wordKlart}>Klart</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>M</div>
            <div className={styles.userMeta}>
              <span className={styles.userName}>Martin Olsson</span>
              <span className={styles.userRole}>Administratör</span>
            </div>
          </div>
          <button
            className={styles.logoutBtn}
            onClick={() => navigate('/login')}
            title="Logga ut"
          >
            <LogoutIcon />
          </button>
        </div>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

function GlasKlartMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon points="50,6 94,50 50,50" fill="#1F8A9E" />
      <polygon points="94,50 50,94 50,50" fill="#BFDCE3" />
      <polygon points="50,94 6,50 50,50" fill="#142430" />
      <polygon points="6,50 50,6 50,50" fill="#C5793E" />
      <line x1="50" y1="6" x2="50" y2="94" stroke="#F4F9FB" strokeOpacity="0.45" strokeWidth="1.2" />
      <line x1="6" y1="50" x2="94" y2="50" stroke="#F4F9FB" strokeOpacity="0.45" strokeWidth="1.2" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}
