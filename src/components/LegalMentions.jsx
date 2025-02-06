import React from 'react';
import NeumorphismButton from './NeumorphismButton';
import { useNavigate } from 'react-router-dom';

const LegalMentions = () => {
  const navigate = useNavigate();  
  const handleBack = () => {
    navigate(-1);  
  };
  return (
    <>
      <div className="overflow-x-hidden relative w-[100%] mx-auto h-72 overflow-hidden mb-12">
        <img
          src="bandeau_beagle.jpg"
          alt="femme qui serre un husky"
          className="w-full h-[290px] object-cover object-[50%_70%]"
        />
      </div>
      <section className="p-10 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary uppercase">Mentions Légales</h1>

          <div className="space-y-8">
            {/* Section 1 - Présentation de l'éditeur */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">1. Présentation du site</h2>
              <p>
                Le site internet <strong>Parole de chien</strong> est édité par l’association <strong>Parole de chien</strong>, une organisation à but non lucratif ayant pour objectif de promouvoir la médiation animale pour améliorer le bien-être des personnes vulnérables.
              </p>
              <p>
                L'adresse de l’association : <strong>10 Rue Joseph Liouville, 75015 Paris, France</strong>.
              </p>
              <p>
                Le numéro SIRET de l'association est : <strong>44880874100038</strong>.
              </p>
            </section>

            {/* Section 2 - Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">2. Hébergement</h2>
              <p>
                Le site est hébergé par <strong>OVH</strong>, société par actions simplifiée (SAS) au capital de 10 000 000 €, immatriculée au RCS de Lille Métropole sous le numéro 424 761 419 00045, dont le siège social est situé au 2 rue Kellermann - 59100 Roubaix - France.
              </p>
            </section>

            {/* Section 3 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments accessibles sur le site <strong>Parole de chien</strong> (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est protégé par les droits de propriété intellectuelle en vigueur. Toute reproduction, représentation, modification, publication, transmission ou diffusion, totale ou partielle, des éléments du site, sans l'autorisation préalable de l’association, est interdite.
              </p>
            </section>

            {/* Section 4 - Protection des données personnelles */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">4. Protection des données personnelles</h2>
              <p>
                Conformément à la législation française et européenne en vigueur (RGPD), l’association Parole de chien s'engage à protéger la vie privée des utilisateurs du site. Les informations personnelles collectées sur le site sont uniquement utilisées dans le cadre des activités de l’association et ne seront jamais cédées à des tiers sans votre consentement.
              </p>
              <p>
                Vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition sur vos données personnelles. Pour exercer ce droit, vous pouvez nous contacter par email à l’adresse suivante : <a href="mailto:contact@parole-de-chien.com" className="text-primary hover:underline">contact@parole-de-chien.com</a>.
              </p>
              <p>
                Pour plus d’informations, vous pouvez consulter notre politique de confidentialité disponible <a href="/privacy-policy" className="text-primary hover:underline">ici</a>.
              </p>
            </section>

            {/* Section 5 - Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">5. Responsabilité</h2>
              <p>
                L’association Parole de chien met tout en œuvre pour offrir des informations fiables et à jour sur son site. Cependant, elle ne saurait être tenue responsable de l’utilisation des informations présentes sur le site, ni des erreurs ou omissions qui pourraient survenir.
              </p>
              <p>
                Le site peut contenir des liens vers d’autres sites. L’association Parole de chien n'est en aucun cas responsable du contenu de ces sites externes.
              </p>
            </section>

            {/* Section 6 - Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">6. Cookies</h2>
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur, analyser les tendances et effectuer des statistiques. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies. Vous pouvez toutefois configurer votre navigateur pour refuser ces cookies à tout moment.
              </p>
            </section>

            {/* Section 7 - Modification des mentions légales */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">7. Modification des mentions légales</h2>
              <p>
                L’association Parole de chien se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications seront publiées sur cette page et prendront effet immédiatement.
              </p>
            </section>

            {/* Section 8 - Contact */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">8. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter par email à l’adresse suivante : <a href="mailto:contact@parole-de-chien.com" className="text-primary hover:underline">contact@parole-de-chien.com</a>.
              </p>
            </section>

            <NeumorphismButton
              onClick={handleBack}
              className="mt-8 bg-secondary text-white py-2 px-6 rounded-full transition hover:bg-secondary-dark"
            >
              Retour
            </NeumorphismButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalMentions;
