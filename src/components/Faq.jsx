import { useState } from 'react'
import Reveal from './Reveal'
import { SectionHead } from './Ui'

const faqs = [
  {
    q: 'Is Red really free to use?',
    a: 'Yes. Creating a profile, matching and messaging are completely free. Red Plus and Red Premium are optional upgrades that unlock extra features like unlimited likes and seeing who liked you.',
  },
  {
    q: 'How does profile verification work?',
    a: "During sign-up you take a short selfie video. Our system compares it with your profile photos to confirm it's really you. Verified members get a blue tick on their profile.",
  },
  {
    q: 'Can I hide my profile from certain people?',
    a: "Absolutely. You can hide your distance, pause your profile anytime, or use Incognito mode (Premium) so only people you've liked can see you.",
  },
  {
    q: 'What happens when I report someone?',
    a: 'Reports are anonymous. The person is immediately blocked from contacting you, and our moderation team reviews the report — usually within minutes — and takes action if needed.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: "Yes, you can cancel anytime from your App Store or Google Play settings. You'll keep your premium features until the end of the billing period.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHead eyebrow="FAQ" title={<>Questions? We've got <span className="accent">answers.</span></>} />
        <Reveal className="mx-auto max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left text-lg font-bold sm:text-[19px]"
                >
                  {f.q}
                  <span
                    className={`grid size-[34px] shrink-0 place-items-center rounded-full text-xl transition duration-300 ${
                      isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-soft text-brand'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden text-muted">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
