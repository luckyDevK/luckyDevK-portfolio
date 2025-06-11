export default function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-overlay blur-2xl opacity-60 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-overlay blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-overlay blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>
  );
}
