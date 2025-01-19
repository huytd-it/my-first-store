import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50"> {/* sticky top-0 để header luôn dính trên đầu trang */}
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold"> {/* Sử dụng NavLink */}
          Logo
        </NavLink>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'text-yellow-400' : ''}`
                  }
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'text-yellow-400' : ''}`
                  }
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'text-yellow-400' : ''}`
                  }
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 bg-gray-800 w-48 rounded-md shadow-lg z-10"> {/* z-10 để menu mobile nằm trên các phần tử khác */}
              <nav>
                <ul className="flex flex-col p-4 space-y-2">
                  <li>
                    <NavLink
                      to="/"
                      className="hover:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="hover:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Giới thiệu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="hover:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Liên hệ
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;