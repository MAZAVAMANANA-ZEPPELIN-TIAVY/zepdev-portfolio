import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Accueil() {
  return (
    <>
      <header className="relative w-full h-[60vh] flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* Bloc gauche : texte + liens */}
        <div className="flex flex-col justify-center px-10 w-3/4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            MAZAVAMANANA <br /> Zeppélin Tiavy
          </h1>

          <div className="flex space-x-6 text-3xl mb-6">
            {/* liens inchangés */}
            <a href="https://www.facebook.com/tiavy.breedje/" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/zeppélin-tavymazavamanana-6b60302aa" target="_blank"
              rel="noopener noreferrer" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
            <a href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"><FaGithub /></a>
          </div>

          <a href="#contact"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
            Me contacter
          </a>
        </div>

        {/* Bloc droite : image avec overlay */}
        <div className="w-1/3 h-full relative">
          <img
            src="/images/couverture/Zeppelin.jpg"
            alt="Couverture"
            className="w-full h-full object-cover rounded-l-3xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/20 rounded-l-3xl" />
        </div>
      </header>

      <section className="w-full px-6 md:px-16 py-16 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">À propos de moi</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Développeur web junior, je conçois des applications modernes avec Laravel (PHP), React, Bootstrap et Tailwind CSS. Passionné et motivé, je maîtrise aussi bien le développement frontend et backend, ainsi que la conception de bases de données. Curieux et en constante évolution, j'adopte une approche rigoureuse et structurée pour créer des solutions fiables, performantes et maintenables.
            </p>
          </div>

          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Informations personnelles</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex gap-3"><span className="font-semibold w-40">Nationalité :</span> Malagasy</li>
              <li className="flex gap-3"><span className="font-semibold w-40">Adresse :</span> Antsiranana, Madagascar</li>
              <li className="flex gap-3"><span className="font-semibold w-40">Email :</span>
                <span className="break-all">zeppelintiavymazavamanana@gmail.com</span></li>
              <li className="flex gap-3"><span className="font-semibold w-40">Téléphone :</span> +261 32 55 727 86</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
