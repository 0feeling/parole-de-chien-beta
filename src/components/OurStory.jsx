import React from "react";

const OurStory = () => {
  return (
    <section
      id="ourStory"
      className="bg-white border-[rgb(212,93,0)] border-t-[9px] py-16 px-8"
    >
      <div className="grid grid-cols-2 gap-4 mt-8 mb-12 sm:grid-cols-2 md:grid-cols-4">
        <img
          src="./Leeloo5.jpeg"
          alt="Isabelle de Tournemire et Youky"
          className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
          style={{ objectPosition: "100% 59%" }}
        />
        <img
          src="./Bene-Jedi-MmeB.jpg"
          alt="Isabelle de Tournemire et Youky"
          className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
          style={{ objectPosition: "100% 40%" }}
        />
        <img
          src="./Dana-bisou.jpg"
          alt="Isabelle de Tournemire et Youky"
          className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
          style={{ objectPosition: "100% 30%" }}
        />
        <img
          src="./Visite-Raynata.jpeg"
          alt="Isabelle de Tournemire et Youky"
          className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
          style={{ objectPosition: "100% 15%" }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
          Notre histoire
        </h2>

        {/* Citation */}
        <blockquote className="italic text-xl mb-8">
          « Savez-vous qu’ils parlent à leur armoire ? »
        </blockquote>

        {/* Histoire */}
        <p className="text-lg text-gray-700 mb-8">
          Cette phrase, entendue en 2000 par Isabelle de Tournemire lors d’une
          conférence d’un médecin gériatrique, fut le déclic pour elle. Inspirée
          par les pratiques de médiation animale au Canada et après plusieurs
          formations, elle décide, accompagnée de son golden retriever Sumo,
          d’effectuer des visites dans un hôpital gériatrique parisien.
          Rapidement, les patients réclament la présence du chien.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Ainsi naît Parole de Chien. Depuis plus de 20 ans, l'association
          permet aux bénévoles de partager la joie d’avoir un chien avec les
          plus isolés, apportant un soutien précieux à ceux qui en ont le plus
          besoin.
        </p>

        {/* Témoignage */}
        <div className="bg-[rgb(0,20,137)] text-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-lg italic">
            « La visite du chien me réconforte, m’apaise, m’égaye selon les
            jours »
          </p>
          <p className="text-sm mt-4">
            Lucienne B., patiente à l’hôpital Broca
          </p>
        </div>

        {/* Mot de la fondatrice */}
        <h3 className="font-semibold text-2xl text-[rgb(0,20,137)] mt-14 mb-6">
          Le mot de la Fondatrice
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Une boule de poils qui entre dans une chambre, vous regarde, vous
          lèche la main, se colle contre vous... Cela peut sembler dérisoire
          pour certains, mais pour d'autres, c'est un geste plein de sens. Nous
          lisons dans leurs regards une profonde solitude, parfois même de la
          souffrance.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Il arrive parfois que ces émotions soient exprimées avec pudeur,
          tristesse ou colère. Mais ce qui est sûr, c’est qu’ils savent nous
          montrer à quel point le chien qui vient leur rendre visite
          régulièrement est un rayon de lumière dans leur quotidien.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Pour certains, le jour de la visite du chien devient un véritable
          événement, un moment qui leur donne le courage de se lever, de
          s’habiller, ou même d'accepter des soins difficiles. C'est pour ces
          moments, pour ces personnes, que, depuis plus de 20 ans, notre équipe
          et sa petite meute se mobilisent.
        </p>

        /* <div className="relative">
          <img
            src="/paws-vec1.svg"
            alt="Icône"
            className="w-[110px] h-[110px] absolute translate-x-[-30px] translate-y-[40px]"
          />
        </div>
        <div className="relative">
          <img
            src="/paws-vec1.svg"
            alt="Icône"
            className="w-[110px] h-[110px] absolute translate-x-[200px] translate-y-[-40px]"
          />
        </div> */

        {/* Photo fondatrice */}
        <div className="flex justify-center mt-8">
          <img
            src="./Djazie_Isabelle(1).jpg"
            alt="Isabelle de Tournemire et Youky"
            className="w-[300px] h-[300px] object-center object-cover rounded-lg shadow-md"
            style={{ objectPosition: "100% 30%" }}
          />
        /*</div>
        <div className="relative">
          <img
            src="/paws-vec1.svg"
            alt="Icône"
            className="w-[110px] h-[110px] absolute translate-x-[200px] translate-y-[-90px]"
          />
        </div> */
      </div>
    </section>
  );
};

export default OurStory;
