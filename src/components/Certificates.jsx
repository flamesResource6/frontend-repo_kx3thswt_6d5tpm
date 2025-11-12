import { useState } from 'react'
import { motion } from 'framer-motion'

const certs = [
  { id: 1, title: 'Mezink Academy', img: 'https://images.unsplash.com/photo-1555096462-299905e8aac9?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'KSPM Workshop', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'FTI UKDW', img: 'https://images.unsplash.com/photo-1589579234092-5ef453f8f58b?q=80&w=1200&auto=format&fit=crop' },
]

export default function Certificates() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + certs.length) % certs.length)
  const next = () => setIndex((index + 1) % certs.length)

  return (
    <section id="certificates" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Certificates</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]">Prev</button>
            <button onClick={next} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]">Next</button>
          </div>
        </div>

        <div className="relative h-72 sm:h-80">
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -40, scale: 0.95 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 grid place-items-center [perspective:1000px]"
          >
            <div className="relative h-64 w-full sm:w-[560px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl hover:shadow-[0_0_50px_rgba(56,189,248,0.35)] transition">
              <img src={certs[index].img} alt={certs[index].title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{certs[index].title}</h3>
                <div className="rounded-full border border-sky-400/60 bg-sky-500/20 px-3 py-1 text-xs text-sky-200">3D</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
