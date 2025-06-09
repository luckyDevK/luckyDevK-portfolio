// import { useState, useEffect } from "react";
// import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

// export const Hero = () => {
//   const [text, setText] = useState("");
//   const fullText = "Full Stack Developer";
//   const { theme } = useTheme();

//   window.matchMedia()
//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < fullText.length) {
//         setText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   const getThemeGradient = () => {
//     switch (theme) {
//       case "dark":
//         return "bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent";
//       case "dark-blue":
//         return "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent";
//       case "dark-purple":
//         return "bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent";
//       case "cyberpunk":
//         return "bg-gradient-to-r from-pink-400 via-green-400 to-pink-400 bg-clip-text text-transparent";
//       case "ocean":
//         return "bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 bg-clip-text text-transparent";
//       case "sunset":
//         return "bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent";
//       case "forest":
//         return "bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent";
//       default:
//         return "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent";
//     }
//   };

//   const getButtonGradient = () => {
//     switch (theme) {
//       case "dark":
//         return "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800";
//       case "dark-blue":
//         return "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700";
//       case "dark-purple":
//         return "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700";
//       case "cyberpunk":
//         return "bg-gradient-to-r from-pink-600 to-green-600 hover:from-pink-700 hover:to-green-700";
//       case "ocean":
//         return "bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700";
//       case "sunset":
//         return "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700";
//       case "forest":
//         return "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700";
//       default:
//         return "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700";
//     }
//   };

//   const getBorderColor = () => {
//     switch (theme) {
//       case "dark":
//         return "border-gray-400/50 shadow-[0_0_50px_rgba(156,163,175,0.3)] hover:shadow-[0_0_80px_rgba(156,163,175,0.5)]";
//       case "dark-blue":
//         return "border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)]";
//       case "dark-purple":
//         return "border-purple-400/50 shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_80px_rgba(139,92,246,0.5)]";
//       case "cyberpunk":
//         return "border-pink-400/50 shadow-[0_0_50px_rgba(244,114,182,0.3)] hover:shadow-[0_0_80px_rgba(244,114,182,0.5)]";
//       case "ocean":
//         return "border-teal-400/50 shadow-[0_0_50px_rgba(45,212,191,0.3)] hover:shadow-[0_0_80px_rgba(45,212,191,0.5)]";
//       case "sunset":
//         return "border-orange-400/50 shadow-[0_0_50px_rgba(251,146,60,0.3)] hover:shadow-[0_0_80px_rgba(251,146,60,0.5)]";
//       case "forest":
//         return "border-green-400/50 shadow-[0_0_50px_rgba(74,222,128,0.3)] hover:shadow-[0_0_80px_rgba(74,222,128,0.5)]";
//       default:
//         return "border-purple-400/50 shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_80px_rgba(139,92,246,0.5)]";
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 text-center px-4">
//         <div className="animate-fade-in flex flex-col items-center">
//           {/* Profile Photo */}
//           <div className="mb-8 relative">
//             <div
//               className={`w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${getBorderColor()} transition-all duration-300`}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//                 alt="Sagar Shah Profile"
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <div
//               className={`absolute -inset-2 ${getThemeGradient().replace(
//                 "bg-clip-text text-transparent",
//                 "bg-gradient-to-r"
//               )} rounded-full blur opacity-30 animate-pulse`}
//             ></div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Hi, I'm <span className={getThemeGradient()}>Sagar Shah</span>
//           </h1>

//           <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
//             <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
//               {text}
//             </span>
//           </div>

//           <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Passionate about creating beautiful, functional, and user-friendly
//             applications that solve real-world problems with clean, efficient
//             code.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button
//               size="lg"
//               className={`${getButtonGradient()} text-white px-8 py-3`}
//               onClick={() =>
//                 document
//                   .getElementById("projects")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               View My Work
//             </Button>

//             <div className="flex space-x-4">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="border-gray-600 text-gray-300 hover:text-white"
//               >
//                 <Github className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="border-gray-600 text-gray-300 hover:text-white"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="border-gray-600 text-gray-300 hover:text-white"
//               >
//                 <Mail className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="h-8 w-8 text-gray-400" />
//         </div>
//       </div>
//     </section>
//   );
// };
