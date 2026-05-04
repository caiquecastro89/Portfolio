import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import ImgCard from '../components/ImgCard'
import CursorTooltip from '../components/CursorTooltip'
import FooterCTA from '../components/FooterCTA'
import { BRAND } from '../brand'
import { CASES } from '../data/cases'
import { useCursor } from '../hooks/useCursor'
import { useReveal } from '../hooks/useReveal'
import { useLoader } from '../hooks/useLoader'

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth <= 768)
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return mobile
}

export default function Home() {
  const navigate = useNavigate()
  const mobile = useIsMobile()
  const hero = CASES[0]
  const rest = CASES.slice(1)
  const P = mobile ? '20px' : '56px'

  useCursor()
  useReveal()
  useLoader()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <>
      <div id="loader"><span id="loader-count">0</span></div>
      <div id="cur" /><div id="cur-ring" />
      <Nav />

      <div style={{ paddingTop: mobile ? 56 : 64 }}>

        {/* ══ HERO ══ */}
        <section style={{
          padding: mobile ? '24px 20px 28px' : '40px 56px 48px',
          borderBottom: `1px solid ${BRAND.border}`,
          animation: 'fi .8s 1.8s both',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: mobile ? 9 : 11,
            color: BRAND.accent, letterSpacing: '.12em', textTransform: 'uppercase',
            marginBottom: mobile ? 12 : 20,
          }}>
            ● {mobile ? 'Senior Product Designer · São Paulo' : 'Caique Castro · Senior Product Designer · São Paulo'}
          </div>
          <p style={{
            margin: 0,
            fontSize: mobile ? '1rem' : 'clamp(1rem,1.4vw,1.15rem)',
            lineHeight: mobile ? 1.65 : 1.8,
            color: BRAND.textMuted, fontWeight: 400,
            maxWidth: 860,
          }}>
            I'm a Senior Product Designer based in São Paulo, with 13 years of experience in design field and, between that, 7 years as a Product Designer. Currently at NTT Data, collaborating with Itaú, Latin America's largest bank. My work spans UX, UI Design, digital accessibility, design systems, AI, storytelling and much more. Here you'll find some of the projects I'm most proud of.
          </p>
        </section>

        {/* ══ FEATURED CASE ══ */}
        <section style={{ padding: mobile ? '24px 20px 20px' : '40px 56px 32px' }} id="work">

          {/* Eyebrow */}
          <div className="rv" style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: mobile ? 12 : 16,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? 9 : 11,
              color: BRAND.textMuted, letterSpacing: '.12em', textTransform: 'uppercase',
            }}>
              Featured · {mobile ? 'Itaú · 2022–2024' : hero.eyebrow}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? 9 : 11,
              color: BRAND.textFaint,
            }}>01 / 03</div>
          </div>

          {/* Card */}
          <div className="rv" style={{
            background: BRAND.bgAlt, borderRadius: 8,
            overflow: 'hidden', border: `1px solid ${BRAND.border}`,
          }}>
            {/* Image */}
            <CursorTooltip label="↗ VIEW CASE" onClick={() => navigate('/ion')}>
              <div style={{ position: 'relative' }}>
                <ImgCard
                  src={hero.image} video={hero.video} alt="íon web"
                  ratio={mobile ? 4/3 : 21/9}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 35%, rgba(12,12,12,0.9) 100%)',
                  pointerEvents: 'none',
                }} />
                <h2 style={{
                  position: 'absolute',
                  left: mobile ? 16 : 32, right: mobile ? 16 : 32, bottom: mobile ? 16 : 32,
                  margin: 0,
                  fontSize: mobile ? 'clamp(1.3rem,5vw,1.7rem)' : 'clamp(2.2rem,4vw,3.5rem)',
                  lineHeight: 1.1, fontWeight: 600, letterSpacing: '-.025em', color: '#fff',
                }}>
                  Designing íon web: accessibility, scale, and 9.2% conversion at Itaú.
                </h2>
              </div>
            </CursorTooltip>

            {/* Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)',
              borderTop: `1px solid ${BRAND.border}`,
            }}>
              {hero.metrics.map(({ n, label }, idx) => (
                <div key={n} style={{
                  padding: mobile ? '16px 18px' : '24px 28px',
                  borderRight: mobile
                    ? (idx % 2 === 0 ? `1px solid ${BRAND.border}` : 'none')
                    : (idx < 3 ? `1px solid ${BRAND.border}` : 'none'),
                  borderBottom: mobile && idx < 2 ? `1px solid ${BRAND.border}` : 'none',
                }}>
                  <div style={{
                    fontSize: mobile ? '1.5rem' : 'clamp(1.6rem,2.5vw,2.4rem)',
                    fontWeight: 600, letterSpacing: '-.025em',
                    color: BRAND.text, lineHeight: 1,
                  }}>{n}</div>
                  <div style={{
                    marginTop: 6, fontSize: mobile ? 9 : 11, color: BRAND.textMuted,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '.04em', textTransform: 'uppercase',
                    lineHeight: 1.4,
                  }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══ MORE WORK ══ */}
        <section style={{ padding: mobile ? '40px 20px' : '64px 56px' }} className="rv">
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: mobile ? 16 : 24,
          }}>
            <h3 style={{
              fontSize: mobile ? '1.2rem' : 'clamp(1.4rem,2.5vw,1.8rem)',
              fontWeight: 700, letterSpacing: '-.015em', margin: 0, color: BRAND.text,
            }}>More work</h3>
            <span style={{ fontSize: mobile ? 12 : 13, color: BRAND.textMuted }}>Archive →</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(2,1fr)',
            gap: mobile ? 14 : 20,
          }}>
            {rest.map((c, i) => (
              <SmallCase key={c.id} c={c} num={i + 2}
                onClick={() => navigate(`/${c.slug}`)} mobile={mobile} />
            ))}
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section style={{
          padding: mobile ? '48px 20px' : '80px 56px',
          borderTop: `1px solid ${BRAND.border}`,
        }} className="rv">
          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
            gap: mobile ? 40 : 64,
          }}>
            <Testimonial
              quote="Caique brought design rigor to a system used by thousands of designers and developers. The handoff structure he proposed became the team's standard."
              who="Lead Designer" role="iDS · Itaú Unibanco" mobile={mobile}
            />
            <Testimonial
              quote="When budget for usability testing was uncertain, he didn't wait. He brought RITE in, ran 6 sessions across 5 prototypes, and made the formal test exponentially better."
              who="Project Manager" role="Free Energy Market · Itaú" mobile={mobile}
            />
          </div>
        </section>

        {/* ══ ABOUT / SERVICES ══ */}
        <section id="about" style={{
          padding: mobile ? '56px 20px' : '80px 56px',
          background: BRAND.bgAlt, borderTop: `1px solid ${BRAND.border}`,
        }}>
          <div className="rv" style={{ marginBottom: mobile ? 32 : 48 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? 9 : 11,
              color: BRAND.textMuted, letterSpacing: '.12em',
              textTransform: 'uppercase', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ color: BRAND.accent }}>02</span>About
            </div>
            <p style={{
              fontSize: mobile ? '1rem' : 'clamp(1rem,1.6vw,1.4rem)',
              fontWeight: 600, lineHeight: 1.5, letterSpacing: '-.01em',
              color: BRAND.text, maxWidth: 960,
            }}>
              I've spent the last years designing large-scale experiences for Itaú Unibanco across investments, design systems,
              AI, free energy market, and insurance. My work has impacted millions of users.{' '}
              <span style={{ color: BRAND.lime }}>I design for people.</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n:'01', title:'UX Research & Strategy', desc:'Interviews, usability tests, data analysis and insight synthesis.', tags:['Interviews','Usability Testing','Jobs To Be Done','Data Analysis'] },
              { n:'02', title:'Product & UI Design', desc:'Digital interfaces combining product strategy, creativity and usability.', tags:['Wireframing','UI Design','Prototyping','Web & Mobile'] },
              { n:'03', title:'Design Systems', desc:'Scalable design systems · tokens, components, documentation and governance.', tags:['Tokens','Figma Variables','Components','Documentation'] },
              { n:'04', title:'Digital Accessibility', desc:'Robust accessibility specs and audits following WCAG 2.1 criteria.', tags:['WCAG 2.1','Screen Readers','Audit','Specification'] },
            ].map((svc) => (
              <div key={svc.n} className="rv" style={{
                display: 'grid',
                gridTemplateColumns: mobile ? '1fr' : '56px 1fr 1.4fr',
                alignItems: mobile ? 'flex-start' : 'center',
                gap: mobile ? 8 : 36,
                padding: mobile ? '20px 0' : '28px 0',
                borderTop: `1px solid ${BRAND.border}`,
              }}>
                {!mobile && (
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '.63rem',
                    fontWeight: 400, letterSpacing: '.1em', color: BRAND.textFaint,
                  }}>{svc.n}</span>
                )}
                <div style={{
                  fontSize: mobile ? '1rem' : 'clamp(1.1rem,1.8vw,1.5rem)',
                  fontWeight: 700, letterSpacing: '-.02em', color: BRAND.text,
                }}>{svc.title}</div>
                <div>
                  <p style={{ fontSize: mobile ? '.9rem' : '1rem', color: BRAND.textMuted, lineHeight: 1.7, marginBottom: 10 }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {svc.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? '.6rem' : '.7rem',
                        border: `1px solid ${BRAND.border}`, padding: '4px 10px',
                        borderRadius: 100, color: BRAND.textMuted,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FOOTER CTA ══ */}
        <FooterCTA mobile={mobile} />

        <footer style={{
          padding: mobile ? '16px 20px' : '18px 56px',
          background: BRAND.bg, borderTop: `1px solid ${BRAND.border}`,
          display: 'flex', flexDirection: mobile ? 'column' : 'row',
          alignItems: 'center', justifyContent: 'space-between',
          gap: mobile ? 4 : 0, textAlign: mobile ? 'center' : 'left',
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: BRAND.textFaint }}>
            © 2026 · Caique Castro, Product Designer
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: BRAND.textFaint }}>
            São Paulo, Brazil
          </span>
        </footer>
      </div>
    </>
  )
}

