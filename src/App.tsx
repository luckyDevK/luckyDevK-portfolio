import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import PortfolioContextProvider from "./context/PortfolioProvider";

function App() {
  return (
    <>
      <Theme accentColor="blue">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <PortfolioContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          </PortfolioContextProvider>
        </div>
      </Theme>
    </>
  );
}

export default App;
