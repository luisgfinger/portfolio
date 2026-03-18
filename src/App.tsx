import { About } from './components/layout/About'
import { Contact } from './components/layout/Contact'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/layout/Hero'
import { Navbar } from './components/layout/NavBar'
import { Projects } from './components/layout/Projects'
import { Skills } from './components/layout/Skills'
import { useTheme } from './hooks/useTheme'

function App() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <>
    <div className="pt-20 md:pt-0">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode}/>
      <About />
      <Projects darkMode={darkMode}/> 
      <Skills/> 
      <Contact darkMode={darkMode}/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App