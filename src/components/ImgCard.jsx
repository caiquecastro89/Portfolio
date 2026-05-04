import React, { useRef, useEffect } from 'react'

export default function ImgCard({ src, video, alt = '', ratio = 16/9, style = {} }) {
  const videoRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!video || !wrapRef.current) return
    const el = wrapRef.current
    const target = el.closest('[data-hover]') || el.parentElement
    if (!target) return

    const onEnter = () => {
      const v = videoRef.current
      if (v) { v.currentTime = 0; v.play().catch(() => {}) }
    }
    const onLeave = () => {
      const v = videoRef.current
      if (v) { v.pause(); v.currentTime = 0 }
    }
    target.addEventListener('mouseenter', onEnter)
    target.addEventListener('mouseleave', onLeave)
    return () => {
      target.removeEventListener('mouseenter', onEnter)
      target.removeEventListener('mouseleave', onLeave)
    }
  }, [video])

  return (
    <div ref={wrapRef} style={{
      position: 'relative', width: '100%',
      aspectRatio: String(ratio),
      overflow: 'hidden',
      background: '#1a1a1a',
      ...style,
    }}>
      {src && <img src={src} alt={alt} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center top',
      }} />}
      {video && (
        <video ref={videoRef} src={video} muted playsInline preload="metadata"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            opacity: 0, transition: 'opacity .25s', pointerEvents: 'none',
          }}
          onPlaying={e => e.currentTarget.style.opacity = '1'}
          onPause={e => e.currentTarget.style.opacity = '0'}
        />
      )}
    </div>
  )
}
