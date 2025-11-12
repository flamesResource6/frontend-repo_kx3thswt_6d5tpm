import { motion } from 'framer-motion'
import { Camera, PenTool, Film, PencilRuler, Sparkles, Bolt } from 'lucide-react'

const skills = [
  { name: 'Editing', icon: Film, level: 90 },
  { name: 'Design', icon: PenTool, level: 92 },
  { name: 'Photography', icon: Camera, level: 88 },
  { name: 'Videography', icon: Film, level: 86 },
  { name: 'Microsoft Office', icon: PencilRuler, level: 85 },
  { name: 'Fast Learner', icon: Bolt, level: 95 },
  { name: 'Adaptability', icon: Sparkles, level: 93 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ name, icon: Icon, level }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/20 border border-sky-400/60 text-sky-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-slate-400">{level}%</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
