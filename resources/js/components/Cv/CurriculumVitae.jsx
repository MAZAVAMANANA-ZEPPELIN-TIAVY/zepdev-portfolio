import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faGraduationCap,
  faBriefcase,
  faGlobe,
  faBasketballBall,
  faMusic,
  faWaveSquare,
  faPlane
} from "@fortawesome/free-solid-svg-icons";


import {
  faHtml5,
  faCss3Alt,
  faReact,
  faPhp,
  faLaravel,
  faGitAlt,
  faJava,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";


export default function CurriculumVitae() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide flex justify-center items-center gap-3">
            <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-600" />
            Curriculum Vitae
          </h2>
          <div className="mt-2 h-1 w-24 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Éducation & Expérience */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Éducation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} /> Éducation
            </h3>
            <div className="space-y-6">
              <TimelineItem
                icon={faGraduationCap}
                title="Master d’Aptitude au Professorat – Ingénierie en Mathématiques Informatique"
                period="2022 – 2025"
                place="École Normale"
              />
              <TimelineItem
                icon={faGraduationCap}
                title="Licence d'Aptitude au Professorat – Génie Mathématique et Informatique"
                period="2019 – 2022"
                place="École Normale"
              />
              <TimelineItem
                icon={faGraduationCap}
                title="Baccalauréat Série C"
                period="2017 – 2018"
                place="Lycée Mixte Antsiranana 1"
              />
            </div>
          </div>

          {/* Expérience */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} /> Expérience
            </h3>
            <div className="space-y-6">
              <TimelineItem
                icon={faBriefcase}
                title="Développeur web (Stagiaire) – MADA-Digital"
                period="Août – Déc. 2024"
                place="MADA-Digital"
                description="Travail en équipe agile ; développement d’une application de gestion des salariés (Laravel, Bootstrap, JavaScript)."
              />
            </div>
          </div>
        </div>

        {/* Compétences & Langues/Loisirs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Compétences */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} /> Compétences
            </h3>

            {/* Développement Web */}
            <SkillBlock title="Développement web">
              <TechIcon icon={faHtml5} name="HTML" />
              <TechIcon icon={faCss3Alt} name="CSS" />
              <TechIcon icon={faWaveSquare} name="Tailwind CSS" /> 
              <TechIcon icon={faReact} name="React" />
              <TechIcon icon={faPhp} name="PHP" />
              <TechIcon icon={faLaravel} name="Laravel" />
              <TechIcon icon={faWordpress} name="WordPress" />
              <TechIcon icon={faGitAlt} name="Git/GitHub" />
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full m-1">
                Agile (Scrum)
              </span>
            </SkillBlock>

            {/* Bases de données */}
            <SkillBlock icon={faDatabase} title="Base de données">
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full m-1">
                SQL
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full m-1">
                MySQL
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full m-1">
                Merise
              </span>
            </SkillBlock>

            {/* Autres langages */}
            <SkillBlock icon={faCode} title="Autres">
              <TechIcon icon={faJava} name="Java" />
            </SkillBlock>
          </div>

          {/* Langues & Loisirs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faGlobe} /> Langues
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Malagasy : Courant</li>
              <li>Français : Courant</li>
              <li>Anglais : Débutant</li>
            </ul>

            <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faBasketballBall} /> Loisirs
            </h3>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li><FontAwesomeIcon icon={faBasketballBall} className="mr-2 text-indigo-600"/>Basketball</li>
              <li><FontAwesomeIcon icon={faMusic} className="mr-2 text-indigo-600"/>Musique</li>
              <li><FontAwesomeIcon icon={faPlane} className="mr-2 text-indigo-600"/>Voyage</li>
            </ul>
{/* 
            <a
              href="/cv/CV_MAZAVAMANANA_Zeppelin_Tiavy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
            >
              Télécharger le CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sous-composants réutilisables ---
function TimelineItem({ icon, title, period, place, description }) {
  return (
    <div className="relative pl-8 border-l border-indigo-300">
      <FontAwesomeIcon
        icon={icon}
        className="absolute left-[-13px] top-1 text-indigo-600 bg-white rounded-full p-1 border border-indigo-300"
      />
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <span className="block text-sm text-gray-500">{period}</span>
      <span className="block text-sm text-gray-500 italic mb-1">{place}</span>
      {description && <p className="text-gray-700 text-sm">{description}</p>}
    </div>
  );
}

function SkillBlock({ title, children, icon }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2">
        {icon && <FontAwesomeIcon icon={icon} className="text-indigo-600" />}
        {title}
      </h4>
      <div className="flex flex-wrap mt-2">{children}</div>
    </div>
  );
}

function TechIcon({ icon, name }) {
  return (
    <span className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full m-1 shadow-sm">
      <FontAwesomeIcon icon={icon} className="text-indigo-600 mr-2" />
      {name}
    </span>
  );
}
