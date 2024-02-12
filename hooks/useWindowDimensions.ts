"use client";

import { useEffect, useState } from "react";

function getWindowDimensions() {
  interface Window {
    innerWidth: number;
    innerHeight: number;
  }

  if (typeof window !== "undefined") {
    const win: Window = window;

    const { innerWidth: width = 0, innerHeight: height = 0 } = win;

    return {
      width,
      height,
    };
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions || { width: 0, height: 0 };
}

export default useWindowDimensions;
