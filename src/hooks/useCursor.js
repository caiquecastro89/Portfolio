import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px' }
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      tx += (mx - tx) * .15; ty += (my - ty) * .15
      if (ring) { ring.style.left = tx + 'px'; ring.style.top = ty + 'px' }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onEnter = () => document.body.classList.add('cur-hover')
    const onLeave = () => document.body.classList.remove('cur-hover')
    const add = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    add()
    // re-add after potential re-renders
    const obs = new MutationObserver(add)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])
}
