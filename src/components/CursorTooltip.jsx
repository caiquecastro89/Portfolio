import React, { useState, useRef, useCallback } from 'react'

// Tooltip "↗ VIEW CASE" that follows the cursor inside the card — koto.com style
export default function CursorTooltip({ children, label = '↗ VIEW CASE', onClick }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={onMove}
      style={{ position: 'relative', cursor: 'none' }}
    >
      {children}

      {/* Tooltip pill */}
      <div style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: visible ? 1 : 0,
        transition: 'opacity .15s',
      }}>
        <div style={{
          background: 'rgba(20,20,20,0.82)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 6,
          padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: 6,
          whiteSpace: 'nowrap',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, fontWeight: 500,
          letterSpacing: '.1em', textTransform: 'uppercase',
          color: '#f4f1ec',
        }}>
          {label}
        </div>
      </div>
    </div>
  )
}
