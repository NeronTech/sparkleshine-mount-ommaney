'use client';
import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform?: string }>;
}

export default function InstallButton() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();           // Prevent Chrome default prompt
      setPromptEvent(e);
      setVisible(true);             // Show button
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!visible || !promptEvent) return null;

  const handleClick = async () => {
    promptEvent.prompt();            // Show the install prompt
    const choice = await promptEvent.userChoice;
    console.log('Install choice:', choice);
    setVisible(false);               // Hide button after user chooses
    setPromptEvent(null);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
    >
      Install App
    </button>
  );
}
