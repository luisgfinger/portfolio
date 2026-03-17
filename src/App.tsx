import { About } from './components/layout/About'
import { Hero } from './components/layout/Hero'
import { Navbar } from './components/layout/NavBar'
import { Projects } from './components/layout/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
    </>
  )
}

export default App