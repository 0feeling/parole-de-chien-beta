export default function MemberModal({ member, setIsModalOpen }) {
  return (
    <div className="fixed z-30 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      {/* Fond transparent avec dégradé */}
      <div
        className="fixed z-40 w-full h-full top-0 left-0 bg-gradient-to-br from-[rgb(0,20,137)] to-[rgb(0,181,226)] opacity-75"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* Contenu de la modale */}
      <div className="relative z-50 bg-white p-6 shadow-xl rounded-md max-w-[90%] sm:max-w-[60%] md:max-w-[50%]">
        {/* Croix pour fermer */}
        <button
          className="absolute top-[-16px] right-[-19px] p-4 text-[rgb(212,93,0)] hover:text-orange-600 focus:outline-none"
          onClick={() => setIsModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Contenu */}
        <div className="flex flex-col items-center">
          <img
            src={member.imgSrc}
            alt={member.fullname}
            className="w-full max-h-[600px] object-cover rounded-md"
          />
          <h3 className="mt-4 text-2xl font-bold text-[rgb(0,20,137)]">
            {member.fullname}
          </h3>
          <h4 className="text-lg text-gray-600 italic">{member.role}</h4>
        </div>
      </div>
    </div>
  );
}
