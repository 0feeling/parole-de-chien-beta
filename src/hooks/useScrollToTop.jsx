import { useLocation } from "react-router-dom";
import { useEffect, useCallback } from "react";

// Hook custom pour faire défiler la page vers le haut
function useScrollToTop(enabled) {
  const location = useLocation();

  // Fonction pour défiler vers le haut
  const scrollToTop = useCallback(() => {
    if (enabled) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [enabled]);

  // Déclencher au changement de route
  useEffect(() => {
    scrollToTop();
  }, [location, scrollToTop]);

  return scrollToTop; // Retourne la fonction pour un appel manuel
}

export default useScrollToTop;
