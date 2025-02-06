import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

// Charge clé API publique Stripe
//const stripePromise = loadStripe("VOTRE_CLE_API_PUBLIQUE");

const StripeButton = ({ amount }) => {
  /*const handleCheckout = async () => {
    // Créer une session de paiement
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [{ id: "donation", price: 20 }] }), // A Remplacer par data
    });

    const { sessionId } = await response.json();

    // Redirige vers Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error("Erreur lors de la redirection : ", error.message);
    }
  };*/

  return (
    <Link to={`payment?amount=${amount}`}>
      <button
        //onClick={handleCheckout}
        className="bg-[rgb(212,93,0)] mt-8 mb-8 text-white py-3 px-8 rounded-full transition duration-300 
    shadow-[10px_10px_15px_rgba(0,0,0,0.3),_-10px_-10px_15px_rgba(255,255,255,0.7)] 
    hover:shadow-[8px_8px_12px_rgba(0,0,0,0.4),_-8px_-8px_12px_rgba(255,255,255,0.6)] 
    active:shadow-inner hover:bg-[rgba(212,93,0,0.85)]"
      >
        Procéder au Paiement
      </button>
    </Link>
  );
};

export default StripeButton;
