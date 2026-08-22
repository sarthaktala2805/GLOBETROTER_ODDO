// Platform Stats & Destination Explorer Controller

const Stats = {
  currentFilter: {
    region: "",
    cost_index: "",
    search: ""
  },

  init() {
    this.bindEvents();
    this.loadPlatformStats();
    this.loadCities();
  },

  bindEvents() {
    // Search input
    const searchInput = document.getElementById("citySearchInput");
    if (searchInput) {
      let timeout = null;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.currentFilter.search = e.target.value.trim();
          this.loadCities();
        }, 250);
      });
    }

    // Region Filter Pills
    document.querySelectorAll(".region-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        document.querySelectorAll(".region-pill").forEach(p => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.currentFilter.region = e.currentTarget.dataset.region || "";
        this.loadCities();
      });
    });

    // Cost Filter Pills
    document.querySelectorAll(".cost-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        document.querySelectorAll(".cost-pill").forEach(p => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.currentFilter.cost_index = e.currentTarget.dataset.cost || "";
        this.loadCities();
      });
    });

    // Close City Modal
    const cityModalClose = document.getElementById("cityDetailModalClose");
    if (cityModalClose) {
      cityModalClose.addEventListener("click", () => {
        document.getElementById("cityDetailModal").classList.remove("active");
      });
    }
    
    const cityModalOverlay = document.getElementById("cityDetailModal");
    if (cityModalOverlay) {
      cityModalOverlay.addEventListener("click", (e) => {
        if (e.target === cityModalOverlay) {
          cityModalOverlay.classList.remove("active");
        }
      });
    }
  },

  async loadPlatformStats() {
    try {
      const stats = await API.getPlatformStats();
      
      // Update Stat Cards
      document.getElementById("statTotalUsers").textContent = stats.total_users;
      document.getElementById("statTotalTrips").textContent = stats.total_trips;
      document.getElementById("statTotalCities").textContent = stats.total_cities;
      document.getElementById("statTotalActivities").textContent = stats.total_activities;
      document.getElementById("statTotalBudget").textContent = `₹${Math.round(stats.total_budget_planned_inr).toLocaleString('en-IN')}`;

      // Render Category distribution badges
      const catContainer = document.getElementById("categoryBreakdownArea");
      if (catContainer && stats.activities_by_category) {
        catContainer.innerHTML = Object.entries(stats.activities_by_category)
          .map(([cat, count]) => `
            <span class="currency-badge" style="background: var(--royal-indigo-50); border-color: var(--royal-indigo-100); color: var(--royal-indigo);">
              ${cat}: <strong>${count} Activities</strong>
            </span>
          `).join("");
      }
    } catch (err) {
      console.error("Failed to load platform stats:", err);
    }
  },

  async loadCities() {
    const grid = document.getElementById("cityCardsGrid");
    if (!grid) return;

    try {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Discovering Indian Destinations...</div>`;
      
      const cities = await API.getCities(this.currentFilter);

      if (!cities || cities.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No destinations found matching your filter criteria.</div>`;
        return;
      }

      grid.innerHTML = cities.map(city => {
        let costBadgeClass = "cost-med";
        if (city.cost_index === "Low") costBadgeClass = "cost-low";
        if (city.cost_index === "High") costBadgeClass = "cost-high";

        return `
          <div class="card-theme city-card" onclick="Stats.openCityModal(${city.id})">
            <div style="position: relative;">
              <img src="${city.image_url}" alt="${city.name}" class="city-card-image" loading="lazy" />
              <span class="city-badge-region">${city.region} India</span>
              <span class="city-badge-cost ${costBadgeClass}">${city.cost_index} Cost</span>
            </div>
            <div class="city-card-body">
              <div class="city-title-row">
                <h3>${city.name}</h3>
                <div class="city-popularity">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ${city.popularity_score}
                </div>
              </div>
              <div class="city-meta">
                <span>📍 ${city.latitude.toFixed(2)}°N, ${city.longitude.toFixed(2)}°E</span>
              </div>
              <div class="city-footer">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--royal-indigo);">
                  ✨ ${city.activities_count} Categorized Experiences
                </span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--saffron-amber);">Explore →</span>
              </div>
            </div>
          </div>
        `;
      }).join("");

    } catch (err) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--danger);">Failed to load destinations: ${err.message}</div>`;
    }
  },

  async openCityModal(cityId) {
    try {
      const city = await API.getCityDetail(cityId);
      const modal = document.getElementById("cityDetailModal");
      
      document.getElementById("cityModalTitle").textContent = `${city.name}, India`;
      document.getElementById("cityModalHeroImg").src = city.image_url;
      document.getElementById("cityModalRegion").textContent = `${city.region} India`;
      document.getElementById("cityModalCost").textContent = `${city.cost_index} Cost Index`;
      document.getElementById("cityModalCoordinates").textContent = `GPS: ${city.latitude}° N, ${city.longitude}° E`;
      document.getElementById("cityModalScore").textContent = `★ ${city.popularity_score} Popularity`;

      const actsContainer = document.getElementById("cityModalActivitiesList");
      if (city.activities && city.activities.length > 0) {
        actsContainer.innerHTML = city.activities.map(act => `
          <div class="activity-card-item">
            <img src="${act.image_url}" alt="${act.name}" class="activity-thumb" />
            <div style="flex-grow: 1;">
              <span class="activity-badge-category">${act.category}</span>
              <h4 style="font-size: 0.98rem; margin-bottom: 2px; color: var(--royal-indigo-dark);">${act.name}</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">⏳ ~${act.duration_minutes} minutes duration</p>
            </div>
            <div style="text-align: right; flex-shrink: 0;">
              <div class="activity-cost-tag">₹${act.estimated_cost.toLocaleString('en-IN')}</div>
              <span style="font-size: 0.72rem; color: var(--text-secondary);">per person</span>
            </div>
          </div>
        `).join("");
      } else {
        actsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted);">No activities listed for this destination yet.</p>`;
      }

      modal.classList.add("active");
    } catch (err) {
      App.showToast("Failed to fetch destination details", "error");
    }
  }
};

window.Stats = Stats;
