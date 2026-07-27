import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
  HiOutlineDownload,
} from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Curriculum vitæ', path: '/cv' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socials = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/zeppelin.tiavy',
      hover: 'hover:bg-blue-600',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/',
      hover: 'hover:bg-sky-600',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY',
      hover: 'hover:bg-slate-700',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Décor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-500/20">
                Z
              </div>

              <div>
                <h3 className="text-lg font-black tracking-tight text-white">
                  Zeppélin Tiavy
                </h3>
                <p className="text-sm text-slate-400 transition group-hover:text-cyan-300">
                  Portfolio professionnel
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Développeur web spécialisé dans la création d’applications
              modernes, responsives et bien structurées avec Laravel, React et
              Tailwind CSS.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                Laravel
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
                  >
                    <HiOutlineArrowRight className="text-blue-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CV */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Mon profil
            </h4>

            <p className="text-sm leading-7 text-slate-400">
              Consultez mon parcours, mes compétences et mes expériences dans
              mon curriculum vitæ.
            </p>

            <a
              href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              <HiOutlineDownload size={18} />
              Télécharger CV
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:zeppelintiavymazavamanana@gmail.com"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <span className="mt-0.5 text-blue-400">
                  <HiOutlineMail size={20} />
                </span>
                <span>
                  <span className="block font-semibold text-white">Email</span>
                  <span className="break-all text-slate-400">
                    zeppelintiavymazavamanana@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="mt-0.5 text-blue-400">
                  <HiOutlineLocationMarker size={20} />
                </span>
                <span>
                  <span className="block font-semibold text-white">
                    Localisation
                  </span>
                  <span className="text-slate-400">Madagascar</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:-translate-y-1 hover:text-white ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} MAZAVAMANANA Zeppélin Tiavy. Tous droits
            réservés.
          </p>

          <p className="text-slate-500">
            Portfolio moderne, responsive et professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}