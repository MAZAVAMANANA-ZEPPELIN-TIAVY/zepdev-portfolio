import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
} from "react-icons/fa";
import { projects } from "../../src/data/projects";

export default function ProjectGallery() {
  const { id } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.id === Number(id)),
    [id]
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null || !project) return;

      if (e.key === "Escape") closeLightbox();

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, project]);

  if (!project) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-200 bg-red-50 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-black text-red-600 sm:text-3xl">
            Projet introuvable
          </h2>

          <p className="mt-3 text-red-500">
            Le projet demandé n’existe pas ou n’est plus disponible.
          </p>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
          >
            <FaArrowLeft />
            Retour aux projets
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <BackgroundDecor />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-10 text-white shadow-2xl sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <FaImages />
                {project.category}
              </p>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
            >
              <FaArrowLeft />
              Retour aux projets
            </Link>
          </div>
        </div>

        {/* INFOS */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard label="Projet" value={project.title} />
          <InfoCard label="Type" value={project.category} />
          <InfoCard label="Captures" value={`${project.images.length} images`} />
        </div>

        {/* GALLERY */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {project.images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => openImage(index)}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={src}
                  alt={`${project.title} - capture ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-950 opacity-0 shadow transition duration-300 group-hover:opacity-100">
                  <FaExpand />
                </div>

                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
                  Image {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[selectedIndex]}
              alt={`${project.title} - aperçu ${selectedIndex + 1}`}
              className="max-h-[82vh] w-full rounded-[1.5rem] object-contain shadow-2xl"
            />

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              {selectedIndex + 1} / {project.images.length}
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white hover:text-slate-950 sm:left-5"
                  aria-label="Image précédente"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white hover:text-slate-950 sm:right-5"
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

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
    </div>
  );
}