import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaDatabase,
} from 'react-icons/fa';

export default function Accueil() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Développement web',
      description:
        'Création de sites et applications web modernes, responsives et performantes.',
    },
    {
      icon: <FaCode />,
      title: 'Frontend & UI',
      description:
        'Interfaces élégantes, intuitives et optimisées pour offrir une excellente expérience utilisateur.',
    },
    {
      icon: <FaDatabase />,
      title: 'Backend & Base de données',
      description:
        'Conception de solutions robustes, sécurisées et maintenables avec une bonne architecture.',
    },
  ];

  return (
    <div className="space-y-12 md:space-y-20">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-sky-700 text-white shadow-2xl">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-indigo-500 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              MAZAVAMANANA <br />
              <span className="text-cyan-300">Zeppélin Tiavy</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base md:mx-0 md:text-lg">
              Je conçois des applications web modernes, responsives et fiables
              avec une approche centrée sur la qualité, la clarté du design et
              l’expérience utilisateur.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Voir mes projets
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
              >
                Me contacter
              </Link>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 px-6 py-3 font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-300/10"
              >
                Télécharger mon CV
                <FaDownload />
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              <a
                href="https://www.facebook.com/tiavy.breedje/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
                <img
                  src="/images/couverture/Zeppelin.jpg"
                  alt="Zeppélin Tiavy"
                  className="h-64 w-64 rounded-[1.5rem] object-cover shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left shadow-lg backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-cyan-200">
                  Spécialités
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  React • Laravel • Tailwind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS + INFOS */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            À propos de moi
          </p>
          <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Un développeur motivé, rigoureux et orienté résultat
          </h2>
          <p className="text-base leading-8 text-slate-600">
            Développeur web junior, je crée des applications modernes avec
            Laravel, React, Bootstrap et Tailwind CSS. J’interviens aussi bien
            sur le frontend que sur le backend, avec une attention particulière
            portée à la structure du code, à la performance et à la qualité du
            design.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Mon objectif est de proposer des solutions fiables, professionnelles
            et agréables à utiliser, capables de répondre concrètement aux
            besoins d’un client ou d’un projet.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Informations personnelles
          </p>
          <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Coordonnées
          </h2>

          <div className="space-y-5 text-slate-700">
            <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <span className="font-semibold text-slate-900">Nationalité</span>
              <span>Malagasy</span>
            </div>

            <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <span className="font-semibold text-slate-900">Adresse</span>
              <span>Antsiranana, Madagascar</span>
            </div>

            <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <span className="font-semibold text-slate-900">Email</span>
              <span className="break-all">
                zeppelintiavymazavamanana@gmail.com
              </span>
            </div>

            <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <span className="font-semibold text-slate-900">Téléphone</span>
              <span>+261 32 55 727 86</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="rounded-[2rem] bg-slate-100 px-6 py-10 sm:px-8 md:px-10 md:py-14">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Ce que je peux faire
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Mes domaines d’intervention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Je développe des solutions modernes avec une attention particulière
            portée à l’esthétique, à la performance et à la maintenabilité.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-900 to-sky-700 px-6 py-12 text-center text-white shadow-xl sm:px-8 md:px-12">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Vous avez un projet en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Je suis disponible pour collaborer sur des projets web modernes,
          fonctionnels et bien structurés.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Me contacter
            <FaArrowRight />
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>
    </div>
  );
}