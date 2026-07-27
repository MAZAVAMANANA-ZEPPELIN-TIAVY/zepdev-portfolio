import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaCode,
  FaGlobe,
  FaImages,
} from "react-icons/fa";
import { projects } from "../../src/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <BackgroundDecor />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-10 text-white shadow-2xl sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <FaFolderOpen />
                Portfolio
              </p>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Projets réalisés
              </h1>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Découvrez quelques-unes de mes réalisations en développement
                web. Chaque projet est conçu avec une attention particulière
                portée au design, à la structure du code et à l’expérience
                utilisateur.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[340px]">
              <StatCard value={projects.length} label="Projets disponibles" />
              <StatCard value="100%" label="Responsive design" />
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
                  {project.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-black text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-slate-600">
                  {project.shortDescription || project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      <FaCode className="text-blue-600" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
                  >
                    <FaImages />
                    Images
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
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
        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-sky-700 px-6 py-12 text-center text-white shadow-xl sm:px-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            <FaGlobe />
            Collaboration
          </p>

          <h2 className="text-2xl font-black sm:text-3xl">
            Vous souhaitez un projet similaire ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Je peux vous aider à concevoir un site web ou une application
            moderne, professionnelle et adaptée à vos besoins.
          </p>

          <div className="mt-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
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

function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>
    </>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}