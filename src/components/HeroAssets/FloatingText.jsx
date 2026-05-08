import { motion } from "framer-motion";

export default function FloatingText() {
  return (
    <motion.h1
      animate={{
        y: [0, -10, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-24
        left-1/2
        -translate-x-1/2
        z-10
        select-none
        pointer-events-none

        text-[4rem]
        md:text-[7rem]
        lg:text-[10rem]

        tracking-[0.4em]
        lg:tracking-[1rem]

        font-black
        text-lime-400/90

        drop-shadow-[0_0_25px_rgba(163,230,53,0.35)]
      "
    >
      ETHAN
    </motion.h1>
  );
}