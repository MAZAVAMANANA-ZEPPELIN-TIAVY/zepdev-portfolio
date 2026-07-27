import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaImages,
} from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  const categories = useMemo(
    () => ["Tous", ...new Set(projects.map((project) => project.category))],
    []
  );

  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "Tous"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const featuredCount = projects.filter((project) => project.featured).length;
  const categoryCount = categories.length - 1;

  return (
    <main className="relative overflow-hidden bg-slate-50">
      <BackgroundDecor />

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-10 text-white shadow-2xl sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <FaFolderOpen />
                Réalisations
              </p>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Des solutions web conçues pour des besoins concrets
              </h1>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Applications de gestion, commerce en ligne, tourisme, location
                automobile et éducation : chaque projet associe une interface
                moderne, une expérience responsive et une logique métier adaptée.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[430px] lg:grid-cols-1 xl:grid-cols-3">
              <StatCard value={projects.length} label="projets réalisés" />
              <StatCard value={categoryCount} label="domaines couverts" />
              <StatCard value={featuredCount} label="projets mis en avant" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black text-slate-950">
              Filtrer les projets
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Sélectionnez une catégorie pour afficher les réalisations correspondantes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 px-6 py-12 text-center text-white shadow-xl sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            Un besoin particulier ?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-black sm:text-3xl lg:text-4xl">
            Transformons votre besoin en une solution web professionnelle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Site vitrine, application métier, plateforme de réservation,
            e-commerce ou système de gestion : discutons de votre projet.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Présenter mon projet
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-600">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
            {project.category}
          </span>

          <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-bold text-emerald-950 shadow">
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            {project.client} • {project.year}
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-slate-600">
          {project.shortDescription}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] text-emerald-700">
                <FaCheck />
              </span>
              {highlight}
            </li>
          ))}
        </ul>

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

        <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            <FaImages />
            Voir le projet
          </Link>

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Site en ligne
              <FaExternalLinkAlt />
            </a>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Projet similaire
              <FaArrowRight />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-300">{label}</p>
    </div>
  );
}
