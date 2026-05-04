import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import FooterCTA from '../components/FooterCTA'
import { BRAND } from '../brand'
import { CASES } from '../data/cases'
import { CASE_CONTENT } from '../data/caseContent'
import { useCursor } from '../hooks/useCursor'
import { useReveal } from '../hooks/useReveal'

// ── inline content renderer ──
function renderInline(node) {
  if (node == null) return null
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map((n, i) => <React.Fragment key={i}>{renderInline(n)}</React.Fragment>)
  if (node.strong) return <strong style={{ color: BRAND.text, fontWeight: 600 }}>{node.strong}</strong>
  if (node.accent) return <span style={{ color: BRAND.accent }}>{node.accent}</span>
  return null
}

function renderBodyItem(item, i) {
  if (typeof item === 'string') return <p key={i} style={pStyle}>{item}</p>
  if (item.p) return <p key={i} style={pStyle}>{renderInline(item.p)}</p>
  if (item.ul) return (
    <ul key={i} style={{ margin: '16px 0', paddingLeft: 24 }}>
      {item.ul.map((li, j) => (
        <li key={j} style={{ marginBottom: 10, lineHeight: 1.65, color: BRAND.textMuted, fontSize: 17 }}>
          {renderInline(li)}
        </li>
      ))}
    </ul>
  )
  if (item.kind === 'h3') return (
    <h3 key={i} style={{ fontSize: 22, fontWeight: 600, margin: '24px 0 12px', color: BRAND.text }}>{item.text}</h3>
  )
  return null
}

const pStyle = { margin: '0 0 18px', fontSize: 17, lineHeight: 1.72, color: BRAND.textMuted }

// ── block renderers ──
function renderBlock(b, idx, mobile = false) {
  const SECTION_W = 720
  const FIGURE_W = 960

  if (b.kind === 'section') return (
    <section key={idx} className="rv" style={{ width: SECTION_W, maxWidth: '100%' }}>
      {b.label && (
        <div style={{
          fontFamily: "Saans, system-ui, sans-serif", fontSize: '.58rem',
          letterSpacing: '.18em', textTransform: 'uppercase',
          color: BRAND.accent, marginBottom: 12,
        }}>{b.label}</div>
      )}
      {b.title && (
        <h2 style={{
          margin: '0 0 20px', fontSize: 'clamp(1.4rem,2.5vw,2rem)',
          fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', color: BRAND.text,
        }}>{b.title}</h2>
      )}
      <div>{b.body && b.body.map(renderBodyItem)}</div>
    </section>
  )

  if (b.kind === 'figure') return (
    <figure key={idx} className="rv" style={{ margin: 0, width: FIGURE_W, maxWidth: '100%' }}>
      <div style={{
        background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
        borderRadius: 8, overflow: 'hidden',
      }}>
        <img src={b.src} alt={b.caption} style={{ width: '100%', display: 'block' }} />
      </div>
      <figcaption style={{
        marginTop: 12, fontSize: 12, color: BRAND.textFaint,
        fontFamily: "Saans, system-ui, sans-serif", lineHeight: 1.5, textAlign: 'center',
      }}>{b.caption}</figcaption>
    </figure>
  )

  if (b.kind === 'timeline') return (
    <div key={idx} className="rv" style={{
      width: SECTION_W, maxWidth: '100%', padding: 32,
      background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
      borderRadius: 12,
    }}>
      {b.items.map(([d, t, body], i) => (
        <div key={d} style={{
          display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32,
          padding: '24px 0',
          borderBottom: i < b.items.length - 1 ? `1px solid ${BRAND.border}` : 'none',
        }}>
          <div style={{
            fontSize: 13, color: BRAND.accent, fontWeight: 600,
            fontFamily: "Saans, system-ui, sans-serif",
          }}>{d}</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6, color: BRAND.text }}>{t}</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: BRAND.textMuted }}>{body}</div>
          </div>
        </div>
      ))}
    </div>
  )

  if (b.kind === 'stats') return (
    <div key={idx} className="rv" style={{
      width: FIGURE_W, maxWidth: '100%',
      display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
    }}>
      {b.items.map(([n, d]) => (
        <div key={n} style={{
          padding: 32,
          background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
          borderRadius: 8,
        }}>
          <div style={{
            fontSize: 56, fontWeight: 700,
            color: b.color || BRAND.accent, letterSpacing: '-.02em',
            lineHeight: 1, marginBottom: 12,
          }}>{n}</div>
          <div style={{ fontSize: 14, color: BRAND.textMuted, lineHeight: 1.5 }}>{d}</div>
        </div>
      ))}
    </div>
  )

  if (b.kind === 'callout') return (
    <div key={idx} className="rv" style={{
      width: FIGURE_W, maxWidth: '100%',
      padding: '28px 32px',
      background: `linear-gradient(135deg, ${BRAND.accent}15, transparent)`,
      border: `1px solid ${BRAND.accent}40`,
      borderRadius: 8,
      fontSize: 17, lineHeight: 1.5, color: BRAND.text,
    }}>{renderInline(b.text)}</div>
  )

  return null
}

