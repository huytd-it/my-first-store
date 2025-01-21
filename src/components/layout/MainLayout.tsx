import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-4 min-h-screen ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
