import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Hero from "../src/components/hero/HeroSection";
import About from "../src/components/about/About";
import ErrorPage from "./pages/ErrorPage";
import PortfolioContextProvider from "./context/PortfolioProvider";

import "./App.css";

function App() {
  return (
    <>
      <PortfolioContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Hero />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PortfolioContextProvider>
    </>
  );
}

export default App;
