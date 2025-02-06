import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [donatorInfo, setDonatorInfo] = useState({
    fullname: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonatorInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !donatorInfo.email) return;

    setIsProcessing(true);

    try {
      // Créer le donateur dans Strapi
      const donatorResponse = await fetch(
        "http://localhost:1337/api/donators",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: donatorInfo,
            /*fullname: donatorInfo.fullname,
            email: donatorInfo.email,
            address: donatorInfo.address,*/
          }),
        }
      );

      if (!donatorResponse.ok) {
        throw new Error(`HTTP error! status: ${donatorResponse.status}`);
      }

      const donatorData = await donatorResponse.json();
      const donatorId = donatorData.data.id;

      // Créer le paiement
      const response = await fetch(
        "http://localhost:1337/api/donations/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            donatorId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { clientSecret, donationId } = await response.json();

      if (!clientSecret) {
        throw new Error(
          "La réponse du serveur ne contient pas de clientSecret"
        );
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: donatorInfo.fullname,
            email: donatorInfo.email,
            address: {
              line1: donatorInfo.address,
            },
          },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        window.location.href = `http://localhost:5173/confirm-payment?donationId=${donationId}`;
      }
    } catch (err) {
      console.error("Erreur détaillée:", err);
      setMessage(
        "Une erreur est survenue lors du traitement du paiement. Veuillez réessayer."
      );
    }

    setIsProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Paiement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            name="fullname"
            value={donatorInfo.fullname}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={donatorInfo.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adresse
          </label>
          <input
            type="text"
            name="address"
            value={donatorInfo.address}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Informations de carte
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#333",
                  letterSpacing: "0.025em",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isProcessing || !stripe || !donatorInfo.email}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {isProcessing ? "Traitement..." : "Payer"}
        </button>
      </form>
      {message && <div className="mt-4 text-red-600">{message}</div>}
    </div>
  );
}

export default CheckoutForm;
