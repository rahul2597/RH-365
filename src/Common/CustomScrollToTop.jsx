import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default CustomScrollToTop;
