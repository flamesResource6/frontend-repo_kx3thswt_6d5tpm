import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Contact</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <ul className="space-y-3 text-slate-300">
              <li>📧 bennytambajong011@gmail.com</li>
              <li>🔗 LinkedIn: linkedin.com/in/bennytambajong</li>
              <li>📸 Instagram: @tambholio</li>
              <li>📍 Yogyakarta, Indonesia</li>
            </ul>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none focus:border-sky-400/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none focus:border-sky-400/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none focus:border-sky-400/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition" placeholder="Say hello" />
            </div>
            <button className="group relative inline-flex items-center gap-2 rounded-xl border border-sky-400/60 bg-sky-500/20 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
