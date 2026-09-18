"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { authStore } from "@/lib/auth-store";
import { profileStore } from "@/lib/profile-store";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) {
      setError("Please provide a name and valid email address.");
      return;
    }

    authStore.start({
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date().toISOString(),
    });

    profileStore.save({
      displayName: name.trim(),
      travelStyle: "Balanced and unhurried",
      emailUpdates: "essential",
    });

    router.push("/dashboard");
  };

  return (
    <main className="main-content" style={{ maxWidth: "480px", margin: "40px auto 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <span className="badge badge-emerald" style={{ marginBottom: "10px" }}>
          START YOUR JOURNEY
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", color: "var(--ink-900)" }}>
          Create your account
        </h1>
        <p style={{ color: "var(--ink-500)", fontSize: "14px", marginTop: "6px" }}>
          Save trips, customize budgets, and curate your dream Indian destinations.
        </p>
      </div>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Diya Sengupta"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="At least 8 characters"
              defaultValue="secretPassword123"
              className="form-input"
            />
          </div>

          {error && (
            <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "14px" }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "10px" }}>
            Create Account & Explore →
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--ink-500)", marginTop: "24px" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--saffron-600)", fontWeight: 600 }}>
            Sign in here
          </Link>
        </p>
      </div>
    </main>
  );
}
