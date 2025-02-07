import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import pour naviguer avec react-router-dom
import NeumorphismButton from "./NeumorphismButton";

const SoutenirMission = () => {
  const donationsRef = useRef(null); // Création d'une référence pour la section Donations
  const navigate = useNavigate(); // Hook pour naviguer vers la page

  const handleDonationClick = () => {
    // Navigation vers la page donations
    navigate("/donations");

    // Défilement jusqu'à la section donations après la navigation
    setTimeout(() => {
      donationsRef.current?.scrollIntoView({
        behavior: "smooth", // Défilement fluide
        block: "start" // Pour s'assurer que la section est en haut de la page
      });
    }, 500); // Un léger délai pour laisser le temps à la navigation
  };

  return (
    <div className="bg-gray-100 py-0 px-0">
      <div className="relative w-full h-72 overflow-hidden bg-gray-200 mt-0 mb-8">
        <img
          src="donne_dons.jpeg"
          alt="chien_marron_bebe"
          className="w-full h-[290px] object-cover"
        />
      </div>

      {/* Intégration de la vidéo de Michel Drucker */}
      <div className="mt-16 text-center">
        <h2
          className="text-4xl font-bold text-center mb-16 mt-24 text-[rgb(212,93,0)] 
       text-shadow-[4px_4px_6px_rgba(0,0,0,0.3),8px_8px_10px_rgba(0,0,0,0.15)] 
       transition hover:text-shadow-[6px_6px_8px_rgba(0,0,0,0.5),10px_10px_12px_rgba(0,0,0,0.2)]"
        >
          Michel Drucker soutient Parole de chien ...
        </h2>
        <p className="mt-4">
          Découvrez le soutien de Michel Drucker, une figure emblématique de la
          télévision, qui met en avant l&apos;importance de la médiation
          animale. <br /> Cette vidéo est un témoignage fort de l&apos;impact de
          notre action auprès des personnes vulnérables.
        </p>
        <div className="flex justify-center my-16">
          <div
            className="relative w-full max-w-2xl aspect-w-16 aspect-h-9"
            style={{
              height: "500px",
              border: "15px solid rgb(0,20,137)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/zlYhAQDgI3Y?start=4"
              title="Michel Drucker soutient Parole de Chien"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Première section : Titre et message général */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2
          className="text-4xl font-bold text-center mb-16 mt-24 text-[rgb(212,93,0)] 
             text-shadow-[4px_4px_6px_rgba(0,0,0,0.3),8px_8px_10px_rgba(0,0,0,0.15)] 
             transition hover:text-shadow-[6px_6px_8px_rgba(0,0,0,0.5),10px_10px_12px_rgba(0,0,0,0.2)]"
        >
          Alors, vous aussi, soutenez notre Mission
        </h2>

        <p className="text-lg text-gray-700">
          Votre soutien est bien plus qu'un simple don. C'est un engagement
          envers des personnes vulnérables, souvent isolées, qui retrouvent le
          sourire grâce à nos interventions.
        </p>
      </div>

      {/* Deuxième section : Arguments détaillés */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Pourquoi vos dons sont essentiels */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold mb-4 text-[rgb(0,20,137)]">
            Pourquoi vos dons sont essentiels ?
          </h3>
          <p className="text-gray-700 mb-4">Vos dons nous permettent de :</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Pérenniser notre mission auprès des personnes vulnérables.</li>
            <li>
              Multiplier nos actions pour recruter, former et accompagner les
              bénévoles.
            </li>
            <li>
              Financer les besoins matériels et renforcer notre communication.
            </li>
          </ul>
        </div>

        {/* L'impact de votre générosité */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold mb-4 text-[rgb(0,20,137)]">
            L’impact de votre générosité
          </h3>
          <p className="text-gray-700 mb-4">
            Grâce à vos dons, nous avons déjà pu :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Former des centaines de binômes maître-chien pour intervenir en
              EHPAD.
            </li>
            <li>
              Organiser des événements pour sensibiliser le public à notre
              cause.
            </li>
            <li>
              Améliorer le bien-être des résidents, leur apportant réconfort et
              sourire.
            </li>
          </ul>
        </div>
      </div>

      {/* Bouton d'appel à l'action */}
      <div className="text-center mt-16">
        <NeumorphismButton onClick={handleDonationClick} className="">
          Faire un Don
        </NeumorphismButton>
      </div>

      <div className="overflow-x-hidden relative w-full h-72 overflow-hidden mt-16">
        <img
          src="bandeau_baton.jpg"
          alt="chien marron qui regarde un baton avec femme qui sourit"
          className="w-full h-[290px] object-cover object-[50%_42%]"
        />
      </div>

      <div ref={donationsRef} id="donations" className="pt-0">
        <h2 className="text-4xl text-center"></h2>
        {/* Contenu de la section de donations */}
      </div>
    </div>
  );
};

export default SoutenirMission;
