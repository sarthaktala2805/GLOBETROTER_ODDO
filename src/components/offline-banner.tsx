"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function OfflineBanner() {
  const { t } = useLanguage();
  const [isOffline, setIsOffline] = useState(false);
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setJustReconnected(true);
      setTimeout(() => setJustReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline && !justReconnected) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        borderRadius: "var(--radius-full)",
        background: isOffline ? "#0f172a" : "#065f46",
        border: `1.5px solid ${isOffline ? "rgba(245, 158, 11, 0.4)" : "#10b981"}`,
        color: "#ffffff",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
        fontSize: "13px",
        fontWeight: 600,
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      <span>{isOffline ? "⚡" : "✓"}</span>
      <span>
        {isOffline
          ? t("offlineNotice", "Offline Mode Active — Accessing cached trips and vouchers.")
          : "Reconnected to Internet"}
      </span>
    </div>
  );
}
