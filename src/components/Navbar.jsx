import { useEffect, useState } from 'react'
import { Logo } from './Ui'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#screens', label: 'App' },
  { href: '#features', label: 'Features' },
  { href: '#safety', label: 'Safety' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/90 py-3 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Logo />

        <ul className="hidden gap-9 text-[15px] font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-ink-2 transition hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className="hidden rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-brand-dark md:inline-flex"
        >
          Get the App
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`container-x overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="rounded-2xl bg-white p-2 shadow-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold hover:bg-brand-soft">
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand py-3 text-center font-bold text-white"
            >
              Get the App
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
