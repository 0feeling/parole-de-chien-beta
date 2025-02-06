import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Liste des liens pour la navbar
  const links = [
    { name: "L'association", id: "ourStory", offset: 50 },
    { name: "Notre mission", id: "mission", offset: 40 },
    { name: "Notre équipe", id: "team", offset: 50 },
    { name: "Nos partenaires", path: "/partenaires-page" },
    { name: "Nous contacter", path: "/contact-page" }
  ];

  // Liste des boutons
  const buttons = [
    { name: "Devenir Bénévole", id: "devenirVolontaire", offset: 170 },
    { name: "Faire un don", id: "donationsSection", offset: 55 }
  ];

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Utilisation du hook pour gérer le scroll fluide
  useSmoothScroll(scrollTarget);

  const handleClick = (id, offset) => {
    if (location.pathname !== "/") {
      // Si on n'est pas à la racine, redirige vers "/" avant de scroller
      navigate("/");
      setScrollTarget({ id, offset });
    } else {
      // Si on est déjà à la racine, scrolle directement
      setScrollTarget({ id, offset });
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null); // Réinitialise l'état après le défilement
      }
    }
  }, [scrollTarget, location]);

  return (
    <>
      <header
        className={`fixed z-20 top-0 left-0 w-full h-24 flex justify-center items-center transition-all duration-300 ${
          isScrolled ? "bg-[#001489]" : "bg-transparent"
        }`}
      >
        <nav className="relative flex px-16 justify-between w-full text-gray-600">
          <div>
            <Link to="/">
              <img className="h-16" src="logo.png" alt="logo" />
            </Link>
          </div>
          <div className="hidden items-center gap-8 xl:flex">
            <ul className="flex gap-8">
              {links.map((link, i) => (
                <li key={i}>
                  {link.id ? (
                    <button
                      className={`${
                        isScrolled ? "text-white" : "text-black"
                      } transition-colors duration-300 hover:text-secondary`}
                      onClick={() => handleClick(link.id, link.offset)}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${
                        isScrolled ? "text-white" : "text-black"
                      } transition-colors duration-300 hover:text-secondary`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-8">
              {buttons.map((button, i) => (
                <button
                  key={i}
                  className={`${
                    isScrolled
                      ? "text-white border-white hover:bg-secondary hover:text-white hover:border-secondary"
                      : "text-black border-black hover:bg-secondary hover:text-white hover:border-secondary"
                  } border-2 rounded-full py-2 px-4 transition-colors duration-300`}
                  onClick={() => handleClick(button.id, button.offset)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center xl:hidden">
            <GiHamburgerMenu
              className={`h-8 w-8 cursor-pointer ${
                isScrolled ? "text-white" : "text-black"
              }`}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
        </nav>
        <div
          className={`absolute right-0 top-24 ${
            isOpen ? "flex xl:hidden" : "hidden"
          } flex-col gap-4 py-8 px-16 ${
            isScrolled ? "bg-black/90" : "bg-white/90"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link, i) => (
              <li key={i}>
                {link.id ? (
                  <button
                    className={`${
                      isScrolled ? "text-white" : "text-black"
                    } transition-colors duration-300 hover:text-secondary`}
                    onClick={() => {
                      handleClick(link.id, link.offset);
                      setIsOpen(false); // Ferme le menu après clic
                    }}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      isScrolled ? "text-white" : "text-black"
                    } transition-colors duration-300 hover:text-secondary`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="pt-24"></section>
    </>
  );
};

export default Header;
