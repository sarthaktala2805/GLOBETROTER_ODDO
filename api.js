// API Client for Globetrotter Backend
const API_BASE = "/api";

const API = {
  getToken() {
    return localStorage.getItem("globetrotter_token");
  },

  setToken(token) {
    if (token) {
      localStorage.setItem("globetrotter_token", token);
    } else {
      localStorage.removeItem("globetrotter_token");
    }
  },

  getUser() {
    const raw = localStorage.getItem("globetrotter_user");
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  setUser(user) {
    if (user) {
      localStorage.setItem("globetrotter_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("globetrotter_user");
    }
  },

  clearAuth() {
    localStorage.removeItem("globetrotter_token");
    localStorage.removeItem("globetrotter_user");
  },

  async request(endpoint, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    const token = this.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
      });

      if (response.status === 204) {
        return null;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Request failed");
      }
      return data;
    } catch (error) {
      console.error(`API Error on [${options.method || "GET"} ${endpoint}]:`, error);
      throw error;
    }
  },

  // Auth endpoints
  async login(email, password) {
    const res = await this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    this.setToken(res.access_token);
    this.setUser(res.user);
    return res;
  },

  async register(name, email, password, home_city, preferences) {
    const res = await this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, home_city, preferences })
    });
    this.setToken(res.access_token);
    this.setUser(res.user);
    return res;
  },

  async getMe() {
    const user = await this.request("/auth/me");
    this.setUser(user);
    return user;
  },

  async updateProfile(profileData) {
    const user = await this.request("/auth/update-profile", {
      method: "PUT",
      body: JSON.stringify(profileData)
    });
    this.setUser(user);
    return user;
  },

  async forgotPassword(email) {
    return await this.request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email })
    });
  },

  // Master Cities & Activities
  async getCities(params = {}) {
    const searchParams = new URLSearchParams();
    if (params.region) searchParams.append("region", params.region);
    if (params.cost_index) searchParams.append("cost_index", params.cost_index);
    if (params.search) searchParams.append("search", params.search);
    const query = searchParams.toString() ? `?${searchParams.toString()}` : "";
    return await this.request(`/cities${query}`);
  },

  async getCityDetail(cityId) {
    return await this.request(`/cities/${cityId}`);
  },

  async getCityActivities(cityId) {
    return await this.request(`/cities/${cityId}/activities`);
  },

  // Stats
  async getPlatformStats() {
    return await this.request("/stats/platform");
  },

  async getUserStats() {
    return await this.request("/stats/user");
  }
};

window.API = API;
