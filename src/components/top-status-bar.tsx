"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCurrency } from "@/lib/currency-context";
import { useLanguage } from "@/lib/language-context";
import { savedStore } from "@/lib/saved-store";

export default function TopStatusBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const { currency, formatPrice } = useCurrency();
  const { t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
    const updateCount = () => {
      try {
        const items = savedStore.read();
        setSavedCount(items.length);
      } catch {
        // SSR safe
      }
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  return (
    <aside
      className={`top-status-bar ${isOpen ? "is-expanded" : "is-collapsed"}`}
      aria-label="BharatYatra Trip Status and Quick Control Bar"
    >
      {/* Collapsed Minimal Strip */}
      <div className="top-status-strip">
        <div className="top-status-left">
          <span className="top-status-pulse"></span>
          <span className="top-status-badge">BHARATYATRA LIVE</span>
          <span className="top-status-text">
            <strong>Plan Status:</strong> Exploring India · {savedCount} {savedCount === 1 ? "Item" : "Items"} Saved in Wishlist
          </span>
        </div>

        <div className="top-status-right">
          <a
            href="tel:112"
            className="top-status-pill emergency"
            title="National Tourist & Police Emergency (24x7 Free)"
          >
            🚨 SOS 112
          </a>
          <span className="top-status-divider desktop-only">|</span>
          <Link href="/safety" className="top-status-link desktop-only">
            Tourist Helplines
          </Link>
          <span className="top-status-divider desktop-only">|</span>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="top-status-toggle-btn"
            aria-expanded={isOpen}
            aria-controls="top-status-tray"
          >
            <span>{isOpen ? "▲ Hide Controls" : "▼ Trip Controls"}</span>
          </button>
        </div>
      </div>

      {/* Expanded Control & Status Tray */}
      {isOpen && (
        <div id="top-status-tray" className="top-status-tray">
          <div className="top-status-tray-container">
            {/* Column 1: Active Trip & Destination Readiness */}
            <div className="top-status-col">
              <div className="top-status-col-header">
                <span className="col-icon">🧭</span>
                <h4>Trip Readiness & Discovery</h4>
              </div>
              <p className="top-status-col-sub">
                Wishlist currently holds <strong>{savedCount}</strong> destinations & experiences across India.
              </p>
              <div className="top-status-actions-row">
                <Link href="/saved" className="btn btn-xs btn-outline">
                  View Saved ({savedCount})
                </Link>
                <Link href="/trips/new" className="btn btn-xs btn-primary">
                  ＋ Create Itinerary
                </Link>
              </div>
            </div>

            {/* Column 2: Currency & Budget Tracker */}
            <div className="top-status-col">
              <div className="top-status-col-header">
                <span className="col-icon">💳</span>
                <h4>Active Budget & Currency</h4>
              </div>
              <p className="top-status-col-sub">
                Viewing rates in <strong>{currency}</strong> · Typical per-day budget: <strong>{formatPrice(3200)}</strong>
              </p>
              <div className="top-status-actions-row">
                <Link href="/split" className="btn btn-xs btn-outline">
                  💸 UPI Split Hub
                </Link>
                <Link href="/calculator" className="btn btn-xs btn-outline">
                  ⛽ Toll & Fuel Calc
                </Link>
              </div>
            </div>

            {/* Column 3: Travel Assistant & Safety Shortcuts */}
            <div className="top-status-col">
              <div className="top-status-col-header">
                <span className="col-icon">🛡️</span>
                <h4>Travel Support & Essentials</h4>
              </div>
              <p className="top-status-col-sub">
                1363 (MoT Hotline) · 139 (RailMadad) · Official ASI & Tourism Guidelines
              </p>
              <div className="top-status-actions-row">
                <Link href="/safety" className="btn btn-xs btn-outline">
                  Print SOS Card
                </Link>
                <Link href="/packing" className="btn btn-xs btn-outline">
                  Packing Advisor
                </Link>
                <Link href="/guide" className="btn btn-xs btn-outline">
                  Culture & Scam Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
