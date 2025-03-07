
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Restaurant from "./pages/Restaurant";

function App() {


  //Keep this line to check if the environment is development or production
  
  
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/my-first-store/'}>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="special-offers" element={<Order />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="restaurants" element={<Restaurant />} />
          <Route path="track-order" element={<Order />} />
        </Route>

        {/* Auth Layout */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
