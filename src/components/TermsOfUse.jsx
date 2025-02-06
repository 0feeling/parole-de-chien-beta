import React from 'react';
import NeumorphismButton from './NeumorphismButton';
import { useNavigate } from 'react-router-dom';

// Fonction pour revenir à la page précédente
const TermsOfUse = () => {
  const navigate = useNavigate();  
  const handleBack = () => {
    navigate(-1);  
  };
  return (
    <>
      <div className="overflow-x-hidden relative w-[100%] mx-auto h-72 overflow-hidden mb-12">
        <img
          src="bandeau_pp2.jpg"
          alt="femme qui serre un husky"
          className="w-full h-[290px] object-cover object-[50%_80%]"
        />
      </div>

      <section className="p-10 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary uppercase">Conditions Générales d'Utilisation</h1>
          <p className="mb-6 text-sm text-gray-600 text-center">Dernière mise à jour : 10 Décembre 2024</p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">1. Présentation du Site</h2>
              <p>
                Le site <strong>Parole de chien</strong> est édité par notre association, spécialisée 
                dans la médiation animale pour améliorer le bien-être des personnes vulnérables.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Adresse email : <a href="mailto:[votre email]" className="text-primary hover:underline">contact@parole-de-chien.com</a></li>
                <li>Siège social : 10 Rue Joseph Liouville, 75015 Paris, France</li>
                <li>Numéro SIRET : 44880874100038</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">2. Objet des Conditions Générales</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions 
                dans lesquelles vous pouvez utiliser le Site. En naviguant sur le Site, vous acceptez sans réserve ces CGU.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">3. Accès et Navigation</h2>
              <p>
                L'accès au Site est gratuit. Cependant, certains services ou fonctionnalités peuvent nécessiter une inscription 
                préalable ou l'acceptation de conditions spécifiques.
              </p>
              <p>
                Vous vous engagez à utiliser le Site conformément aux lois et règlements en vigueur, ainsi qu'aux présentes CGU.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">4. Propriété Intellectuelle</h2>
              <p>
                Tous les éléments du Site (textes, images, vidéos, logos, graphismes, etc.) sont protégés par les lois relatives 
                à la propriété intellectuelle. Toute reproduction, distribution ou utilisation, totale ou partielle, sans 
                l'autorisation expresse de l'association Parole de chien est strictement interdite.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">5. Données Personnelles</h2>
              <p>
                En utilisant le Site, vous pouvez être amené à fournir certaines informations personnelles. Ces données sont 
                collectées et traitées conformément à notre politique de confidentialité, que nous vous invitons à consulter 
                en <a href="/privacy-policy" className="text-primary hover:underline">cliquant ici</a>.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">6. Responsabilités</h2>
              <p>
                Le Site est fourni « en l'état » sans garantie d'aucune sorte. L'association Parole de chien ne pourra être tenue 
                responsable des dommages directs ou indirects résultant de l'utilisation du Site.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">7. Modification des CGU</h2>
              <p>
                Nous nous réservons le droit de modifier les présentes CGU à tout moment. Toute modification sera publiée sur cette page. 
                Il vous appartient de consulter régulièrement les CGU pour rester informé des éventuelles mises à jour.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 uppercase">8. Contact</h2>
              <p>
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter à cette l'adresse : 
                <a href="mailto:[votre email]" className="text-primary hover:underline"> contact@parole-de-chien.com</a>.
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

export default TermsOfUse;
