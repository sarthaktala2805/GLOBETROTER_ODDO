"use client";

import { useMemo, useState } from "react";
import { useCurrency } from "@/lib/currency-context";

interface Member {
  id: string;
  name: string;
  upiId: string;
}

interface SharedExpense {
  id: string;
  title: string;
  amount: number;
  paidById: string;
  splitAmongIds: string[];
}

interface Settlement {
  fromId: string;
  toId: string;
  amount: number;
}

export default function GroupSplitPage() {
  const { formatPrice } = useCurrency();

  // Initial demo members
  const [members, setMembers] = useState<Member[]>([
    { id: "m-1", name: "Sarthak", upiId: "sarthak@upi" },
    { id: "m-2", name: "Rohan", upiId: "rohan@okhdfcbank" },
    { id: "m-3", name: "Priya", upiId: "priya@paytm" },
    { id: "m-4", name: "Ananya", upiId: "ananya@oksbi" },
  ]);

  // Initial demo expenses
  const [expenses, setExpenses] = useState<SharedExpense[]>([
    {
      id: "e-1",
      title: "Boutique Haveli Stay (2 Nights)",
      amount: 14800,
      paidById: "m-1",
      splitAmongIds: ["m-1", "m-2", "m-3", "m-4"],
    },
    {
      id: "e-2",
      title: "Private AC Cab & Highway Tolls",
      amount: 4500,
      paidById: "m-2",
      splitAmongIds: ["m-1", "m-2", "m-3", "m-4"],
    },
    {
      id: "e-3",
      title: "Royal Thali Dinner & Sweets",
      amount: 3200,
      paidById: "m-3",
      splitAmongIds: ["m-1", "m-2", "m-3", "m-4"],
    },
  ]);

  // Form states for new inputs
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberUpi, setNewMemberUpi] = useState("");

  const [expTitle, setExpTitle] = useState("");
  const [expAmount, setExpAmount] = useState<number>(0);
  const [expPaidBy, setExpPaidBy] = useState<string>("m-1");

  const addMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;
    const newM: Member = {
      id: `m-${Date.now()}`,
      name: newMemberName.trim(),
      upiId: newMemberUpi.trim() || `${newMemberName.toLowerCase().replace(/\s+/g, "")}@upi`,
    };
    setMembers([...members, newM]);
    setNewMemberName("");
    setNewMemberUpi("");
  };

  const removeMember = (id: string) => {
    if (members.length <= 2) return;
    setMembers(members.filter((m) => m.id !== id));
    setExpenses(expenses.filter((e) => e.paidById !== id).map(e => ({
      ...e,
      splitAmongIds: e.splitAmongIds.filter(mid => mid !== id)
    })));
  };

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expTitle.trim() || expAmount <= 0) return;
    const newE: SharedExpense = {
      id: `e-${Date.now()}`,
      title: expTitle.trim(),
      amount: expAmount,
      paidById: expPaidBy,
      splitAmongIds: members.map((m) => m.id),
    };
    setExpenses([...expenses, newE]);
    setExpTitle("");
    setExpAmount(0);
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Debt Simplification Algorithm
  const settlements: Settlement[] = useMemo(() => {
    const balance: Record<string, number> = {};
    members.forEach((m) => {
      balance[m.id] = 0;
    });

    expenses.forEach((e) => {
      const share = e.amount / Math.max(e.splitAmongIds.length, 1);
      balance[e.paidById] = (balance[e.paidById] || 0) + e.amount;
      e.splitAmongIds.forEach((uid) => {
        balance[uid] = (balance[uid] || 0) - share;
      });
    });

    const debtors: { id: string; amount: number }[] = [];
    const creditors: { id: string; amount: number }[] = [];

    Object.entries(balance).forEach(([id, bal]) => {
      const rounded = Math.round(bal);
      if (rounded < -1) {
        debtors.push({ id, amount: -rounded });
      } else if (rounded > 1) {
        creditors.push({ id, amount: rounded });
      }
    });

    const results: Settlement[] = [];
    let dIdx = 0;
    let cIdx = 0;

    while (dIdx < debtors.length && cIdx < creditors.length) {
      const debtor = debtors[dIdx];
      const creditor = creditors[cIdx];
      const transfer = Math.min(debtor.amount, creditor.amount);

      if (transfer > 0) {
        results.push({
          fromId: debtor.id,
          toId: creditor.id,
          amount: transfer,
        });
      }

      debtor.amount -= transfer;
      creditor.amount -= transfer;

      if (debtor.amount <= 1) dIdx++;
      if (creditor.amount <= 1) cIdx++;
    }

    return results;
  }, [members, expenses]);

  const totalTripSpend = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">GROUP TRIP FINANCE & SETTLEMENT</p>
          <h1 className="section-title">
            Group Expense & <em>UPI Splitter</em>
          </h1>
          <p className="section-description">
            Share hotel bills, fuel, dining, and activity costs with travel companions. Simplified debt settlement with direct 1-click UPI transfers.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "28px" }}>
        {/* Left Column: Members & Expenses Logging */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Members Bar */}
          <div className="form-box">
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              Travel Companions ({members.length})
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
              {members.map((m) => (
                <div
                  key={m.id}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    background: "var(--surface-alt)",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid var(--border)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--ink-800)" }}>{m.name}</span>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)" }}>({m.upiId})</span>
                  {members.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeMember(m.id)}
                      style={{ color: "var(--ink-400)", cursor: "pointer", border: "none", background: "none" }}
                      aria-label="Remove companion"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add Member Form */}
            <form onSubmit={addMember} style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Friend's Name"
                className="form-input"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                style={{ flex: 1 }}
              />
              <input
                type="text"
                placeholder="UPI ID (e.g. name@okhdfcbank)"
                className="form-input"
                value={newMemberUpi}
                onChange={(e) => setNewMemberUpi(e.target.value)}
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn btn-outline btn-sm">
                ＋ Add Friend
              </button>
            </form>
          </div>

          {/* Add Expense Box */}
          <div className="form-box">
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "14px" }}>
              Log Shared Expense
            </h3>
            <form onSubmit={addExpense}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Expense Description</label>
                  <input
                    type="text"
                    placeholder="e.g. Highway Dhaba Lunch, Fort Guide"
                    className="form-input"
                    value={expTitle}
                    onChange={(e) => setExpTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="2500"
                    className="form-input"
                    value={expAmount || ""}
                    onChange={(e) => setExpAmount(Number(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "12px" }}>
                <label className="form-label">Paid by</label>
                <select
                  value={expPaidBy}
                  onChange={(e) => setExpPaidBy(e.target.value)}
                  className="form-select"
                >
                  {members.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: "18px", textAlign: "right" }}>
                <button type="submit" className="btn btn-primary btn-sm" style={{ padding: "0 24px" }}>
                  ＋ Add Expense
                </button>
              </div>
            </form>
          </div>

          {/* Expenses List */}
          <div className="form-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                Logged Expenses ({expenses.length})
              </h3>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--saffron-600)" }}>
                Total: {formatPrice(totalTripSpend)}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {expenses.map((e) => {
                const paidByMember = members.find((m) => m.id === e.paidById);
                const perPerson = Math.round(e.amount / Math.max(e.splitAmongIds.length, 1));

                return (
                  <div
                    key={e.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 16px",
                      background: "var(--surface-alt)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "14px", display: "block", color: "var(--ink-900)" }}>
                        {e.title}
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>
                        Paid by <strong>{paidByMember?.name}</strong> · Split among {e.splitAmongIds.length} ({formatPrice(perPerson)} each)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <strong style={{ fontSize: "15px", color: "var(--ink-800)" }}>
                        {formatPrice(e.amount)}
                      </strong>
                      <button
                        type="button"
                        onClick={() => removeExpense(e.id)}
                        style={{ color: "var(--ink-400)", cursor: "pointer", border: "none", background: "none" }}
                        aria-label="Delete expense"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Settlement & UPI Direct Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="metric-card">
            <span className="badge badge-emerald">OPTIMIZED SETTLEMENT</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, margin: "10px 0 6px" }}>
              Who Owes Whom
            </h3>
            <p style={{ fontSize: "12.5px", color: "var(--ink-500)", marginBottom: "16px" }}>
              Algorithmically simplified to the lowest number of transfers.
            </p>

            {settlements.length === 0 ? (
              <div style={{ textAlign: "center", padding: "30px 10px", color: "var(--ink-500)" }}>
                <span>✨ All expenses are perfectly balanced!</span>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {settlements.map((s, idx) => {
                  const fromM = members.find((m) => m.id === s.fromId);
                  const toM = members.find((m) => m.id === s.toId);
                  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(toM?.upiId || "")}&pn=${encodeURIComponent(toM?.name || "")}&am=${s.amount}&tn=BharatYatra%20Trip%20Split`;

                  return (
                    <div
                      key={idx}
                      style={{
                        padding: "14px",
                        background: "var(--surface-alt)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <div>
                          <strong style={{ fontSize: "14px", color: "var(--ink-900)" }}>
                            {fromM?.name} ➔ {toM?.name}
                          </strong>
                          <span style={{ fontSize: "11px", color: "var(--ink-400)", display: "block" }}>
                            Pay to: {toM?.upiId}
                          </span>
                        </div>
                        <span style={{ fontSize: "16px", fontWeight: 800, color: "var(--saffron-600)" }}>
                          {formatPrice(s.amount)}
                        </span>
                      </div>

                      <a
                        href={upiDeepLink}
                        className="btn btn-outline btn-block btn-sm"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          fontWeight: 700,
                          color: "var(--emerald-600)",
                          borderColor: "var(--emerald-500)",
                        }}
                      >
                        <span>📲</span> Pay via UPI (PhonePe/GPay)
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="metric-card">
            <span className="badge badge-indigo">UPI TIP</span>
            <p style={{ fontSize: "12.5px", color: "var(--ink-600)", marginTop: "8px", lineHeight: 1.5 }}>
              Tapping the UPI button on a smartphone will directly open your installed payment app (Google Pay, PhonePe, Paytm, or BHIM) with recipient and exact split amount pre-filled.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
