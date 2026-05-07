import FloatingText from "./HeroAssets/FloatingText"
import Services from "./HeroAssets/Services"
import { motion } from "framer-motion"

export default function Hero() {
    return (
      <section className="relative min-h-screen overflow-hidden bg-black">

        <div className="relative z-10 px-6 lg:px-20 py-10">
          <div className="flex justify-between items-center lg:hidden mb-10"> 
            <h1 className="text-lime-400 font-bold">ETHAN</h1>
            <button className="text-lime-400">MENU</button>
          </div>

          <div className="relative flex flex-col lg:min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <motion.div intial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative z-30 max-w-md mt-10 lg:mt-40">
                <p classname="text-lime-400 font-semibold uppercase">
                  I BUILD. I SECURE. I SOLVE.
                </p>
                <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
                  I'm an IT Support Specialist and aspiring
                  cybersecurity professional who builds secure,
                  efficient and scalable solutions. 
                </p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg">View Projects</motion.button>
              </motion.div>
              <motion.img intial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} src="/Ethan.png" className="relative z-20 w-[300px] md:w-[450px] lg:w-[700px] object-contain mt-10"/>

            </div>
          </div> 

        </div>     
      </section> 
    );
}