import Reveal from './Reveal'
import { SectionHead, Stars, img } from './Ui'

const stories = [
  {
    quote: "I was so tired of fake profiles on other apps. On Red, every match felt genuine. Met my fiancé here eight months ago!",
    name: 'Ayesha K.',
    meta: 'Lahore · Engaged 💍',
    photo: '1438761681033-6461ffad8d80',
  },
  {
    quote: 'Red made dating feel safe and exciting again. The verification gave me peace of mind from the very first chat.',
    name: 'Sara M.',
    meta: 'Dubai · Together 1 year',
    photo: '1494790108377-be9c29b29330',
    featured: true,
  },
  {
    quote: 'The matching is honestly scary good. We both love climbing and old films — Red figured that out before we did.',
    name: 'Omar R.',
    meta: 'London · Dating 6 months',
    photo: '1507003211169-0a1dd7228f2d',
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Love stories"
          title={<>Real people. Real <span className="accent">connections.</span></>}
          text="Thousands of couples met on Red. Here are a few of their stories."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 100}
              className={`flex flex-col rounded-[22px] p-8 ${s.featured ? 'bg-brand text-white' : 'border border-line bg-white'}`}
            >
              <Stars className="mb-4" color={s.featured ? 'text-white' : undefined} />
              <blockquote
                className={`flex-1 ${
                  s.featured ? 'font-serif text-[21px] leading-snug italic' : 'text-[16.5px] text-ink-2'
                }`}
              >
                "{s.quote}"
              </blockquote>
              <div className={`mt-6 flex items-center gap-3 border-t pt-5 ${s.featured ? 'border-white/25' : 'border-line'}`}>
                <img src={img(s.photo)} alt="" className="size-[46px] rounded-full bg-brand-soft object-cover" />
                <div>
                  <b className="block text-[15px]">{s.name}</b>
                  <small className={s.featured ? 'text-white/80' : 'text-muted'}>{s.meta}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
