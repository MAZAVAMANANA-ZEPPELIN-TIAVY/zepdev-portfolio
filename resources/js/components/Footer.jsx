import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Curriculum vitæ", path: "/cv" },
  { name: "Projets", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/zeppelin.tiavy",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-9 shadow-2xl sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Votre prochain projet
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">
              Besoin d’un site professionnel qui inspire confiance à vos clients ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
              Présentez-moi votre idée, votre activité et vos objectifs. Nous définirons une solution claire, moderne et adaptée à votre budget.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Demander un devis
              <HiOutlineArrowRight size={19} />
            </Link>

            <a
              href="https://wa.me/261325572786?text=Bonjour%20Zepp%C3%A9lin%2C%20j%27aimerais%20discuter%20d%27un%20projet%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
            >
              <FaWhatsapp size={19} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_0.85fr_1.1fr]">
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
                  Développeur web full-stack
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Je conçois des sites vitrines et applications web modernes avec React, Laravel, Tailwind CSS et MySQL, pour aider les entreprises à mieux présenter et gérer leur activité.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Laravel", "Tailwind CSS", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <FooterTitle>Navigation</FooterTitle>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
                  >
                    <HiOutlineArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterTitle>Services</FooterTitle>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Site vitrine professionnel</li>
              <li>Application web métier</li>
              <li>Interface React responsive</li>
              <li>Backend Laravel et MySQL</li>
            </ul>

            <a
              href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <HiOutlineDownload size={18} />
              Télécharger mon CV
            </a>
          </div>

          <div>
            <FooterTitle>Contact</FooterTitle>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:zeppelintiavymazavamanana@gmail.com"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <HiOutlineMail className="mt-0.5 shrink-0 text-blue-400" size={20} />
                <span className="min-w-0">
                  <span className="block font-semibold text-white">Email</span>
                  <span className="block break-all text-slate-400">
                    zeppelintiavymazavamanana@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-blue-400" size={20} />
                <span>
                  <span className="block font-semibold text-white">Localisation</span>
                  <span className="text-slate-400">Antsiranana, Madagascar</span>
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} MAZAVAMANANA Zeppélin Tiavy. Tous droits réservés.</p>
          <p>Conçu pour être rapide, accessible et responsive.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
      {children}
    </h4>
  );
}
