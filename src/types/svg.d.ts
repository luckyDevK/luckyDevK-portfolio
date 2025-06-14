// svg.d.ts
declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // fallback for importing as URL if needed
  export default src;
}
