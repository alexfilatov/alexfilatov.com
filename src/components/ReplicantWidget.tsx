"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ReplicantWidget?: {
      init: (username: string, config: Record<string, unknown>) => void;
    };
  }
}

export const ReplicantWidget = () => {
  useEffect(() => {
    // Check if widget already initialized
    if (document.querySelector('.replicant-widget-button')) {
      return;
    }

    // Check if script already loaded
    const existingScript = document.querySelector('script[src*="replicant-widget"]');

    if (existingScript && window.ReplicantWidget) {
      // Script loaded, just initialize
      window.ReplicantWidget.init('alex', {
        position: 'bottom-right',
        theme: 'replicant',
        buttonColor: '#00ffff',
        title: 'Chat with AI Clone',
        showBranding: true
      });
      return;
    }

    // Load script and then initialize
    const script = document.createElement('script');
    script.src = 'https://replicant.im/js/replicant-widget.js';
    script.async = true;
    script.onload = () => {
      if (window.ReplicantWidget) {
        window.ReplicantWidget.init('alex', {
          position: 'bottom-right',
          theme: 'replicant',
          buttonColor: '#00ffff',
          title: 'Chat with AI Clone',
          showBranding: true
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return null;
};
