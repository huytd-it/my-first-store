
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

  console.log(new Date().toLocaleTimeString());
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/my-first-store" element={<MainLayout />}>
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
