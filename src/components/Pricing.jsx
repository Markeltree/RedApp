import { useState } from 'react'
import Reveal from './Reveal'
import { SectionHead } from './Ui'

const plans = [
  {
    name: 'Basic',
    desc: 'Everything to get started',
    price: { month: 0, year: 0 },
    cta: 'Get Started',
    features: [
      ['Create a verified profile', true],
      ['25 likes per day', true],
      ['Unlimited messaging with matches', true],
      ['Safety & privacy tools', true],
      ['See who liked you', false],
      ['Profile boosts', false],
    ],
  },
  {
    name: 'Red Plus',
    desc: 'For serious daters',
    price: { month: 9.99, year: 5.99 },
    cta: 'Try Plus Free for 7 Days',
    popular: true,
    features: [
      ['Unlimited likes', true],
      ['See who liked you', true],
      ['5 Super Likes per week', true],
      ['Advanced filters', true],
      ['Rewind your last swipe', true],
      ['1 free Boost per month', true],
    ],
  },
  {
    name: 'Red Premium',
    desc: 'The complete experience',
    price: { month: 19.99, year: 11.99 },
    cta: 'Go Premium',
    features: [
      ['Everything in Plus', true],
      ['Priority likes — get seen first', true],
      ['Message before matching', true],
      ['Incognito mode', true],
      ['Weekly Boosts', true],
      ['Read receipts', true],
    ],
  },
]

export default function Pricing() {
  const [period, setPeriod] = useState('month')

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Pricing"
          title={<>Free to join. <span className="accent">Upgrade</span> when you're ready.</>}
          text="Start connecting for free, or unlock premium features to boost your chances."
        />

        <Reveal className="mb-14 flex justify-center">
          <div className="flex rounded-full border border-line bg-cream p-1.5">
            {[
              ['month', 'Monthly'],
              ['year', 'Yearly'],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`cursor-pointer rounded-full px-6 py-2.5 font-bold transition ${
                  period === key ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                {key === 'year' && <em className={`ml-1 text-xs not-italic ${period === key ? 'text-[#f3a5ad]' : 'text-brand'}`}>-40%</em>}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-md items-stretch gap-6 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = plan.price[period]
            const pop = plan.popular
            return (
              <Reveal key={plan.name} delay={i * 100} className={pop ? 'lg:scale-[1.04]' : ''}>
                <div
                  className={`relative flex h-full flex-col rounded-[28px] p-8 transition duration-300 hover:-translate-y-1.5 md:p-10 ${
                    pop ? 'bg-night text-white shadow-[0_40px_80px_-30px_rgba(18,6,9,.6)]' : 'border border-line bg-cream'
                  }`}
                >
                  {pop && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-xs font-extrabold tracking-wider whitespace-nowrap">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className={`mt-1 mb-6 text-sm ${pop ? 'text-[#b9aeb0]' : 'text-muted'}`}>{plan.desc}</p>
                  <div className="text-5xl leading-none font-extrabold tracking-tighter">
                    ${price}
                    <small className="text-[15px] font-medium tracking-normal text-muted">
                      {price === 0 ? ' /forever' : period === 'year' ? ' /mo, billed yearly' : ' /month'}
                    </small>
                  </div>
                  <ul className="my-8 grid flex-1 content-start gap-3">
                    {plan.features.map(([f, on]) => (
                      <li key={f} className={`flex gap-2.5 text-[15px] ${on ? '' : 'opacity-40'}`}>
                        <span className={`font-extrabold ${on ? 'text-brand' : ''}`}>{on ? '✓' : '–'}</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#download"
                    className={`rounded-full py-3.5 text-center font-bold text-white transition ${
                      pop ? 'bg-brand shadow-brand hover:bg-brand-dark' : 'bg-ink hover:bg-brand'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
