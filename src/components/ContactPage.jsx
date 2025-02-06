import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici il faut ajouter la logique pour envoyer les données du formulaire
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="overflow-x-hidden relative w-[100%] mx-auto h-72 overflow-hidden mb-2">
        <img
          src="bandeau_soleil.jpg"
          alt="femme qui serre un husky"
          className="w-full h-[290px] object-cover object-[50%_18%]"
        />
      </div>
      <div className="contact-page">
        <section className="contact-header text-center py-16">
          <h1 className="text-4xl font-bold text-center mb-16 mt-8 text-[rgb(212,93,0)]">
            Nous contacter
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Vous avez une question ? N'hésitez pas à nous contacter, nous serons
            heureux de vous répondre.
          </p>
        </section>

        <section className="contact-form-section max-w-4xl mx-auto p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Envoyer un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-800">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg text-gray-800">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[rgb(212,93,0)] text-white py-3 px-8 rounded-full transition duration-300 
      shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.7)] 
      hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),_-4px_-4px_8px_rgba(255,255,255,0.6)] 
      active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.6)] 
      hover:bg-[rgba(212,100,10,1)]"
            >
              Envoyer
            </button>
          </form>
        </section>

        <section className="contact-info-section bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Coordonnées
            </h2>
            <p className="text-lg text-center mb-14">
              Vous pouvez également nous contacter via les informations
              suivantes :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold">Adresse</h3>
                <p className="mt-2">
                  10 rue Joseph Liouville, 75015 Paris, France
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Téléphone</h3>
                <p className="mt-2">+33 1 42 85 23 39</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="mt-2">contact@parole-de-chien.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Horaires</h3>
                <p className="mt-2">Lun-Ven: 9h00 - 18h00</p>
                <p className="mt-2">Samedi: 10h00 - 14h00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Où nous trouver :
            </h2>
            <div className="relative w-full h-80">
              <iframe
                className="absolute w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5075724458195!2d2.292292015674042!3d48.85884477928789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f5e1b8c418b%3A0x3991cb833d9a30ab!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1675293102723!5m2!1sfr!2sfr"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
