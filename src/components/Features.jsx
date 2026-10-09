import Reveal from './Reveal'
import { SectionHead } from './Ui'
import { Bell, Chat, Lock, Search, ShieldCheck, Video } from './Icons'

const features = [
  { Icon: Search, title: 'Smart Discovery', text: 'Filter by age, distance, interests and intentions to see people who truly match you.' },
  { Icon: Chat, title: 'Real-time Messaging', text: 'Instant chat with read receipts, voice notes, GIFs and photo sharing — all end-to-end encrypted.' },
  { Icon: Video, title: 'Video Dates', text: 'Get a feel for your match before meeting in person with secure, in-app video calls.' },
  { Icon: Bell, title: 'Smart Notifications', text: 'Never miss a match or message, with quiet hours so Red respects your time.' },
  { Icon: Lock, title: 'Privacy Controls', text: 'Incognito mode, hide distance, control who sees you — your profile, your rules.' },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Features"
          title={<>Everything you need to find your <span className="accent">person</span></>}
          text="Thoughtfully designed tools that put genuine connection, safety and you first."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="flex flex-col items-start gap-7 rounded-[22px] bg-night p-8 text-white sm:col-span-2 sm:flex-row sm:items-center">
            <div className="grid size-[76px] shrink-0 place-items-center rounded-[22px] bg-brand">
              <ShieldCheck className="w-9" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold">Verified, real profiles only</h3>
              <p className="text-[#c7bcbe]">
                Every member passes photo and video verification, so the person you're chatting with is exactly who
                they say they are. Look for the blue tick.
              </p>
            </div>
          </Reveal>

          {features.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-[22px] border border-line bg-cream p-8 transition duration-300 hover:-translate-y-1.5 hover:bg-brand hover:text-white hover:shadow-brand">
              <div className="mb-5 grid size-[52px] place-items-center rounded-[14px] bg-brand-soft text-brand transition group-hover:bg-white">
                <Icon className="w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-[15px] text-muted transition group-hover:text-white/85">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
