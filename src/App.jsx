import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlowCursor from './components/GlowCursor'

function App() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', light ? '#0a0f1a' : '#0b1220')
  }, [light])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className={`${light ? 'text-slate-900' : 'text-white'} min-h-screen`} style={{ background: light ? 'linear-gradient(180deg, #f7f9fc, #eaf2ff)' : '#0b1220' }}>
      <GlowCursor enabled={!light} />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-400 to-sky-500 origin-left z-[60]" style={{ scaleX }} />
      <Navbar onToggleTheme={() => setLight(v => !v)} isLight={light} />
      <main className="pt-28">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Certificates />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
