import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Application RH",
      description: "Application web de gestion des salariés (Laravel + JavaScript).",
      image: "/images/projets/gestionSalaire/Capture d’écran (28).png",
      liveLink: "https://mada-digital.msi2025a.net",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide relative inline-block">
            Projets Réalisés
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-indigo-400 rounded-full"></span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg sm:text-xl">
            Quelques-unes de mes réalisations récentes
          </p>
        </div>

        {/* Cartes des projets */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden group"
            >
              {/* Image du projet */}
              <div className="h-56 sm:h-64 overflow-hidden rounded-t-3xl relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <Link
                    to={`/projects/${project.id}`}
                    className="px-5 py-2 sm:py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md transition"
                  >
                    Images
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 sm:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transition"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 w-full h-16 bg-indigo-100 rounded-t-full"></div>
    </section>
  );
}
