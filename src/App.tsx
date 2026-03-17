import { About } from './components/layout/About'
import { Contact } from './components/layout/Contact'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/layout/Hero'
import { Navbar } from './components/layout/NavBar'
import { Projects } from './components/layout/Projects'
import { Skills } from './components/layout/Skills'

function App() {
  return (
    <>
    <div className="pt-20 md:pt-0">
      <Navbar />
      <Hero />
      <About />
      <Projects/> 
      <Skills/> 
      <Contact/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App