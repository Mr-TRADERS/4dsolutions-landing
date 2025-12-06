"use client";
import { useEffect } from "react";

export default function ScrollToTopOnReload({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top on reload
  }, []);

  return <>{children}</>;
}
