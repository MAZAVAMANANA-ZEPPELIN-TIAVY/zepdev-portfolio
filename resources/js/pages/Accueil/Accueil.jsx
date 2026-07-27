import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

export default function Accueil() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Développement web",
      description:
        "Création de sites et applications web modernes, responsives, rapides et adaptés aux besoins réels.",
    },
    {
      icon: <FaCode />,
      title: "Frontend & UI",
      description:
        "Interfaces propres, élégantes et faciles à utiliser avec React, Tailwind CSS et une bonne expérience utilisateur.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend & Base de données",
      description:
        "Conception de solutions robustes avec Laravel, MySQL, logique métier claire et structure maintenable.",
    },
  ];

  const stats = [
    { value: "2+", label: "Projets réalisés" },
    { value: "Fullstack", label: "Frontend & Backend" },
    { value: "Responsive", label: "Mobile, tablette, desktop" },
  ];

  const technologies = ["React", "Laravel", "Tailwind CSS", "MySQL", "GitHub"];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <FaLayerGroup />
              Portfolio professionnel
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              MAZAVAMANANA <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Zeppélin Tiavy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:mx-0 md:text-lg">
              Développeur web spécialisé dans la création d’applications
              modernes, responsives et professionnelles avec React, Laravel et
              Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                to="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Voir mes projets
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Me contacter
              </Link>

              <a
                href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10 sm:w-auto"
              >
                CV
                <FaDownload />
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-3 md:justify-start">
              <SocialLink
                href="https://www.facebook.com/zeppelin.tiavy"
                label="Facebook"
                icon={<FaFacebook />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/"
                label="LinkedIn"
                icon={<FaLinkedin />}
              />
              <SocialLink
                href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY"
                label="GitHub"
                icon={<FaGithub />}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/25 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <img
                  src="/images/couverture/zepdev.jpg"
                  alt="Zeppélin Tiavy"
                  className="h-72 w-72 rounded-[1.5rem] object-cover object-top shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 text-center shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                  Stack principale
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  React • Laravel • Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-2xl font-black text-slate-950">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            À propos de moi
          </p>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Développeur web rigoureux, créatif et orienté résultat
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Je développe des applications web modernes avec Laravel, React,
            Bootstrap et Tailwind CSS. J’accorde une grande importance à la
            clarté du design, à la structure du code, à la performance et à
            l’expérience utilisateur.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Mon objectif est de transformer une idée ou un besoin en solution
            professionnelle, fiable et agréable à utiliser.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Informations
          </p>

          <div className="space-y-4">
            <InfoRow label="Nationalité" value="Malagasy" />
            <InfoRow label="Adresse" value="Antsiranana, Madagascar" />
            <InfoRow
              label="Email"
              value="zeppelintiavymazavamanana@gmail.com"
            />
            <InfoRow label="Téléphone" value="+261 32 55 727 86" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="rounded-[2rem] bg-slate-100 px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Services
          </p>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Ce que je peux réaliser
          </h2>

          <p className="mt-4 text-slate-600">
            Je conçois des solutions web modernes, propres et adaptées à une
            utilisation professionnelle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technologies
            </p>
            <h2 className="text-2xl font-black text-slate-950">
              Outils que j’utilise
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <FaCheckCircle className="text-blue-600" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-sky-700 px-6 py-12 text-center text-white shadow-xl sm:px-8 md:px-12">
        <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">
          Vous avez un projet en tête ?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          Je suis disponible pour collaborer sur des projets web modernes,
          fonctionnels et bien structurés.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
          >
            Me contacter
            <FaArrowRight />
          </Link>

          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20 sm:w-auto"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-white backdrop-blur transition hover:-translate-y-1 hover:bg-blue-600"
    >
      {icon}
    </a>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 break-all font-semibold text-white">{value}</p>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}