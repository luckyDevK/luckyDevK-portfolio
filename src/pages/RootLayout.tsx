import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center flex-col px-5 text-center text-slate-100">
        <Outlet />
      </main>
    </>
  );
}
