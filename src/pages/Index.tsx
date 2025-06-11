import Header from "../components/header/Header";
import HeroSection from "../components/hero/HeroSection";
import About from "../components/about/About";

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center flex-col px-5 text-center text-slate-100">
        <HeroSection />
        <About />
      </main>
    </>
  );
}
