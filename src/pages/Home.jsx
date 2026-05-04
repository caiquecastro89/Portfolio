import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import ImgCard from '../components/ImgCard'
import FooterCTA from '../components/FooterCTA'
import { BRAND } from '../brand'
import { CASES } from '../data/cases'
import { useCursor } from '../hooks/useCursor'
import { useReveal } from '../hooks/useReveal'
import { useLoader } from '../hooks/useLoader'

export default function Home() {
  const navigate = useNavigate()
  const hero = CASES[0]
  const rest = CASES.slice(1)

  useCursor()
  useReveal()
  useLoader()

  // scroll-to-anchor support for /#work etc
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <>
      {/* Loader */}
      <div id="loader"><span id="loader-count">0</span></div>
      <div id="cur" /><div id="cur-ring" />

      <Nav />

      <div style={{ paddingTop: 64 }}>

        {/* ══ HERO STRIP ══ */}
        <section style={{
          padding: '32px 56px',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 32, alignItems: 'center',
          borderBottom: `1px solid ${BRAND.border}`,
          animation: 'fi .8s 1.8s both',
        }}>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: BRAND.accent, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              ● Caique Castro · Senior Product Designer · São Paulo
            </div>
            <p style={{
              margin: 0, fontSize: 'clamp(1.1rem,2vw,1.4rem)', lineHeight: 1.4,
              color: BRAND.text, fontWeight: 400, letterSpacing: '-.01em',
            }}>
              Senior product designer at NTT Data × Itaú —{' '}
              <span style={{ color: BRAND.textMuted }}>
                shipping investment platforms, design systems and research processes for one of Latin America's largest banks.
              </span>
            </p>
          </div>
          <div style={{
            display: 'flex', gap: 32,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: BRAND.textMuted,
          }}>
            {[['status','open Q3 26'],['based','SP · BR'],['role','senior']].map(([k,v]) => (
              <div key={k}>
                <div style={{ fontSize: 9, color: BRAND.textFaint, letterSpacing: '.1em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontSize: 12, color: BRAND.text, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FEATURED CASE ══ */}
        <section style={{ padding: '40px 56px 32px' }} id="work">

          {/* Eyebrow */}
          <div className="rv" style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: 16,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: BRAND.textMuted, letterSpacing: '.12em', textTransform: 'uppercase',
            }}>
              Featured · {hero.eyebrow}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: BRAND.textFaint,
            }}>01 / 03</div>
          </div>

          {/* Card */}
          <div
            data-hover
            onClick={() => navigate('/ion')}
            style={{
              background: BRAND.bgAlt, borderRadius: 8,
              overflow: 'hidden', border: `1px solid ${BRAND.border}`,
              cursor: 'none',
            }}
            className="rv"
          >
            {/* Image with gradient overlay */}
            <div style={{ position: 'relative' }}>
              <ImgCard src={hero.image} video={hero.video} alt="íon web" ratio={21/9} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(12,12,12,0.88) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', left: 32, bottom: 32, right: 32,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32,
              }}>
                <h2 style={{
                  margin: 0, fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: 1.05,
                  fontWeight: 600, letterSpacing: '-.025em',
                  color: '#fff', maxWidth: 820,
                }}>
                  Designing íon web: accessibility, scale, and 9.2% conversion at Itaú.
                </h2>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap', alignSelf: 'flex-end',
                }}>▶ hover plays</span>
              </div>
            </div>

            {/* Metrics + CTA */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr) auto',
              borderTop: `1px solid ${BRAND.border}`,
            }}>
              {hero.metrics.map(({ n, label }) => (
                <div key={n} style={{
                  padding: '24px 28px',
                  borderRight: `1px solid ${BRAND.border}`,
                }}>
                  <div style={{
                    fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 600,
                    letterSpacing: '-.025em', color: BRAND.text, lineHeight: 1,
                  }}>{n}</div>
                  <div style={{
                    marginTop: 6, fontSize: 11, color: BRAND.textMuted,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '.04em', textTransform: 'uppercase',
                  }}>{label}</div>
                </div>
              ))}
              <a
                href="/ion"
                onClick={e => { e.stopPropagation(); navigate('/ion') }}
                style={{
                  padding: '24px 32px', background: BRAND.accent, color: '#0c0c0c',
                  fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
                  cursor: 'none',
                }}
              >Read the case →</a>
            </div>

            {/* Timeline */}
            <div style={{
              padding: '24px 32px',
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 24,
              borderTop: `1px solid ${BRAND.border}`,
              background: BRAND.bg,
            }}>
              {hero.timeline.map(({ date, label, body }) => (
                <div key={date}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 6 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: BRAND.accent }}>{date}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: BRAND.text }}>{label}</span>
                  </div>
                  <div style={{ fontSize: 12, color: BRAND.textMuted, lineHeight: 1.5 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MORE WORK ══ */}
        <section style={{ padding: '64px 56px' }} className="rv">
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: 24,
          }}>
            <h3 style={{
              fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 700,
              letterSpacing: '-.015em', margin: 0, color: BRAND.text,
            }}>More work</h3>
            <span style={{ fontSize: 13, color: BRAND.textMuted }}>View archive →</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {rest.map((c, i) => (
              <SmallCase key={c.id} c={c} num={i + 2} onClick={() => navigate(`/${c.slug}`)} />
            ))}
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section style={{ padding: '80px 56px', borderTop: `1px solid ${BRAND.border}` }} className="rv">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <Testimonial
              quote="Caique brought design rigor to a system used by thousands of designers and developers. The handoff structure he proposed became the team's standard."
              who="Lead Designer"
              role="iDS · Itaú Unibanco"
            />
            <Testimonial
              quote="When budget for usability testing was uncertain, he didn't wait. He brought RITE in, ran 6 sessions across 5 prototypes, and made the formal test exponentially better."
              who="Project Manager"
              role="Free Energy Market · Itaú"
            />
          </div>
        </section>

        {/* ══ ABOUT / SERVICES ══ */}
        <section id="about" style={{
          padding: '80px 56px', background: BRAND.bgAlt,
          borderTop: `1px solid ${BRAND.border}`,
        }}>
          <div className="rv" style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: BRAND.textMuted, letterSpacing: '.12em',
              textTransform: 'uppercase', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ color: BRAND.accent, fontFamily: "'JetBrains Mono', monospace" }}>02</span>
              About
            </div>
            <p style={{
              fontSize: 'clamp(1rem,1.6vw,1.4rem)', fontWeight: 600,
              lineHeight: 1.5, letterSpacing: '-.01em',
              color: BRAND.text, maxWidth: 960,
            }}>
              I've spent the last years designing large-scale experiences for Itaú Unibanco across investments, design systems,
              AI, free energy market, and insurance. My work has impacted millions of users, focusing on UX, digital
              accessibility, and design systems.{' '}
              <span style={{ color: BRAND.lime }}>I design for people.</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n:'01', title:'UX Research & Strategy', desc:'Interviews, usability tests, data analysis and insight synthesis.', tags:['Interviews','Usability Testing','Jobs To Be Done','Data Analysis'] },
              { n:'02', title:'Product & UI Design', desc:'Digital interfaces combining product strategy, creativity and usability.', tags:['Wireframing','UI Design','Prototyping','Web & Mobile'] },
              { n:'03', title:'Design Systems', desc:'Scalable design systems · tokens, components, documentation and governance.', tags:['Tokens','Figma Variables','Components','Documentation'] },
              { n:'04', title:'Digital Accessibility', desc:'Robust accessibility specs and audits following WCAG 2.1 criteria.', tags:['WCAG 2.1','Screen Readers','Audit','Specification'] },
            ].map((svc, i) => (
              <div key={svc.n} className="rv" style={{
                display: 'grid', gridTemplateColumns: '56px 1fr 1.4fr',
                alignItems: 'center', gap: 36, padding: '28px 0',
                borderTop: `1px solid ${BRAND.border}`,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '.63rem',
                  fontWeight: 400, letterSpacing: '.1em', color: BRAND.textFaint,
                }}>{svc.n}</span>
                <div style={{
                  fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', fontWeight: 700,
                  letterSpacing: '-.02em', color: BRAND.text,
                }}>{svc.title}</div>
                <div>
                  <p style={{ fontSize: '1rem', color: BRAND.textMuted, lineHeight: 1.7, marginBottom: 12 }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {svc.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '.7rem',
                        border: `1px solid ${BRAND.border}`, padding: '5px 12px',
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
        <FooterCTA />

        <footer style={{
          padding: '18px 56px', background: BRAND.bg,
          borderTop: `1px solid ${BRAND.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
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
function SmallCase({ c, num, onClick }) {
  return (
    <article
      data-hover
      onClick={onClick}
      style={{
        background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
        borderRadius: 8, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        cursor: 'none', transition: 'transform .3s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ position: 'relative' }}>
        <ImgCard src={c.image} video={c.video} alt={c.title} ratio={16/10} />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: '#fff', background: 'rgba(0,0,0,0.55)',
          padding: '4px 8px', borderRadius: 4, letterSpacing: '.06em',
        }}>
          {String(num).padStart(2,'0')} · {c.eyebrow.split('·')[0].trim()}
        </div>
      </div>

      <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <h4 style={{
          margin: 0, fontSize: 'clamp(.95rem,1.2vw,1.15rem)', fontWeight: 700,
          color: BRAND.text, lineHeight: 1.3, letterSpacing: '-.01em',
        }}>{c.title}</h4>
        <p style={{ margin: 0, fontSize: 13, color: BRAND.textMuted, lineHeight: 1.55 }}>{c.impact}</p>

        <div style={{
          marginTop: 'auto', paddingTop: 14,
          borderTop: `1px solid ${BRAND.border}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        }}>
          {[['metric', c.metric, true], ['duration', c.duration, false],
            ['role', c.role.replace('Senior ','Sr. '), false], ['company', c.company, false]
          ].map(([k, v, accent]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ color: BRAND.textFaint }}>{k}</span>
              <span style={{ color: accent ? BRAND.accent : BRAND.text, fontWeight: accent ? 600 : 400 }}>{v}</span>
            </div>
          ))}
        </div>

        <span style={{
          fontSize: 13, color: BRAND.accent, fontWeight: 500,
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>Open the case →</span>
      </div>
    </article>
  )
}

// ── Testimonial ──
function Testimonial({ quote, who, role }) {
  return (
    <div>
      <div style={{
        fontSize: 24, color: BRAND.accent, marginBottom: 12,
        fontFamily: "'Instrument Serif', serif",
      }}>"</div>
      <p style={{
        margin: 0, fontSize: 'clamp(1rem,1.6vw,1.35rem)', lineHeight: 1.4,
        color: BRAND.text, fontWeight: 400, letterSpacing: '-.01em',
      }}>{quote}</p>
      <div style={{
        marginTop: 20, paddingTop: 16, borderTop: `1px solid ${BRAND.border}`,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: BRAND.textMuted,
      }}>
        <span style={{ color: BRAND.text, fontWeight: 600 }}>{who}</span>
        <span>{role}</span>
      </div>
    </div>
  )
}
