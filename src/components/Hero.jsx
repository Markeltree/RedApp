import Reveal from './Reveal'
import { Phone, StoreButtons, Stars, img } from './Ui'

const avatars = ['1494790108377-be9c29b29330', '1507003211169-0a1dd7228f2d', '1438761681033-6461ffad8d80', '1500648767791-00dcc994a43e']

function Chip({ icon, iconBg, title, sub, className, delay = '0s' }) {
  return (
    <div
      className={`absolute z-20 flex animate-float items-center gap-2.5 rounded-[18px] bg-white px-4 py-3 text-[13px] font-bold shadow-[0_20px_40px_-15px_rgba(20,8,10,.25)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`grid size-[34px] place-items-center rounded-[10px] text-lg ${iconBg}`}>{icon}</span>
      <div>
        {title}
        <small className="block text-[11px] font-medium text-muted">{sub}</small>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
      <div className="absolute -top-40 -right-52 -z-10 size-[720px] rounded-full bg-[radial-gradient(circle,rgba(164,22,36,.14),transparent_65%)]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-soft py-1.5 pr-4 pl-2 text-[13px] font-bold text-brand-dark">
            <b className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] text-white">NEW</b>
            Video verification is live ✨
          </span>
          <h1 className="text-[42px] leading-[1.02] font-extrabold tracking-[-2.5px] sm:text-6xl lg:text-[72px]">
            Find chemistry through <span className="accent">character.</span>
          </h1>
          <p className="mx-auto mt-6 mb-9 max-w-[520px] text-[19px] text-muted lg:mx-0">
            Red connects you with verified people who share your values, interests and intentions. No bots, no ghost
            profiles — just genuine connections worth showing up for.
          </p>
          <StoreButtons className="justify-center lg:justify-start" />

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex">
              {avatars.map((id, i) => (
                <img
                  key={id}
                  src={img(id)}
                  alt=""
                  className={`size-11 rounded-full border-[3px] border-cream object-cover ${i ? '-ml-3' : ''}`}
                />
              ))}
            </div>
            <div className="text-left">
              <Stars className="tracking-[2px]" />
              <small className="text-sm text-muted"><b className="text-ink">4.8/5</b> from 120K+ happy daters</small>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-[270px] sm:w-[430px]">
          <Phone
            src="/screens/match.webp"
            alt="Red app match screen showing new matches"
            className="absolute top-10 right-0 z-0 hidden rotate-10 scale-[.86] sm:block"
            eager
          />
          <Phone
            src="/screens/feed.webp"
            alt="Red app home feed with stories and a profile post"
            className="relative z-10 animate-float"
            eager
          />
          <Chip
            icon="❤"
            iconBg="bg-brand-soft text-brand"
            title="It's a Match!"
            sub="You & Jenny like each other"
            className="top-28 -left-4 lg:-left-12"
          />
          <Chip
            icon="🛡️"
            iconBg="bg-green-50"
            title="Profile Verified"
            sub="Photo + ID checked"
            className="bottom-32 -left-4 lg:-left-16"
            delay="1.5s"
          />
        </Reveal>
      </div>
    </section>
  )
}
