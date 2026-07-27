import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineDownload,
} from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Curriculum vitæ', path: '/cv' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const desktopLink = ({ isActive }) =>
    `relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-slate-900 text-white shadow-md'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
    }`;

  const mobileLink = ({ isActive }) =>
    `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-slate-900 text-white shadow-md'
        : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600'
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-500/25">
            Z
            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </div>

          <div className="leading-tight">
            <p className="text-base font-black tracking-tight text-slate-950 sm:text-lg">
              Zeppélin Tiavy
            </p>
            <p className="text-xs font-medium text-slate-500 transition group-hover:text-blue-600">
              Développeur web
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={desktopLink}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <HiOutlineDownload size={18} />
            CV
          </a>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Travaillons ensemble
            <HiOutlineArrowRight size={18} />
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <HiOutlineX size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <nav className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-3 shadow-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={mobileLink}
              >
                {item.name}
                <HiOutlineArrowRight size={18} />
              </NavLink>
            ))}

            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              <a
                href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-blue-50 hover:text-blue-600"
              >
                <HiOutlineDownload size={18} />
                Télécharger CV
              </a>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-900"
              >
                Me contacter
                <HiOutlineArrowRight size={18} />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}