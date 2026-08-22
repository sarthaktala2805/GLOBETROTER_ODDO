// Main Globetrotter Frontend Orchestrator

const App = {
  currentView: "stats", // 'stats' | 'profile'

  init() {
    this.bindNavigation();
    
    // Initialize sub-modules
    if (window.Auth) Auth.init();
    if (window.Stats) Stats.init();
    if (window.Profile) Profile.init();

    // Check URL hash if any
    const hash = window.location.hash.replace("#", "");
    if (hash === "profile") {
      this.switchView("profile");
    } else {
      this.switchView("stats");
    }
  },

  bindNavigation() {
    document.querySelectorAll("[data-action='switch-view']").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const view = e.currentTarget.dataset.view;
        this.switchView(view);
      });
    });
  },

  switchView(view) {
    this.currentView = view;
    
    // Update nav links active state
    document.querySelectorAll(".nav-btn").forEach(btn => {
      if (btn.dataset.view === view) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const statsView = document.getElementById("viewStatsAndCities");
    const profileView = document.getElementById("viewUserProfile");

    if (view === "profile") {
      if (!API.getToken()) {
        Auth.openModal("login");
        this.showToast("Please log in to access your profile settings.", "info");
        return;
      }
      if (statsView) statsView.style.display = "none";
      if (profileView) profileView.style.display = "block";
      if (window.Profile) Profile.loadUserProfile();
      window.location.hash = "profile";
    } else {
      if (statsView) statsView.style.display = "block";
      if (profileView) profileView.style.display = "none";
      if (window.Stats) Stats.loadPlatformStats();
      window.location.hash = "explore";
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "⚠️";

    toast.innerHTML = `
      <span>${icon}</span>
      <div style="flex-grow: 1;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

window.App = App;

// Bootstrap on DOM load
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
