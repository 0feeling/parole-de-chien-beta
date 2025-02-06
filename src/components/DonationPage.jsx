import React, { useState } from "react";
import StripeButton from "./StripeButton";
import NeumorphismButton from "./NeumorphismButton";

const DonationPage = () => {
  const [customAmount, setCustomAmount] = useState("");

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  return (
    <div
      id="donationsSection"
      className="donation-page bg-white text-gray-800 p-8"
    >
      <h1 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
        Faire un don
      </h1>
      <p className="text-lg text-center mb-8">
        Votre soutien est essentiel pour améliorer le bien-être des personnes
        vulnérables.
      </p>

      {/* Options de don */}
      <div className="don-options flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        {[20, 50, 100].map((amount) => (
          <button
            key={amount}
            className="bg-[rgb(0,181,226)] text-white py-3 px-6 rounded-full hover:bg-[rgba(0,181,226,0.75)] transition"
            onClick={() => setCustomAmount(amount)}
          >
            {amount}€
          </button>
        ))}
        <input
          type="number"
          placeholder="Autre"
          className="border border-gray-300 rounded-lg py-2 px-4 w-32 sm:mt-0 mt-4"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
      </div>

      {/* Bouton Stripe */}
      <div className="text-center mb-12">
        <StripeButton amount={customAmount || 10} />
      </div>

      {/* Don par chèque */}
      <div className="text-center mb-8">
        <p className="mb-12">
          Vous préférez payer par <strong>chèque ?</strong> Téléchargez le
          bulletin de don :
        </p>
        <NeumorphismButton
          className="mb-12"
          onClick={() =>
            window.open(
              "http://217.160.165.61/parole/wp-content/uploads/2015/08/bulletin-%C3%A0-imprimer.pdf",
              "_blank"
            )
          }
        >
          Télécharger le bulletin
        </NeumorphismButton>
      </div>

      {/* Informations fiscales */}
      <div className="tax-info bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
          Vos avantages fiscaux
        </h2>
        <p>
          <strong>Particuliers :</strong> <br />
          66% de réduction d’impôts sur votre don. <br />
          <em>
            Exemple : un don de 60€ vous coûte réellement 20€ après déduction.
          </em>
        </p>
        <p className="mt-8 mb-16">
          <strong>Entreprises :</strong> <br />
          Réduction de 60% sur l’impôt sur les sociétés, La réduction s'applique
          dans la limite de 20 % du revenu imposable.
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
