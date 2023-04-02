import { useState, useEffect } from "react";
import {
  DESKTOP_VIEW,
  MOBILE_VIEW,
  MOBILE_VIEW_LANDSCAPE,
  TABLE_VIEW,
  TABLE_VIEW_LANDSCAPE,
} from "@/utils/media/media";

export interface Ipoint {
  width?: { min: string | number; max: string | number };
  height?: { min: string | number; max: string | number };
}

export interface IbreakPoint {
  MOBILE: Ipoint;
  TABLET: Ipoint;
  TABLET_LANDSCAPE: Ipoint;
  DESKTOP: Ipoint;
}

export const BreakPoint: Partial<IbreakPoint> = {};

export const resize = (breakPoint: Partial<IbreakPoint>) => {
  const [media, setMedia] = useState<Ipoint | undefined>({
    height: { max: 0, min: 0 },
    width: { max: 0, min: 0 },
  });

  useEffect(() => {
    window.addEventListener("resize", ChangeResize);
    ChangeResize();

    return () => window.removeEventListener("resize", ChangeResize);
  }, []);

  const ChangeResize = () => {
    const viewPort = window.screen.availWidth;

    if (viewPort >= MOBILE_VIEW && viewPort <= MOBILE_VIEW_LANDSCAPE) {
      setMedia(breakPoint.MOBILE);
    } else if (viewPort >= MOBILE_VIEW_LANDSCAPE && viewPort <= TABLE_VIEW) {
      setMedia(breakPoint.TABLET);
    } else if (viewPort >= TABLE_VIEW && viewPort <= TABLE_VIEW_LANDSCAPE) {
      setMedia(breakPoint.TABLET_LANDSCAPE);
    } else if (viewPort >= TABLE_VIEW_LANDSCAPE && viewPort >= DESKTOP_VIEW) {
      setMedia(breakPoint.DESKTOP);
    }
  };

  return { media };
};
