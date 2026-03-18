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
  faPlane,
  faDownload,
  faUserGraduate,
  faLaptopCode,
  faLanguage,
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
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-1/4 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-indigo-200/30 blur-3xl sm:h-60 sm:w-60" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900 shadow-2xl">
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
                <FontAwesomeIcon icon={faUserGraduate} />
                Profil professionnel
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Curriculum Vitae
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Développeur web orienté création d’applications modernes,
                responsives et bien structurées, avec une attention particulière
                portée à l’interface utilisateur, à la logique métier et à la
                conception de bases de données.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <HeroPill icon={faLaptopCode} label="React / Laravel" />
                <HeroPill icon={faDatabase} label="Base de données" />
                <HeroPill icon={faCode} label="UI moderne" />
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="/cv/CV_MAZAVAMANANA_Zeppelin_Tiavy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                <FontAwesomeIcon icon={faDownload} />
                Télécharger le CV
              </a>

              <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm sm:max-w-sm">
                <p className="text-sm font-semibold text-white">Résumé</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Profil motivé, rigoureux et orienté résultat, avec expérience
                  en développement web, travail en équipe agile et conception de
                  solutions modernes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Éducation + Expérience */}
        <div className="mb-8 grid gap-6 xl:grid-cols-2">
          <Card>
            <SectionTitle
              icon={faGraduationCap}
              title="Éducation"
              subtitle="Parcours académique"
            />

            <div className="mt-8 space-y-6">
              <TimelineItem
                icon={faGraduationCap}
                title="Master d’Aptitude au Professorat – Ingénierie en Mathématiques et Informatique"
                period="2023 – 2024"
                place="École Normale"
              />
              <TimelineItem
                icon={faGraduationCap}
                title="Licence d’Aptitude au Professorat – Génie Mathématiques et Informatique"
                period="2021 – 2022"
                place="École Normale"
              />
              <TimelineItem
                icon={faGraduationCap}
                title="Baccalauréat Série C"
                period="2017 – 2018"
                place="Lycée Mixte Antsiranana 1"
              />
            </div>
          </Card>

          <Card>
            <SectionTitle
              icon={faBriefcase}
              title="Expérience"
              subtitle="Expérience professionnelle"
            />

            <div className="mt-8 space-y-6">
              <TimelineItem
                icon={faBriefcase}
                title="Développeur web (Stagiaire) – MADA-Digital"
                period="Août 2024 – Décembre 2024"
                place="MADA-Digital"
                description="Travail en équipe agile et participation au développement d’une application de gestion des salariés avec Laravel, Bootstrap et JavaScript."
              />

              <TimelineItem
                icon={faBriefcase}
                title="Développeur web – ObayaMadaTour"
                period="Février 2025"
                place="Projet web touristique"
                description="Conception et développement d’un site touristique moderne pour mettre en valeur les destinations, circuits, services et expériences proposés par ObayaMadaTour, avec une interface attractive, responsive et une intégration de technologies comme Laravel, React et Tailwind CSS."
              />
            </div>
          </Card>
        </div>

        {/* Compétences + colonne droite */}
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <Card>
            <SectionTitle
              icon={faCode}
              title="Compétences"
              subtitle="Technologies, méthodes et outils maîtrisés"
            />

            <div className="mt-8 space-y-8">
              <SkillBlock title="Développement web" icon={faLaptopCode}>
                <TechBadge icon={faHtml5} name="HTML" />
                <TechBadge icon={faCss3Alt} name="CSS" />
                <TextBadge name="Tailwind CSS" />
                <TechBadge icon={faReact} name="React" />
                <TechBadge icon={faPhp} name="PHP" />
                <TechBadge icon={faLaravel} name="Laravel" />
                <TechBadge icon={faGitAlt} name="Git / GitHub" />
                <TextBadge name="Méthode Agile (Scrum)" />
              </SkillBlock>

              <SkillBlock title="JDBC / Développement Java" icon={faCode}>
                <TechBadge icon={faJava} name="Java" />
                <TextBadge name="JDBC" />
                <TextBadge name="NetBeans" />
              </SkillBlock>

              <SkillBlock title="Systèmes de gestion de contenu" icon={faGlobe}>
                <TechBadge icon={faWordpress} name="WordPress" />
              </SkillBlock>

              <SkillBlock title="Base de données" icon={faDatabase}>
                <TextBadge name="SQL" />
                <TextBadge name="MySQL" />
                <TextBadge name="Merise" />
              </SkillBlock>

              <SkillBlock title="Algorithmique et programmation" icon={faCode}>
                <TextBadge name="Conception d’algorithmes" />
                <TextBadge name="Structures de données" />
                <TextBadge name="Logique de programmation" />
              </SkillBlock>

              <SkillBlock title="Bureautique" icon={faBriefcase}>
                <TextBadge name="Microsoft Word" />
                <TextBadge name="Microsoft Excel" />
                <TextBadge name="Microsoft PowerPoint" />
              </SkillBlock>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <SectionTitle
                icon={faLanguage}
                title="Langues"
                subtitle="Niveaux linguistiques"
              />

              <div className="mt-6 space-y-4">
                <LanguageRow label="Malagasy" level="Courant" />
                <LanguageRow label="Français" level="Courant" />
                <LanguageRow label="Anglais" level="Débutant" />
              </div>
            </Card>

            <Card>
              <SectionTitle
                icon={faGlobe}
                title="Loisirs"
                subtitle="Centres d’intérêt"
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <HobbyBadge icon={faBasketballBall} name="Basketball" />
                <HobbyBadge icon={faMusic} name="Musique" />
                <HobbyBadge icon={faPlane} name="Voyage" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Composants ---------- */

function Card({ children }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
      {children}
    </div>
  );
}

function HeroPill({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
      <FontAwesomeIcon icon={icon} className="text-cyan-300" />
      {label}
    </span>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p>
    </div>
  );
}

function TimelineItem({ icon, title, period, place, description }) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-[9px] top-0 h-full w-px bg-slate-200" />
      <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[10px] text-blue-600 shadow-sm">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
        <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-blue-600">{period}</p>
        <p className="mt-1 text-sm italic text-slate-500">{place}</p>
        {description && (
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function SkillBlock({ title, children, icon }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
        {icon && <FontAwesomeIcon icon={icon} className="text-blue-600" />}
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function TechBadge({ icon, name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <FontAwesomeIcon icon={icon} className="text-blue-600" />
      {name}
    </span>
  );
}

function TextBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {name}
    </span>
  );
}

function HobbyBadge({ icon, name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <FontAwesomeIcon icon={icon} className="text-blue-600" />
      {name}
    </span>
  );
}

function LanguageRow({ label, level }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-medium text-slate-900">{label}</span>
        <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
          {level}
        </span>
      </div>
    </div>
  );
}