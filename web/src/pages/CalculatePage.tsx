import { useState } from 'react'
import styles from './CalculatePage.module.css'

export default function CalculatePage() {
  const [width, setWidth]   = useState('')
  const [height, setHeight] = useState('')
  const [qty, setQty]       = useState('1')
  const [price, setPrice]   = useState('')

  const w = parseFloat(width) || 0
  const h = parseFloat(height) || 0
  const q = parseInt(qty) || 1
  const p = parseFloat(price) || 0

  const areaSingle = (w * h) / 1_000_000
  const areaTotal  = areaSingle * q
  const cost       = areaTotal * p

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Kalkylator</h1>
      <p className={styles.sub}>Beräkna yta och kostnad</p>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Glasmått</h2>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Bredd (mm)</label>
            <input className={styles.input} type="number" placeholder="t.ex. 900" value={width} onChange={e => setWidth(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Höjd (mm)</label>
            <input className={styles.input} type="number" placeholder="t.ex. 1200" value={height} onChange={e => setHeight(e.target.value)} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Antal</label>
            <input className={styles.input} type="number" placeholder="1" value={qty} onChange={e => setQty(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Pris per m² (kr)</label>
            <input className={styles.input} type="number" placeholder="t.ex. 450" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
      </div>

      <div className={styles.resultCard}>
        <p className={styles.resultTitle}>Resultat</p>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Yta per glas</span>
          <span className={styles.resultValue}>{areaSingle.toFixed(3)} m²</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Total yta ({q} st)</span>
          <span className={styles.resultValue}>{areaTotal.toFixed(3)} m²</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Beräknad kostnad</span>
          <span className={styles.resultBig}>{cost > 0 ? `${Math.round(cost).toLocaleString('sv-SE')} kr` : '—'}</span>
        </div>
      </div>

      <button className={styles.saveBtn}>Spara kalkyl</button>
    </div>
  )
}
