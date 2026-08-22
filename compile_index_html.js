// scripts/compile_index_html.js
const fs = require('fs');
const path = require('path');

// Read compiled datasets
function readDataFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const jsonStr = content.replace(/^[\s\S]*?=\s*/, '').replace(/;\s*export default[\s\S]*$/, '').trim();
  return JSON.parse(jsonStr);
}

const cities = readDataFile(path.join(__dirname, '../src/data/cities.js'));
const destinations = readDataFile(path.join(__dirname, '../src/data/destinations.js'));
const activities = readDataFile(path.join(__dirname, '../src/data/activities.js'));
const hotels = readDataFile(path.join(__dirname, '../src/data/hotels.js'));

console.log(`Loaded ${cities.length} cities, ${destinations.length} destinations, ${activities.length} activities, ${hotels.length} hotels.`);

// Attach spots and hotels array summary directly to each city object for lightning-fast UI rendering
const enrichedCities = cities.map(city => {
  const cityDests = destinations.filter(d => d.cityId === city.id);
  const cityActs = activities.filter(a => a.cityId === city.id);
  const cityHotels = hotels.filter(h => h.cityId === city.id);

  return {
    ...city,
    spots: cityDests.map(d => d.name),
    activitiesCount: cityActs.length,
    hotelsCount: cityHotels.length,
    hotels: cityHotels.slice(0, 5)
  };
});

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GlobeTrotter: Bharat Yatra - Pan-India Travel Discovery & Planner</title>
    <meta name="description" content="Discover Incredible Bharat. Plan authentic Indian journeys across 150+ cities in North, South, West, East, Central, North-East & Islands with Google Maps integration, Bhojan, Darshan, Hotels, and Sights." />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              royalIndigo: {
                50: '#EEF2FF',
                100: '#E0E7FF',
                500: '#6366F1',
                800: '#3730A3',
                900: '#312E81',
                950: '#1E1B4B',
              },
              saffronAmber: {
                50: '#FFFBEB',
                100: '#FEF3C7',
                500: '#F59E0B',
                600: '#D97706',
                700: '#B45309',
                800: '#92400E',
              },
              warmSlate: '#FAFAF9'
            },
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <style>
      body {
        background-color: #FAFAF9;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #d4d4d8;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #a1a1aa;
      }
      .animate-fade-in {
        animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  </head>
  <body class="bg-[#FAFAF9] text-stone-900 min-h-screen selection:bg-amber-100 selection:text-amber-900">
    <div id="root"></div>

    <!-- React 18 & Babel for instant browser execution -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
      const { useState, useEffect, useMemo } = React;

      // Master Dataset Injected
      const PAN_INDIA_CITIES = ${JSON.stringify(enrichedCities)};
      const PAN_INDIA_DESTINATIONS = ${JSON.stringify(destinations)};
      const PAN_INDIA_ACTIVITIES = ${JSON.stringify(activities)};
      const PAN_INDIA_HOTELS = ${JSON.stringify(hotels)};

      // Live Weather Fetcher with localStorage caching & Open-Meteo
      async function fetchCityWeather(city) {
        if (!city || !city.lat || !city.lng) return { temp: "26°C", text: "Pleasant", icon: "☀️", live: false };
        const key = "gt_weather_" + city.id;
        try {
          const cached = sessionStorage.getItem(key);
          if (cached) return JSON.parse(cached);
          const res = await fetch(\`https://api.open-meteo.com/v1/forecast?latitude=\${city.lat}&longitude=\${city.lng}&current=temperature_2m,weather_code\`);
          if (res.ok) {
            const data = await res.json();
            const temp = Math.round(data.current?.temperature_2m || 26) + "°C";
            const code = data.current?.weather_code || 0;
            const text = code <= 2 ? "Clear & Sunny" : code <= 45 ? "Partly Cloudy" : code <= 65 ? "Rain Showers" : "Misty";
            const icon = code <= 2 ? "☀️" : code <= 45 ? "⛅" : "🌦️";
            const result = { temp, text, icon, live: true };
            sessionStorage.setItem(key, JSON.stringify(result));
            return result;
          }
        } catch(e) {}
        return { temp: "26°C", text: "Pleasant", icon: "☀️", live: false };
      }

      // Reusable Entity-Aware Image Component with specific fallback themes
      function TravelImage({ src, alt = "Travel Photo", type = "city", className = "w-full h-full object-cover" }) {
        const [hasError, setHasError] = useState(false);

        const FALLBACK_CONFIG = {
          city: {
            icon: "🏙️",
            label: "Bharat City",
            gradient: "from-indigo-950 via-indigo-900 to-amber-950 text-amber-200"
          },
          destination: {
            icon: "🏛️",
            label: "Heritage Landmark",
            gradient: "from-amber-950 via-stone-900 to-indigo-950 text-amber-300"
          },
          food: {
            icon: "🍲",
            label: "Authentic Bhojan",
            gradient: "from-amber-900 via-orange-950 to-stone-900 text-amber-200"
          },
          adventure: {
            icon: "🧗",
            label: "Adventure Thrill",
            gradient: "from-emerald-950 via-teal-950 to-stone-900 text-emerald-200"
          },
          culture: {
            icon: "🎭",
            label: "Cultural Heritage",
            gradient: "from-purple-950 via-indigo-950 to-stone-900 text-purple-200"
          },
          spiritual: {
            icon: "🪷",
            label: "Spiritual Darshan",
            gradient: "from-amber-900 via-yellow-950 to-stone-900 text-amber-300"
          },
          shopping: {
            icon: "🛍️",
            label: "Artisanal Bazaar",
            gradient: "from-pink-950 via-purple-950 to-stone-900 text-pink-200"
          },
          hotel: {
            icon: "🏨",
            label: "Verified Stay",
            gradient: "from-stone-900 via-indigo-950 to-stone-950 text-amber-200"
          }
        };

        const config = FALLBACK_CONFIG[type] || FALLBACK_CONFIG.city;

        if (!src || hasError) {
          return (
            <div className={\`bg-gradient-to-br \${config.gradient} flex flex-col items-center justify-center select-none p-3 text-center \${className}\`}>
              <span className="text-3xl mb-1.5 drop-shadow-md">{config.icon}</span>
              <span className="text-[11px] font-bold tracking-wide uppercase opacity-90">{config.label}</span>
              <span className="text-[10px] font-medium opacity-70 line-clamp-1 mt-0.5">{alt}</span>
            </div>
          );
        }

        return (
          <img 
            src={src} 
            alt={alt} 
            className={className} 
            loading="lazy" 
            onError={() => setHasError(true)} 
          />
        );
      }

      // Main App
      function App() {
        const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, explore-cities, hotels, activities, my-trips
        const [searchQuery, setSearchQuery] = useState("");
        const [selectedRegion, setSelectedRegion] = useState("All");
        const [selectedCost, setSelectedCost] = useState("All");
        const [activityCategoryFilter, setActivityCategoryFilter] = useState("All");
        const [hotelTierFilter, setHotelTierFilter] = useState("All");
        
        // Modals & Drawers
        const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
        const [isPlanTripModalOpen, setIsPlanTripModalOpen] = useState(false);
        const [selectedCityForActivities, setSelectedCityForActivities] = useState(null);
        const [selectedCityForHotels, setSelectedCityForHotels] = useState(null);
        const [selectedCityForMap, setSelectedCityForMap] = useState(null);

        // Trips State (Pre-seeded with authentic itineraries)
        const [trips, setTrips] = useState([
          {
            id: "trip-rajasthan-royal",
            title: "Royal Rajasthan Odyssey",
            dates: "12 Oct - 18 Oct 2026 (7 Days)",
            duration: "7 Days",
            status: "Confirmed",
            cities: ["Jaipur", "Udaipur", "Jodhpur"],
            selectedHotel: PAN_INDIA_HOTELS.find(h => h.id === "hotel-city-jaipur-1") || PAN_INDIA_HOTELS[0],
            activities: [PAN_INDIA_ACTIVITIES[0]?.id, PAN_INDIA_ACTIVITIES[1]?.id].filter(Boolean),
            totalBudget: 42500,
            coverImage: PAN_INDIA_CITIES.find(c => c.id === "city-jaipur")?.image || ""
          },
          {
            id: "trip-kerala-backwaters",
            title: "God's Own Country & Backwaters",
            dates: "04 Nov - 09 Nov 2026 (6 Days)",
            duration: "6 Days",
            status: "Planning",
            cities: ["Kochi", "Munnar", "Alleppey"],
            selectedHotel: PAN_INDIA_HOTELS.find(h => h.id === "hotel-city-alleppey-1") || PAN_INDIA_HOTELS[1],
            activities: [PAN_INDIA_ACTIVITIES[5]?.id, PAN_INDIA_ACTIVITIES[6]?.id].filter(Boolean),
            totalBudget: 34800,
            coverImage: PAN_INDIA_CITIES.find(c => c.id === "city-alleppey")?.image || ""
          }
        ]);

        const [toastMessage, setToastMessage] = useState(null);
        const showToast = (msg) => {
          setToastMessage(msg);
          setTimeout(() => setToastMessage(null), 3000);
        };

        // Filtered Cities
        const filteredCities = useMemo(() => {
          let list = [...PAN_INDIA_CITIES];
          const q = searchQuery.toLowerCase().trim();
          if (q) {
            list = list.filter(c => 
              c.name.toLowerCase().includes(q) || 
              c.state.toLowerCase().includes(q) || 
              c.region.toLowerCase().includes(q) ||
              (c.tags || []).some(t => t.toLowerCase().includes(q)) ||
              (c.description || "").toLowerCase().includes(q)
            );
          }
          if (selectedRegion !== "All") {
            list = list.filter(c => c.region === selectedRegion);
          }
          if (selectedCost !== "All") {
            list = list.filter(c => c.costIndex === selectedCost);
          }
          return list;
        }, [searchQuery, selectedRegion, selectedCost]);

        // Filtered Activities
        const filteredActivities = useMemo(() => {
          if (activityCategoryFilter === "All") return PAN_INDIA_ACTIVITIES;
          return PAN_INDIA_ACTIVITIES.filter(a => a.category === activityCategoryFilter || a.imageType === activityCategoryFilter);
        }, [activityCategoryFilter]);

        // Filtered Hotels
        const filteredHotels = useMemo(() => {
          if (hotelTierFilter === "All") return PAN_INDIA_HOTELS;
          return PAN_INDIA_HOTELS.filter(h => h.category === hotelTierFilter);
        }, [hotelTierFilter]);

        // Handlers
        const handleAddCityToTrip = (city) => {
          const newTrip = {
            id: \`trip-\${Date.now()}\`,
            title: \`\${city.name} Bharat Yatra\`,
            dates: "15 Nov 2026 (5 Days)",
            duration: "5 Days",
            status: "Planning",
            cities: [city.name],
            selectedHotel: PAN_INDIA_HOTELS.find(h => h.cityId === city.id) || null,
            activities: PAN_INDIA_ACTIVITIES.filter(a => a.cityId === city.id).slice(0, 2).map(a => a.id),
            totalBudget: (city.avgCostPerDay * 5) + 6500,
            coverImage: city.image
          };
          setTrips([newTrip, ...trips]);
          showToast(\`✨ \${city.name} added to your Bharat Yatras!\`);
        };

        return (
          <div className="min-h-screen flex flex-col">
            {/* Toast Notification */}
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#3730A3] text-white text-xs font-bold shadow-2xl border border-amber-300 animate-fade-in flex items-center gap-2">
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Global Navbar */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100/80 shadow-xs">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
                
                {/* Brand */}
                <div 
                  onClick={() => setActiveTab("dashboard")} 
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3730A3] to-indigo-900 flex items-center justify-center text-xl shadow-md border border-amber-200">
                    🌍
                  </div>
                  <div>
                    <span className="text-lg font-black tracking-tight text-[#3730A3] block leading-none">
                      GlobeTrotter
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#D97706] uppercase">
                      Bharat Yatra · 150+ Cities
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1.5 rounded-2xl border border-stone-200/60">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === "dashboard" ? "bg-[#3730A3] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"}\`}
                  >
                    🏛️ Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab("explore-cities")}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === "explore-cities" ? "bg-[#3730A3] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"}\`}
                  >
                    🔍 150+ Cities
                  </button>
                  <button
                    onClick={() => setActiveTab("hotels")}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === "hotels" ? "bg-[#3730A3] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"}\`}
                  >
                    🏨 Hotels & Stays ({PAN_INDIA_HOTELS.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("activities")}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === "activities" ? "bg-[#3730A3] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"}\`}
                  >
                    🎭 Activities ({PAN_INDIA_ACTIVITIES.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("my-trips")}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${activeTab === "my-trips" ? "bg-[#3730A3] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"}\`}
                  >
                    🧳 My Yatras ({trips.length})
                  </button>
                </div>

                {/* Right CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSearchModalOpen(true)}
                    className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-bold flex items-center gap-2"
                    title="Quick Search"
                  >
                    <span>🔍</span>
                    <span className="hidden sm:inline text-xs">Search Bharat</span>
                  </button>

                  <button
                    onClick={() => setIsPlanTripModalOpen(true)}
                    className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-xs shadow-md active:scale-98 transition-all flex items-center gap-1.5"
                  >
                    <span>+</span>
                    <span>Plan Nayi Yatra</span>
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8 w-full">
              
              {/* DASHBOARD TAB */}
              {activeTab === "dashboard" && (
                <div className="space-y-8 animate-fade-in">
                  
                  {/* Hero Banner */}
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3730A3] via-indigo-900 to-[#1E1B4B] text-white p-6 sm:p-10 shadow-xl border border-indigo-700/40">
                    <div className="max-w-3xl space-y-4 relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold">
                        <span>✨</span>
                        <span>पधारो सा · Welcome to Incredible Bharat</span>
                      </div>
                      <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                        Explore <span className="text-amber-300">{PAN_INDIA_CITIES.length}+ Distinct Cities</span> Across India
                      </h1>
                      <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                        From the snow-clad peaks of Leh Ladakh to the sacred ghats of Varanasi and tropical backwaters of Kerala — discover authentic experiences, verified stays, and live weather.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <button
                          onClick={() => setIsPlanTripModalOpen(true)}
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D97706] to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md"
                        >
                          + Plan Nayi Yatra
                        </button>
                        <button
                          onClick={() => setActiveTab("explore-cities")}
                          className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20"
                        >
                          🔍 Browse All 150+ Cities
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Summary Metric Badges */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-xs">
                      <div className="text-xs font-bold text-stone-500 uppercase">Indian Destinations</div>
                      <div className="text-2xl font-black text-[#3730A3] mt-1">{PAN_INDIA_CITIES.length} Cities</div>
                      <div className="text-[11px] text-stone-500">28 States & 8 Union Territories</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-xs">
                      <div className="text-xs font-bold text-stone-500 uppercase">Curated Experiences</div>
                      <div className="text-2xl font-black text-[#D97706] mt-1">{PAN_INDIA_ACTIVITIES.length}+ Activities</div>
                      <div className="text-[11px] text-stone-500">Heritage, Food, Wildlife & Yoga</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-xs">
                      <div className="text-xs font-bold text-stone-500 uppercase">Verified Stays</div>
                      <div className="text-2xl font-black text-[#3730A3] mt-1">{PAN_INDIA_HOTELS.length}+ Hotels</div>
                      <div className="text-[11px] text-stone-500">Palaces, Resorts & Homestays</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-xs">
                      <div className="text-xs font-bold text-stone-500 uppercase">Your Yatras</div>
                      <div className="text-2xl font-black text-emerald-700 mt-1">{trips.length} Active Trips</div>
                      <div className="text-[11px] text-stone-500">Custom Day-wise Itineraries</div>
                    </div>
                  </div>

                  {/* Region Filter Chips */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                        🇮🇳 Popular Cities & Regions
                      </h2>
                      <button
                        onClick={() => setActiveTab("explore-cities")}
                        className="text-xs font-bold text-[#3730A3] hover:underline"
                      >
                        View All ({PAN_INDIA_CITIES.length}) →
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 pb-2">
                      {["All", "North", "South", "West", "East", "Central", "North-East", "Islands"].map(reg => (
                        <button
                          key={reg}
                          onClick={() => setSelectedRegion(reg)}
                          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${selectedRegion === reg ? "bg-[#3730A3] text-white shadow-xs" : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"}\`}
                        >
                          {reg === "All" ? "🇮🇳 All Bharat" : reg + " India"}
                        </button>
                      ))}
                    </div>

                    {/* Featured Cities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCities.slice(0, 12).map(city => (
                        <CityCard 
                          key={city.id} 
                          city={city} 
                          onExploreActivities={() => { setSelectedCityForActivities(city); }}
                          onExploreHotels={() => { setSelectedCityForHotels(city); }}
                          onViewMap={() => { setSelectedCityForMap(city); }}
                          onAddToTrip={() => handleAddCityToTrip(city)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* EXPLORE CITIES TAB */}
              {activeTab === "explore-cities" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#3730A3]">
                        Explore All Bharat Cities ({filteredCities.length})
                      </h1>
                      <p className="text-xs text-stone-500 mt-1">
                        Filter by region, budget, and travel tags across 150+ authentic destinations.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="Search city, state, monument..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64 rounded-xl border border-stone-200 px-4 py-2 text-xs focus:ring-2 focus:ring-amber-500 outline-none bg-white font-medium"
                      />
                    </div>
                  </div>

                  {/* Filter Toolbar */}
                  <div className="p-4 rounded-2xl bg-white border border-amber-100/80 shadow-xs flex flex-wrap gap-4 items-center">
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 block uppercase">Region</label>
                      <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="mt-0.5 rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-semibold bg-white outline-none"
                      >
                        {["All", "North", "South", "West", "East", "Central", "North-East", "Islands"].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-stone-400 block uppercase">Daily Budget</label>
                      <select
                        value={selectedCost}
                        onChange={(e) => setSelectedCost(e.target.value)}
                        className="mt-0.5 rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-semibold bg-white outline-none"
                      >
                        <option value="All">All Budgets</option>
                        <option value="Low">Low (&lt; ₹2000/day)</option>
                        <option value="Medium">Medium (₹2000 - ₹3500/day)</option>
                        <option value="High">High (&gt; ₹3500/day)</option>
                      </select>
                    </div>

                    {(searchQuery || selectedRegion !== "All" || selectedCost !== "All") && (
                      <button
                        onClick={() => { setSearchQuery(""); setSelectedRegion("All"); setSelectedCost("All"); }}
                        className="mt-3 text-xs font-bold text-red-600 hover:underline"
                      >
                        Reset Filters
                      </button>
                    )}
                  </div>

                  {/* Cities Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCities.map(city => (
                      <CityCard 
                        key={city.id} 
                        city={city} 
                        onExploreActivities={() => setSelectedCityForActivities(city)}
                        onExploreHotels={() => setSelectedCityForHotels(city)}
                        onViewMap={() => setSelectedCityForMap(city)}
                        onAddToTrip={() => handleAddCityToTrip(city)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* HOTELS & STAYS TAB */}
              {activeTab === "hotels" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#3730A3]">
                        Pan-India Hotels & Stays ({filteredHotels.length})
                      </h1>
                      <p className="text-xs text-stone-500 mt-1">
                        Luxury heritage palaces, 5-star spa resorts, boutique retreats, and budget homestays with distinct accommodation imagery.
                      </p>
                    </div>

                    {/* Hotel Tier Filter */}
                    <div className="flex flex-wrap gap-2">
                      {["All", "Luxury & Premium", "Boutique & Eco", "Mid-Range", "Budget & Hostels"].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setHotelTierFilter(cat)}
                          className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${hotelTierFilter === cat ? "bg-[#3730A3] text-white shadow-xs" : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"}\`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredHotels.slice(0, 36).map(hotel => (
                      <div key={hotel.id} className="rounded-2xl border border-amber-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                        <div className="relative h-44 w-full">
                          <TravelImage src={hotel.image} alt={hotel.imageAlt || hotel.name} type="hotel" />
                          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 text-[10px] font-extrabold text-white">
                            ⭐ {hotel.rating} ({hotel.reviewsCount} reviews)
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white drop-shadow">
                            <span className="text-[10px] font-bold bg-amber-600/90 px-2 py-0.5 rounded text-white">{hotel.category}</span>
                          </div>
                        </div>

                        <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-stone-900 line-clamp-1">{hotel.name}</h3>
                            <p className="text-xs text-stone-500">{hotel.cityName}, {hotel.state}</p>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {(hotel.amenities || []).slice(0, 3).map((am, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                                ✓ {am}
                              </span>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-stone-400 block font-bold">PER NIGHT</span>
                              <span className="text-sm font-black text-[#D97706]">₹{hotel.pricePerNight?.toLocaleString("en-IN")}</span>
                            </div>
                            <button
                              onClick={() => showToast(\`🏨 Selected \${hotel.name} for your stay!\`)}
                              className="px-4 py-2 rounded-xl bg-[#3730A3] hover:bg-indigo-900 text-white font-bold text-xs shadow-xs"
                            >
                              Select Stay
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIVITIES TAB */}
              {activeTab === "activities" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#3730A3]">
                        Curated Bharat Experiences ({filteredActivities.length})
                      </h1>
                      <p className="text-xs text-stone-500 mt-1">
                        Heritage walks, culinary street food trails, tiger safaris, spiritual aartis, and mountain treks.
                      </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "All", val: "All" },
                        { label: "🍲 Food/Bhojan", val: "Food & Dining" },
                        { label: "🧗 Adventure", val: "Adventure & Sports" },
                        { label: "🏛️ Heritage", val: "Heritage & Culture" },
                        { label: "🪷 Spiritual", val: "Spiritual & Wellness" },
                        { label: "🛍️ Shopping", val: "Shopping & Crafts" }
                      ].map(cat => (
                        <button
                          key={cat.val}
                          onClick={() => setActivityCategoryFilter(cat.val)}
                          className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${activityCategoryFilter === cat.val ? "bg-[#3730A3] text-white shadow-xs" : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"}\`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredActivities.slice(0, 36).map(act => (
                      <div key={act.id} className="rounded-2xl border border-amber-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                        <div className="relative h-44 w-full">
                          <TravelImage src={act.image} alt={act.imageAlt || act.name} type={act.imageType} />
                          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 text-[10px] font-extrabold text-white">
                            ⭐ {act.rating} ({act.reviewsCount})
                          </div>
                          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#D97706] text-[10px] font-extrabold text-white">
                            {act.badge}
                          </div>
                        </div>

                        <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wide">{act.category}</span>
                            <h3 className="text-sm font-bold text-stone-900 line-clamp-1 mt-0.5">{act.name}</h3>
                            <p className="text-xs text-stone-500">{act.cityName}, {act.state} · ⏱️ {act.duration}</p>
                          </div>

                          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                            {act.description}
                          </p>

                          <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-stone-400 block font-bold">EXPERIENCE COST</span>
                              <span className="text-sm font-black text-[#D97706]">{act.price === 0 ? "Free" : \`₹\${act.price}\`}</span>
                            </div>
                            <button
                              onClick={() => showToast(\`🎭 Added "\${act.name}" to your itinerary!\`)}
                              className="px-4 py-2 rounded-xl bg-[#D97706] hover:bg-amber-600 text-white font-bold text-xs shadow-xs"
                            >
                              + Add Experience
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MY TRIPS TAB */}
              {activeTab === "my-trips" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#3730A3]">My Bharat Yatras ({trips.length})</h1>
                      <p className="text-xs text-stone-500 mt-1">Manage day-wise itineraries, hotel bookings, and total estimated budget.</p>
                    </div>
                    <button
                      onClick={() => setIsPlanTripModalOpen(true)}
                      className="px-4.5 py-2.5 rounded-xl bg-[#D97706] text-white font-bold text-xs shadow-md"
                    >
                      + Plan Nayi Yatra
                    </button>
                  </div>

                  <div className="space-y-6">
                    {trips.map(t => {
                      const tripActs = PAN_INDIA_ACTIVITIES.filter(a => t.activities?.includes(a.id));
                      return (
                        <div key={t.id} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-xs space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h2 className="text-xl font-black text-[#3730A3]">{t.title}</h2>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">{t.status}</span>
                              </div>
                              <p className="text-xs text-stone-500 mt-1">{t.dates} · {(t.cities || []).join(" · ")}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] uppercase font-bold text-stone-400 block">Total Budget Estimate</span>
                              <span className="text-xl font-black text-[#D97706]">₹{t.totalBudget?.toLocaleString("en-IN")}</span>
                            </div>
                          </div>

                          {t.selectedHotel && (
                            <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs flex items-center justify-between">
                              <span className="font-semibold text-stone-700">🏨 Stay: <strong>{t.selectedHotel.name}</strong> ({t.selectedHotel.category})</span>
                              <span className="font-bold text-[#D97706]">₹{t.selectedHotel.pricePerNight?.toLocaleString("en-IN")}/night</span>
                            </div>
                          )}

                          <div className="space-y-2">
                            <h4 className="text-xs font-bold text-stone-700">Itinerary Experiences ({tripActs.length})</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                              {tripActs.map(act => (
                                <div key={act.id} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs flex items-center justify-between">
                                  <span className="font-medium text-stone-800 truncate max-w-[180px]">{act.name}</span>
                                  <span className="font-bold text-[#D97706]">{act.price === 0 ? "Free" : \`₹\${act.price}\`}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </main>

            {/* QUICK SEARCH & DISCOVERY MODAL */}
            {isSearchModalOpen && (
              <CitySearchModal 
                cities={PAN_INDIA_CITIES}
                onClose={() => setIsSearchModalOpen(false)}
                onSelectCity={(city) => {
                  setIsSearchModalOpen(false);
                  setSelectedCityForActivities(city);
                }}
                onAddToTrip={(city) => {
                  handleAddCityToTrip(city);
                  setIsSearchModalOpen(false);
                }}
              />
            )}

            {/* PLAN TRIP MODAL */}
            {isPlanTripModalOpen && (
              <PlanTripModal 
                cities={PAN_INDIA_CITIES}
                hotels={PAN_INDIA_HOTELS}
                onClose={() => setIsPlanTripModalOpen(false)}
                onCreateTrip={(trip) => {
                  setTrips([trip, ...trips]);
                  showToast(\`🚀 Trip "\${trip.title}" created successfully!\`);
                  setActiveTab("my-trips");
                }}
              />
            )}

            {/* ACTIVITY DRAWER MODAL */}
            {selectedCityForActivities && (
              <ActivityDrawer 
                city={selectedCityForActivities}
                activities={PAN_INDIA_ACTIVITIES.filter(a => a.cityId === selectedCityForActivities.id)}
                destinations={PAN_INDIA_DESTINATIONS.filter(d => d.cityId === selectedCityForActivities.id)}
                onClose={() => setSelectedCityForActivities(null)}
                onAddActivity={(act) => {
                  showToast(\`✨ Added "\${act.name}" to your trip!\`);
                }}
              />
            )}

            {/* HOTEL EXPLORER MODAL */}
            {selectedCityForHotels && (
              <HotelModal 
                city={selectedCityForHotels}
                hotels={PAN_INDIA_HOTELS.filter(h => h.cityId === selectedCityForHotels.id)}
                onClose={() => setSelectedCityForHotels(null)}
                onSelectHotel={(h) => {
                  showToast(\`🏨 Selected "\${h.name}"!\`);
                  setSelectedCityForHotels(null);
                }}
              />
            )}

            {/* MAP VIEW MODAL */}
            {selectedCityForMap && (
              <MapModal 
                city={selectedCityForMap}
                onClose={() => setSelectedCityForMap(null)}
              />
            )}
          </div>
        );
      }

      // City Card Component
      function CityCard({ city, onExploreActivities, onExploreHotels, onViewMap, onAddToTrip }) {
        const [weather, setWeather] = useState({ temp: "26°C", text: "Pleasant", icon: "☀️" });

        useEffect(() => {
          let isMounted = true;
          fetchCityWeather(city).then(w => {
            if (isMounted) setWeather(w);
          });
          return () => { isMounted = false; };
        }, [city]);

        return (
          <div className="rounded-2xl border border-amber-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="relative h-48 w-full overflow-hidden">
              <TravelImage 
                src={city.image} 
                alt={city.imageAlt || city.name} 
                type="city" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-extrabold text-white flex items-center gap-1">
                <span>{weather.icon}</span>
                <span>{weather.temp}</span>
                <span>·</span>
                <span>{city.region} India</span>
              </div>
              <button 
                onClick={onViewMap}
                className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/80 hover:bg-white text-stone-900 text-[10px] font-bold shadow"
              >
                🗺️ Map
              </button>
              <div className="absolute bottom-3 left-3 right-3 text-white drop-shadow">
                <h3 className="text-lg font-black">{city.name}</h3>
                <p className="text-xs text-stone-200">{city.state} · {city.tier}</p>
              </div>
            </div>

            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                {city.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {(city.tags || []).slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
                <span className="font-bold text-stone-900">₹{city.avgCostPerDay}/day</span>
                <span className="text-[11px] text-stone-400">Best: {city.bestSeason}</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <button
                  onClick={onExploreActivities}
                  className="py-2 px-1 rounded-xl border border-[#3730A3] text-[#3730A3] hover:bg-indigo-50 font-bold text-[11px] text-center"
                >
                  🎭 Activities
                </button>
                <button
                  onClick={onExploreHotels}
                  className="py-2 px-1 rounded-xl border border-amber-600 text-amber-800 hover:bg-amber-50 font-bold text-[11px] text-center"
                >
                  🏨 Hotels
                </button>
                <button
                  onClick={onAddToTrip}
                  className="py-2 px-1 rounded-xl bg-[#D97706] hover:bg-amber-600 text-white font-bold text-[11px] text-center shadow-xs"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        );
      }

      // City Search & Discovery Modal
      function CitySearchModal({ cities, onClose, onSelectCity, onAddToTrip }) {
        const [query, setQuery] = useState("");
        const [reg, setReg] = useState("All");

        const filtered = cities.filter(c => {
          const matchQ = c.name.toLowerCase().includes(query.toLowerCase()) || c.state.toLowerCase().includes(query.toLowerCase());
          const matchR = reg === "All" || c.region === reg;
          return matchQ && matchR;
        });

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <div className="w-full max-w-4xl max-h-[85vh] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-200">
              <div className="p-5 bg-[#3730A3] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">Search Bharat Destinations ({cities.length}+ Cities)</h3>
                  <p className="text-xs text-indigo-200">Find any city, state, heritage spot, and add to your itinerary.</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full font-bold">✕</button>
              </div>

              <div className="p-4 border-b border-stone-200 bg-white flex flex-wrap gap-3 items-center">
                <input
                  type="text"
                  placeholder="Type city name, e.g., Jaipur, Varanasi, Munnar, Leh, Puri..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white font-medium"
                  autoFocus
                />
                <select
                  value={reg}
                  onChange={(e) => setReg(e.target.value)}
                  className="rounded-xl border border-stone-200 px-4 py-2.5 text-xs font-bold text-[#3730A3] bg-white outline-none"
                >
                  {["All", "North", "South", "West", "East", "Central", "North-East", "Islands"].map(r => (
                    <option key={r} value={r}>{r} Region</option>
                  ))}
                </select>
              </div>

              <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map(city => (
                  <div key={city.id} className="p-3 rounded-2xl border border-stone-200 bg-white flex flex-col justify-between hover:border-amber-400 transition-all">
                    <div className="flex gap-3 items-center">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <TravelImage src={city.image} alt={city.imageAlt || city.name} type="city" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-stone-900 truncate">{city.name}</h4>
                        <p className="text-[10px] text-stone-500">{city.state} · {city.region}</p>
                        <span className="text-[10px] font-extrabold text-[#D97706]">₹{city.avgCostPerDay}/day</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3 mt-2 border-t border-stone-100">
                      <button
                        onClick={() => onSelectCity(city)}
                        className="flex-1 py-1.5 rounded-lg bg-indigo-50 text-[#3730A3] font-bold text-[10px] text-center"
                      >
                        Explore
                      </button>
                      <button
                        onClick={() => onAddToTrip(city)}
                        className="flex-1 py-1.5 rounded-lg bg-[#D97706] text-white font-bold text-[10px] text-center"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      // Activity Drawer
      function ActivityDrawer({ city, activities, destinations, onClose, onAddActivity }) {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <div className="w-full max-w-3xl max-h-[90vh] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-200">
              <div className="p-5 bg-[#3730A3] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">Experiences & Sights in {city.name}</h3>
                  <p className="text-xs text-indigo-200">{city.state} · {activities.length} Curated Experiences & {destinations.length} Key Sights</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full font-bold">✕</button>
              </div>

              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                {/* Key Sights */}
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Key Visiting Spots & Monuments</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {destinations.map(dest => (
                      <div key={dest.id} className="p-3 rounded-xl bg-white border border-stone-200 text-xs flex items-center justify-between gap-2">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <TravelImage src={dest.image} alt={dest.imageAlt || dest.name} type="destination" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-stone-800 truncate">{dest.name}</h6>
                          <span className="text-[10px] text-stone-500">{dest.category}</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded flex-shrink-0">{dest.entryFee}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Activities & Experiences</h4>
                  <div className="space-y-3">
                    {activities.map(act => (
                      <div key={act.id} className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex gap-3 items-center flex-1 min-w-0">
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <TravelImage src={act.image} alt={act.imageAlt || act.name} type={act.imageType} />
                          </div>
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded">{act.category}</span>
                              <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">⏱️ {act.duration}</span>
                            </div>
                            <h5 className="text-xs font-bold text-stone-900 truncate">{act.name}</h5>
                            <p className="text-[11px] text-stone-600 line-clamp-1">{act.description}</p>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0">
                          <span className="text-sm font-black text-[#D97706]">{act.price === 0 ? "Free" : \`₹\${act.price}\`}</span>
                          <button
                            onClick={() => onAddActivity(act)}
                            className="px-4 py-2 rounded-xl bg-[#D97706] text-white font-bold text-xs shadow-xs"
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Hotel Modal
      function HotelModal({ city, hotels, onClose, onSelectHotel }) {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <div className="w-full max-w-3xl max-h-[90vh] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-200">
              <div className="p-5 bg-[#3730A3] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">Stays & Hotels in {city.name}</h3>
                  <p className="text-xs text-indigo-200">{city.state} · {hotels.length} Options Available</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full font-bold">✕</button>
              </div>

              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                {hotels.map(h => (
                  <div key={h.id} className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <TravelImage src={h.image} alt={h.imageAlt || h.name} type="hotel" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-xs font-bold text-stone-900">{h.name}</h4>
                      <p className="text-[11px] text-stone-500">{h.tier} · ⭐ {h.rating}</p>
                      <div className="flex flex-wrap gap-1">
                        {(h.amenities || []).slice(0, 3).map((am, idx) => (
                          <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">✓ {am}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-black text-[#D97706]">₹{h.pricePerNight?.toLocaleString("en-IN")}/night</div>
                      <button
                        onClick={() => onSelectHotel(h)}
                        className="mt-2 px-4 py-2 rounded-xl bg-[#3730A3] text-white font-bold text-xs shadow-xs"
                      >
                        Select Stay
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      // Map Modal with Google Map Integration
      function MapModal({ city, onClose }) {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <div className="w-full max-w-3xl h-[80vh] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-200">
              <div className="p-5 bg-[#3730A3] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">Google Map - {city.name}, {city.state}</h3>
                  <p className="text-xs text-indigo-200">Coordinates: {city.lat}, {city.lng}</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full font-bold">✕</button>
              </div>
              <div className="flex-1 w-full bg-stone-100">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={\`https://www.google.com/maps?q=\${encodeURIComponent(city.name + ", " + city.state + ", India")}&output=embed\`}
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        );
      }

      // Plan Trip Modal
      function PlanTripModal({ cities, hotels, onClose, onCreateTrip }) {
        const [cityId, setCityId] = useState(cities[0]?.id || "city-jaipur");
        const [title, setTitle] = useState("Royal Bharat Yatra");
        const [days, setDays] = useState(5);
        const [selectedHotel, setSelectedHotel] = useState(null);
        const [subTab, setSubTab] = useState("spots");

        const city = cities.find(c => c.id === cityId) || cities[0];

        useEffect(() => {
          if (city) {
            setTitle(\`\${city.name} Bharat Yatra\`);
            const cityHotels = hotels.filter(h => h.cityId === city.id);
            setSelectedHotel(cityHotels[0] || null);
          }
        }, [city, hotels]);

        const handleSubmit = (e) => {
          e.preventDefault();
          const newTrip = {
            id: \`trip-\${Date.now()}\`,
            title: title.trim(),
            dates: \`15 Nov 2026 (\${days} Days)\`,
            duration: \`\${days} Days\`,
            status: "Planning",
            cities: [city.name],
            selectedHotel: selectedHotel,
            spots: (city.spots || []).slice(0, 4),
            activities: [],
            totalBudget: (selectedHotel?.pricePerNight || 3000) * (days - 1) + (city.avgCostPerDay * days),
            coverImage: city.image
          };
          onCreateTrip(newTrip);
          onClose();
        };

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <div className="w-full max-w-3xl max-h-[90vh] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-200">
              <div className="p-5 bg-[#3730A3] text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">Plan Nayi Yatra (150+ Cities)</h3>
                  <p className="text-xs text-indigo-200">Select city, visiting spots, and hotels with Google Maps integration.</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full font-bold">✕</button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Select Destination City:</label>
                    <select
                      value={cityId}
                      onChange={(e) => setCityId(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm font-bold text-[#3730A3] bg-white outline-none"
                    >
                      {cities.map(c => <option key={c.id} value={c.id}>{c.name} ({c.state})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Yatra Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm outline-none bg-white font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Subtabs for Spots, Hotels & Google Maps */}
                <div className="flex gap-2 border-b border-stone-200 pb-2 text-xs font-bold">
                  {["spots", "hotels", "map"].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSubTab(t)}
                      className={\`px-3 py-1.5 rounded-xl capitalize \${subTab === t ? "bg-[#3730A3] text-white" : "bg-stone-100 text-stone-600"}\`}
                    >
                      {t === "spots" ? "🪷 Visiting Spots" : t === "hotels" ? "🏨 Hotels & Stays" : "🗺️ Google Map"}
                    </button>
                  ))}
                </div>

                {subTab === "spots" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(city.spots || []).map((sp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs font-semibold flex items-center gap-2">
                        <span className="text-[#D97706] font-bold">✓</span>
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {subTab === "hotels" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {hotels.filter(h => h.cityId === city.id).map(h => (
                      <div
                        key={h.id}
                        onClick={() => setSelectedHotel(h)}
                        className={\`p-3 rounded-2xl border cursor-pointer flex gap-3 items-center \${
                          selectedHotel?.id === h.id ? "border-[#3730A3] bg-indigo-50/40 ring-1 ring-[#3730A3]" : "border-stone-200 bg-white"
                        }\`}
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <TravelImage src={h.image} alt={h.imageAlt || h.name} type="hotel" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-stone-800 truncate">{h.name}</h4>
                          <span className="text-[10px] text-indigo-700 font-semibold">{h.category}</span>
                          <div className="text-xs font-extrabold text-[#D97706]">₹{h.pricePerNight?.toLocaleString("en-IN")}/night</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {subTab === "map" && (
                  <div className="rounded-2xl overflow-hidden border border-stone-200 h-64 bg-stone-100">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={\`https://www.google.com/maps?q=\${encodeURIComponent(city.name + ", " + city.state + ", India")}&output=embed\`}
                      title="Google Map"
                    ></iframe>
                  </div>
                )}

                <div className="pt-4 flex justify-end gap-3 border-t border-stone-200">
                  <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl bg-stone-200 font-bold text-xs">Cancel</button>
                  <button type="submit" className="px-6 py-2.5 rounded-xl bg-[#D97706] text-white font-bold text-xs shadow-md">Create Itinerary 🚀</button>
                </div>
              </form>
            </div>
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root")).render(<App />);
    </script>
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../index.html'), htmlContent);
console.log('Successfully compiled production index.html with distinct images and entity-aware fallback component!');
