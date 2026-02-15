import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Domains from './components/Domains'
import About from './components/About'
import Testimonials from './components/Testimonials'
import TeamMembers from './components/TeamMembers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Domains />
        <About />
        <Testimonials />
        {/* <TeamMembers /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App

