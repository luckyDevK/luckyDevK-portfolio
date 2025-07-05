import { Code } from "lucide-react";

export default function LuckyDevLogo() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative">
        <div className="w-9 aspect-square  bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg shadow-lg shadow-blue-500/50 animate-pulse flex items-center justify-center">
          <Code className="text-white w-5  drop-shadow-[0_0_6px_#3b82f6]" />
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          Lucky<span className="text-blue-400">Dev</span>
        </h1>
      </div>
    </div>
  );
}
