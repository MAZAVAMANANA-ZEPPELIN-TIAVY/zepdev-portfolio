import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass = "text-yellow-300 font-bold";
  const defaultClass = "text-white hover:text-gray-300";

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <NavLink to="/" className={defaultClass} end>Zeppélin</NavLink>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : defaultClass}>Accueil</NavLink>
          <NavLink to="/cv" className={({ isActive }) => isActive ? activeClass : defaultClass}>Curriculum vitæ</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : defaultClass}>Projets</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : defaultClass}>Contact</NavLink>
        </nav>

        {/* Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-blue-500 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : defaultClass}>Accueil</NavLink>
          <NavLink to="/cv" className={({ isActive }) => isActive ? activeClass : defaultClass}>Curriculum vitæ</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : defaultClass}>Projets</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : defaultClass}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
}
