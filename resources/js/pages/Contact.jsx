import { useState } from "react";
import emailjs from "emailjs-com";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const contactInfos = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "zeppelintiavymazavamanana@gmail.com",
    href: "mailto:zeppelintiavymazavamanana@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Téléphone",
    value: "+261 32 55 727 86",
    href: "tel:+261325572786",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Localisation",
    value: "Antsiranana, Madagascar",
    href: null,
  },
];

const socials = [
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/zeppelin.tiavy",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    NProgress.start();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Votre message a bien été envoyé. Merci !", {
        position: "top-right",
        autoClose: 3500,
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("L’envoi a échoué. Vous pouvez aussi me contacter par email ou WhatsApp.", {
        position: "top-right",
        autoClose: 4500,
      });
    } finally {
      NProgress.done();
      setIsSending(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-slate-50">
      <BackgroundDecor />

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-10 text-center text-white shadow-2xl sm:px-8 lg:px-10 lg:py-14">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            <FaEnvelope />
            Contact
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Parlons de votre projet et de vos objectifs
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Décrivez votre activité, le problème à résoudre ou le site que vous souhaitez créer. Même avec une idée encore simple, nous pouvons définir une première direction claire.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="h-fit rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8 lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Coordonnées
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">Échangeons simplement</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Vous pouvez utiliser le formulaire, m’écrire directement ou démarrer une conversation sur WhatsApp.
            </p>

            <a
              href="https://wa.me/261325572786?text=Bonjour%20Zepp%C3%A9lin%2C%20j%27aimerais%20discuter%20d%27un%20projet%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <FaWhatsapp size={21} />
              Écrire sur WhatsApp
            </a>

            <div className="mt-7 space-y-3">
              {contactInfos.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-slate-400">{label}</span>
                      <span className="mt-1 block break-all font-semibold text-white">{value}</span>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-white">Ce que vous obtenez</p>
              <div className="mt-4 space-y-3">
                <MiniPoint text="Un échange clair sur votre besoin" />
                <MiniPoint text="Une proposition adaptée à votre activité" />
                <MiniPoint text="Un suivi régulier pendant le projet" />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-white transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Demande de projet
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Donnez-moi les informations essentielles
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Les champs concernant le type de projet et le budget permettent de préparer une réponse plus utile.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Nom complet"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Adresse email"
                  name="email"
                  type="email"
                  placeholder="vous@entreprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Téléphone / WhatsApp"
                  name="phone"
                  type="tel"
                  placeholder="Optionnel"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <SelectField
                  label="Type de projet"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  options={[
                    "Site vitrine",
                    "Application web",
                    "E-commerce",
                    "Refonte d’un site",
                    "Autre besoin",
                  ]}
                />
              </div>

              <SelectField
                label="Budget indicatif"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={[
                  "À définir ensemble",
                  "Moins de 500 €",
                  "500 € – 1 000 €",
                  "1 000 € – 2 500 €",
                  "Plus de 2 500 €",
                ]}
              />

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Votre besoin
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Présentez votre activité, le résultat recherché, les fonctionnalités importantes et votre délai idéal..."
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-slate-500">
                  Vos informations sont utilisées uniquement pour répondre à votre demande.
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaPaperPlane />
                  {isSending ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer />
    </main>
  );
}

function FormField({ label, name, type, placeholder, value, onChange, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
      >
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function MiniPoint({ text }) {
  return (
    <p className="flex items-center gap-3 text-sm font-medium text-slate-300">
      <FaCheckCircle className="shrink-0 text-cyan-300" />
      {text}
    </p>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
    </div>
  );
}
