import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Accueil() {
  return (
    <>
      <header className="relative w-full h-[50vh] md:h-[45vh] flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 w-full md:w-3/4 z-10 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            MAZAVAMANANA <br /> Zeppélin Tiavy
          </h1>

          <div className="flex justify-center md:justify-start space-x-6 text-2xl sm:text-3xl mb-6">
            <a href="https://www.facebook.com/tiavy.breedje/" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/" target="_blank"
              rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
            <a href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"><FaGithub /></a>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-64 md:h-full relative flex justify-center items-center mt-6 md:mt-0">
          <img
            src="/images/couverture/Zeppelin.jpg"
            alt="Couverture"
            className="
              h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72
              object-cover rounded-full shadow-2xl
              transition-transform duration-500 ease-out
              hover:scale-110 border-4 border-white/40
            "
          />
          <div className="absolute h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-black/20 pointer-events-none"/>
        </div>
      </header>

      <section className="w-full px-6 md:px-16 py-16 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600">À propos de moi</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Développeur web junior, je conçois des applications modernes avec Laravel (PHP), React, Bootstrap et Tailwind CSS. Passionné et motivé, je maîtrise aussi bien le développement frontend et backend, ainsi que la conception de bases de données. Curieux et en constante évolution, j'adopte une approche rigoureuse et structurée pour créer des solutions fiables, performantes et maintenables.
            </p>
          </div>

          <div className="md:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600">Informations personnelles</h2>
            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <span className="font-semibold w-full sm:w-40">Nationalité :</span> Malagasy
              </li>
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <span className="font-semibold w-full sm:w-40">Adresse :</span> Antsiranana, Madagascar
              </li>
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <span className="font-semibold w-full sm:w-40">Email :</span>
                <span className="break-all">zeppelintiavymazavamanana@gmail.com</span>
              </li>
              <li className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <span className="font-semibold w-full sm:w-40">Téléphone :</span> +261 32 55 727 86
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
