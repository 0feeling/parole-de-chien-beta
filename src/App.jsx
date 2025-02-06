import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partenaires from "./components/Partenaires";
import PartenairesPage from "./components/PartenairesPage";
import OurStory from "./components/OurStory.jsx";
import Missions from "./components/Missions";
import VolunteerCarousel from "./components/VolunteerCarousel";
import Temoignages from "./components/Temoignages";
import TemoignagesPage from "./components/TemoignagesPage";
import DevenirVolontaire from "./components/DevenirVolontaire";
import DonationPage from "./components/DonationPage";
import MemberModal from "./components/MemberModal";
import VolunteerModal from "./components/VolunteerModal";
import CookieBanner from "./components/CookieBanner";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SoutenirMission from "./components/SoutenirMission";
import TermsOfUse from "./components/TermsOfUse";
import LegalMentions from "./components/LegalMentions";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPage from "./components/ContactPage";
import ConseilAdmin from "./components/ConseilAdmin";

// Composant qui réinitialise le scroll en haut à chaque changement de route
function UseScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // S'assurer que la page revient en haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  // État pour gérer l'ouverture des modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [member, setMember] = useState(null); // Membre sélectionné pour afficher les détails
  const [volunteer, setVolunteer] = useState(null); // Bénévole sélectionné pour afficher les détails
  const [scrollToTopEnabled, setScrollToTopEnabled] = useState(false); // Activation du bouton "scroll to top"

  // Données fictives des bénévoles pour l'exemple
  const [volunteersData, setVolunteersData] = useState([
    { name: "Fanny", dogName: "Nikki", imgSrc: "Fanny-et-Nikki.jpeg" },
    { name: "Chiara", dogName: "Iago", imgSrc: "Chiara-et-Iago.jpg" },
    { name: "Chiara", dogName: "Iago", imgSrc: "Chiara-et-Iago.jpg" },
    { name: "Chiara", dogName: "Iago", imgSrc: "Chiara-et-Iago.jpg" }
  ]);

  useEffect(() => {
    // Initialiser les animations AOS avec une durée spécifique
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Bannière des cookies */}
      <CookieBanner />
      <Router>
        {/* Composant pour gérer le scroll au changement de route */}
        <UseScrollToTop />
        <div>
          {/* Affichage des modales si ouvertes */}
          {isModalOpen && member && (
            <MemberModal member={member} setIsModalOpen={setIsModalOpen} />
          )}
          {isModalOpen && volunteer && (
            <VolunteerModal
              volunteer={volunteer}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {/* En-tête du site */}
          <Header />
          <main>
            <Routes>
              {/* Route de la page d'accueil (OnePage) */}
              <Route
                path="/"
                element={
                  <>
                    {/* Composants principaux de la page d'accueil */}
                    <Hero />
                    <Partenaires />
                    <OurStory />
                    <Missions />
                    <VolunteerCarousel
                      setIsModalOpen={setIsModalOpen}
                      setVolunteer={setVolunteer}
                      volunteersData={volunteersData}
                    />
                    <DevenirVolontaire
                      setIsModalOpen={setIsModalOpen}
                      isModalOpen={isModalOpen}
                      setMember={setMember}
                    />
                    <SoutenirMission />
                    <DonationPage
                      setScrollToTopEnabled={setScrollToTopEnabled}
                    />
                    <Temoignages />
                  </>
                }
              />
              {/* Autres routes pour les pages supplémentaires */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/temoignages" element={<TemoignagesPage />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/mentions-legales" element={<LegalMentions />} />
              <Route path="/partenaires-page" element={<PartenairesPage />} />
              <Route path="/contact-page" element={<ContactPage />} />
              <Route path="/conseil-admin" element={<ConseilAdmin />} />
            </Routes>
          </main>
          {/* Bouton pour remonter en haut de la page */}
          <ScrollToTopButton />
          {/* Pied de page */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
