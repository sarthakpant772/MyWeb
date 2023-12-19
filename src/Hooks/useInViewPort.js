import { useEffect, useState } from "react";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIntersecting(true);
      },
      { threshold: 0.5 }
    ); // Adjust the threshold as needed

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export { useIsVisible };
