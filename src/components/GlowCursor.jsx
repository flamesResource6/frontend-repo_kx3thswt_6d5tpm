import { useEffect, useState } from 'react'

export default function GlowCursor({ enabled = true }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5]"
      aria-hidden
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
        style={{
          left: pos.x,
          top: pos.y,
          width: 220,
          height: 220,
          background: 'radial-gradient(closest-side, rgba(56,189,248,0.28), rgba(56,189,248,0.08), transparent 70%)',
        }}
      />
    </div>
  )
}
