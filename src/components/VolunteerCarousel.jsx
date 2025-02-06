import { useState, useEffect } from "react";
import VolunteerModal from "./VolunteerModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function VolunteerCarousel({
  setIsModalOpen,
  setVolunteer,
  volunteersData
}) {
  return (
    <section id="team" className="p-10 relative ">
      <h1 className=" bg-whit text-4xl font-bold text-center mb-16 mt-12 text-[rgb(212,93,0)]">
        Nos Bénévoles et Leur Chien
      </h1>

      <div className="relative">
        <Swiper
          spaceBetween={10} /* Espace entre les images */
          slidesPerView={
            1.5
          } /* Affiche une partie de la diapositive suivante et précédente */
          centeredSlides={true} /* Centrer l'image active */
          breakpoints={{
            640: { slidesPerView: 2.5 }, // Affiche 2.5 diapositives sur les écrans de taille moyenne
            1024: { slidesPerView: 3 } // Affiche 3 diapositives sur les grands écrans
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next"
          }}
          className="w-full"
          loop={true}
        >
          {volunteersData.map((volunteer, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative group bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  setIsModalOpen(true);
                  setVolunteer(volunteer);
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-[350px]">
                    <img
                      src={volunteer.imgSrc}
                      alt={volunteer.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      style={{
                        objectPosition: "50% 30%"
                      }} /* Ajuste le centrage de l'image */
                    />
                  </div>
                </div>

                <div className="bg-[rgb(0,20,137)] p-4 flex flex-col items-center rounded-b-lg">
                  <h3 className="text-xl font-semibold text-white">
                    {volunteer.name} & {volunteer.dogName}
                  </h3>
                  <h4 className="text-gray-300 italic"></h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèche gauche */}
        <button
          className="border border-[rgb(212,93,0)] custom-prev absolute top-1/2 left-[-32px] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg z-10 flex justify-center items-center hover:bg-orange-100 transition group"
          style={{ zIndex: 10 }}
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

        {/* Flèche droite */}
        <button
          className="border border-[rgb(212,93,0)] custom-next absolute top-1/2 right-[-32px] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg z-10 flex justify-center items-center hover:bg-orange-100 transition group"
          style={{ zIndex: 10 }}
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
  );
}
