// User Profile Controller for Screen 12 & 13 (User Profile Settings)

const Profile = {
  currentPreferences: {
    travel_style: "Explorer",
    budget_tier: "Moderate",
    favorite_categories: ["Heritage", "Food & Dining"],
    bio: ""
  },

  init() {
    this.bindEvents();
  },

  bindEvents() {
    // Save Profile Form
    const profileForm = document.getElementById("profileSettingsForm");
    if (profileForm) {
      profileForm.addEventListener("submit", (e) => this.handleSaveProfile(e));
    }

    // Avatar Selection Clicks
    document.querySelectorAll(".avatar-option").forEach(img => {
      img.addEventListener("click", (e) => {
        const src = e.currentTarget.dataset.avatarUrl;
        document.getElementById("profileAvatarInput").value = src;
        document.getElementById("profileAvatarPreview").src = src;
        
        document.querySelectorAll(".avatar-option").forEach(opt => opt.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
      });
    });

    // Custom Avatar Input change
    const avatarInput = document.getElementById("profileAvatarInput");
    if (avatarInput) {
      avatarInput.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        if (val.startsWith("http")) {
          document.getElementById("profileAvatarPreview").src = val;
        }
      });
    }

    // Category Tags Toggle
    document.querySelectorAll(".preference-tag").forEach(tag => {
      tag.addEventListener("click", (e) => {
        const cat = e.currentTarget.dataset.category;
        e.currentTarget.classList.toggle("selected");
        this.updateSelectedCategories();
      });
    });
  },

  updateSelectedCategories() {
    const selected = [];
    document.querySelectorAll(".preference-tag.selected").forEach(tag => {
      selected.push(tag.dataset.category);
    });
    this.currentPreferences.favorite_categories = selected;
  },

  async loadUserProfile() {
    const token = API.getToken();
    if (!token) {
      App.switchView("stats");
      Auth.openModal("login");
      return;
    }

    try {
      const user = await API.getMe();
      this.populateForm(user);
      this.loadUserStats();
    } catch (err) {
      App.showToast("Failed to load user profile", "error");
    }
  },

  populateForm(user) {
    document.getElementById("profileNameInput").value = user.name || "";
    document.getElementById("profileEmailDisplay").value = user.email || "";
    document.getElementById("profileHomeCity").value = user.home_city || "Bengaluru";
    
    const avatar = user.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80";
    document.getElementById("profileAvatarInput").value = avatar;
    document.getElementById("profileAvatarPreview").src = avatar;

    // Sidebar summary
    document.getElementById("profileSidebarName").textContent = user.name;
    document.getElementById("profileSidebarEmail").textContent = user.email;
    document.getElementById("profileSidebarCity").textContent = `Home: ${user.home_city || 'India'}`;

    // Parse Preferences
    if (user.preferences) {
      try {
        const prefs = typeof user.preferences === "string" ? JSON.parse(user.preferences) : user.preferences;
        this.currentPreferences = { ...this.currentPreferences, ...prefs };
        
        if (prefs.travel_style) {
          document.getElementById("profileTravelStyle").value = prefs.travel_style;
        }
        if (prefs.budget_tier) {
          document.getElementById("profileBudgetTier").value = prefs.budget_tier;
        }
        if (prefs.bio) {
          document.getElementById("profileBioInput").value = prefs.bio;
        }

        // Categories
        const cats = prefs.favorite_categories || [];
        document.querySelectorAll(".preference-tag").forEach(tag => {
          if (cats.includes(tag.dataset.category)) {
            tag.classList.add("selected");
          } else {
            tag.classList.remove("selected");
          }
        });
      } catch (e) {
        console.error("Error parsing preferences:", e);
      }
    }
  },

  async loadUserStats() {
    try {
      const stats = await API.getUserStats();
      const statsContainer = document.getElementById("userStatsSummaryArea");
      if (!statsContainer) return;

      statsContainer.innerHTML = `
        <div class="stats-grid" style="margin-bottom: 0;">
          <div class="stat-card card-theme" style="padding: 16px;">
            <div class="stat-icon indigo" style="width: 44px; height: 44px; font-size: 1.2rem;">🗺️</div>
            <div class="stat-info">
              <div class="stat-value" style="font-size: 1.4rem;">${stats.total_trips}</div>
              <div class="stat-label" style="font-size: 0.75rem;">Total Trips</div>
            </div>
          </div>
          <div class="stat-card card-theme" style="padding: 16px;">
            <div class="stat-icon amber" style="width: 44px; height: 44px; font-size: 1.2rem;">🏛️</div>
            <div class="stat-info">
              <div class="stat-value" style="font-size: 1.4rem;">${stats.unique_cities_visited}</div>
              <div class="stat-label" style="font-size: 0.75rem;">Cities Visited</div>
            </div>
          </div>
          <div class="stat-card card-theme" style="padding: 16px;">
            <div class="stat-icon amber" style="width: 44px; height: 44px; font-size: 1.2rem;">₹</div>
            <div class="stat-info">
              <div class="stat-value" style="font-size: 1.4rem; color: var(--saffron-amber);">₹${stats.total_budget_spent_inr.toLocaleString('en-IN')}</div>
              <div class="stat-label" style="font-size: 0.75rem;">Expenses Tracked</div>
            </div>
          </div>
        </div>
      `;
    } catch (err) {
      console.log("User stats not loaded or user not logged in");
    }
  },

  async handleSaveProfile(e) {
    e.preventDefault();
    const name = document.getElementById("profileNameInput").value.trim();
    const homeCity = document.getElementById("profileHomeCity").value;
    const avatarUrl = document.getElementById("profileAvatarInput").value.trim();
    const travelStyle = document.getElementById("profileTravelStyle").value;
    const budgetTier = document.getElementById("profileBudgetTier").value;
    const bio = document.getElementById("profileBioInput").value.trim();
    const saveBtn = document.getElementById("saveProfileBtn");

    if (!name || name.length < 2) {
      App.showToast("Please enter a valid name.", "error");
      return;
    }

    this.updateSelectedCategories();
    const preferences = {
      travel_style: travelStyle,
      budget_tier: budgetTier,
      favorite_categories: this.currentPreferences.favorite_categories,
      bio: bio
    };

    try {
      saveBtn.disabled = true;
      saveBtn.innerHTML = "Saving Changes...";

      const updatedUser = await API.updateProfile({
        name,
        home_city: homeCity,
        avatar_url: avatarUrl,
        preferences
      });

      App.showToast("Profile settings updated successfully!", "success");
      this.populateForm(updatedUser);
      Auth.renderAuthenticatedHeader(updatedUser);
    } catch (err) {
      App.showToast(err.message || "Failed to update profile", "error");
    } finally {
      saveBtn.disabled = false;
      saveBtn.innerHTML = "Save Changes";
    }
  }
};

window.Profile = Profile;
