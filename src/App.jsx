
import AboutPreview from './components/Aboutprev';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Certs from './components/Certs';

import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <AboutPreview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <Projects />
      </motion.div>

    </div>
  )
}

export default App