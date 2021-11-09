import { useState, useEffect } from "react";

export default (init) => {
  const [viewSidebar, setViewsidebar] = useState(init);

  const handler = useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 485) {
        setViewsidebar(false);
      } else if (window.innerWidth >= 485) {
        setViewsidebar(true);
      }
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [viewSidebar]);

  return [viewSidebar, handler];
};
