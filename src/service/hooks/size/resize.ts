import { useState, useEffect } from "react";

export const resize = (viewPort: number = 500) => {
  const [media, setMedia] = useState(window.innerWidth < viewPort);

  useEffect(() => {
    window.addEventListener("resize", ChangeResize);
    console.log("sss");
  }, []);

  const ChangeResize = () => {
    if (window.innerWidth < viewPort) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  };

  return { media };
};
