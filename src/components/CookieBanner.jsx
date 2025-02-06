import React, { useState } from "react";

const CookieBanner = () => {
  const [isAccepted, setIsAccepted] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );
  const [isRejected, setIsRejected] = useState(
    localStorage.getItem("cookiesRejected") === "true"
  );

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(true);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesRejected", "true");
    setIsRejected(true);
  };

  if (isAccepted || isRejected) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center z-50">
      <p className="mb-4">
        Ce site utilise des cookies pour améliorer votre expérience et collecter
        des données statistiques. Consultez notre{" "}
        <a href="/privacy-policy" className="underline">
          politique de confidentialité
        </a>.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleAccept}
          className="bg-[rgb(212,93,0)] text-white px-4 py-2 rounded hover:bg-[rgba(212,100,10,1)] transition"
        >
          Accepter les cookies
        </button>
        <button
          onClick={handleReject}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Refuser les cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