export default function CasePage({ slug }) {
  const navigate = useNavigate()
  const caseData = CASES.find(c => c.id === slug)
  const content = CASE_CONTENT[slug]

  useCursor()
  useReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!caseData) return <div style={{ padding: 40, color: '#fff' }}>Case not found: {slug}</div>

  // next case (circular)
  const allSlugs = CASES.map(c => c.id)
  const nextSlug = allSlugs[(allSlugs.indexOf(slug) + 1) % allSlugs.length]
  const nextCase = CASES.find(c => c.id === nextSlug)

  return (
    <>
      <div id="cur" /><div id="cur-ring" />
      <Nav />

      <div style={{ paddingTop: 64, background: BRAND.bg, minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <header style={{ position: 'relative', padding: '88px 96px 96px', overflow: 'hidden' }}>
          {/* glow */}
          <div style={{
            position: 'absolute', top: -200, left: '50%',
            transform: 'translateX(-50%)',
            width: 1100, height: 1100,
            background: `radial-gradient(circle, ${caseData.glow}33, transparent 60%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', maxWidth: 980 }}>
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: BRAND.textMuted, fontSize: 13, background: 'none', border: 'none',
                fontFamily: "Saans, system-ui, sans-serif",
                cursor: 'none', marginBottom: 32, padding: 0, animation: 'fi .8s .3s both',
              }}
            >← Back</button>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24,
              animation: 'fi .8s .5s both',
            }}>
              {content?.tags?.map(t => (
                <span key={t} style={{
                  fontSize: 11, padding: '4px 10px',
                  border: `1px solid ${BRAND.border}`, borderRadius: 999,
                  color: BRAND.textMuted, fontFamily: "Saans, system-ui, sans-serif",
                  letterSpacing: '.04em',
                }}>{t}</span>
              ))}
            </div>

            <h1 style={{
              margin: '0 0 24px', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700,
              lineHeight: 1.05, letterSpacing: '-.025em', color: BRAND.text,
              animation: 'fi .8s .5s both',
            }}>
              {renderInline(content?.title || caseData.title)}
            </h1>

            <p style={{
              margin: 0, fontSize: 20, lineHeight: 1.5,
              color: BRAND.textMuted, maxWidth: 720,
              animation: 'fi .8s .7s both',
            }}>{caseData.sub}</p>
          </div>
        </header>

        {/* ── SPEC BAR ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          borderTop: `1px solid ${BRAND.border}`, borderBottom: `1px solid ${BRAND.border}`,
          background: BRAND.bgAlt,
          animation: 'fi .8s .9s both',
        }}>
          {content?.spec?.map(([k, v], i) => (
            <div key={k} style={{
              padding: '24px 32px',
              borderRight: i < 3 ? `1px solid ${BRAND.border}` : 'none',
            }}>
              <div style={{
                fontSize: 10, color: BRAND.textFaint,
                fontFamily: "Saans, system-ui, sans-serif",
                textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6,
              }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: BRAND.text }}>{v}</div>
            </div>
          ))}
        </div>

        {/* ── BODY ── */}
        <main style={{
          padding: '88px 96px 120px',
          display: 'flex', flexDirection: 'column',
          gap: 80, alignItems: 'center',
          animation: 'fi .8s 1.1s both',
        }}>
          {/* Summary */}
          {content?.summary && (
            <details style={{
              width: 720, maxWidth: '100%', padding: 32,
              background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
              borderRadius: 12,
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 13, fontWeight: 600, color: BRAND.text,
                fontFamily: "Saans, system-ui, sans-serif", letterSpacing: '.04em',
              }}>
                <span>READ SUMMARY</span>
                <span style={{ color: BRAND.accent }}>+</span>
              </summary>
              <ul style={{ marginTop: 20, paddingLeft: 20, fontSize: 15, lineHeight: 1.65, color: BRAND.textMuted }}>
                {content.summary.map((s, i) => <li key={i} style={{ marginBottom: 8 }}>{s}</li>)}
              </ul>
            </details>
          )}

          {/* Blocks */}
          {content?.blocks?.map((b, idx) => renderBlock(b, idx))}
        </main>

        {/* ── NEXT CASE ── */}
        <section style={{ padding: '0 96px 96px' }}>
          <div style={{
            fontSize: 11, color: BRAND.textFaint,
            fontFamily: "Saans, system-ui, sans-serif",
            textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16,
          }}>Next case</div>
          <div
            onClick={() => navigate(`/${nextSlug}`)}
            data-hover
            style={{
              display: 'flex', gap: 32, alignItems: 'center',
              padding: 32, background: BRAND.bgAlt,
              border: `1px solid ${BRAND.border}`, borderRadius: 12,
              cursor: 'none', textDecoration: 'none',
              transition: 'background .25s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = BRAND.bgCard}
            onMouseLeave={e => e.currentTarget.style.background = BRAND.bgAlt}
          >
            <div style={{
              width: 240, aspectRatio: '16/10',
              background: `linear-gradient(135deg, ${nextCase.glow}33, transparent)`,
              borderRadius: 6, overflow: 'hidden', flexShrink: 0,
            }}>
              <img src={nextCase.image} alt={nextCase.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 11, color: BRAND.textFaint,
                fontFamily: "Saans, system-ui, sans-serif",
                marginBottom: 8, letterSpacing: '.06em',
              }}>{nextCase.tag.toUpperCase()}</div>
              <div style={{
                fontSize: 22, fontWeight: 700, color: BRAND.text,
                marginBottom: 8, lineHeight: 1.3,
              }}>{nextCase.title}</div>
              <div style={{ fontSize: 14, color: BRAND.textMuted, lineHeight: 1.5 }}>{nextCase.sub}</div>
            </div>
            <div style={{ color: BRAND.accent, fontSize: 24 }}>→</div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section style={{
          padding: '120px 96px 80px', textAlign: 'center',
          borderTop: `1px solid ${BRAND.border}`,
        }}>
          <h2 style={{
            margin: '0 0 32px', fontSize: 'clamp(2.5rem,5vw,4rem)',
            fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.05, color: BRAND.text,
          }}>
            Let's create the future{' '}
            <span style={{
              fontStyle: 'italic', color: BRAND.accent,
              fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            }}>together.</span>
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="https://www.linkedin.com/in/caique-castro89/" target="_blank" rel="noreferrer" style={{
              padding: '16px 28px', background: BRAND.bgAlt,
              border: `1px solid ${BRAND.border}`, color: BRAND.text,
              borderRadius: 999, textDecoration: 'none', fontWeight: 500, fontSize: 14,
            }}>LinkedIn →</a>
            <a href="mailto:caique.castro89@gmail.com" style={{
              padding: '16px 28px', background: BRAND.accent, color: '#0c0c0c',
              borderRadius: 999, textDecoration: 'none', fontWeight: 700, fontSize: 14,
            }}>Get in touch →</a>
          </div>
        </section>

        <footer style={{
          padding: '32px 96px', display: 'flex', justifyContent: 'space-between', gap: 8,
          fontSize: 12, color: BRAND.textFaint, borderTop: `1px solid ${BRAND.border}`,
          fontFamily: "Saans, system-ui, sans-serif",
        }}>
          <span>© 2026 · Caique Castro, Product Designer</span>
          <span>São Paulo, Brazil</span>
        </footer>
      </div>
    </>
  )
}
