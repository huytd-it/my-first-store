import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
