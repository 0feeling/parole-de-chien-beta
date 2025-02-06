import { useRef } from "react";

export default function Partenaires() {
  const partenairesLogo = [
    {
      imgUrl: "Logo-RegionIDF.png",
      alt: "Région Ile-de-France",
      href: "https://www.iledefrance.fr/"
    },
    {
      imgUrl: "Pedigree-logo.png",
      alt: "Pedigree",
      href: "https://www.pedigree.fr/"
    },
    {
      imgUrl: "petits-freres-des-pauvres-logo.jpg",
      alt: "Fondation Petits Frères des Pauvres",
      href: "https://www.petitsfreresdespauvres.fr/"
    },
    {
      imgUrl: "Purina-Logo.png",
      alt: "Purina",
      href: "https://www.purina.fr/"
    },
    {
      imgUrl: "Fondation_30_millions_d'amis_logo.png",
      alt: "Fondation 30 millions d'amis",
      href: "https://www.30millionsdamis.fr/"
    },
    {
      imgUrl: "l-arche-des-associations.png",
      alt: "L'Arche des Associations",
      href: "https://www.arche-association.fr/"
    },
    {
      imgUrl: "logo-club_oscar.png",
      alt: "Club Oscar",
      href: "https://www.club-oscar.fr/"
    },
    {
      imgUrl: "logo-mairie_de_paris.png",
      alt: "Mairie de Paris",
      href: "https://www.paris.fr/"
    },
    {
      imgUrl: "logo-buccosante.jpg",
      alt: "Buccosante",
      href: "https://www.buccosante.eu/"
    },
    {
      imgUrl: "logo-akinoha.jpeg",
      alt: "Fondation Akinoha",
      href: "https://www.fondationdefrance.org/fr/annuaire-des-fondations/fondation-akinoha"
    }
  ];

  const logosToDisplay = [
    ...partenairesLogo,
    ...partenairesLogo,
    ...partenairesLogo
  ];

  // Référence pour le conteneur
  const scrollContainerRef = useRef(null);

  // Fonction pour stopper l'animation
  const stopAnimation = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.animationPlayState = "paused";
    }
  };

  // Fonction pour redémarrer l'animation
  const resumeAnimation = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="bg-gray-100 h-28 overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(1%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="flex overflow-hidden relative w-full h-full opacity-0 animate-[fadeIn_2s_forwards]">
        <div
          className="flex gap-5 animate-[scroll_200s_linear_infinite] will-change-transform"
          ref={scrollContainerRef}
          onMouseOver={stopAnimation}
          onMouseOut={resumeAnimation}
          style={{ animationPlayState: "running" }}
        >
          {logosToDisplay.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank" // nouvel onglet
              rel="noopener noreferrer" // Sécurise l'ouverture dans un nouvel onglet
              className="block w-[10vw] max-w-[150px] h-full max-h-[80px] flex justify-center items-center pt-7"
            >
              <img
                src={item.imgUrl}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