// ── Small case card ──
function SmallCase({ c, num, onClick, mobile }) {
  return (
    <article
      style={{
        background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
        borderRadius: 8, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'transform .3s',
      }}
      onMouseEnter={e => { if (!mobile) e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <CursorTooltip label="↗ VIEW CASE" onClick={onClick}>
        <div style={{ position: 'relative' }}>
          <ImgCard src={c.image} video={mobile ? null : c.video} alt={c.title} ratio={16/10} />
          <div style={{
            position: 'absolute', top: mobile ? 10 : 12, left: mobile ? 10 : 12,
            fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? 9 : 10,
            color: '#fff', background: 'rgba(0,0,0,0.55)',
            padding: '4px 8px', borderRadius: 4, letterSpacing: '.06em',
          }}>
            {String(num).padStart(2,'0')} · {c.eyebrow.split('·')[0].trim()}
          </div>
        </div>
      </CursorTooltip>

      <div style={{ padding: mobile ? '16px 18px 20px' : '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h4 style={{
          margin: 0, fontSize: mobile ? '.95rem' : 'clamp(.95rem,1.2vw,1.15rem)',
          fontWeight: 700, color: BRAND.text, lineHeight: 1.3, letterSpacing: '-.01em',
        }}>{c.title}</h4>
        <p style={{ margin: 0, fontSize: mobile ? 12 : 13, color: BRAND.textMuted, lineHeight: 1.55 }}>{c.impact}</p>

        <div style={{
          marginTop: 'auto', paddingTop: 12,
          borderTop: `1px solid ${BRAND.border}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
          fontFamily: "'JetBrains Mono', monospace", fontSize: mobile ? 9 : 10,
        }}>
          {[['metric', c.metric, true], ['duration', c.duration, false],
            ['role', c.role.replace('Senior ','Sr. '), false], ['company', c.company, false]
          ].map(([k, v, accent]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
              <span style={{ color: BRAND.textFaint }}>{k}</span>
              <span style={{ color: accent ? BRAND.accent : BRAND.text, fontWeight: accent ? 600 : 400 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

// ── Testimonial ──
function Testimonial({ quote, who, role, mobile }) {
  return (
    <div>
      <div style={{
        fontSize: mobile ? 20 : 24, color: BRAND.accent, marginBottom: mobile ? 10 : 12,
        fontFamily: "'Instrument Serif', serif",
      }}>"</div>
      <p style={{
        margin: 0,
        fontSize: mobile ? '1rem' : 'clamp(1rem,1.6vw,1.35rem)',
        lineHeight: 1.45, color: BRAND.text, fontWeight: 400, letterSpacing: '-.01em',
      }}>{quote}</p>
      <div style={{
        marginTop: mobile ? 14 : 20, paddingTop: mobile ? 12 : 16,
        borderTop: `1px solid ${BRAND.border}`,
        display: 'flex', justifyContent: 'space-between',
        fontSize: mobile ? 11 : 12, color: BRAND.textMuted,
      }}>
        <span style={{ color: BRAND.text, fontWeight: 600 }}>{who}</span>
        <span>{role}</span>
      </div>
    </div>
  )
}
