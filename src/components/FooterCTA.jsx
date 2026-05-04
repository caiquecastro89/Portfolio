import React from 'react'
import { BRAND } from '../brand'

export default function FooterCTA() {
  return (
    <div style={{
      padding: '120px 56px 80px',
      borderTop: `1px solid ${BRAND.border}`,
      display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      gap: 80, alignItems: 'end',
    }}>
      <div style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 'clamp(3rem,8vw,6rem)', lineHeight: .95, letterSpacing: '-.03em',
        color: BRAND.text, fontWeight: 400,
      }}>
        Let's make it<br/>
        <span style={{ fontStyle: 'italic', color: BRAND.accent }}>sharper.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <a href="mailto:caique.castro89@gmail.com" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
          background: BRAND.accent, color: '#0c0c0c',
          fontWeight: 600, fontSize: 15, textDecoration: 'none', borderRadius: 4,
        }}>
          <span>Get in touch</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>caique.castro89@gmail.com ↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/caique-castro89/"
          target="_blank" rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px',
            background: 'transparent', color: BRAND.text,
            fontWeight: 500, fontSize: 15, textDecoration: 'none',
            border: `1px solid ${BRAND.borderStrong}`, borderRadius: 4,
          }}
        >
          <span>LinkedIn</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: BRAND.textMuted }}>linkedin.com/in/caique-castro89 ↗</span>
        </a>
      </div>
    </div>
  )
}
