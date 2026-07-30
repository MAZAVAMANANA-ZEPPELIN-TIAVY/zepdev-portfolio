import React from "react";
import { Link } from "react-router-dom";
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
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle,
  faArrowRight,
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
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <BackgroundDecor />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-10 lg:py-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <FontAwesomeIcon icon={faUserGraduate} />
                Profil professionnel
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Curriculum Vitae
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
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
                href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                <FontAwesomeIcon icon={faDownload} />
                Télécharger le CV
              </a>

              <div className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:max-w-sm">
                <p className="text-sm font-bold text-white">Résumé</p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Profil motivé, rigoureux et orienté résultat, avec expérience
                  en développement web, travail en équipe agile et conception de
                  solutions modernes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT RAPIDE */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={faEnvelope}
            label="Email"
            value="zeppelintiavymazavamanana@gmail.com"
          />
          <InfoCard icon={faPhone} label="Téléphone" value="+261 32 55 727 86" />
          <InfoCard
            icon={faMapMarkerAlt}
            label="Adresse"
            value="Antsiranana, Madagascar"
          />
        </div>

        {/* EDUCATION + EXPERIENCE */}
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
                title="Développeur web stagiaire – MADA-Digital"
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

        {/* COMPETENCES + LANGUES */}
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
                <TextBadge name="Méthode Agile Scrum" />
              </SkillBlock>

              <SkillBlock title="Backend & base de données" icon={faDatabase}>
                <TextBadge name="SQL" />
                <TextBadge name="MySQL" />
                <TextBadge name="Merise" />
                <TextBadge name="Modélisation MCD / MLD" />
              </SkillBlock>

              <SkillBlock title="JDBC / Développement Java" icon={faCode}>
                <TechBadge icon={faJava} name="Java" />
                <TextBadge name="JDBC" />
                <TextBadge name="NetBeans" />
              </SkillBlock>

              <SkillBlock title="CMS" icon={faGlobe}>
                <TechBadge icon={faWordpress} name="WordPress" />
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
                <LanguageRow label="Malagasy" level="Courant" progress="100%" />
                <LanguageRow label="Français" level="Courant" progress="85%" />
                <LanguageRow label="Anglais" level="Débutant" progress="35%" />
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

            <Card>
              <SectionTitle
                icon={faCheckCircle}
                title="Qualités"
                subtitle="Points forts professionnels"
              />

              <div className="mt-6 space-y-3">
                <QualityItem text="Motivé et rigoureux" />
                <QualityItem text="Capacité d’apprentissage" />
                <QualityItem text="Travail en équipe" />
                <QualityItem text="Sens du détail" />
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 px-6 py-10 text-center text-white shadow-xl sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            Collaboration
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-black sm:text-3xl">
            Mon profil correspond à votre besoin ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Je suis disponible pour échanger sur un site vitrine, une application web ou une mission de développement full-stack.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Me contacter
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
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

function Card({ children }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl sm:p-8">
      {children}
    </div>
  );
}

function HeroPill({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
      <FontAwesomeIcon icon={icon} className="text-cyan-300" />
      {label}
    </span>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <FontAwesomeIcon icon={icon} />
      </div>

      <p className="text-sm font-semibold text-slate-500">{label}</p>

      <p className="mt-2 break-all text-base font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
        <FontAwesomeIcon icon={icon} />
      </div>

      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
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

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm sm:p-5">
        <h3 className="text-base font-bold leading-7 text-slate-950 sm:text-lg">
          {title}
        </h3>

        <p className="mt-1 text-sm font-bold text-blue-600">{period}</p>

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
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950">
        {icon && <FontAwesomeIcon icon={icon} className="text-blue-600" />}
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function TechBadge({ icon, name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <FontAwesomeIcon icon={icon} className="text-blue-600" />
      {name}
    </span>
  );
}

function TextBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {name}
    </span>
  );
}

function HobbyBadge({ icon, name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <FontAwesomeIcon icon={icon} className="text-blue-600" />
      {name}
    </span>
  );
}

function LanguageRow({ label, level, progress }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold text-slate-950">{label}</span>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
          {level}
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}

function QualityItem({ text }) {
  return (
    <p className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-700">
      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600" />
      {text}
    </p>
  );
}