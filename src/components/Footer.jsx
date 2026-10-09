import { Logo } from './Ui'
import { Facebook, Instagram, LinkedIn, XLogo } from './Icons'

const columns = [
  {
    title: 'Product',
    links: [['Features', '#features'], ['Safety', '#safety'], ['Download', '#download']],
  },
  {
    title: 'Company',
    links: [['About us', '#'], ['Careers', '#'], ['Press', '#'], ['Blog', '#']],
  },
  {
    title: 'Support',
    links: [['Help Center', '#faq'], ['Safety Tips', '#safety'], ['Contact', '#'], ['Community Guidelines', '#']],
  },
]

const socials = [
  ['Facebook', Facebook, 'https://www.facebook.com/markeltree'],
  ['X', XLogo, 'https://x.com/markeltree'],
  ['LinkedIn', LinkedIn, 'https://www.linkedin.com/company/markeltree/posts/'],
  ['Instagram', Instagram, 'https://www.instagram.com/markeltree'],
]

export default function Footer() {
  return (
    <footer className="mt-20 bg-night pt-20 pb-8 text-[#c7bcbe] md:mt-28">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo light className="mb-5" />
            <p className="max-w-[300px]">
              The dating app for people who want something real. Verified profiles, meaningful matches.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(([label, Icon, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl bg-white/5 text-white transition hover:bg-brand"
                >
                  <Icon className="w-[18px]" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[15px] font-bold text-white">{col.title}</h4>
              <ul className="grid gap-3 text-[15px]">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition hover:text-brand">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-sm">
          <span>© {new Date().getFullYear()} Red by WORTH. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
