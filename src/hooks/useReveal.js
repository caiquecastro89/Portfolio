import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 900
    const threshold = isMobile ? 1.05 : 0.92

    const rev = () => {
      const wh = window.innerHeight
      document.querySelectorAll('.rv:not(.on)').forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < wh * threshold) el.classList.add('on')
      })
    }

    window.addEventListener('scroll', rev, { passive: true })
    // initial trigger with delay matching loader
    const visited = sessionStorage.getItem('visited')
    setTimeout(rev, visited ? 1300 : 2600)
    setTimeout(rev, visited ? 1800 : 3100)

    return () => window.removeEventListener('scroll', rev)
  }, [])
}
