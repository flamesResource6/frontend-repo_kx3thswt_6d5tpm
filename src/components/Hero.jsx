import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sky-300 tracking-widest text-xs sm:text-sm uppercase mb-4">Blending Creativity with Precision</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Benny Agil Holio Tambajong
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Accounting Student | Graphic Designer | Photographer | Videographer
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio" className="group relative">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-sky-500/30 blur-md group-hover:bg-sky-400/40 transition" />
              <span className="relative inline-flex items-center gap-2 rounded-xl border border-sky-400/60 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition">
                View Portfolio
              </span>
            </a>
            <a href="#contact" className="group relative">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/20 blur-md group-hover:bg-white/30 transition" />
              <span className="relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition">
                Contact Me
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
