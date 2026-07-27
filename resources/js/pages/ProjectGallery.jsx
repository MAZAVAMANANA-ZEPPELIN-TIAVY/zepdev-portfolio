import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaExternalLinkAlt,
  FaImages,
  FaTimes,
} from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectGallery() {
  const { id } = useParams();
  const project = useMemo(
    () => projects.find((item) => item.id === Number(id)),
    [id]
  );
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = project?.images ?? [];

  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const showNext = () =>
    setSelectedIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && images.length > 1) showPrevious();
      if (event.key === "ArrowRight" && images.length > 1) showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, images.length]);

  if (!project) {
    return (
      <main className="min-h-[65vh] bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-200 bg-white p-8 text-center shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Erreur 404
          </p>
          <h1 className="mt-3 text-3xl font-black text-slate-950">Projet introuvable</h1>
          <p className="mt-4 text-slate-600">
            Le projet demandé n’existe pas ou n’est plus disponible.
          </p>
          <Link
            to="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
          >
            <FaArrowLeft />
            Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-slate-50">
      <BackgroundDecor />

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-14">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  <FaImages />
                  {project.category}
                </span>
                {project.isDemo && (
                  <span className="rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-amber-950">
                    Projet démonstration
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                <FaArrowLeft />
                Tous les projets
              </Link>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Voir le site
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard label="Client / type" value={project.client} />
          <InfoCard label="Année" value={project.year} />
          <InfoCard label="Mon rôle" value={project.role} />
          <InfoCard label="Galerie" value={`${images.length} capture${images.length > 1 ? "s" : ""}`} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Points clés
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Ce que présente ce projet
            </h2>

            <ul className="mt-6 space-y-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                    <FaCheck />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-black">Vous avez un besoin similaire ?</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Je peux adapter cette logique à votre activité, vos utilisateurs et vos objectifs.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:gap-3"
              >
                Discuter du projet
                <FaChevronRight />
              </Link>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Aperçu
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  Captures du projet
                </h2>
              </div>
              <p className="hidden text-sm text-slate-500 sm:block">
                Cliquez sur une image pour l’agrandir
              </p>
            </div>

            {images.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {images.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — capture ${index + 1}`}
                      loading="lazy"
                      className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                        index === 0 ? "h-72 sm:h-[28rem]" : "h-64"
                      }`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow">
                      Capture {index + 1}
                    </span>
                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-950 opacity-0 shadow transition group-hover:opacity-100">
                      <FaExpand />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                Les captures seront ajoutées prochainement.
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedIndex !== null && images[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu de ${project.title}`}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-md sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[selectedIndex]}
              alt={`${project.title} — aperçu ${selectedIndex + 1}`}
              className="max-h-[82vh] max-w-full rounded-[1.5rem] object-contain shadow-2xl"
            />

            <div className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              {selectedIndex + 1} / {images.length}
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-slate-950 sm:right-4 sm:top-4"
              aria-label="Fermer l’aperçu"
            >
              <FaTimes />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-slate-950 sm:left-4"
                  aria-label="Image précédente"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-slate-950 sm:right-4"
                  aria-label="Image suivante"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-base font-black text-slate-950">{value}</p>
    </div>
  );
}
