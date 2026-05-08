import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingText from "./HeroAssets/FloatingText";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Mouse Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(
              900px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(163, 230, 53, 0.18),
              transparent 55%
            )
          `,
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-20">

        {/* Mobile Nav */}
        <div className="flex justify-between items-center py-6 lg:hidden">
          <h1 className="text-lime-400 font-bold tracking-widest">
            ETHAN
          </h1>

          <button className="text-lime-400">
            MENU
          </button>
        </div>

        {/* HERO */}
        <div className="relative min-h-screen flex items-center">

          <FloatingText />

          {/* MOBILE LAYOUT */}
          <div className="relative w-full lg:hidden">

            {/* Image */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src="/Ethan.png"
              className="
                absolute
                right-[-100px]
                bottom-[-60px]
                w-[420px]
                opacity-60
                z-10
                object-contain
              "
            />

            {/* Gradient Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black
                via-black/80
                to-transparent
                z-20
              "
            />

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                relative
                z-30
                max-w-xs
                pt-32
              "
            >

              <p className="text-lime-400 font-semibold uppercase">
                I BUILD. I SECURE. I SOLVE.
              </p>

              <h1 className="text-5xl font-black mt-4 leading-none">
                CYBER
                <br />
                SECURITY
              </h1>

              <p className="mt-6 text-zinc-300 leading-relaxed">
                IT Support Specialist and aspiring
                cybersecurity professional building
                secure and scalable solutions.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8
                  px-6
                  py-3
                  bg-lime-400
                  text-black
                  font-semibold
                  rounded-lg
                "
              >
                VIEW MY WORK
              </motion.button>

            </motion.div>

          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex w-full items-center justify-between">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-30 max-w-md"
            >

              <p className="text-lime-400 font-semibold uppercase">
                I BUILD. I SECURE. I SOLVE.
              </p>

              <h1 className="text-7xl font-black mt-6 leading-none">
                CYBER
                <br />
                SECURITY
              </h1>

              <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
                I'm an IT Support Specialist and aspiring
                cybersecurity professional who builds secure,
                efficient and scalable solutions.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8
                  px-6
                  py-3
                  bg-lime-400
                  text-black
                  font-semibold
                  rounded-lg
                "
              >
                VIEW MY WORK
              </motion.button>

            </motion.div>

            {/* IMAGE */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/Ethan.png"
              className="
                relative
                z-20
                w-[700px]
                object-contain
              "
            />

            {/* RIGHT */}
            <div className="relative z-30">

              <h3 className="text-lime-400 uppercase mb-4">
                Expertise In
              </h3>

              <ul className="space-y-2 text-zinc-300">
                <li>Windows</li>
                <li>Networking</li>
                <li>IT Support</li>
                <li>Linux</li>
                <li>Command Line</li>
                <li>Python</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}