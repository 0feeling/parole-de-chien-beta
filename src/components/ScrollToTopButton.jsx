import { useState, useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = useScrollToTop(true); // Utilise la fonction retournée par le hook

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Affiche la flèche après 300px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scrollToTop(); // Appelle la fonction retournée par le hook
  };

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="z-50 fixed bottom-6 right-6 bg-[linear-gradient(to_bottom_right,_rgba(0,_20,_137,_0.6),_rgba(0,_181,_226,_0.6))] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transformfixed bottom-6 right-6 bg-[linear-gradient(to_bottom_right,_rgba(0,_20,_137,_0.6),_rgba(0,_181,_226,_0.6))] text-white p-4 rounded-full shadow-lg hover:bg-[linear-gradient(to_bottom_right,_#001489,_#00B5E2)] hover:scale-110 transition-all"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;
