import NeumorphismButton from './NeumorphismButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();  

  // Fonction pour revenir à la page précédente
  const handleBack = () => {
    navigate(-1);  
  };
  return (
    <>

    <div className="overflow-x-hidden relative w-[100%] mx-auto h-72 overflow-hidden mb-12">
    <img
      src="bandeau_blackDog.jpg"
      alt="femme qui serre un husky"
      className="w-full h-[290px] object-cover object-[50%_40%]"
    />
  </div>

    
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 text-gray-800 mb-16">


      <h1 className="text-4xl font-semibold text-center mb-8 text-primary uppercase">
        Politique de Confidentialité
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 1 : PRÉAMBULE
        </h2>
        <p className="leading-7">
          Cette politique de confidentialité a pour but d’informer les visiteurs et utilisateurs du site de l’association
          Parole de chien :
        </p>
        <ul className="list-disc pl-6 leading-7 mt-2">
          <li>Sur la manière dont leurs données personnelles sont collectées, utilisées et protégées.</li>
          <li>Sont considérées comme données personnelles : tout élément permettant d’identifier directement ou indirectement une personne (nom, prénom, adresse email, etc.).</li>
          <li>Sur les droits dont ils disposent concernant leurs données personnelles.</li>
          <li>Sur l’identité du responsable du traitement de ces données.</li>
          <li>Sur la politique du site concernant les cookies.</li>
        </ul>
        <p className="leading-7 mt-4">
  Cette politique complète les mentions légales accessibles ici :{" "}
  <a href="/mentions-legales" className="text-primary hover:text-secondary">
    Mentions Légales
  </a>
</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 2 : DONNÉES COLLECTÉES ET FINALITÉ DU TRAITEMENT
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-secondary">2.1. Données collectées</h3>
        <p className="leading-7">
          Lors de votre navigation sur le site de Parole de chien, les données suivantes peuvent être collectées :
        </p>
        <ul className="list-disc pl-6 leading-7 mt-2">
          <li>Données transmises via le formulaire de contact : nom, prénom, email, message.</li>
          <li>Données techniques liées à votre navigation : adresse IP, type de navigateur, pages consultées.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-4 text-secondary">2.2. Finalité du traitement</h3>
        <p className="leading-7">
          Ces données sont collectées pour les finalités suivantes :
        </p>
        <ul className="list-disc pl-6 leading-7 mt-2">
          <li>Répondre aux messages envoyés via le formulaire de contact.</li>
          <li>Améliorer l’expérience utilisateur sur le site.</li>
          <li>Collecter des statistiques anonymes sur la fréquentation du site (via des cookies).</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-4 text-secondary">2.3. Cookies</h3>
        <p className="leading-7">
          Des cookies peuvent être utilisés pour améliorer la navigation et collecter des statistiques. Vous avez la possibilité d'accepter ou de refuser les cookies via la bannière dédiée.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 3 : CONSERVATION DES DONNÉES
        </h2>
        <p className="leading-7">
          Les données personnelles sont conservées pendant une durée maximale de 3 ans après le dernier contact avec l'utilisateur, sauf obligations légales nécessitant une durée de conservation plus longue.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES
        </h2>
        <p className="leading-7">
          Les données collectées sont traitées par :
        </p>
        <p className="leading-7 font-semibold">Parole de chien</p>
        <p className="leading-7">Siège social : 10 Rue Joseph Liouville, 75015 Paris, France</p>
        <p className="leading-7">Email : contact@parole-de-chien.com</p>
        <p className="leading-7">
          Pour toute question relative à vos données, vous pouvez nous contacter à cette adresse.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 5 : VOS DROITS
        </h2>
        <p className="leading-7">
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 leading-7 mt-2">
          <li>Droit d’accès : connaître les données collectées sur vous.</li>
          <li>Droit de rectification : corriger des données inexactes.</li>
          <li>Droit à l’effacement : demander la suppression de vos données.</li>
          <li>Droit d’opposition : refuser le traitement de vos données dans certains cas.</li>
          <li>Droit à la limitation : restreindre temporairement le traitement de vos données.</li>
        </ul>
        <p className="leading-7 mt-4">
          Pour exercer vos droits, veuillez envoyer un email à{" "}
          <a href="mailto:contact@parole-de-chien.com" className="text-primary hover:text-secondary">
            contact@parole-de-chien.com
          </a>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ARTICLE 6 : MODIFICATIONS DE LA POLITIQUE
        </h2>
        <p className="leading-7">
          Cette politique peut être modifiée pour garantir sa conformité avec la réglementation. Nous vous invitons à consulter régulièrement cette page pour vous tenir informé des éventuels changements.
        </p>
      </section>
      <NeumorphismButton
        onClick={handleBack}
        className="mt-8 bg-secondary text-white py-2 px-6 rounded-full transition hover:bg-secondary-dark"
      >
        Retour
      </NeumorphismButton>
    </div>
    </>
  );
}
