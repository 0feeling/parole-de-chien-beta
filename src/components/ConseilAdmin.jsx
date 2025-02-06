import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import MemberModal from "./MemberModal";
import NeumorphismButton from "./NeumorphismButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function PrivacyPolicy({
  isModalOpen,
  setIsModalOpen,
  setMember
}) {
  const navigate = useNavigate();

  // Fonction pour revenir à la page précédente
  const handleBack = () => {
    navigate(-1);
  };

  const teamMembers = [
    {
      fullname: "Beatrice Navarre",
      imgSrc: "TeamMembers/Beatrice_Navarre.jpg",
      role: "Vétérinaire"
    },
    {
      fullname: "Brigitte Atchia Laclech",
      imgSrc: "TeamMembers/Brigitte_Atchia_Laclech.jpeg",
      role: "Présidente, Médecin Gériatre, Retraitée"
    },
    {
      fullname: "Catherine Ringiuier",
      imgSrc: "TeamMembers/Catherine_Ringiuier.jpg",
      role: "Ambassadrice"
    },
    {
      fullname: "Francoise Trin",
      imgSrc: "TeamMembers/Francoise_Trin.jpg",
      role: "Recherche de Fonds"
    },
    {
      fullname: "Sophie Jacob",
      imgSrc: "TeamMembers/Sophie_Jacob.jpg",
      role: "Evènementiel"
    },
    {
      fullname: "Yveline Skala",
      imgSrc: "TeamMembers/Yveline_Skala.jpg",
      role: "Trésorière"
    }
  ];

  return (
    <>
      {/* Image bandeau */}
      <div className="overflow-x-hidden relative w-[100%] mx-auto h-72 overflow-hidden mb-12">
        <img
          src="admin-bandeau.jpg"
          alt="femme qui serre un husky"
          className="w-full h-[290px] object-cover object-[50%_50%]"
        />
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 text-gray-800 mb-16">
        <h1 className="text-4xl font-semibold text-center mb-8 text-primary uppercase">
          Notre Conseil d'administration
        </h1>

        {/* Conseil d'administration */}
        <section className="p-10 relative bg-white">
          <h1 className="text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]"></h1>

          <div className="relative">
            <Swiper
              spaceBetween={10} // Espace entre les images
              slidesPerView={1.5} // Affiche une partie de la diapositive suivante et précédente
              centeredSlides={true} // Centrer l'image active
              breakpoints={{
                640: { slidesPerView: 2.5 }, // Sur écrans moyens
                1024: { slidesPerView: 3 } // Sur grands écrans
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next"
              }}
              className="w-full"
              loop={true}
            >
              {teamMembers.map((member, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="relative group bg-white shadow-lg rounded-lg border-primary p-4 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl"
                    onClick={() => {
                      setIsModalOpen(true);
                      setMember(member);
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <div className="relative w-full h-[350px]">
                        <img
                          src={member.imgSrc}
                          alt={`Photo de ${member.fullname}, ${member.role}`}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                    </div>

                    <div className="bg-[rgb(0,20,137)] p-4 flex flex-col items-center rounded-b-lg">
                      <h3 className="text-xl font-semibold text-white">
                        {member.fullname}
                      </h3>
                      <h4 className="text-gray-300 italic">{member.role}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flèches de navigation */}
            <button
              className="border border-[rgb(212,93,0)] custom-prev absolute top-1/2 left-[-32px] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg z-10 flex justify-center items-center hover:bg-orange-100 transition group"
              aria-label="Précédent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="rgb(212,93,0)"
                className="w-6 h-6 group-hover:stroke-orange-600 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="border border-[rgb(212,93,0)] custom-next absolute top-1/2 right-[-32px] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg z-10 flex justify-center items-center hover:bg-orange-100 transition group"
              aria-label="Suivant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="rgb(212,93,0)"
                className="w-6 h-6 group-hover:stroke-orange-600 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* Bouton de retour */}
        <NeumorphismButton
          onClick={handleBack}
          className="mt-8 bg-secondary text-white py-2 px-6 rounded-full transition hover:bg-secondary-dark"
        >
          Retour
        </NeumorphismButton>
      </div>
    </>
  );
}
