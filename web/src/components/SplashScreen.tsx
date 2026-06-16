import { useEffect, useState } from 'react'
import styles from './SplashScreen.module.css'

interface Props {
  onDone: () => void
}

export default function SplashScreen({ onDone }: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Total animation runtime ≈ 2.6s, then fade out
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 400)
    }, 2800)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className={`${styles.splash} ${!visible ? styles.fadeOut : ''}`}>
      <div className={styles.markStage}>
        <svg viewBox="0 0 100 100" width="120" height="120">
          <defs>
            <clipPath id="diamondClip">
              <polygon points="50,6 94,50 50,94 6,50" />
            </clipPath>
            <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <polygon className={`${styles.facet} ${styles.fTop}`} points="50,6 94,50 50,50" fill="#5FB9CC" />
          <polygon className={`${styles.facet} ${styles.fRight}`} points="94,50 50,94 50,50" fill="#BFDCE3" />
          <polygon className={`${styles.facet} ${styles.fBottom}`} points="50,94 6,50 50,50" fill="#0B1820" />
          <polygon className={`${styles.facet} ${styles.fLeft}`} points="6,50 50,6 50,50" fill="#C5793E" />

          <g className={styles.facetEdges}>
            <line x1="50" y1="6" x2="50" y2="94" stroke="#142430" strokeOpacity="0.55" strokeWidth="1.4" />
            <line x1="6" y1="50" x2="94" y2="50" stroke="#142430" strokeOpacity="0.55" strokeWidth="1.4" />
            <polygon points="50,6 94,50 50,94 6,50" fill="none" stroke="#0B1820" strokeOpacity="0.35" strokeWidth="1.5" />
          </g>

          <g clipPath="url(#diamondClip)">
            <rect className={styles.shine} x="-20" y="-20" width="50" height="140" fill="url(#shineGrad)" />
          </g>
        </svg>
      </div>

      <div className={styles.word}>
        <span className={styles.glas}>Glas</span><span className={styles.klart}>Klart</span>
      </div>
      <div className={styles.tag}>klar sikt, varje gång</div>

      <div className={styles.loadbarTrack}>
        <div className={styles.loadbarFill} />
      </div>
    </div>
  )
}
