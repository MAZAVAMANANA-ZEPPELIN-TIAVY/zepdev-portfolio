import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white font-bold shadow-md">
                Z
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Zeppélin Tiavy</h3>
                <p className="text-sm text-slate-400">Portfolio professionnel</p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Je conçois des projets modernes, élégants et performants avec une
              attention particulière à l’expérience utilisateur, au design et à
              la qualité du rendu final.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf" className="hover:text-white transition">
                  Curriculum vitæ
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition">
                  Projets
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Restons en contact
            </h4>

            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <HiOutlineMail className="text-blue-400" />
                Disponible pour collaborer
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-blue-400" />
                Madagascar
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/zeppelin.tiavy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:bg-slate-700 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} MAZAVAMANANA Zeppélin Tiavy. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}