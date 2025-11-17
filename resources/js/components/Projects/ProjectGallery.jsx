import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Application RH",
    images: [
      "/images/projets/gestionSalaire/Capture d’écran (26).png",
      "/images/projets/gestionSalaire/Capture d’écran (27).png",
      "/images/projets/gestionSalaire/Capture d’écran (28).png",
      "/images/projets/gestionSalaire/Capture d’écran (29).png",
      "/images/projets/gestionSalaire/Capture d’écran (30).png",
      "/images/projets/gestionSalaire/Capture d’écran (31).png",
      "/images/projets/gestionSalaire/Capture d’écran (32).png",
      "/images/projets/gestionSalaire/Capture d’écran (33).png",
      "/images/projets/gestionSalaire/Capture d’écran (34).png",
      "/images/projets/gestionSalaire/Capture d’écran (35).png",
      "/images/projets/gestionSalaire/Capture d’écran (36).png",
    ],
  },
  {
    id: 2,
    title: "Portfolio Personnel",
    images: [
      "/images/projects/portfolio1.jpg",
      "/images/projects/portfolio2.jpg",
    ],
  },
  {
    id: 3,
    title: "Migration WordPress",
    images: ["/images/projects/wp1.jpg", "/images/projects/wp2.jpg"],
  },
];

export default function ProjectGallery() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <p className="text-center mt-20 text-red-600">Projet introuvable</p>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {project.title}
        </h2>

        {/* Galerie */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Retour */}
        <div className="text-center mt-12">
          <Link to="/projects" className="text-indigo-600 font-medium hover:underline">
            ← Retour aux projets
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-w-3xl max-h-[90vh] rounded-xl shadow-xl"
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
