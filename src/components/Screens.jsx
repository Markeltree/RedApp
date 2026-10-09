import Reveal from './Reveal'
import { Phone } from './Ui'

const screens = [
  { src: '/screens/splash.webp', title: 'Welcome', text: 'A warm start — sign up in seconds.' },
  { src: '/screens/feed.webp', title: 'Home Feed', text: 'Stories, posts and people nearby.' },
  { src: '/screens/match.webp', title: 'Matches', text: 'See new and mutual matches at a glance.' },
  { src: '/screens/profile.webp', title: 'Profile', text: 'Show who you are with posts and reels.' },
]

export default function Screens() {
  return (
    <section id="screens" className="relative overflow-hidden bg-night py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(164,22,36,.35),transparent_60%)]" />

      <div className="container-x relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="text-[13px] font-extrabold tracking-[2px] text-[#f3a5ad] uppercase">Inside the app</span>
          <h2 className="mt-3 mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">
            Designed for <span className="font-serif text-[#f3a5ad] italic">real</span> connections
          </h2>
          <p className="text-lg text-[#c7bcbe]">A clean, warm and familiar experience — so you can focus on the people, not the app.</p>
        </Reveal>
      </div>

      {/* Horizontal scroll on mobile, 4-up grid on desktop */}
      <div className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 [scrollbar-width:none] lg:container-x lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
        {screens.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 120}
            className={`shrink-0 snap-center text-center ${i % 2 ? 'lg:mt-16' : ''}`}
          >
            <Phone
              src={s.src}
              alt={`Red app ${s.title} screen`}
              className="mx-auto w-[240px] transition duration-500 hover:-translate-y-3 hover:rotate-1 xl:w-[260px]"
            />
            <h3 className="mt-7 text-xl font-bold">{s.title}</h3>
            <p className="mt-1 text-[15px] text-[#b9aeb0]">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
