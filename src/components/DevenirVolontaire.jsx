import React, { useState, useEffect } from "react";
import { FaUnderline } from "react-icons/fa";
import NeumorphismButton from "./NeumorphismButton";
import useSmoothScroll from "../hooks/useSmoothScroll"; // Importer le hook personnalisé

const DevenirVolontaire = () => {
  // Usestate pour contrôler la visibilité du Google Form
  const [showForm, setShowForm] = useState(false);

  // Fonction pour afficher le formulaire
  const handleClick = () => {
    setShowForm(true);
  };

  // Utilisation du hook personnalisé pour scroller vers le formulaire
  useSmoothScroll("formulaire", showForm); // On active le défilement quand showForm est vrai

  return (
    <section id="devenirVolontaire">
      <div className="overflow-x-hidden mx-auto h-72 overflow-hidden mt-16">
        <img
          src="bandeau_husky.png"
          alt="femme qui serre un husky"
          className="w-full h-[290px] object-cover object-[50%_70%]"
        />
      </div>

      <div className="devenir-volontaire-page p-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
          Devenir Bénévole
        </h1>

        {/* Conteneur flex pour les boîtes côte à côte */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
  {/* Boîte de gauche */}
  <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="bg-white p-6 rounded-lg shadow-lg w-full">
    <h2 className="text-3xl font-bold mb-4 text-[rgb(0,20,137)]">Qui recherche on ?</h2>
    <p className="mb-4">
      <strong>Pour apporter sourire et réconfort</strong> à des personnes
      âgées et isolées en EHPAD, <strong>vous</strong> pouvez rejoindre notre association
      si :
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Vous êtes prêt à donner régulièrement un peu de votre <strong>temps libre</strong>.</li>
      <li>Vous habitez à <strong>Paris</strong> ou en <strong>Île-de-France</strong>.</li>
      <li><strong>Votre chien</strong> doit répondre aux <strong>critères suivants :</strong></li>
      <ul className="list-disc list-inside ml-4">
        <li>Âgé de 2 à 8 ans</li>
        <li>Très sociable et équilibré</li>
        <li>Ayant une bonne éducation de base</li>
        <li>En bonne santé</li>
        <li>À jour de ses vaccins</li>
        <li>Impeccable sur le plan de l’hygiène</li>
      </ul>
    </ul>
    <p className="text-lg font-semibold">
      Si vous vous reconnaissez ici,<br />
      Vous correspondez à nos critères de sélection et nous vous invitons donc à remplir le
      <span style={{ color: "rgb(212,93,0)" }}> formulaire d'inscription </span>
      ci-dessous.
    </p>
  </div>

  {/* Boîte de droite */}
  <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" 
  className="bg-white p-6 rounded-lg shadow-lg w-full">
    <h2 className="text-3xl font-bold mb-4 text-[rgb(0,20,137)]">Comment se passe le recrutement ?</h2>
    <p>
      Afin d'assurer le <strong>bon déroulement du processus de recrutement,</strong> veuillez suivre les étapes ci-dessous:
      
    </p>
    <ol className="list-decimal list-inside space-y-3">
      <li className="mt-4">
        Vous remplissez le <strong>formulaire d'inscription.</strong> Nous vous contactons ensuite
        pour un échange.
      </li>
      <li>
        <strong>Une visite d'observation :</strong> vous suivez un de nos bénévoles en
        visite (sans votre chien) pour découvrir l’activité.
      </li>
      <li>
        <strong>Test d’aptitude :</strong> votre chien est évalué pendant 45 minutes par
        notre comportementaliste. Divers critères sont testés (sociabilité, équilibre émotionnel, éducation de base).
      </li>
      <li>
        <strong>Entretien avec la directrice :</strong> évaluation de vos motivations.
      </li>
      <li>
        <strong>Formation collective :</strong> vous participez à une journée de formation
        avec votre chien.
      </li>
      <li>
        <strong>Formation individuelle :</strong> vous êtes accompagné en EHPAD avant de
        commencer les visites seul.
      </li>
    </ol>
  </div>
</div>

        {/* Intégration du Google Form uniquement si l'état showForm est vrai */}
        {showForm && (
          <div id="formulaire" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center underline">
              Formulaire de candidature
            </h2>
            <p className="text-lg font-semibold mb-6 text-center">
              Maintenant que j'ai bien lu les critères de sélection, je peux
              remplir le Formulaire de selection :
            </p>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Iframe du formulaire Google */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScXUePre1RD3Ybry0r5g7QbGfKvgZI9cQvbSLmyhqZlysMd5Q/viewform?fbzx=-7617289220180302395"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Formulaire de candidature"
              >
                Chargement...
              </iframe>
            </div>
          </div>
        )}

        <div className="text-center">
          <p>
            Tous les chiens peuvent devenir chien visiteur quelle que soit leur
            race ou leur taille, sauf ceux de catégories 1 et 2. L’essentiel est
            qu’ils soient « bien dans leurs poils » et puissent se poser
            sereinement dans une chambre !
          </p>
        </div>

        {/* Lien pour postuler */}
        <div className="text-center mb-4 mt-8">
          <NeumorphismButton
            onClick={handleClick}
            className=""
          >
            Je postule
          </NeumorphismButton>
        </div>
      </div>
    </section>
  );
};

export default DevenirVolontaire;
