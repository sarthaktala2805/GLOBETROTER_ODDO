import { StateUTData } from "../types";

export const rajasthanData: StateUTData = {
  stateName: "Rajasthan",
  isUnionTerritory: false,
  capital: "Jaipur",
  region: "North",
  destinations: [
    {
      id: "jaipur",
      name: "Jaipur",
      state: "Rajasthan",
      district: "Jaipur",
      region: "North",
      nearestCityHub: "Jaipur International Airport (JAI)",
      coordinates: { lat: 26.9124, lng: 75.7873 },
      tagline: "The Pink City of regal fortresses, gemstones, and royal palaces",
      shortDescription: "UNESCO-listed planned historic capital renowned for Hawa Mahal, Amber Fort, and vibrant bazaars.",
      detailedDescription: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned heritage city. Famous worldwide as the Pink City due to the terracotta-pink wash ordered for the 1876 visit of the Prince of Wales, it houses the majestic hilltop Amber Fort, astronomical marvel Jantar Mantar, and bustling Johari and Bapu Bazaars.",
      categories: ["Heritage & Forts", "Palaces & Havens", "Cultural & Tribal", "UNESCO World Heritage"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Pleasant sunny winter days (15°C–25°C) and cool desert nights."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1500,
        midRangeInr: 4500,
        luxuryInr: 14000
      },
      openingHours: "Monuments open 09:00 AM – 05:00 PM; Night viewing at Amber Fort 06:30 PM – 09:15 PM",
      entryFee: {
        indianInr: 100,
        foreignInr: 500,
        notes: "Composite ticket available covering Amber, Hawa Mahal, Jantar Mantar, Nahargarh, and Albert Hall."
      },
      officialSources: [
        { tourismBoardName: "Rajasthan Tourism Development Corporation (RTDC)", url: "https://www.tourism.rajasthan.gov.in" },
        { tourismBoardName: "Archaeological Survey of India Jaipur Circle", url: "https://asijaipurcircle.nic.in" }
      ],
      image: "https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / vijesh vijayan",
      unescoHeritage: true
    },
    {
      id: "udaipur",
      name: "Udaipur",
      state: "Rajasthan",
      district: "Udaipur",
      region: "North",
      nearestCityHub: "Maharana Pratap Airport (UDR)",
      coordinates: { lat: 24.5854, lng: 73.7125 },
      tagline: "The City of Lakes and romantic whitewashed marble palaces",
      shortDescription: "Lakeside royal palaces framed by the rugged purple silhouette of the Aravalli Hills.",
      detailedDescription: "Revered as the Venice of the East, Udaipur sits serenely beside Lake Pichola. Founded in 1559 by Maharana Udai Singh II, regal palaces seem to float directly on calm reflective waters, while cobblestone lanes lead to temple courtyards, heritage mansions (havelis), and lakeside rooftop cafes.",
      categories: ["Palaces & Havens", "Lakes & Waterfalls", "Heritage & Forts"],
      bestTimeToVisit: {
        season: "September to March",
        peakMonths: ["October", "November", "December", "January"],
        weatherSummary: "Comfortable cool weather with calm lake waters and clear sunset skies."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1600,
        midRangeInr: 4800,
        luxuryInr: 18000
      },
      openingHours: "City Palace: 09:00 AM – 05:30 PM; Boat Rides: 09:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 300,
        foreignInr: 300,
        notes: "Boat ride ticket to Jagmandir Island is separate (approx. ₹450-₹700 per person)."
      },
      officialSources: [
        { tourismBoardName: "Rajasthan Tourism - Udaipur", url: "https://www.tourism.rajasthan.gov.in/udaipur.html" },
        { tourismBoardName: "City Palace Museum Maharana of Mewar Trust", url: "https://www.eternalmewar.org" }
      ],
      image: "https://images.pexels.com/photos/11143899/pexels-photo-11143899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Anshul Kaushik",
      unescoHeritage: false
    },
    {
      id: "jaisalmer",
      name: "Jaisalmer",
      state: "Rajasthan",
      district: "Jaisalmer",
      region: "North",
      nearestCityHub: "Jaisalmer Airport (JSA) / Jodhpur Airport (JDH)",
      coordinates: { lat: 26.9157, lng: 70.9083 },
      tagline: "The Golden City of living sandstone fort and Thar Desert dunes",
      shortDescription: "A living 12th-century desert fortress, intricately carved Jain temples, and rolling Sam sand dunes.",
      detailedDescription: "Rising out of the desolate Thar Desert like a golden sandcastle, Jaisalmer Fort (Sonar Qella) is one of the world's very few living forts, housing roughly 3,000 residents inside its ancient ramparts. Famous for its golden-yellow Jurassic sandstone havelis (Patwon ki Haveli, Nathmal ki Haveli) and sunset camel safaris over the rolling sand dunes of Sam and Khuri.",
      categories: ["Heritage & Forts", "Adventure & Treks", "Cultural & Tribal", "UNESCO World Heritage"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Crisp winter air (10°C–24°C) with cold desert nights ideal for stargazing."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1400,
        midRangeInr: 4000,
        luxuryInr: 15000
      },
      openingHours: "Fort open 24/7 (residential); Havelis open 09:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 50,
        foreignInr: 250,
        notes: "Jaisalmer Fort entry is free; museum and individual havelis charge small fees."
      },
      officialSources: [
        { tourismBoardName: "Rajasthan Tourism - Jaisalmer", url: "https://www.tourism.rajasthan.gov.in/jaisalmer.html" }
      ],
      image: "https://images.pexels.com/photos/1598075/pexels-photo-1598075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ajay Sharda",
      unescoHeritage: true
    }
  ],
  nearbyAttractions: [
    {
      id: "attr-nahargarh",
      destinationId: "jaipur",
      name: "Nahargarh Fort Sunset Point",
      category: "Heritage & Views",
      distanceKm: 18,
      travelTimeMinutes: 40,
      whyVisit: "Breathtaking cliff-edge panoramic views overlooking the entire illuminated Pink City below."
    },
    {
      id: "attr-sajjangarh",
      destinationId: "udaipur",
      name: "Monsoon Palace (Sajjangarh)",
      category: "Hilltop Palace",
      distanceKm: 9,
      travelTimeMinutes: 25,
      whyVisit: "Hilltop royal retreat offering 360-degree sunset views over the lakes and Aravalli mountain reserve."
    },
    {
      id: "attr-sam-dunes",
      destinationId: "jaisalmer",
      name: "Sam Sand Dunes",
      category: "Desert Safari",
      distanceKm: 42,
      travelTimeMinutes: 45,
      whyVisit: "Iconic sweeping ripples of 30-meter Thar Desert sand dunes with camel carts and Rajasthani folk music."
    }
  ],
  accommodations: [
    {
      id: "stay-jaipur-1",
      destinationId: "jaipur",
      name: "Samode Haveli",
      type: "Heritage Haveli",
      locationDescription: "Gangapole, Old City Jaipur",
      priceRangeInr: { min: 11000, max: 24000 },
      rating: 4.9,
      reviewsCount: 1120,
      amenities: ["Heritage Courtyard", "Outdoor Pool", "Spa", "Traditional Dining"],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.samode.com/samodehaveli",
      verifiedSource: "Rajasthan Heritage Hotels Association & Direct Property Verification"
    },
    {
      id: "stay-udaipur-1",
      destinationId: "udaipur",
      name: "Taj Lake Palace",
      type: "Heritage Haveli",
      locationDescription: "Pichola Island, Udaipur",
      priceRangeInr: { min: 38000, max: 85000 },
      rating: 4.9,
      reviewsCount: 2240,
      amenities: ["Private Boat Arrival", "Jiva Spa Boat", "Fine Dining", "Lake Views"],
      image: "https://images.pexels.com/photos/11143899/pexels-photo-11143899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.tajhotels.com",
      verifiedSource: "IHCL Official Registry & Udaipur Chamber of Tourism"
    },
    {
      id: "stay-jaisalmer-1",
      destinationId: "jaisalmer",
      name: "Suryagarh Desert Citadel",
      type: "Resort",
      locationDescription: "Sam Road, Thar Desert, Jaisalmer",
      priceRangeInr: { min: 19000, max: 42000 },
      rating: 4.9,
      reviewsCount: 1450,
      amenities: ["Desert Views", "Indoor Pool", "Ayurvedic Spa", "Folk Musicians"],
      image: "https://images.pexels.com/photos/1598075/pexels-photo-1598075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.suryagarh.com",
      verifiedSource: "Official RTDC Luxury Approved Partner"
    }
  ],
  activities: [
    {
      id: "act-jaipur-balloon",
      destinationId: "jaipur",
      name: "Amber Fort Sunrise Hot Air Ballooning",
      category: "Adventure & Aerial",
      duration: "3 hours",
      estimatedCostInr: 12500,
      bestTimeOfDay: "Morning",
      description: "Float gently over the Aravalli hills, historic Amber Fort, and traditional desert villages at dawn."
    },
    {
      id: "act-udaipur-boat",
      destinationId: "udaipur",
      name: "Lake Pichola Sunset Wooden Boat Cruise",
      category: "Boating & Water Sports",
      duration: "1.5 hours",
      estimatedCostInr: 650,
      bestTimeOfDay: "Sunset",
      description: "Cruise past the glowing marble facade of City Palace, Lake Palace, and bathing ghats at golden hour."
    },
    {
      id: "act-jaisalmer-camel",
      destinationId: "jaisalmer",
      name: "Thar Desert Sunset Camel Safari & Folk Night",
      category: "Cultural & Temple",
      duration: "5 hours",
      estimatedCostInr: 1800,
      bestTimeOfDay: "Sunset",
      description: "Ride through quiet golden dunes on camel back, followed by live Kalbelia dance and campfire meal."
    }
  ],
  connectivity: [
    {
      destinationId: "jaipur",
      nearestAirport: { name: "Jaipur International Airport", code: "JAI", distanceKm: 12, driveTime: "25 mins" },
      nearestRailwayStation: { name: "Jaipur Junction", code: "JP", distanceKm: 4, driveTime: "12 mins" },
      majorRoadRoutes: [
        { fromCity: "Delhi", highway: "Delhi-Mumbai Expressway / NH48", distanceKm: 270, estimatedDriveTime: "3h 45m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Agra", highway: "NH21 (Bikaner-Agra Road)", distanceKm: 240, estimatedDriveTime: "4h 15m", busConnectivity: "Frequent State Transport" }
      ]
    },
    {
      destinationId: "udaipur",
      nearestAirport: { name: "Maharana Pratap Airport", code: "UDR", distanceKm: 24, driveTime: "40 mins" },
      nearestRailwayStation: { name: "Udaipur City", code: "UDZ", distanceKm: 3, driveTime: "10 mins" },
      majorRoadRoutes: [
        { fromCity: "Ahmedabad", highway: "NH48 (via Himatnagar)", distanceKm: 260, estimatedDriveTime: "4h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Jaipur", highway: "NH48 & NH58 (via Ajmer)", distanceKm: 395, estimatedDriveTime: "6h 45m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    }
  ]
};
