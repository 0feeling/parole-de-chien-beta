import { FaDog, FaHandshake, FaHeart } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { Link } from "react-router-dom"; // Importation de Link pour gérer le lien

export default function Missions() {
  const missionsList = [
    {
      Icon: ({ className }) => {
        return <FaDog className={className} />;
      },
      title: "Médiation Animale",
      content:
        "Médiation animale avec des chiens, visant à accompagner et améliorer la qualité de vie des personnes vulnérables, telles que celles en situation de handicap, âgées ou isolées. Le chien joue un rôle essentiel dans la rupture de l'isolement en apportant de la chaleur et du réconfort."
    },
    {
      Icon: ({ className }) => {
        return <GiJumpingDog className={className} />;
      },
      title: "Visites Individualisées",
      content:
        "Nos bénévoles rendent visite aux personnes dans leur environnement (chambre, institution) pour une rencontre simple et réconfortante avec nos chiens. Ces moments apportent du bien-être et du lien social, offrant aux résidents une parenthèse joyeuse et apaisante."
    },
    {
      Icon: ({ className }) => {
        return <FaHeart className={className} />;
      },
      title: "Rencontres & Liens Sociaux",
      content:
        "À travers des visites régulières, les bénévoles et leurs chiens favorisent des échanges humains qui créent des liens durables avec les personnes, principalement celles isolées ou vivant en institutions. La présence du chien rompt la solitude et donne un vrai moment de partage."
    },
    {
      Icon: ({ className }) => {
        return <FaHandshake className={className} />;
      },
      title: "Visites Bénévoles avec les Chiens",
      content: (
        <>
          Nos bénévoles se rendent dans des établissements comme des EHPAD ou
          des hôpitaux gériatriques pour offrir des moments de bien-être et de
          complicité aux résidents, en compagnie de leurs chiens. Ces visites
          apportent un réel soutien aux personnes âgées, souvent isolées, et
          créent des liens affectifs forts.
          <br />
          <br />
          Avant chaque visite, les bénévoles suivent un parcours de formation
          approfondie sur la gestion du comportement des chiens et sur les
          besoins spécifiques des personnes vulnérables. De plus, les chiens
          sont soumis à une évaluation par un comportementaliste, et un
          certificat d'aptitude est délivré pour garantir leur bien-être et la
          sécurité des résidents.
          <br />
          <br />
          Pour en savoir plus sur nos bénévoles, découvrez notre équipe en
          cliquant ici : <Link to="/bénévoles">Nos bénévoles</Link>.
        </>
      )
    },
    {
      Icon: ({ className }) => {
        return <IoSchool className={className} />;
      },
      title: "Formation des Bénévoles",
      content:
        "Les bénévoles de l'association suivent une formation complète sur la médiation animale, qui inclut la gestion du comportement des chiens et l'apprentissage des bonnes pratiques pour assurer la sécurité des résidents et des chiens. Cette formation garantit des interventions efficaces et bienveillantes."
    }
  ];

  return (
    <section
      id="mission"
      className="bg-gray-100 flex justify-center border-t-[rgb(212,93,0)]"
    >
      <div className="p-16 flex flex-col gap-4 bg-gray-100">
        {/* Cadre "Nos principales missions" */}
        <div className="p-8 bg-primary-gradient text-white flex flex-col gap-8 h-fit w-full">
          <h2 className="font-semibold text-3xl text-center">
            Quelles sont nos principales missions ?
          </h2>
          <p className="text-center">
            L&apos;association Parole de Chien se concentre principalement sur
            la médiation animale pour améliorer le bien-être des personnes
            vulnérables. <br />
            Ses principales missions incluent :
          </p>
        </div>

        {/* Grille des missions */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="zoom-in"
          data-aos-duration="2500"
          data-aos-delay="200"
        >
          {/* Les 3 premières missions sur la deuxième ligne */}
          {missionsList.slice(0, 3).map(({ Icon, title, content }, i) => (
            <div
              key={i}
              className="group border bg-white p-8 flex flex-col items-center gap-8"
            >
              <div className="rounded-full bg-primary/10 p-4 transition duration-300 group-hover:bg-primary">
                <Icon className="text-primary h-10 w-10 transition duration-300 group-hover:text-white" />
              </div>
              <h2 className="font-bold text-xl">{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>

        {/* 2 dernières missions réorganisées */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="zoom-in"
          data-aos-duration="2500"
          data-aos-delay="200"
        >
          <div className="group border bg-white p-8 flex flex-col items-center gap-8">
            <div className="rounded-full bg-primary/10 p-4 transition duration-300 group-hover:bg-primary">
              <FaHandshake className="text-primary h-10 w-10 transition duration-300 group-hover:text-white" />
            </div>
            <h2 className="font-bold text-xl">
              Visites Bénévoles avec les Chiens
            </h2>
            <p>
              Nos bénévoles se rendent dans des établissements comme des EHPAD
              ou des hôpitaux gériatriques pour offrir des moments de bien-être
              et de complicité aux résidents, en compagnie de leurs chiens. Ces
              visites apportent un réel soutien aux personnes âgées, souvent
              isolées, et créent des liens affectifs forts.
              <br />
              <br />
              Chaque bénévole suit un parcours de formation rigoureux,
              accompagné de son chien, pour garantir que les visites se
              déroulent dans les meilleures conditions possibles, tant pour les
              résidents que pour les animaux.
            </p>
          </div>

          <div className="group border bg-white p-8 flex flex-col items-center gap-8">
            <div className="rounded-full bg-primary/10 p-4 transition duration-300 group-hover:bg-primary">
              <IoSchool className="text-primary h-10 w-10 transition duration-300 group-hover:text-white" />
            </div>
            <h2 className="font-bold text-xl">Formation des Bénévoles</h2>
            <p>
              Les bénévoles de l'association suivent une formation complète sur
              la médiation animale, qui inclut la gestion du comportement des
              chiens et l'apprentissage des bonnes pratiques pour assurer la
              sécurité des résidents et des chiens. Cette formation garantit des
              interventions efficaces et bienveillantes.
              <br />
              Ce programme inclut des tests d'aptitude pour évaluer les chiens,
              ainsi qu'une formation sur les signaux de stress ou d'inconfort,
              afin d'assurer le bien-être de tous.
              <br />
              Pour en savoir plus sur nos volontaires, découvrez notre équipe de{" "}
              <Link
                to="/bénévoles"
                className="text-orange-500 underline hover:text-orange-700"
                onClick={(e) => {
                  e.preventDefault(); // Empêcher le comportement par défaut du lien
                  const target = document.getElementById("team");
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop - 50, // Défilement avec l'offset de 50px
                      behavior: "smooth" // Pour un défilement fluide
                    });
                  }
                }}
              >
                bénévoles
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
