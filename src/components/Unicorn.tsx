"use client";
import { useEffect, useRef } from "react";

type UnicornScene = { destroy: () => void };
type UnicornStudioApi = {
  addScene: (opts: {
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
    script.onload = () =>
      window.UnicornStudio
        ? resolve(window.UnicornStudio)
        : reject(new Error("UnicornStudio missing"));
    script.onerror = () => {
      loader = null;
      reject(new Error(`Failed to load ${SCRIPT_SRC}`));
    };
    document.head.appendChild(script);
  });
  return loader;
}

export default function Unicorn({ src }: Readonly<{ src: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let scene: UnicornScene | null = null;
    let cancelled = false;
    loadUnicorn()
      .then((us) =>
        us.addScene({
          element,
          filePath: src,
          production: true,
          lazyLoad: true
        })
      )
      .then((s) => {
        if (cancelled) s.destroy();
        else scene = s;
      })
      .catch(() => {
        /* No WebGL2 or script failure: the section keeps its black background. */
      });
    return () => {
      cancelled = true;
      scene?.destroy();
    };
  }, [src]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 size-full"
    />
  );
}
