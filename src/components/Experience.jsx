import { motion } from 'framer-motion'

const roles = [
  { title: 'Freelance Designer & Photographer', period: '2019–Present' },
  { title: 'Personal Assistant – Ms. Efrina Hendrik', period: '2022–2023' },
  { title: 'Vice Chairperson – Accounting Student Association', period: '2024–2025' },
  { title: 'Mentor – Accounting Club', period: '2024' },
  { title: 'KKN Project – Desa Batur', period: '2025' },
  { title: 'Internship – Dana Pensiun Duta Wacana', period: '2025' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-sky-300/0 to-sky-500/60" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative sm:w-1/2 ${i % 2 === 0 ? 'sm:ml-0 sm:mr-auto' : 'sm:ml-auto'} ml-10`}
              >
                <div className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{r.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
