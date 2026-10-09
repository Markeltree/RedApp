import Reveal from './Reveal'
import { SectionHead } from './Ui'
import { Chat, HeartLine, User } from './Icons'

const steps = [
  {
    Icon: User,
    title: 'Create your profile',
    text: "Sign up in under two minutes with your phone, Google or Apple. Add photos, prompts and what you're looking for.",
  },
  {
    Icon: HeartLine,
    title: 'Discover & match',
    text: 'Our smart algorithm shows you people who fit your interests, values and location. Like someone? Swipe right.',
  },
  {
    Icon: Chat,
    title: 'Chat & meet up',
    text: "When it's mutual, start chatting in real time with voice notes, photos and video calls — then plan your date.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="How it works"
          title={<>From hello to <span className="accent">first date</span> in three steps</>}
          text="We kept it simple so you can spend less time swiping and more time actually connecting."
        />
        <div className="mx-auto grid max-w-lg gap-6 md:max-w-none md:grid-cols-3">
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full rounded-[22px] border border-line bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-brand md:p-10">
              <span className="absolute top-6 right-7 text-[54px] leading-none font-extrabold text-brand-soft">0{i + 1}</span>
              <div className="mb-6 grid size-[58px] place-items-center rounded-2xl bg-brand text-white transition group-hover:-rotate-6">
                <Icon className="w-6.5" />
              </div>
              <h3 className="mb-2.5 text-[22px] font-bold">{title}</h3>
              <p className="text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
