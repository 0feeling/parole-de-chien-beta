import React from "react";
import { Link } from "react-router-dom";

const Temoignages = () => {
  return (
    <div className="pr-0">
      <div className="overflow-x-hidden w-full h-72 overflow-hidden mt-8 mb-8">
        <img
          src="bandeau_temoignage.jpg"
          alt="chien_blonde"
          className="w-full h-[290px] object-cover object-[50%_55%]"
        />
      </div>

      <div className="bg-gray-100 p-14 m-12">
        <h2 className="text-3xl font-semibold text-center text-[rgb(0,20,137)] mb-6">
          Témoignages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div
            className="temoignage-card p-4 border rounded-lg shadow-lg bg-white"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-delay="270"
          >
            <p className="text-gray-700 mb-4">
              « La visite du chien me rappelle la maison, où j’ai toujours eu
              des chiens. Sa présence me réconforte, m’apaise ou m’égaye selon
              les jours ».
            </p>
            <p className="font-semibold text-right">
              - Naty V., Patiente à l’Hôpital Broca.
            </p>
          </div>
          <div
            className="temoignage-card p-4 border rounded-lg shadow-lg bg-white"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-delay="250"
          >
            <p className="text-gray-700 mb-4">
              « Les activités avec le chien permettent un contact affectif et
              une stimulation physique et mémorielle. Certaines personnes qui
              ont eu des animaux retrouvent des souvenirs grâce au chien ».
            </p>
            <p className="font-semibold text-right">
              - Tony P., Animateur à La Maison des Parents.
            </p>
          </div>
          <div
            className="temoignage-card p-4 border rounded-lg shadow-lg bg-white"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            <p className="text-gray-700 mb-4">
              « Parole de Chien, c’est l’animation qui a le plus de succès. Nous
              avons dû créer 2 groupes tant les participants étaient nombreux! »{" "}
            </p>
            <p className="font-semibold text-right">
              {" "}
              Stéphane L., animateur à la Maison St Jean de Malte.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 mb-6">
          <Link
            to="/temoignages"
            className="bg-[rgb(212,93,0)] text-white py-3 px-8 rounded-full transition duration-300 
    shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.7)] 
    hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),_-4px_-4px_8px_rgba(255,255,255,0.6)] 
    active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.6)] 
    hover:bg-[rgba(212,100,10,1)] inline-block w-auto max-w-full sm:max-w-xs py-3 px-8 mx-auto"
          >
            Voir tous les témoignages
          </Link>
        </div>
      </div>
      <div className="py-8 px-8">
        <div className="grid grid-cols-2 gap-4 mt-8 mb-12 sm:grid-cols-2 md:grid-cols-4">
          <img
            src="./Visite-Lilou2.jpeg"
            alt="Isabelle de Tournemire et Youky"
            className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
            style={{ objectPosition: "100% 40%" }}
          />
          <img
            src="./Visite-Sissi.jpeg"
            alt="Isabelle de Tournemire et Youky"
            className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
            style={{ objectPosition: "80% 30%" }}
          />
          <img
            src="./Visite-Leeloo1.jpeg"
            alt="Isabelle de Tournemire et Youky"
            className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
            style={{ objectPosition: "100% 30%" }}
          />
          <img
            src="./Visite-Rita.jpeg"
            alt="Isabelle de Tournemire et Youky"
            className="w-full h-[250px] object-center object-cover rounded-lg shadow-md"
            style={{ objectPosition: "100% 30%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
