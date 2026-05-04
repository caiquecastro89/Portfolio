import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND } from '../brand'

export default function Nav() {
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isCase = pathname !== '/'

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      nav.style.background = window.scrollY > 20
        ? 'rgba(12,12,12,0.92)'
        : 'transparent'
      nav.style.backdropFilter = window.scrollY > 20 ? 'blur(12px)' : 'none'
      nav.style.borderBottomColor = window.scrollY > 20
        ? BRAND.border
        : 'transparent'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 64, zIndex: 500,
        background: 'transparent',
        borderBottom: `1px solid transparent`,
        transition: 'background .4s, border-color .4s, backdrop-filter .4s',
        animation: 'fi .8s 1.3s both',
      }}>
        <Link to="/" style={{
          fontFamily: 'Inter, sans-serif', fontSize: '.82rem', fontWeight: 700,
          letterSpacing: '.04em', textDecoration: 'none', color: BRAND.text,
          textTransform: 'uppercase', cursor: 'none',
        }}>
          caique.castro <span style={{ opacity: .3, fontWeight: 300 }}>/ portfolio</span>
        </Link>

        <nav style={{ display: 'flex', gap: 8, listStyle: 'none', alignItems: 'center' }}>
          {[['Work', '/#work'], ['About', '/#about'], ['LinkedIn', 'https://www.linkedin.com/in/caique-castro89/']].map(([label, href]) => (
            href.startsWith('http')
              ? <a key={label} href={href} target="_blank" rel="noreferrer" style={navLinkStyle}>{label}</a>
              : <Link key={label} to={href} style={navLinkStyle}>{label}</Link>
          ))}
        </nav>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          animation: 'fi .8s 1.5s both',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: BRAND.lime,
            display: 'inline-block', animation: 'pu 2s infinite',
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '.58rem',
            letterSpacing: '.1em', textTransform: 'uppercase',
            color: BRAND.textMuted,
          }}>available · Q3 2026</span>
        </div>

        {/* Desktop CTAs — shown always on case pages, after scroll on home */}
        <NavCTAs isCase={isCase} />
      </nav>

      {/* Mobile nav CTAs */}
      <MobileNav isCase={isCase} />
    </>
  )
}

function NavCTAs({ isCase }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (isCase) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; return }
    const onScroll = () => {
      const show = window.scrollY > window.innerHeight * .75
      el.style.opacity = show ? '1' : '0'
      el.style.pointerEvents = show ? 'auto' : 'none'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCase])

  return (
    <div ref={ref} style={{
      display: 'flex', alignItems: 'center', gap: 8,
      opacity: isCase ? 1 : 0,
      pointerEvents: isCase ? 'auto' : 'none',
      transition: 'opacity .7s',
    }}>
      <a href="https://calendly.com/caique-castro89/30min" target="_blank" rel="noreferrer" style={ctaSecStyle}>
        Book a meeting →
      </a>
      <a href="mailto:caique.castro89@gmail.com" style={ctaPrimaryStyle}>
        Get in touch →
      </a>
    </div>
  )
}

function MobileNav({ isCase }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (isCase) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; return }
    const onScroll = () => {
      const show = window.scrollY > window.innerHeight * .75
      el.style.opacity = show ? '1' : '0'
      el.style.pointerEvents = show ? 'auto' : 'none'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCase])

  return (
    <div ref={ref} style={{
      display: 'none', // shown via media query in global.css
      position: 'fixed', top: 12, right: 16, zIndex: 501,
      gap: 8, alignItems: 'center',
      opacity: isCase ? 1 : 0,
      transition: 'opacity .7s',
    }} className="mobile-nav-ctas">
      <a href="https://calendly.com/caique-castro89/30min" target="_blank" rel="noreferrer" style={{
        ...ctaSecStyle, padding: '10px 14px', fontSize: '.6rem',
      }}>Book a call →</a>
      <a href="mailto:caique.castro89@gmail.com" style={{
        ...ctaPrimaryStyle, padding: '10px 14px', fontSize: '.6rem',
      }}>Contact →</a>
    </div>
  )
}

const navLinkStyle = {
  fontFamily: "'JetBrains Mono', monospace", fontSize: '.63rem', fontWeight: 500,
  letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none',
  color: BRAND.textMuted, transition: 'all .2s', cursor: 'none',
  padding: '13px 16px', height: 44, display: 'inline-flex', alignItems: 'center',
  border: `1.5px solid ${BRAND.border}`, borderRadius: 100,
}

const ctaPrimaryStyle = {
  fontFamily: "'JetBrains Mono', monospace", fontSize: '.63rem', fontWeight: 500,
  letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none',
  background: '#ff5b1f', color: '#0c0c0c',
  padding: '0 20px', height: 44, display: 'inline-flex', alignItems: 'center', gap: 6,
  borderRadius: 100, cursor: 'none',
}

const ctaSecStyle = {
  fontFamily: "'JetBrains Mono', monospace", fontSize: '.63rem', fontWeight: 500,
  letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none',
  color: BRAND.textMuted, border: `1.5px solid ${BRAND.border}`,
  padding: '0 16px', height: 44, display: 'inline-flex', alignItems: 'center', gap: 6,
  borderRadius: 100, cursor: 'none',
}
