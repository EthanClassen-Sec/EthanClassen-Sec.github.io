import Stack from './components/Stack';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Certs from './components/Certs';
import About from './components/About';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stack />
      <Certs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App