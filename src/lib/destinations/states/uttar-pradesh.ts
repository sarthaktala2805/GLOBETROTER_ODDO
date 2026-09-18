import { StateUTData } from "../types";

export const uttarPradeshData: StateUTData = {
  stateName: "Uttar Pradesh",
  isUnionTerritory: false,
  capital: "Lucknow",
  region: "North",
  destinations: [
    {
      id: "varanasi",
      name: "Varanasi (Kashi / Banaras)",
      state: "Uttar Pradesh",
      district: "Varanasi",
      region: "North",
      nearestCityHub: "Lal Bahadur Shastri International Airport (VNS)",
      coordinates: { lat: 25.3176, lng: 82.9739 },
      tagline: "The Spiritual Capital of India and oldest continuously inhabited city on earth",
      shortDescription: "Sacred Ganges riverfront ghats, timeless evening Ganga Aarti, and ancient Shiva temples.",
      detailedDescription: "Consecrated along the sacred crescent curve of the Holy River Ganges, Varanasi has been the beating spiritual nucleus of Hindu philosophy, classical Hindustani music, and Sanskrit scholarship for over 3,000 years. From the electrifying brass incense chants of the evening Maha Aarti at Dashashwamedh Ghat to the quiet sunrise boat rides past Manikarnika and Assi Ghats, Kashi remains unforgettable.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Crisp mornings with serene winter fog lifting off the sacred waters."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1100,
        midRangeInr: 3200,
        luxuryInr: 12000
      },
      openingHours: "Ghats accessible 24/7; Kashi Vishwanath Temple: 03:00 AM – 11:00 PM; Evening Aarti: 06:45 PM daily",
      entryFee: {
        indianInr: 0,
        notes: "Ghats and general temple darshan are free. Special Sugam Darshan tickets available on the temple trust portal."
      },
      officialSources: [
        { tourismBoardName: "Uttar Pradesh Tourism - Varanasi", url: "https://uptourism.gov.in/en/post/varanasi" },
        { tourismBoardName: "Shri Kashi Vishwanath Temple Trust", url: "https://shrikashivishwanath.org" }
      ],
      image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Adinath Gilande",
      unescoHeritage: false
    },
    {
      id: "agra",
      name: "Agra",
      state: "Uttar Pradesh",
      district: "Agra",
      region: "North",
      nearestCityHub: "Agra Airport (AGR) / Delhi IGI Airport (DEL)",
      coordinates: { lat: 27.1767, lng: 78.0081 },
      tagline: "Home of the immortal Taj Mahal and magnificent Mughal architectural masterworks",
      shortDescription: "The world's greatest monument to eternal love, Agra Fort, and the abandoned red city of Fatehpur Sikri.",
      detailedDescription: "Situated along the banks of the Yamuna River, Agra was the golden capital of the Mughal Empire under emperors Akbar, Jahangir, and Shah Jahan. Commissioned in 1631 by Shah Jahan in memory of his beloved wife Mumtaz Mahal, the white Makrana marble Taj Mahal stands alongside the red sandstone ramparts of Agra Fort and Akbar's deserted citadel at Fatehpur Sikri.",
      categories: ["Heritage & Forts", "Palaces & Havens", "UNESCO World Heritage"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Pleasant winter sunshine; early sunrise visits provide mystical morning mist reflections."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1400,
        midRangeInr: 4200,
        luxuryInr: 16000
      },
      openingHours: "Taj Mahal opens 30 minutes before sunrise and closes 30 minutes before sunset. Closed every Friday.",
      entryFee: {
        indianInr: 50,
        foreignInr: 1100,
        notes: "Additional ₹200 ticket to enter the main mausoleum chamber. Tickets booked via ASI official portal."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India - Taj Mahal", url: "https://asi.nic.in" },
        { tourismBoardName: "Uttar Pradesh Tourism - Agra", url: "https://uptourism.gov.in/en/post/agra" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Abhinav Sharma",
      unescoHeritage: true
    },
    {
      id: "lucknow",
      name: "Lucknow",
      state: "Uttar Pradesh",
      district: "Lucknow",
      region: "North",
      nearestCityHub: "Chaudhary Charan Singh International Airport (LKO)",
      coordinates: { lat: 26.8467, lng: 80.9462 },
      tagline: "The City of Nawabs, Awadhi royal gastronomy, and timeless tehzeeb manners",
      shortDescription: "Grand Bara Imambara labyrinth, intricate Chikankari embroidery, and melting Galouti kebabs.",
      detailedDescription: "Lucknow is renowned across India for refined Nawabi etiquette (*tehzeeb*), classical Kathak dance, and world-conquering culinary traditions. The monumental Bara Imambara features an unsupported central arched hall and the intricate three-dimensional maze (*Bhool Bhulaiya*), while the streets of Aminabad and Chowk tempt travelers with legendary Tunday Kababi creations.",
      categories: ["Heritage & Forts", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Pleasant sunny winter days and crisp culinary evenings."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3500,
        luxuryInr: 11000
      },
      openingHours: "Bara Imambara & Chota Imambara: 06:00 AM – 05:00 PM daily",
      entryFee: {
        indianInr: 50,
        foreignInr: 500,
        notes: "Composite ticket covers Bara Imambara, Bhool Bhulaiya, Chota Imambara, and Picture Gallery."
      },
      officialSources: [
        { tourismBoardName: "Uttar Pradesh Tourism - Lucknow", url: "https://uptourism.gov.in/en/post/lucknow" }
      ],
      image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Heritage UP",
      unescoHeritage: false
    }
  ],
  nearbyAttractions: [
    {
      id: "attr-sarnath",
      destinationId: "varanasi",
      name: "Sarnath Buddhist Deer Park & Dhamek Stupa",
      category: "Pilgrimage & Sacred",
      distanceKm: 10,
      travelTimeMinutes: 25,
      whyVisit: "The historic site where Lord Buddha delivered his first sermon after enlightenment; houses Ashoka Lion Capital."
    },
    {
      id: "attr-fatehpur-sikri",
      destinationId: "agra",
      name: "Fatehpur Sikri Imperial City",
      category: "UNESCO World Heritage Citadel",
      distanceKm: 37,
      travelTimeMinutes: 50,
      whyVisit: "Emperor Akbar's 16th-century ghost capital featuring the soaring 54-meter Buland Darwaza gateway."
    }
  ],
  accommodations: [
    {
      id: "stay-varanasi-1",
      destinationId: "varanasi",
      name: "BrijRama Palace (Heritage on Darbhanga Ghat)",
      type: "Heritage Haveli",
      locationDescription: "Darbhanga Ghat, Riverfront Varanasi",
      priceRangeInr: { min: 18000, max: 42000 },
      rating: 4.9,
      reviewsCount: 1620,
      amenities: ["Private Boat Transfer", "Pure Vegetarian Fine Dining", "Classical Sitar Evenings", "Ganges Sunrise View"],
      image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.brijhotels.com",
      verifiedSource: "UP Tourism Heritage Luxury Classification"
    },
    {
      id: "stay-agra-1",
      destinationId: "agra",
      name: "The Oberoi Amarvilas",
      type: "Resort",
      locationDescription: "Taj East Gate Road, 600m from Taj Mahal",
      priceRangeInr: { min: 45000, max: 120000 },
      rating: 4.9,
      reviewsCount: 2900,
      amenities: ["Unobstructed Taj Mahal Views from All Rooms", "Private Golf Carts", "Mughal Spa", "Pool"],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.oberoihotels.com",
      verifiedSource: "Ministry of Tourism 5-Star Deluxe Registry"
    }
  ],
  activities: [
    {
      id: "act-varanasi-boat",
      destinationId: "varanasi",
      name: "Dawn Ganges Rowing Boat & Ghat Pilgrimage",
      category: "Boating & Water Sports",
      duration: "2 hours",
      estimatedCostInr: 450,
      bestTimeOfDay: "Morning",
      description: "Watch sunrise prayers, morning yogis, and floating earthen oil lamps on the holy river."
    },
    {
      id: "act-agra-taj-sunrise",
      destinationId: "agra",
      name: "Sunrise Guided Architecture Tour of Taj Mahal",
      category: "Sightseeing",
      duration: "2.5 hours",
      estimatedCostInr: 750,
      bestTimeOfDay: "Morning",
      description: "Experience the changing pink and gold hues of the white marble monument in early peaceful dawn."
    }
  ],
  connectivity: [
    {
      destinationId: "varanasi",
      nearestAirport: { name: "Lal Bahadur Shastri International Airport", code: "VNS", distanceKm: 22, driveTime: "40 mins" },
      nearestRailwayStation: { name: "Varanasi Junction (BSB) / Pt Deen Dayal Upadhyaya (DDU)", code: "BSB", distanceKm: 4, driveTime: "15 mins" },
      majorRoadRoutes: [
        { fromCity: "Prayagraj (Allahabad)", highway: "NH19", distanceKm: 125, estimatedDriveTime: "2h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Lucknow", highway: "Purvanchal Expressway", distanceKm: 310, estimatedDriveTime: "4h 45m", busConnectivity: "Frequent State Transport" }
      ]
    },
    {
      destinationId: "agra",
      nearestAirport: { name: "Agra Airport / Delhi IGI Airport", code: "DEL", distanceKm: 210, driveTime: "3h 00m" },
      nearestRailwayStation: { name: "Agra Cantt", code: "AGC", distanceKm: 4, driveTime: "12 mins" },
      majorRoadRoutes: [
        { fromCity: "New Delhi", highway: "Yamuna Expressway", distanceKm: 210, estimatedDriveTime: "3h 00m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Jaipur", highway: "NH21", distanceKm: 240, estimatedDriveTime: "4h 15m", busConnectivity: "Frequent State Transport" }
      ]
    }
  ]
};
