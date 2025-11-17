import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    NProgress.start();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC
    )
      .then(
        () => {
          NProgress.done();
          toast.success("Merci pour votre message !", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          NProgress.done();
          toast.error("Une erreur est survenue. Veuillez réessayer.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide">Contactez-moi</h2>
          <div className="mt-2 h-1 w-24 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Infos */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 text-xl" />
              <span className="text-gray-700">zeppelintiavymazavamanana@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-indigo-600 text-xl" />
              <span className="text-gray-700">+261 32 55 727 86</span>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 text-xl" />
              <span className="text-gray-700">Antsiranana, Madagascar</span>
            </div>

            <p className="text-gray-600 mt-4">
              N'hésitez pas à m'envoyer un message pour toute question, projet ou collaboration.
            </p>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Notifications */}
      <ToastContainer />
    </section>
  );
}
