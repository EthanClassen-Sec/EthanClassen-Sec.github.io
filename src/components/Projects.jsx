import { CyberpunkCard } from "@/components/ui/cyberpunk-card";

export default function Projects() {
  return (
    <section className="py-32 px-6 lg:px-20 bg-black text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-lime-400 uppercase tracking-[0.3em]">
            Featured Work
          </p>

          <h2 className="text-5xl lg:text-7xl font-black mt-4">
            PROJECTS
          </h2>

          

        </div>

        {/* Featured Cards */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-10
            place-items-center
          "
        >

          {/* Card 1 */}
          <CyberpunkCard
            theme="custom"
            customColors={{
              primary: "#09090b",
              secondary: "#84cc16",
              accent: "#a3e635",
            }}
            borderStyle="solid"
            lightTrail={true}
            rounded="md"
            glow={true}
            glowIntensity={2}
            className="
              w-full
              max-w-sm
              hover:-translate-y-3
              transition-all
              duration-500
            "
          >

            <div className="p-6">

              <p className="text-lime-400 uppercase text-sm tracking-widest">
                PYTHON
              </p>

              <h3 className="text-2xl font-black text-white mt-4">
                Vulnerability Scanner
              </h3>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Automated vulnerability scanner with
                reporting and real-time analysis.
              </p>

              

            </div>

          </CyberpunkCard>

          {/* Card 2 */}
          <CyberpunkCard
            theme="custom"
            customColors={{
              primary: "#09090b",
              secondary: "#84cc16",
              accent: "#a3e635",
            }}
            borderStyle="solid"
            lightTrail={true}
            rounded="md"
            glow={true}
            glowIntensity={3}
            className="
              w-full
              max-w-sm
              lg:-translate-y-10
              lg:hover:-translate-y-14
              md:hover:-translate-y-4
              transition-all
              duration-500
            "
          >

            <div className="p-6">

              <p className="text-lime-400 uppercase text-sm tracking-widest">
                ACTIVE DIRECTORY
              </p>

              <h3 className="text-2xl font-black text-white mt-4">
                Enterprise Lab
              </h3>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Simulated enterprise environment with
                attack and defense scenarios.
              </p>

              

            </div>

          </CyberpunkCard>

          {/* Card 3 */}
          <CyberpunkCard
            theme="custom"
            customColors={{
              primary: "#09090b",
              secondary: "#84cc16",
              accent: "#a3e635",
            }}
            borderStyle="solid"
            lightTrail={true}
            rounded="md"
            glow={true}
            glowIntensity={2}
            className="
              w-full
              max-w-sm
              hover:-translate-y-3
              transition-all
              duration-500
            "
          >

            <div className="p-6">

              <p className="text-lime-400 uppercase text-sm tracking-widest">
                NETWORKING
              </p>

              <h3 className="text-2xl font-black text-white mt-4">
                Packet Analyzer
              </h3>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Real-time packet inspection and
                traffic monitoring dashboard.
              </p>

              

            </div>

          </CyberpunkCard>

        </div>

        {/* Other Projects */}
        <div className="mt-32 max-w-5xl mx-auto">

          <div className="mb-12">

            <p className="text-lime-400 uppercase tracking-[0.3em]">
              Other Work
            </p>

            <h2 className="text-4xl font-black mt-4">
              MORE PROJECTS
            </h2>

          </div>

          <div className="space-y-8">

            <div
              className="
                border-b
                border-lime-400/10
                pb-6
                flex
                justify-between
                items-center
                hover:bg-lime-400/5
                hover:text-lime-300
              "
            >

              <div>

                <h3 className="text-xl font-semibold">
                  Portfolio Website
                </h3>

                <p className="text-zinc-400 mt-1">
                  React + Tailwind + Framer Motion
                </p>

              </div>

              <span className="text-lime-400 text-sm">
                2026
              </span>

            </div>

            <div
              className="
                border-b
                border-lime-400/10
                pb-6
                flex
                justify-between
                items-center
                hover:bg-lime-400/5
                hover:text-lime-300
              "
            >

              <div>

                <h3 className="text-xl font-semibold">
                  Linux Automation Scripts
                </h3>

                <p className="text-zinc-400 mt-1">
                  Bash scripting utilities
                </p>

              </div>

              <span className="text-lime-400 text-sm">
                2026
              </span>

            </div>

            <div
              className="
                border-b
                border-lime-400/10
                pb-6
                flex
                justify-between
                items-center
                hover:bg-lime-400/5
                hover:text-lime-300
              "
            >

              <div>

                <h3 className="text-xl font-semibold">
                  Home Lab Environment
                </h3>

                <p className="text-zinc-400 mt-1">
                  Self-hosted cybersecurity lab
                </p>

              </div>

              <span className="text-lime-400 text-sm">
                2026
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}