"use client";

import { useEffect, useRef } from "react";

type UnicornScene = { destroy: () => void };
type UnicornStudioApi = {
  addScene: (options: {
    element: HTMLElement;
    filePath: string;
    production?: boolean;
    lazyLoad?: boolean;
    scale?: number;
    dpi?: number;
    fps?: number;
  }) => Promise<UnicornScene>;
};

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioApi;
  }
}

const SCRIPT_SRC = "/vendor/unicornStudio.umd.js";
let loader: Promise<UnicornStudioApi> | null = null;

function loadUnicorn(): Promise<UnicornStudioApi> {
  if (window.UnicornStudio) return Promise.resolve(window.UnicornStudio);

  loader ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      if (window.UnicornStudio) resolve(window.UnicornStudio);
      else reject(new Error("UnicornStudio did not initialize"));
    };
    script.onerror = () => {
      loader = null;
      reject(new Error(`Failed to load ${SCRIPT_SRC}`));
    };
    document.head.appendChild(script);
  });

  return loader;
}

export default function UnicornBackground({
  src,
  fallbackImage
}: Readonly<{ src: string; fallbackImage: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let scene: UnicornScene | null = null;
    let cancelled = false;

    loadUnicorn()
      .then((unicorn) =>
        unicorn.addScene({
          element,
          filePath: src,
          production: true,
          lazyLoad: true
        })
      )
      .then((loadedScene) => {
        if (cancelled) loadedScene.destroy();
        else scene = loadedScene;
      })
      .catch((error: unknown) => {
        console.error("Unable to load the hero background animation", error);
      });

    return () => {
      cancelled = true;
      scene?.destroy();
    };
  }, [src]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("${fallbackImage}")` }}
    />
  );
}
