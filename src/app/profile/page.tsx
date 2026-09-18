"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Profile, profileStore } from "@/lib/profile-store";

export default function ProfilePage() {
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

  return (
    <main className="main-content" style={{ maxWidth: "680px" }}>
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">YOUR IDENTITY</p>
          <h1 className="section-title">
            Traveler <em>Profile</em>
          </h1>
          <p className="section-description">
            Customize how your name and travel preferences are personalized across BharatYatra.
          </p>
        </div>
      </div>

      <div className="form-box">
        <div className="form-group">
          <label className="form-label">Display Name</label>
          <input
            className="form-input"
            value={profile.displayName}
            onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Primary Travel Style</label>
          <select
            className="form-select"
            value={profile.travelStyle}
            onChange={(e) => setProfile({ ...profile, travelStyle: e.target.value })}
          >
            <option>Balanced and unhurried</option>
            <option>Heritage and royal palaces</option>
            <option>Coastal, sun and backwaters</option>
            <option>Himalayan trekking and adventure</option>
            <option>Spiritual trails and yoga</option>
            <option>Food and street culture enthusiast</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button type="button" onClick={handleSave} className="btn btn-primary">
            {saved ? "✓ Saved to Device" : "Save Changes"}
          </button>
          <Link href="/dashboard" className="btn btn-outline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
