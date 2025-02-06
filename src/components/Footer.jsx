import { FaFacebook, FaInstagram } from "react-icons/fa";
import NeumorphismButton from "./NeumorphismButton";
import { Link } from "react-router-dom";
// import useScrollToTop from "../hooks/useScrollToTop";

export default function Footer() {
  const usefulLinks = [
    { title: "Accueil", href: "/" }, // Route vers la page d'accueil
    { title: "Mentions légales", href: "/mentions-legales" },
    { title: "Conditions générales d'utilisation", href: "/terms-of-use" },
    { title: "Politique de confidentialité", href: "/privacy-policy" },
    { title: "Notre conseil d'administration", href: "/conseil-admin" }
  ];
  // useScrollToTop(true);

  return (
    <div className="bg-gray-100">
      <div className="p-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <div className="max-w-2xl text-center lg:text-start">
          <h2 className="font-semibold text-3xl mb-4 text-[rgb(0,20,137)]">
            Parole de chien
          </h2>
          <p className="text-[rgb(0,20,137)]">
            DES CHIENS POUR CREER DES LIENS
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div>
            <h3 className="font-semibold text-xl mb-4">Liens utiles</h3>

            <ul>
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    className="transition duration-300 hover:text-secondary focus-visible:outline-secondary"
                    to={link.href} // Utilisation de `to` pour React Router
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact</h3>
            <p>
              <span className="italic"></span> 10 rue Joseph Liouville <br />
              75015 Paris <br />
              <span className="italic"></span>{" "}
              <a href="tel:+33142852339" className="hover:text-secondary">
                01 42 85 23 39
              </a>{" "}
              <br />
              <span className="italic"></span>{" "}
              <a
                href="mailto:contact@parole-de-chien.com"
                className="hover:text-secondary"
              >
                contact@parole-de-chien.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4 text-center">
              Réseaux sociaux
            </h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/parole2chien"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6 transition duration-300 hover:text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/paroledechien"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6 transition duration-300 hover:text-secondary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Newsletter :</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 border rounded"
              />
              <NeumorphismButton className="bg-secondary text-white px-4 py-2 rounded transition hover:bg-secondary-dark">
                S'abonner
              </NeumorphismButton>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-primary-gradient border-t border-gray-400 mt-8">
        <div className="max-w-7xl mx-auto py-4">
          <p className="text-center text-sm text-white">
            Copyright © {new Date().getFullYear()} Parole de chien. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
