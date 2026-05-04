import { useEffect } from 'react'

export function useLoader() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    const count = document.getElementById('loader-count')
    if (!loader) return

    if (sessionStorage.getItem('visited')) {
      loader.style.display = 'none'
      document.body.classList.add('no-loader')
      return
    }
    sessionStorage.setItem('visited', '1')

    let start = null
    const duration = 1200
    let current = 0
    const easeOut = t => 1 - Math.pow(1 - t, 3)

    const tick = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const num = Math.floor(easeOut(progress) * 100)
      if (num !== current) { current = num; if (count) count.textContent = current }
      if (progress < 1) { requestAnimationFrame(tick) }
      else {
        if (count) count.textContent = '100'
        setTimeout(() => {
          loader.classList.add('done')
          setTimeout(() => { loader.style.display = 'none' }, 700)
        }, 150)
      }
    }
    requestAnimationFrame(tick)
  }, [])
}
