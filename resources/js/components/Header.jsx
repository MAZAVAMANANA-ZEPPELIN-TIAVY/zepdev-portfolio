import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Curriculum vitæ", path: "/cv" },
  { name: "Projets", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = isOpen ? "hidden" : "";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const desktopLink = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
      isActive
        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  const mobileLink = ({ isActive }) =>
    `flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold transition ${
      isActive
        ? "bg-slate-950 text-white shadow-lg"
        : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" end className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-600/20">
            Z
            <span className="absolute inset-0 translate-y-full bg-white/20 transition duration-300 group-hover:translate-y-0" />
          </div>

          <div className="leading-tight">
            <p className="text-base font-black tracking-tight text-slate-950 sm:text-lg">
              Zeppélin Tiavy
            </p>
            <div className="mt-0.5 flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              Disponible pour un projet
            </div>
          </div>
        </NavLink>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={desktopLink}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <HiOutlineDownload size={18} />
            CV
          </a>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-slate-950"
          >
            Parlons de votre projet
            <HiOutlineArrowRight size={18} />
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <HiOutlineX size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-20 bg-slate-950/30 p-4 backdrop-blur-sm transition md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          id="mobile-menu"
          className={`mx-auto max-w-lg rounded-[1.75rem] border border-slate-200 bg-slate-50 p-3 shadow-2xl transition duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-3 scale-95"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <nav aria-label="Navigation mobile" className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={mobileLink}
              >
                {item.name}
                <HiOutlineArrowRight size={18} />
              </NavLink>
            ))}
          </nav>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <a
              href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
            >
              <HiOutlineDownload size={18} />
              Télécharger le CV
            </a>

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white"
            >
              Demander un devis
              <HiOutlineArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
