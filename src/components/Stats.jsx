import { useEffect, useState } from 'react'
import { useInView } from './Reveal'

const stats = [
  { value: 2, suffix: 'M+', label: 'Downloads' },
  { value: 350, suffix: 'K', label: 'Matches every week' },
  { value: 100, suffix: '%', label: 'Verified profiles' },
  { value: 40, suffix: '+', label: 'Cities worldwide' },
]

function Counter({ value, suffix, start }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <>
      {n}
      <em className="text-brand not-italic">{suffix}</em>
    </>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)
  return (
    <div ref={ref} className="bg-night py-14 text-white">
      <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <b className="block text-4xl font-extrabold tracking-tight sm:text-5xl">
              <Counter {...s} start={inView} />
            </b>
            <span className="text-[15px] text-[#b9aeb0]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
