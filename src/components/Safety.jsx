import Reveal from './Reveal'
import { ShieldAlert, ShieldCheck, User } from './Icons'

const cards = [
  { Icon: User, title: 'Photo Verification', sub: 'Selfie matched with profile', status: 'PASSED', offset: '' },
  { Icon: ShieldCheck, title: 'AI Moderation', sub: 'Harmful messages blocked 24/7', status: 'ACTIVE', offset: 'sm:ml-10' },
  { Icon: ShieldAlert, title: 'Report & Block', sub: 'Reviewed by our team in minutes', status: 'ON', offset: 'sm:ml-4' },
]

const points = [
  'Mandatory photo & video verification for every profile',
  'AI that detects scams, fake accounts and offensive content',
  'One-tap report, block and unmatch — fully anonymous',
  'Share your date plans with trusted friends in-app',
]

export default function Safety() {
  return (
    <section id="safety" className="py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative flex flex-col justify-center gap-4 overflow-hidden rounded-[36px] bg-gradient-to-br from-brand to-[#5c0a13] p-6 sm:min-h-[480px] sm:p-12">
          <div className="absolute -right-36 -bottom-36 size-[380px] rounded-full border-[60px] border-white/5" />
          {cards.map(({ Icon, title, sub, status, offset }) => (
            <div
              key={title}
              className={`relative flex items-center gap-3.5 rounded-[18px] border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-md ${offset}`}
            >
              <span className="grid size-[42px] shrink-0 place-items-center rounded-xl bg-white text-brand">
                <Icon className="w-5" />
              </span>
              <div className="min-w-0">
                <b className="block text-[15px]">{title}</b>
                <small className="text-[13px] opacity-80">{sub}</small>
              </div>
              <span className="ml-auto rounded-full bg-green-500 px-2.5 py-1 text-[11px] font-bold">{status}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <span className="text-[13px] font-extrabold tracking-[2px] text-brand uppercase">Safety first</span>
          <h2 className="mt-3 mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
            Your safety isn't a feature. It's the <span className="accent">foundation.</span>
          </h2>
          <p className="text-[17px] text-muted">
            We built Red so you can focus on the connection, not on wondering whether it's real. Our safety team and AI
            moderation work around the clock to keep the community respectful.
          </p>
          <ul className="my-8 grid gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3.5 font-medium">
                <span className="mt-px grid size-[26px] shrink-0 place-items-center rounded-full bg-brand-soft text-[13px] font-extrabold text-brand">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#faq"
            className="inline-flex rounded-full border-2 border-ink px-6 py-3 font-bold transition hover:bg-ink hover:text-white"
          >
            Learn about our safety tools →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
