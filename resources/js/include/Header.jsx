import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/">Zeppélin</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Accueil</Link>
          <Link to="/cv" className="text-white hover:text-gray-300">Curriculum vitæ</Link>
          <Link to="/projects" className="text-white hover:text-gray-300">Projets</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-300">Accueil</Link>
          <Link to="/cv" className="text-white hover:text-gray-300">Curriculum vitæ</Link>
          <Link to="/services" className="block text-white hover:text-gray-300">Services</Link>
          <Link to="/projects" className="text-white hover:text-gray-300">Projets</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300">Contact</Link>
        </div>
      )}
    </header>
  );
}
