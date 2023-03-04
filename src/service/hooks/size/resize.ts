import { useState, useEffect } from "react";
import {
  DESKTOP_VIEW,
  MOBILE_VIEW,
  MOBILE_VIEW_LANDSCAPE,
  TABLE_VIEW,
  TABLE_VIEW_LANDSCAPE,
} from "@/utils/media/media";

export const resize = (p = 0) => {
  const [media, setMedia] = useState("MOBILE");

  const [mediaChild, setMediaChild] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", ChangeResize);
  }, []);

  const ChangeResize = (e: any) => {
    const viewPort = window.screen.availWidth;

    if (viewPort >= MOBILE_VIEW && viewPort <= MOBILE_VIEW_LANDSCAPE) {
      setMedia("MOBILE");
    } else if (viewPort >= MOBILE_VIEW_LANDSCAPE && viewPort <= TABLE_VIEW) {
      setMedia("TABLET");
    } else if (viewPort >= TABLE_VIEW && viewPort <= TABLE_VIEW_LANDSCAPE) {
      setMedia("TABLET_LANDSCAPE");
    } else if (viewPort >= TABLE_VIEW_LANDSCAPE && viewPort >= DESKTOP_VIEW) {
      setMedia("DESKTOP");
    }
  };


  return { media, mediaChild };
};
