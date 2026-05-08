import { Marquee } from "./ui/marquee";
import { FaReact, FaPython, FaWindows, FaApple, FaJava, FaNetworkWired, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

export default function Stack() {
  return (
    <Marquee direction="horizontal" className="opacity-70 flex items-center justify-center w-20 h-20 bg-zinc-900 backdrop-blur-x1 border rounded border-lime-400 text-lime-400 hover:text-lime-400 hover:border-lime-400/30 hover:shadow-[0_0_25px_rgba(163,230,53,0.12)] transition-all duration-300">
      <FaReact className="text-5xl" />
      <FaPython className="text-5xl" />
      <FaWindows className="text-5xl" />
      <FaApple className="text-5xl" />
      <FaJava className="text-5xl" />
      <FaNetworkWired className="text-5xl" />
      <FaHtml5 className="text-5xl" />
      <FaCss3 className="text-5xl" />
      <SiGodotengine className="text-5xl" />
      
      
    </Marquee>
  );
}