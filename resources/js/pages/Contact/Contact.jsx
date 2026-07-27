import React, { useState } from "react";
import emailjs from "emailjs-com";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const contactInfos = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "zeppelintiavymazavamanana@gmail.com",
      href: "mailto:zeppelintiavymazavamanana@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Téléphone",
      value: "+261 32 55 727 86",
      href: "tel:+261325572786",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Localisation",
      value: "Antsiranana, Madagascar",
      href: null,
    },
  ];

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/zeppelin.tiavy",
      hover: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/",
      hover: "hover:bg-sky-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY",
      hover: "hover:bg-slate-700",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    NProgress.start();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          NProgress.done();
          setIsSending(false);

          toast.success("Merci pour votre message ! Je vous répondrai bientôt.", {
            position: "top-right",
            autoClose: 3000,
          });

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          NProgress.done();
          setIsSending(false);

          toast.error("Une erreur est survenue. Veuillez réessayer.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <BackgroundDecor />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-slate-950 px-5 py-10 text-center text-white shadow-2xl sm:px-8 lg:px-10">
          <p className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            <FaEnvelope />
            Contact
          </p>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Parlons de votre projet
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Vous avez une idée, un besoin ou une opportunité de collaboration ?
            Envoyez-moi un message et discutons ensemble d’une solution moderne,
            claire et professionnelle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* INFOS */}
          <aside className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Informations
            </p>

            <h2 className="text-2xl font-black sm:text-3xl">
              Restons en contact
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Je suis disponible pour échanger sur vos projets web, vos besoins
              en développement ou toute demande de collaboration professionnelle.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfos.map((info) =>
                info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <ContactIcon>{info.icon}</ContactIcon>

                    <div>
                      <p className="text-sm text-slate-400">{info.label}</p>
                      <p className="mt-1 break-all font-semibold text-white transition group-hover:text-cyan-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <ContactIcon>{info.icon}</ContactIcon>

                    <div>
                      <p className="text-sm text-slate-400">{info.label}</p>
                      <p className="mt-1 font-semibold text-white">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-sm font-semibold text-slate-300">
                Réseaux professionnels
              </p>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-white transition hover:-translate-y-1 ${social.hover}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <MiniPoint text="Réponse professionnelle" />
              <MiniPoint text="Collaboration possible à distance" />
              <MiniPoint text="Développement web moderne" />
            </div>
          </aside>

          {/* FORMULAIRE */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Envoyer un message
              </p>

              <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Décrivez votre besoin
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Remplissez le formulaire ci-dessous. Je vous répondrai dans les
                meilleurs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Nom complet"
                  htmlFor="name"
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                />

                <FormField
                  label="Adresse email"
                  htmlFor="email"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-moi de votre projet, de vos besoins ou de votre demande..."
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <FaPaperPlane />
                  {isSending ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
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

function ContactIcon({ children }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
      {children}
    </div>
  );
}

function MiniPoint({ text }) {
  return (
    <p className="flex items-center gap-3 text-sm font-medium text-slate-300">
      <FaCheckCircle className="text-cyan-300" />
      {text}
    </p>
  );
}

function FormField({
  label,
  htmlFor,
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={htmlFor}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        required
      />
    </div>
  );
}