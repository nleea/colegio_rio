import { useState, useEffect } from "react";

export const resize = (viewPort: number = 500) => {
  const [media, setMedia] = useState(window.innerWidth < viewPort);

  const [mediaChild, setMediaChild] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", ChangeResize);
  }, []);

  const ChangeResize = () => {
    if (window.innerWidth < viewPort) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  };


  return { media, mediaChild };
};
