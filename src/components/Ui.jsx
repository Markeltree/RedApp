import { Apple, Play } from './Icons'
import Reveal from './Reveal'
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'

// Replace with your real store links
export const APP_STORE_URL = '#'
export const PLAY_STORE_URL = '#'

export const img = (id, w = 120) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70`

export function Logo({ light = false, className = '' }) {
  return (
    <a href="#top" className={`inline-block ${className}`} aria-label="Red by WORTH — home">
      <img src={light ? logoWhite : logo} alt="Red by WORTH" className="h-11 w-auto" />
    </a>
  )
}

// Real app screenshot inside an iPhone-style frame
export function Phone({ src, alt, className = '', eager = false }) {
  return (
    <div
      className={`w-[270px] rounded-[44px] bg-[#0b0b0b] p-2.5 shadow-phone ring-2 ring-[#2a2a2a] ring-inset ${className}`}
    >
      <div className="relative overflow-hidden rounded-[36px] bg-cream">
        <img
          src={src}
          alt={alt}
          width="750"
          height="1624"
          loading={eager ? 'eager' : 'lazy'}
          className="block aspect-[375/812] w-full object-cover"
        />
        <span className="absolute top-2.5 left-1/2 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-[#0b0b0b]" />
      </div>
    </div>
  )
}

export function StoreButtons({ light = false, className = '' }) {
  const theme = light ? 'bg-white text-ink hover:bg-brand-soft' : 'bg-ink text-white hover:bg-black'
  const stores = [
    { href: APP_STORE_URL, Icon: Apple, small: 'Download on the', big: 'App Store' },
    { href: PLAY_STORE_URL, Icon: Play, small: 'Get it on', big: 'Google Play' },
  ]
  return (
    <div className={`flex flex-wrap gap-3.5 ${className}`}>
      {stores.map(({ href, Icon, small, big }) => (
        <a
          key={big}
          href={href}
          className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition hover:-translate-y-1 ${theme}`}
        >
          <Icon className="size-6.5" />
          <span className="text-left leading-tight">
            <small className="block text-[11px] opacity-75">{small}</small>
            <strong className="block text-[17px]">{big}</strong>
          </span>
        </a>
      ))}
    </div>
  )
}

export function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
      <span className="text-[13px] font-extrabold tracking-[2px] text-brand uppercase">{eyebrow}</span>
      <h2 className="mt-3 mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {text && <p className="text-lg text-muted">{text}</p>}
    </Reveal>
  )
}

export function Stars({ className = '', color = 'text-amber-400' }) {
  return <div className={`tracking-[3px] ${color} ${className}`}>★★★★★</div>
}
