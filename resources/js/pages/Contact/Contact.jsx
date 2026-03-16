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
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

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
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Titre */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Vous avez une idée, un besoin ou une opportunité de collaboration ?
            Envoyez-moi un message et discutons ensemble d’une solution moderne,
            claire et professionnelle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Bloc infos */}
          <div className="rounded-[1.75rem] border border-white/60 bg-slate-900 p-6 text-white shadow-2xl sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Informations
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Restons en contact
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Je suis disponible pour échanger sur vos projets web, vos besoins
              en développement ou toute demande de collaboration professionnelle.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="break-all font-medium text-white">
                    zeppelintiavymazavamanana@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Téléphone</p>
                  <p className="font-medium text-white">+261 32 55 727 86</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Adresse</p>
                  <p className="font-medium text-white">Antsiranana, Madagascar</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm text-slate-400">Réseaux professionnels</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-sky-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-slate-700"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 md:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Envoyer un message
              </p>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Décrivez votre besoin
              </h3>
              <p className="mt-3 text-slate-600">
                Remplissez le formulaire ci-dessous. Je vous répondrai dans les
                meilleurs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Adresse email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
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
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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