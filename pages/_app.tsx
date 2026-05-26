import "@/styles/globals.css";
import "@/styles/animations.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    import("@/lib/animations").then(({ initAnimations }) => {
      if (cancelled) return;
      cleanup = initAnimations();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
