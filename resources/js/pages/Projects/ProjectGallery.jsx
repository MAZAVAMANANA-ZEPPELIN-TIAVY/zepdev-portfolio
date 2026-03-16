import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Application RH",
    category: "Application web",
    stack: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
    description:
      "Une application de gestion des ressources humaines conçue pour faciliter l’administration du personnel, le suivi des informations salariés et l’organisation interne.",
    images: [
      "/images/projets/gestionSalaire/c1.png",
      "/images/projets/gestionSalaire/c2.png",
      "/images/projets/gestionSalaire/c3.png",
      "/images/projets/gestionSalaire/c4.png",
      "/images/projets/gestionSalaire/c5.png",
      "/images/projets/gestionSalaire/c6.png",
      "/images/projets/gestionSalaire/c7.png",
      "/images/projets/gestionSalaire/c8.png",
      "/images/projets/gestionSalaire/c9.png",
      "/images/projets/gestionSalaire/c10.png",
      "/images/projets/gestionSalaire/c11.png",
    ],
  },
];

export default function ProjectGallery() {
  const { id } = useParams();
  const project = useMemo(
    () => projects.find((p) => p.id === Number(id)),
    [id]
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!project) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-200 bg-red-50 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-red-600 sm:text-3xl">
            Projet introuvable
          </h2>
          <p className="mt-3 text-red-500">
            Le projet demandé n’existe pas ou n’est plus disponible.
          </p>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            <FaArrowLeft />
            Retour aux projets
          </Link>
        </div>
      </section>
    );
  }

  const openImage = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Fond */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-1/4 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-indigo-200/30 blur-3xl sm:h-60 sm:w-60" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header projet */}
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-slate-900 px-5 py-8 text-white shadow-2xl sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
                <FaImages />
                {project.category}
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack?.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                <FaArrowLeft />
                Retour aux projets
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard label="Projet" value={project.title} />
          <InfoCard label="Type" value={project.category} />
          <InfoCard label="Captures" value={`${project.images.length} images`} />
        </div>

        {/* Galerie */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {project.images.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openImage(index)}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`${project.title} - capture ${index + 1}`}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow transition duration-300 group-hover:opacity-100">
                  <FaExpand />
                </div>

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
                  Image {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[selectedIndex]}
              alt={`${project.title} - aperçu ${selectedIndex + 1}`}
              className="max-h-[82vh] w-full rounded-[1.5rem] object-contain shadow-2xl"
            />

            {/* Top bar */}
            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              {selectedIndex + 1} / {project.images.length}
            </div>

            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:left-5"
                  aria-label="Image précédente"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={showNext}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:right-5"
                  aria-label="Image suivante"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}