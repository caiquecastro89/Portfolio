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
      nav.style.background = window.scrollY > 20 ? 'rgba(12,12,12,0.92)' : 'transparent'
      nav.style.backdropFilter = window.scrollY > 20 ? 'blur(12px)' : 'none'
      nav.style.borderBottomColor = window.scrollY > 20 ? BRAND.border : 'transparent'
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
        borderBottom: '1px solid transparent',
        transition: 'background .4s, border-color .4s, backdrop-filter .4s',
        animation: 'fi .8s 1.3s both',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'Inter, sans-serif', fontSize: '.82rem', fontWeight: 700,
          letterSpacing: '.04em', textDecoration: 'none', color: BRAND.text,
          textTransform: 'uppercase', cursor: 'none',
        }}>
          Caique Castro
        </Link>

        {/* Desktop CTAs — always visible */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a
            href="https://www.linkedin.com/in/caique-castro89/"
            target="_blank" rel="noreferrer"
            style={ctaSecStyle}
          >
            LinkedIn →
          </a>
          <a href="mailto:caique.castro89@gmail.com" style={ctaPrimaryStyle}>
            Contact →
          </a>
        </div>
      </nav>


    </>
  )
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
