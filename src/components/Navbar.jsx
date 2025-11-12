import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onToggleTheme, isLight }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-blue-500/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-sm sm:text-base tracking-widest font-semibold text-sky-200 hover:text-sky-300 transition">BENNY A H T</a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-sky-300 transition relative group"
                >
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-400 group-hover:w-full transition-all" />
                  {item.label}
                </a>
              ))}
              <button
                onClick={onToggleTheme}
                className="ml-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 hover:text-white hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition"
                aria-label="Toggle theme"
              >
                {isLight ? 'Dark' : 'Light'} Mode
              </button>
            </nav>
            <button
              className="md:hidden text-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-slate-300 hover:text-sky-300 transition"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => { onToggleTheme(); setOpen(false) }}
                  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-200 hover:text-white hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition"
                >
                  {isLight ? 'Dark' : 'Light'} Mode
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
