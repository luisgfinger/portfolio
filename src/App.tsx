import { About } from './components/layout/About'
import { Contact } from './components/layout/Contact'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/layout/Hero'
import { Navbar } from './components/layout/NavBar'
import { Projects } from './components/layout/Projects'
import { Skills } from './components/layout/Skills'
import { useTheme } from './hooks/useTheme'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main id="main-content" className="pt-20 md:pt-0">
        <Hero darkMode={darkMode} />
        <About />
        <Projects darkMode={darkMode} />
        <Skills />
        <Contact darkMode={darkMode} />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default App
