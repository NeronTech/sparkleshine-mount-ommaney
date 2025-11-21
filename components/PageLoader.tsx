"use client";

import React, { useEffect, useState } from "react";

const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress bar animation
    const timeout = setTimeout(() => setProgress(100), 100);

    // Hide after animation finishes
    const hide = setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => {
      clearTimeout(timeout);
      clearTimeout(hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="mb-4 animate-bounce">
          <img
            src="https://static.readdy.ai/image/07256f542ea79a1874b1582d34930508/30f97d89b0b4886ba0233a5da629aa42.png"
            alt="Sparkles Car Wash Logo"
            className="h-16 mx-auto"
          />
        </div>

        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            id="progress-bar"
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-700"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
