import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaFacebook,
  FaGithub,
  FaLayerGroup,
  FaLaptopCode,
  FaLinkedin,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { projects } from "../data/projects";

const services = [
  {
    icon: FaLaptopCode,
    title: "Sites vitrines professionnels",
    description:
      "Une présence en ligne claire et crédible pour présenter votre activité, vos services et générer des demandes de contact.",
  },
  {
    icon: FaCode,
    title: "Applications web métier",
    description:
      "Des outils sur mesure pour organiser vos données, automatiser vos tâches et améliorer votre fonctionnement quotidien.",
  },
  {
    icon: FaDatabase,
    title: "Backend et base de données",
    description:
      "Une architecture Laravel et MySQL structurée, sécurisée et facile à faire évoluer selon les besoins du projet.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Comprendre",
    description: "Nous clarifions votre activité, vos utilisateurs et vos objectifs.",
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Je prépare une structure simple, moderne et orientée conversion.",
  },
  {
    number: "03",
    title: "Développer",
    description: "Le projet est réalisé avec un code propre, responsive et maintenable.",
  },
  {
    number: "04",
    title: "Livrer",
    description: "Je vérifie l’affichage, les interactions et vous accompagne à la mise en ligne.",
  },
];

const commitments = [
  {
    icon: FaMobileAlt,
    title: "Responsive par défaut",
    description: "Une expérience cohérente sur téléphone, tablette et ordinateur.",
  },
  {
    icon: FaSearch,
    title: "Contenu bien structuré",
    description: "Des pages lisibles qui aident vos visiteurs à comprendre rapidement votre offre.",
  },
  {
    icon: FaShieldAlt,
    title: "Base technique sérieuse",
    description: "Une structure claire, évolutive et pensée pour une utilisation professionnelle.",
  },
];

export default function Accueil() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const realizedProjects = projects.filter((project) => !project.isDemo).length;

  return (
    <main className="overflow-hidden">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Disponible pour de nouveaux projets
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Je crée des expériences web qui
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                inspirent confiance.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              Développeur web full-stack à Madagascar, je conçois des sites vitrines et applications modernes avec React, Laravel, Tailwind CSS et MySQL pour aider les entreprises à présenter, vendre et gérer leur activité plus efficacement.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                Discuter de votre projet
                <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
              >
                Voir mes réalisations
              </Link>

              <a
                href="/cv/MAZAVAMANANA_Zeppelin_Tiavy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-cyan-200 transition hover:bg-white/10 sm:w-auto"
              >
                <HiOutlineDownload size={19} />
                Télécharger mon CV
              </a>
            </div>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["R", "L", "T", "M"].map((letter) => (
                  <span
                    key={letter}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-white text-xs font-black text-slate-950"
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-400">
                React, Laravel, Tailwind CSS et MySQL pour construire des solutions rapides, lisibles et évolutives.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-10 rounded-[3rem] bg-blue-500/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src="/images/couverture/zepdev.jpg"
                  alt="Zeppélin Tiavy, développeur web"
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-square lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                    MAZAVAMANANA Zeppélin Tiavy
                  </p>
                  <p className="mt-2 text-xl font-black text-white sm:text-2xl">
                    Développeur web full-stack
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur sm:-left-10">
              <p className="text-2xl font-black text-white">{projects.length}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">projets présentés</p>
            </div>

            <div className="absolute -bottom-5 right-1 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-2xl sm:-right-6">
              <div className="flex items-center gap-2 text-sm font-bold">
                <FaCheckCircle className="text-emerald-500" />
                Mobile • Tablette • Desktop
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-3">
          <Stat value={`${realizedProjects}+`} label="projets réels réalisés" />
          <Stat value="Full-stack" label="frontend, backend et base de données" />
          <Stat value="Madagascar" label="collaboration locale ou à distance" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Des solutions conçues pour servir votre activité"
          description="Au-delà d’un beau design, chaque projet doit aider vos visiteurs à comprendre votre offre et vous contacter facilement."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="absolute right-6 top-5 text-5xl font-black text-slate-100">
                0{index + 1}
              </span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon />
              </div>
              <h3 className="relative mt-6 text-xl font-black text-slate-950">{title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-600">{description}</p>
              <Link
                to="/contact"
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3"
              >
                Parler de ce besoin
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Ma méthode
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Un processus simple, transparent et professionnel
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Vous savez ce qui est en cours, ce qui vient ensuite et comment chaque étape contribue à atteindre votre objectif.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <span className="text-sm font-black text-cyan-300">{step.number}</span>
                  <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Sélection"
            title="Quelques projets récents"
            description="Des réalisations et démonstrations qui présentent ma façon de concevoir des interfaces et applications utiles."
            align="left"
          />
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
          >
            Voir tous les projets
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mes engagements"
            title="Une réalisation propre, claire et adaptée à votre public"
            description="Je privilégie les choix qui améliorent la compréhension, la confiance et la facilité d’utilisation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <Icon className="text-2xl text-blue-600" />
                <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-12 text-center text-white shadow-2xl sm:px-10 lg:px-16 lg:py-16">
          <FaLayerGroup className="mx-auto text-3xl text-cyan-100" />
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Transformons votre idée en une solution web professionnelle
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Décrivez votre besoin, même brièvement. Je vous aiderai à clarifier la structure, les fonctionnalités utiles et la meilleure façon de présenter votre activité.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Demander un devis
              <FaArrowRight />
            </Link>
            <a
              href="mailto:zeppelintiavymazavamanana@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              Envoyer un email
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <SocialLink href="https://www.facebook.com/zeppelin.tiavy" label="Facebook" icon={<FaFacebook />} />
            <SocialLink href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/" label="LinkedIn" icon={<FaLinkedin />} />
            <SocialLink href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY" label="GitHub" icon={<FaGithub />} />
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white px-6 py-7 text-center">
      <p className="text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
            {project.category}
          </span>
          {project.isDemo && (
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-amber-950 shadow">
              Démonstration
            </span>
          )}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{project.stack.slice(0, 3).join(" • ")}</p>
          <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-7 text-slate-600">{project.shortDescription}</p>
        <Link
          to={`/projects/${project.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3"
        >
          Découvrir le projet
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:-translate-y-1 hover:bg-slate-950"
    >
      {icon}
    </a>
  );
}
