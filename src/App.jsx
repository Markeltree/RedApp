import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Screens from './components/Screens'
import Features from './components/Features'
import Safety from './components/Safety'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Screens />
        <Features />
        <Safety />
        {/* <Pricing /> */}
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
