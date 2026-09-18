"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Profile, profileStore } from "@/lib/profile-store";

export default function SettingsPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProfile(profileStore.read());
  }, []);

  if (!profile) return null;

  const handleSave = () => {
    profileStore.save(profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClearData = () => {
    if (confirm("Are you sure you want to clear your local trips and wishlist from this browser?")) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <main className="main-content" style={{ maxWidth: "680px" }}>
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">PREFERENCES</p>
          <h1 className="section-title">
            Application <em>Settings</em>
          </h1>
          <p className="section-description">
            Control local storage behavior, notification preferences, and privacy rules.
          </p>
        </div>
      </div>

      <div className="form-box">
        <div className="form-group">
          <label className="form-label">Email Notification Frequency</label>
          <select
            className="form-select"
            value={profile.emailUpdates}
            onChange={(e) =>
              setProfile({
                ...profile,
                emailUpdates: e.target.value as Profile["emailUpdates"],
              })
            }
          >
            <option value="essential">Only essential itinerary updates</option>
            <option value="all">Weekly destination inspiration & all updates</option>
            <option value="none">Turn off all email notifications</option>
          </select>
        </div>

        <div className="form-group" style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
          <label className="form-label">Data Storage Mode</label>
          <p style={{ fontSize: "13px", color: "var(--ink-500)", lineHeight: "1.6" }}>
            All your trips, itineraries, budget logs, and bookmarked destinations are currently saved directly in your browser's local storage (Local-First Architecture).
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button type="button" onClick={handleSave} className="btn btn-primary">
            {saved ? "✓ Saved Settings" : "Save Preferences"}
          </button>
          <button
            type="button"
            onClick={handleClearData}
            className="btn btn-outline"
            style={{ color: "#ef4444", borderColor: "#fca5a5" }}
          >
            Clear Browser Data
          </button>
        </div>
      </div>
    </main>
  );
}
