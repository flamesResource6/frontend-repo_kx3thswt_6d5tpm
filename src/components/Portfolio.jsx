import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Design', 'Photography', 'Videography']

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: categories[(i % 3) + 1],
  image: `https://images.unsplash.com/photo-${1580000000000 + i * 5000}?q=80&w=1200&auto=format&fit=crop`,
}))

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <section id="portfolio" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Portfolio</h2>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-xs border transition backdrop-blur ${active === cat ? 'border-sky-400/60 bg-sky-500/20 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.35)]' : 'border-white/10 bg-white/5 text-slate-300 hover:border-sky-300/40 hover:text-sky-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(card => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img src={`https://picsum.photos/seed/${card.id}/800/600`} alt={card.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex items-center rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur">
                    {card.category}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-sky-400/70 shadow-[0_0_35px_rgba(56,189,248,0.45)]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
