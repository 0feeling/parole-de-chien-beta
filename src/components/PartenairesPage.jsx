import React from "react";

const partenairesLogo = [
  {
    imgUrl: "Logo-RegionIDF.png",
    alt: "Région Ile-de-France",
    href: "https://www.iledefrance.fr/",
    message:
      "Nous soutenons Parole de Chien pour promouvoir des initiatives inclusives qui améliorent la vie des citoyens franciliens."
  },
  {
    imgUrl: "Pedigree-logo.png",
    alt: "Pedigree",
    href: "https://www.pedigree.fr/",
    message:
      "Parce que chaque chien mérite de l'amour et de l'attention, nous sommes fiers de contribuer à cette belle cause."
  },
  {
    imgUrl: "petits-freres-des-pauvres-logo.jpg",
    alt: "Fondation Petits Frères des Pauvres",
    href: "https://www.petitsfreresdespauvres.fr/",
    message:
      "Accompagner les plus vulnérables est au cœur de nos actions, et Parole de Chien partage cette mission avec compassion."
  },
  {
    imgUrl: "Purina-Logo.png",
    alt: "Purina",
    href: "https://www.purina.fr/",
    message:
      "Ensemble, nous veillons à renforcer le lien unique entre les humains et leurs compagnons à quatre pattes."
  },
  {
    imgUrl: "Fondation_30_millions_d'amis_logo.png",
    alt: "Fondation 30 millions d'amis",
    href: "https://www.30millionsdamis.fr/",
    message:
      "Notre engagement pour le bien-être animal trouve un écho naturel dans les actions de Parole de Chien."
  },
  {
    imgUrl: "l-arche-des-associations.png",
    alt: "L'Arche des Associations",
    href: "https://www.arche-association.fr/",
    message:
      "Soutenir des initiatives solidaires comme Parole de Chien fait partie intégrante de notre vision associative."
  },
  {
    imgUrl: "logo-club_oscar.png",
    alt: "Club Oscar",
    href: "https://www.club-oscar.fr/",
    message:
      "Nous croyons fermement en la force des partenariats pour créer un impact positif, comme le démontre Parole de Chien."
  },
  {
    imgUrl: "logo-mairie_de_paris.png",
    alt: "Mairie de Paris",
    href: "https://www.paris.fr/",
    message:
      "Améliorer le quotidien des habitants, y compris grâce à la médiation animale, est un objectif que nous partageons."
  },
  {
    imgUrl: "logo-buccosante.jpg",
    alt: "Buccosante",
    href: "https://www.buccosante.eu/",
    message:
      "Le bien-être global passe aussi par des initiatives comme celles de Parole de Chien, qui apportent sourire et sérénité."
  },
  {
    imgUrl: "logo-akinoha.jpeg",
    alt: "Fondation Akinoha",
    href: "https://www.fondationdefrance.org/fr/annuaire-des-fondations/fondation-akinoha",
    message:
      "Nous sommes honorés de soutenir une association qui place l'humain et l'animal au cœur de ses préoccupations."
  }
];

const PartenairesPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
          Nos Partenaires
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Nous remercions chaleureusement nos partenaires pour leur soutien
          précieux.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partenairesLogo.map((partenaire, index) => (
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center"
              key={index}
            >
              <a
                href={partenaire.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={partenaire.imgUrl}
                  alt={partenaire.alt}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
              </a>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {partenaire.alt}
              </h2>
              <p className="text-gray-600">{partenaire.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartenairesPage;
