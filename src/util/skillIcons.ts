import {
  JsIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  ExpressJsIcon,
  GitIcon,
  JestIcon,
  NodeJsIcon,
  ReactIcon,
  ReactQueryIcon,
  ReactRouterIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  GithubIcon,
  NextJsIcon,
} from "../assets/icons";

type TIcons = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  hoverClass: string;
  tooltipBg: string;
}[];

export const icons: TIcons = [
  {
    Icon: HtmlIcon,
    name: "HTML",
    hoverClass: "hover:shadow-orange-600",
    tooltipBg: "bg-orange-600",
  },
  {
    Icon: CssIcon,
    name: "CSS",
    hoverClass: "hover:shadow-blue-600",
    tooltipBg: "bg-blue-600",
  },
  {
    Icon: JsIcon,
    name: "JavaScript",
    hoverClass: "hover:shadow-yellow-400",
    tooltipBg: "bg-yellow-400",
  },
  {
    Icon: ReactIcon,
    name: "React",
    hoverClass: "hover:shadow-cyan-400",
    tooltipBg: "bg-cyan-400",
  },
  {
    Icon: NodeJsIcon,
    name: "Node.js",
    hoverClass: "hover:shadow-green-600",
    tooltipBg: "bg-green-600",
  },
  {
    Icon: ExpressJsIcon,
    name: "Express.js",
    hoverClass: "hover:shadow-neutral-100",
    tooltipBg: "bg-neutral-100",
  },
  {
    Icon: TailwindCssIcon,
    name: "Tailwind CSS",
    hoverClass: "hover:shadow-sky-400",
    tooltipBg: "bg-sky-400",
  },
  {
    Icon: GitIcon,
    name: "Git",
    hoverClass: "hover:shadow-orange-500",
    tooltipBg: "bg-orange-500",
  },
  {
    Icon: JestIcon,
    name: "Jest",
    hoverClass: "hover:shadow-rose-500",
    tooltipBg: "bg-rose-500",
  },
  {
    Icon: BootstrapIcon,
    name: "Bootstrap",
    hoverClass: "hover:shadow-purple-500",
    tooltipBg: "bg-purple-500",
  },
  {
    Icon: ReactQueryIcon,
    name: "React Query",
    hoverClass: "hover:shadow-rose-400",
    tooltipBg: "bg-rose-400",
  },
  {
    Icon: ReactRouterIcon,
    name: "React Router",
    hoverClass: "hover:shadow-red-500",
    tooltipBg: "bg-red-500",
  },
  {
    Icon: TypeScriptIcon,
    name: "TypeScript",
    hoverClass: "hover:shadow-blue-500",
    tooltipBg: "bg-blue-500",
  },
  {
    Icon: GithubIcon,
    name: "Github",
    hoverClass: "hover:shadow-white",
    tooltipBg: "bg-white",
  },
  {
    Icon: NextJsIcon,
    name: "NextJs",
    hoverClass: "hover:shadow-black",
    tooltipBg: "bg-slate-800",
  },
];

export function tailwindColorFromClass(bgClass: string): string {
  const colorMap: Record<string, string> = {
    "bg-orange-600": "#ea580c",
    "bg-blue-600": "#2563eb",
    "bg-yellow-400": "#facc15",
    "bg-cyan-400": "#22d3ee",
    "bg-green-600": "#16a34a",
    "bg-neutral-100": "#f5f5f5",
    "bg-sky-400": "#38bdf8",
    "bg-orange-500": "#f97316",
    "bg-rose-500": "#f43f5e",
    "bg-purple-500": "#a855f7",
    "bg-rose-400": "#fb7185",
    "bg-red-500": "#ef4444",
    "bg-blue-500": "#3b82f6",
    "bg-white": "#ffffff",
    "bg-slate-800": "#0f172b",
  };

  return colorMap[bgClass] || "#000000";
}
