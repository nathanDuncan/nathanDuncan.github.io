import { useCallback } from "react";

export default function useSmoothScroll() {
  const scrollTo = useCallback((target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return scrollTo;
}
