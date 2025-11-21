// components/PwaRegister.tsx (client component)
"use client";
import React, { useEffect } from "react";
import { useState } from "react";

export default function PwaRegister({
  children,
}: {
  children: React.ReactNode;
}) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("SW registered", reg))
        .catch((err) => console.warn("SW registration failed", err));
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;
    console.log("User choice:", choiceResult.outcome);

    setDeferredPrompt(null);
    setShowBanner(false);
  };

  return (
    <>
      {children}

      {showBanner && (
        <div
          className="
            fixed bottom-4 left-1/2 transform -translate-x-1/2 
            bg-blue-700 text-yellow-300 px-4 py-3 rounded-lg shadow-lg 
            flex flex-col sm:flex-row items-center sm:justify-between 
            z-50 space-y-2 sm:space-y-0 sm:space-x-4
            animate-fade-in-up animate-bounce-slow
            w-[90%] max-w-xs sm:max-w-md
          "
        >
          <span className="font-medium text-center sm:text-left text-sm sm:text-base">
            Install Sparkles App for quick access!
          </span>
          <button
            onClick={handleInstallClick}
            className="
              bg-yellow-300 text-blue-700 font-semibold 
              px-4 py-2 rounded hover:bg-yellow-400 transition 
              w-full sm:w-auto text-sm sm:text-base
            "
          >
            Install
          </button>
        </div>
      )}
    </>
  );
}
