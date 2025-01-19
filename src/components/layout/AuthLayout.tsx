import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <main className="container mx-auto mt-4">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
