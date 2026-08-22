// Authentication Controller for Screen 1 (Auth Modal / Page)

const Auth = {
  activeTab: "login", // 'login' | 'signup'

  init() {
    this.bindEvents();
    this.checkSession();
  },

  checkSession() {
    const user = API.getUser();
    const token = API.getToken();
    if (user && token) {
      this.renderAuthenticatedHeader(user);
      // Validate session with backend
      API.getMe().catch(() => {
        API.clearAuth();
        this.renderUnauthenticatedHeader();
      });
    } else {
      this.renderUnauthenticatedHeader();
    }
  },

  bindEvents() {
    // Open Auth Modal
    document.querySelectorAll("[data-action='open-auth']").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const mode = e.currentTarget.dataset.mode || "login";
        this.openModal(mode);
      });
    });

    // Close Auth Modal
    const modalClose = document.getElementById("authModalClose");
    if (modalClose) {
      modalClose.addEventListener("click", () => this.closeModal());
    }

    const modalOverlay = document.getElementById("authModal");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) this.closeModal();
      });
    }

    // Tab switching
    const tabLogin = document.getElementById("tabBtnLogin");
    const tabSignup = document.getElementById("tabBtnSignup");
    if (tabLogin) tabLogin.addEventListener("click", () => this.switchTab("login"));
    if (tabSignup) tabSignup.addEventListener("click", () => this.switchTab("signup"));

    // Login Form Submit
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => this.handleLogin(e));
    }

    // Signup Form Submit
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => this.handleSignup(e));
    }

    // Demo user login button
    const demoBtn = document.getElementById("btnDemoLogin");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => this.quickDemoLogin());
    }

    // Forgot Password link & form
    const forgotLink = document.getElementById("forgotPasswordLink");
    if (forgotLink) {
      forgotLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.openForgotPasswordModal();
      });
    }

    const forgotForm = document.getElementById("forgotPasswordForm");
    if (forgotForm) {
      forgotForm.addEventListener("submit", (e) => this.handleForgotPassword(e));
    }

    const forgotClose = document.getElementById("forgotModalClose");
    if (forgotClose) {
      forgotClose.addEventListener("click", () => {
        document.getElementById("forgotPasswordModal").classList.remove("active");
      });
    }

    // Logout
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-action='logout']")) {
        this.logout();
      }
    });
  },

  switchTab(tab) {
    this.activeTab = tab;
    const tabLogin = document.getElementById("tabBtnLogin");
    const tabSignup = document.getElementById("tabBtnSignup");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const modalTitle = document.getElementById("authModalTitle");

    if (tab === "login") {
      tabLogin.classList.add("active");
      tabSignup.classList.remove("active");
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      if (modalTitle) modalTitle.textContent = "Welcome Back, Explorer";
    } else {
      tabSignup.classList.add("active");
      tabLogin.classList.remove("active");
      signupForm.style.display = "block";
      loginForm.style.display = "none";
      if (modalTitle) modalTitle.textContent = "Create Explorer Account";
    }
  },

  openModal(tab = "login") {
    this.switchTab(tab);
    const modal = document.getElementById("authModal");
    if (modal) modal.classList.add("active");
  },

  closeModal() {
    const modal = document.getElementById("authModal");
    if (modal) modal.classList.remove("active");
  },

  async handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const submitBtn = document.getElementById("loginSubmitBtn");

    if (!email || !password) {
      App.showToast("Please enter both email and password.", "error");
      return;
    }

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Authenticating...";
      
      const res = await API.login(email, password);
      App.showToast(`Welcome back, ${res.user.name}!`, "success");
      this.closeModal();
      this.renderAuthenticatedHeader(res.user);
      
      if (window.Profile) Profile.loadUserProfile();
      if (window.Stats) Stats.loadPlatformStats();
    } catch (err) {
      App.showToast(err.message || "Invalid credentials", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Log In to Globetrotter";
    }
  },

  async handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const homeCity = document.getElementById("signupHomeCity").value;
    const submitBtn = document.getElementById("signupSubmitBtn");

    if (!name || name.length < 2) {
      App.showToast("Please enter a valid full name (at least 2 characters).", "error");
      return;
    }
    if (!email || !email.includes("@")) {
      App.showToast("Please enter a valid email address.", "error");
      return;
    }
    if (!password || password.length < 6) {
      App.showToast("Password must be at least 6 characters.", "error");
      return;
    }

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Creating Account...";
      
      const res = await API.register(name, email, password, homeCity);
      App.showToast(`Account created! Welcome to Globetrotter, ${res.user.name}.`, "success");
      this.closeModal();
      this.renderAuthenticatedHeader(res.user);

      if (window.Profile) Profile.loadUserProfile();
      if (window.Stats) Stats.loadPlatformStats();
    } catch (err) {
      App.showToast(err.message || "Registration failed.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Create Account";
    }
  },

  async quickDemoLogin() {
    try {
      document.getElementById("loginEmail").value = "aarav@globetrotter.in";
      document.getElementById("loginPassword").value = "Explorer@123";
      const res = await API.login("aarav@globetrotter.in", "Explorer@123");
      App.showToast("Logged in as Demo Explorer (Aarav Sharma)!", "success");
      this.closeModal();
      this.renderAuthenticatedHeader(res.user);

      if (window.Profile) Profile.loadUserProfile();
      if (window.Stats) Stats.loadPlatformStats();
    } catch (err) {
      App.showToast(err.message || "Demo login failed", "error");
    }
  },

  openForgotPasswordModal() {
    this.closeModal();
    const forgotModal = document.getElementById("forgotPasswordModal");
    if (forgotModal) forgotModal.classList.add("active");
  },

  async handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById("forgotEmail").value.trim();
    if (!email) {
      App.showToast("Please enter your registered email address.", "error");
      return;
    }

    try {
      const res = await API.forgotPassword(email);
      App.showToast(res.message, "info");
      document.getElementById("forgotPasswordModal").classList.remove("active");
    } catch (err) {
      App.showToast(err.message || "Failed to process request.", "error");
    }
  },

  logout() {
    API.clearAuth();
    this.renderUnauthenticatedHeader();
    App.showToast("You have been logged out.", "info");
    App.switchView("stats");
    if (window.Stats) Stats.loadPlatformStats();
  },

  renderAuthenticatedHeader(user) {
    const authArea = document.getElementById("navAuthSection");
    if (!authArea) return;

    authArea.innerHTML = `
      <div class="user-header-pill" data-action="switch-view" data-view="profile" title="View Profile Settings">
        <img src="${user.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'}" alt="${user.name}" class="user-avatar-sm" />
        <span style="font-weight: 700; color: var(--royal-indigo); font-size: 0.92rem;">${user.name}</span>
      </div>
      <button class="btn btn-secondary btn-sm" data-action="logout" title="Log out">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        Logout
      </button>
    `;

    // Enable profile tab in nav
    const navProfile = document.getElementById("navBtnProfile");
    if (navProfile) navProfile.style.display = "flex";
  },

  renderUnauthenticatedHeader() {
    const authArea = document.getElementById("navAuthSection");
    if (!authArea) return;

    authArea.innerHTML = `
      <button class="btn btn-outline-amber btn-sm" data-action="open-auth" data-mode="login">Log In</button>
      <button class="btn btn-primary btn-sm" data-action="open-auth" data-mode="signup">Sign Up</button>
    `;

    // Rebind listener
    authArea.querySelectorAll("[data-action='open-auth']").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.openModal(e.currentTarget.dataset.mode);
      });
    });

    const navProfile = document.getElementById("navBtnProfile");
    if (navProfile) navProfile.style.display = "none";
  }
};

window.Auth = Auth;
