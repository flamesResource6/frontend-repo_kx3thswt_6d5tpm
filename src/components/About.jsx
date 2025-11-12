import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(30,64,175,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl shadow-xl shadow-blue-500/10">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-slate-300 leading-relaxed">
            Hi! I’m Benny, an enthusiastic university student passionate about design, photography, and videography. With over five years of creative experience, I’m eager to keep learning and contributing positively to any professional environment.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Based in Yogyakarta</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Creative + Analytical</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Design • Photo • Video</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Accounting Student</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
