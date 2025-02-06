import { useEffect } from "react";

const useSmoothScroll = (scrollTarget) => {
  useEffect(() => {
    if (!scrollTarget || !scrollTarget.id) return;

    const { id, offset = 95 } = scrollTarget; // Récupèrer l'ID et l'offset
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  }, [scrollTarget]);
};

export default useSmoothScroll;
