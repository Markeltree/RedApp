import Reveal from './Reveal'
import { StoreButtons } from './Ui'

export default function Cta() {
  return (
    <section id="download" className="pt-20 md:pt-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[30px] bg-brand px-6 py-16 text-center text-white sm:px-10 md:rounded-[40px] lg:py-24">
          <div className="pointer-events-none absolute -top-52 -right-32 size-[500px] rounded-full border-2 border-white/15" />
          <div className="pointer-events-none absolute -top-24 -right-5 size-[300px] rounded-full border-2 border-white/15" />
          <div className="pointer-events-none absolute -bottom-56 -left-32 size-[460px] rounded-full border-2 border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">
              Your next great story starts with a swipe.
            </h2>
            <p className="mx-auto mb-9 max-w-[480px] text-lg opacity-90">
              Join over 2 million people finding meaningful connections on Red. Download free today.
            </p>
            <StoreButtons light className="justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
