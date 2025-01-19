import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO 1.svg";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  var activeClass = `px-6 py-2 bg-orange-400`;
  var navLinkStyle = `transition-colors px-6 py-2 rounded-full flex `;
  return (
    <header className=" text-white p-4 sticky top-0 z-50">
      {" "}
      {/* sticky top-0 để header luôn dính trên đầu trang */}
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          {" "}
          {/* Sử dụng NavLink */}
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  ${navLinkStyle} ${isActive ? activeClass : "text-black"} `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeClass : "text-black"} `
                  }
                >
                  Browse Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/special-offers"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeClass : "text-black"} `
                  }
                >
                  Special Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeClass : "text-black"} `
                  }
                >
                  Restaurants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/track-order"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeClass : "text-black"} `
                  }
                >
                  Track Order
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${navLinkStyle} hover:ring-orange-300 hover:ring  hover:bg-white hover:text-orange-500 bg-gray-800  rounded-full  ${isActive ? activeClass : "text-white"}  `
                  }
                >
                  <UserCircleIcon className="size-6 pr-1 text-orange-500" /> Login/Signup
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 bg-gray-800 w-48 rounded-md shadow-lg z-10">
              {" "}
              {/* z-10 để menu mobile nằm trên các phần tử khác */}
      
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
