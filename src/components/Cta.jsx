import Reveal from './Reveal'
import { StoreButtons } from './Ui'

// Decorative QR-style pattern — swap for a real QR image of your store link
function QrPattern() {
  const finder = (x, y) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill="#14080a" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#a41624" />
    </g>
  )
  const cells = []
  for (let y = 0; y < 21; y++) {
    for (let x = 0; x < 21; x++) {
      const inFinder = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)
      if (!inFinder && (x * 7 + y * 13 + x * y) % 5 < 2) {
        cells.push(<rect key={`${x}.${y}`} x={x} y={y} width="1" height="1" fill="#14080a" />)
      }
    }
  }
  return (
    <svg viewBox="0 0 21 21" shapeRendering="crispEdges" className="size-[150px]">
      {cells}
      {finder(0, 0)}
      {finder(14, 0)}
      {finder(0, 14)}
    </svg>
  )
}

export default function Cta() {
  return (
    <section id="download" className="pt-20 md:pt-28">
      <div className="container-x">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[30px] bg-brand px-6 py-14 text-center text-white sm:px-10 md:rounded-[40px] lg:grid-cols-[1.3fr_1fr] lg:px-[70px] lg:py-20 lg:text-left">
          <div className="pointer-events-none absolute -top-52 -right-32 size-[500px] rounded-full border-2 border-white/15" />
          <div className="pointer-events-none absolute -top-24 -right-5 size-[300px] rounded-full border-2 border-white/15" />

          <div className="relative">
            <h2 className="mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">
              Your next great story starts with a swipe.
            </h2>
            <p className="mx-auto mb-8 max-w-[480px] text-lg opacity-90 lg:mx-0">
              Join over 2 million people finding meaningful connections on Red. Download free today.
            </p>
            <StoreButtons light className="justify-center lg:justify-start" />
          </div>

          <div className="relative mx-auto rotate-4 rounded-[26px] bg-white p-5 text-center text-ink shadow-2xl lg:mr-0 lg:ml-auto">
            <QrPattern />
            <small className="mt-2.5 block text-[13px] font-bold">Scan to download</small>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
