import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section
      className="
        relative
        py-32
        px-6
        lg:px-20
        bg-black
        text-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p
            className="
              text-lime-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
            "
          >
            About Me
          </p>

          <h2
            className="
              text-4xl
              lg:text-6xl
              font-black
              leading-tight
            "
          >
            Building secure systems
            and solving technical
            problems.
          </h2>

          <p
            className="
              mt-8
              text-zinc-400
              leading-relaxed
              max-w-xl
            "
          >
            My name is Ethan, and I’m currently studying
Information Technology with a growing passion
for cybersecurity, networking and modern
technology. I enjoy learning through building,
solving technical problems and continuously
improving my skills.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div className="px-4 py-2 border border-lime-400/20 rounded-full text-sm">
              IT SUPPORT
            </div>

            <div className="px-4 py-2 border border-lime-400/20 rounded-full text-sm">
              NETWORKING
            </div>

            <div className="px-4 py-2 border border-lime-400/20 rounded-full text-sm">
              CYBERSECURITY
            </div>

          </div>

          {/* Button */}
          <motion.a
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(163,230,53,0.2)",
            }}
            href="/about"
            className="
              inline-flex
              mt-10

              px-6
              py-3

              border
              border-lime-400/30

              rounded-lg

              hover:border-lime-400
              hover:text-lime-400

              transition-all
            "
          >
            READ MORE
          </motion.a>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative

            h-[400px]

            border
            border-lime-400/10

            rounded-3xl

            bg-zinc-900/40
            backdrop-blur-xl

            overflow-hidden
          "
        >

          {/* Ambient Glow */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-lime-400/10
              to-transparent
            "
          />

          {/* Optional Content */}
          <div className="relative z-10 p-10">

            <p className="text-zinc-500 uppercase text-sm tracking-[0.2em]">
              CURRENTLY LEARNING
            </p>

            <div className="mt-8 space-y-4">

              <div className="text-2xl font-bold">
                Linux
              </div>

              <div className="text-2xl font-bold">
                Networking
              </div>

              <div className="text-2xl font-bold">
                Cybersecurity
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}