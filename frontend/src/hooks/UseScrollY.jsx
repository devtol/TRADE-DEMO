import { useState, useEffect } from "react";

export default (init) => {
  const [scrollY, setScrollY] = useState(0);

  const scrollEventListener = () => {
    setScrollY(window.scrollY);
  }; 

  const handler = useEffect(() => {
    window.addEventListener("scroll", scrollEventListener);
    return () => window.removeEventListener("scroll", scrollEventListener);
  }, [scrollY]);

  return { scrollY };
}