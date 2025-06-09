import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedBg from "./components/AnimatedBg";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import PortfolioContextProvider from "./context/PortfolioProvider";

import "./App.css";

function App() {
  return (
    <>
      <PortfolioContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </PortfolioContextProvider>
    </>
  );
}

export default App;
