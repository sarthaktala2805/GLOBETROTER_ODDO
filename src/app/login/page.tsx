"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { authStore } from "@/lib/auth-store";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setEmail(authStore.read()?.email ?? "");
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }

    const existing = authStore.read();
    authStore.start(
      existing ?? {
        name: email.split("@")[0],
        email,
        createdAt: new Date().toISOString(),
      }
    );
    router.push("/dashboard");
  };

  const handleDemoLogin = () => {
    authStore.start({
      name: "Aarav Sharma",
      email: "aarav@bharatyatra.in",
      createdAt: new Date().toISOString(),
    });
    router.push("/dashboard");
  };

  return (
    <main className="main-content" style={{ maxWidth: "480px", margin: "40px auto 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <span className="badge badge-saffron" style={{ marginBottom: "10px" }}>
          LOCAL SESSION ACCESS
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", color: "var(--ink-900)" }}>
          Welcome back
        </h1>
        <p style={{ color: "var(--ink-500)", fontSize: "14px", marginTop: "6px" }}>
          Access your local planning workspace on this device.
        </p>
      </div>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
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
              placeholder="••••••••"
              defaultValue="password123"
              className="form-input"
            />
            <small style={{ color: "var(--ink-400)", fontSize: "11px", marginTop: "4px" }}>
              Phase 1 uses simulated client session; passwords are never transmitted.
            </small>
          </div>

          {error && (
            <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "14px" }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "10px" }}>
            Sign In to Planner
          </button>
        </form>

        <div style={{ margin: "24px 0", textAlign: "center", position: "relative" }}>
          <span style={{ background: "var(--surface)", padding: "0 12px", color: "var(--ink-400)", fontSize: "12px", position: "relative", zIndex: 1 }}>
            OR
          </span>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "var(--border)" }}></div>
        </div>

        <button
          type="button"
          onClick={handleDemoLogin}
          className="btn btn-outline btn-block"
        >
          ⚡ Quick Demo Explorer Login
        </button>

        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--ink-500)", marginTop: "24px" }}>
          Don’t have an account yet?{" "}
          <Link href="/signup" style={{ color: "var(--saffron-600)", fontWeight: 600 }}>
            Create one here
          </Link>
        </p>
      </div>
    </main>
  );
}
