import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaCode,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Application RH",
      category: "Application web",
      description:
        "Application web de gestion des salariés conçue pour faciliter l’administration du personnel, le suivi des informations RH et l’organisation interne.",
      image: "/images/projets/gestionSalaire/c3.png",
      liveLink: "https://mada-digital.msi2025a.net",
      stack: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-1/4 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-indigo-200/30 blur-3xl sm:h-60 sm:w-60" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-slate-900 px-5 py-8 text-white shadow-2xl sm:px-8 sm:py-10 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
                <FaFolderOpen />
                Portfolio
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Projets réalisés
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Découvrez quelques-unes de mes réalisations en développement web.
                Chaque projet est conçu avec une attention particulière portée au
                design, à la structure du code et à l’expérience utilisateur.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
              <StatCard value={projects.length} label="Projet disponible" />
              <StatCard value="Responsive" label="Approche moderne" />
            </div>
          </div>
        </div>

        {/* Liste des projets */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
                  {project.category}
                </div>
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-slate-900 transition duration-300 group-hover:text-blue-600 sm:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack?.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                      >
                        <FaCode className="mr-2 text-blue-600" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Boutons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                  >
                    Voir les images
                    <FaArrowRight />
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Voir le site
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-900 to-sky-700 px-6 py-10 text-center text-white shadow-xl sm:px-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
            <FaGlobe />
            Collaboration
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Vous souhaitez un projet similaire ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Je peux vous aider à concevoir un site web ou une application moderne,
            professionnelle et adaptée à vos besoins.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Me contacter
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}