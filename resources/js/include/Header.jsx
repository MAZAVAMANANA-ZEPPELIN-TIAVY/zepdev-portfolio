import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Curriculum vitæ', path: '/cv' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkBase =
    'relative px-3 py-2 text-sm font-medium transition duration-300';
  const desktopInactive =
    'text-slate-700 hover:text-blue-600';
  const desktopActive =
    'text-blue-600';

  const mobileInactive =
    'w-full rounded-xl px-4 py-3 text-center text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition';
  const mobileActive =
    'w-full rounded-xl bg-blue-50 px-4 py-3 text-center font-semibold text-blue-600 shadow-sm';

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          end
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white font-bold shadow-md">
            Z
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-900">
              Zeppélin
            </p>
            <p className="text-xs text-slate-500 group-hover:text-blue-600 transition">
              Développeur web
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? desktopActive : desktopInactive
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Travaillons ensemble
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] border-t border-slate-200' : 'max-h-0'
        } bg-white`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2 rounded-2xl bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? mobileActive : mobileInactive
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white shadow-md transition hover:bg-blue-600"
            >
              Travaillons ensemble
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}