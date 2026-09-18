import { StateUTData } from "../types";

export const keralaData: StateUTData = {
  stateName: "Kerala",
  isUnionTerritory: false,
  capital: "Thiruvananthapuram",
  region: "South",
  destinations: [
    {
      id: "munnar",
      name: "Munnar",
      state: "Kerala",
      district: "Idukki",
      region: "South",
      nearestCityHub: "Cochin International Airport (COK) / Aluva Railway Station",
      coordinates: { lat: 10.0889, lng: 77.0595 },
      tagline: "Rolling carpet of emerald tea estates, mist-kissed Western Ghat peaks",
      shortDescription: "High-altitude tea plantations, endangered Nilgiri Tahr sanctuary, and cascading mountain waterfalls.",
      detailedDescription: "Perched at an elevation of 1,600 meters at the confluence of three mountain streams (Mudrapuzha, Nallathanni, and Kundala), Munnar was the favored summer resort of the British administration in South India. It is renowned for endless manicured emerald tea plantations, Anamudi (South India's highest peak at 2,695m), and the rare Neelakurinji flower that blooms once every twelve years.",
      categories: ["Hill Stations", "Adventure & Treks", "Wildlife & Sanctuaries"],
      bestTimeToVisit: {
        season: "September to May",
        peakMonths: ["October", "November", "December", "January"],
        weatherSummary: "Crisp and refreshing mountain air (12°C–22°C) with rolling white mist."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1300,
        midRangeInr: 3800,
        luxuryInr: 13000
      },
      openingHours: "Eravikulam National Park: 07:30 AM – 04:00 PM (Closed Feb-March for calving season)",
      entryFee: {
        indianInr: 200,
        foreignInr: 500,
        notes: "Safari bus entry booked via official Kerala Forest Department portal."
      },
      officialSources: [
        { tourismBoardName: "Kerala Tourism - Munnar", url: "https://www.keralatourism.org/destination/munnar/202" },
        { tourismBoardName: "Eravikulam National Park Wildlife Division", url: "https://eravikulamnationalpark.in" }
      ],
      image: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Harsh Chikhalia",
      unescoHeritage: false
    },
    {
      id: "alleppey",
      name: "Alleppey (Alappuzha)",
      state: "Kerala",
      district: "Alappuzha",
      region: "South",
      nearestCityHub: "Cochin International Airport (COK) / Alappuzha Railway Station",
      coordinates: { lat: 9.4981, lng: 76.3388 },
      tagline: "The Venice of the East, palm-fringed canals, and overnight kettuvallam houseboats",
      shortDescription: "Serene interconnected backwater lagoons, paddy fields below sea level, and traditional thatched houseboats.",
      detailedDescription: "Famous for its labyrinthine network of interconnected canals, rivers, and Vembanad Lake, Alleppey is the capital of Kerala's celebrated backwaters. Travelers board traditional wooden houseboats (*kettuvallam*), crafted without a single nail using anjili wood and coir rope, to drift past water lilies, duck farms, and rural toddy shops.",
      categories: ["Lakes & Waterfalls", "Coastal & Beaches", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "September to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Pleasant tropical breezes (22°C–30°C) with clear blue skies over the lagoons."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1500,
        midRangeInr: 5000,
        luxuryInr: 16000
      },
      openingHours: "Backwater canals open round the clock; Houseboat check-in typically 12:00 PM to 09:00 AM next day.",
      entryFee: {
        indianInr: 0,
        notes: "Day cruise boats from ₹800/hour; Private luxury overnight houseboat from ₹8,500 to ₹25,000 depending on bedrooms."
      },
      officialSources: [
        { tourismBoardName: "Kerala Tourism - Alappuzha", url: "https://www.keralatourism.org/destination/alappuzha-backwaters/10" },
        { tourismBoardName: "District Tourism Promotion Council (DTPC) Alappuzha", url: "https://alappuzhatourism.com" }
      ],
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Pritam Sengupta",
      unescoHeritage: false
    },
    {
      id: "kochi",
      name: "Kochi (Cochin)",
      state: "Kerala",
      district: "Ernakulam",
      region: "South",
      nearestCityHub: "Cochin International Airport (COK)",
      coordinates: { lat: 9.9312, lng: 76.2673 },
      tagline: "The Queen of the Arabian Sea, Chinese fishing nets, and colonial spice trade history",
      shortDescription: "Historic Fort Kochi colonial avenues, cantilevered Chinese fishing nets, and Jew Town antique warehouses.",
      detailedDescription: "A maritime trading hub since Roman, Arab, and Chinese merchants bartered for black pepper centuries ago, Kochi is an eclectic synthesis of Portuguese, Dutch, British, and Jewish cultures. Fort Kochi features the 1503 St. Francis Church (where Vasco da Gama was buried), Mattancherry Palace with vibrant Ramayana murals, and 14th-century cantilevered Chinese fishing nets (*Cheena Vala*).",
      categories: ["Heritage & Forts", "Cultural & Tribal", "Coastal & Beaches"],
      bestTimeToVisit: {
        season: "October to April",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Comfortable coastal breeze with warm afternoons."
      },
      recommendedDuration: "2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3600,
        luxuryInr: 12000
      },
      openingHours: "Mattancherry Dutch Palace: 09:45 AM – 01:00 PM, 02:00 PM – 04:45 PM (Closed Fridays); Paradesi Synagogue: 10:00 AM – 05:00 PM (Closed Fridays & Saturdays)",
      entryFee: {
        indianInr: 10,
        foreignInr: 10,
        notes: "Paradesi Synagogue: ₹10; Fort Kochi beach walking is free."
      },
      officialSources: [
        { tourismBoardName: "Kerala Tourism - Ernakulam / Kochi", url: "https://www.keralatourism.org/destination/fort-kochi/335" }
      ],
      image: "https://images.pexels.com/photos/1109968/pexels-photo-1109968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ravi Kant",
      unescoHeritage: false
    }
  ],
  nearbyAttractions: [
    {
      id: "attr-top-station",
      destinationId: "munnar",
      name: "Top Station Viewpoint",
      category: "Mountain Ridge View",
      distanceKm: 32,
      travelTimeMinutes: 55,
      whyVisit: "Historic ropeway terminus on the Kerala-Tamil Nadu border offering cloud-canopy views over the Western Ghats."
    },
    {
      id: "attr-marari-beach",
      destinationId: "alleppey",
      name: "Marari Fishing Beach",
      category: "Coastal & Beaches",
      distanceKm: 14,
      travelTimeMinutes: 25,
      whyVisit: "Quiet white-sand palm-fringed coastline celebrated for sustainable village tourism and peaceful swimming."
    }
  ],
  accommodations: [
    {
      id: "stay-munnar-1",
      destinationId: "munnar",
      name: "Windermere Estate Tea Retreat",
      type: "Resort",
      locationDescription: "Pothamedu, 4km from Munnar Town",
      priceRangeInr: { min: 9500, max: 18000 },
      rating: 4.8,
      reviewsCount: 770,
      amenities: ["Tea Garden Walks", "Cardamom Farm", "Fireplace", "Valley View"],
      image: "https://images.pexels.com/photos/12035356/pexels-photo-12035356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.windermeremunnar.com",
      verifiedSource: "Kerala Tourism Certified Plantation Retreat"
    },
    {
      id: "stay-alleppey-1",
      destinationId: "alleppey",
      name: "Kumarakom Lake Resort (CGH Earth)",
      type: "Resort",
      locationDescription: "Vembanad Lake Shore, Kumarakom / Alleppey",
      priceRangeInr: { min: 18500, max: 45000 },
      rating: 4.9,
      reviewsCount: 2100,
      amenities: ["Meandering Pool Villas", "Ayurvedic Sanctuary", "Sunset Lake Cruises", "Seafood Dining"],
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.kumarakomlakeresort.in",
      verifiedSource: "Official Kerala Tourism Diamond Classified"
    }
  ],
  activities: [
    {
      id: "act-munnar-tea-trek",
      destinationId: "munnar",
      name: "Chithirapuram Plantation & Ridge Hiking",
      category: "Trekking & Hiking",
      duration: "3.5 hours",
      estimatedCostInr: 800,
      bestTimeOfDay: "Morning",
      description: "Hike along tea-picking tracks and spice gardens with a resident naturalist guide."
    },
    {
      id: "act-alleppey-houseboat",
      destinationId: "alleppey",
      name: "Traditional Thatched Kettuvallam Lunch Cruise",
      category: "Boating & Water Sports",
      duration: "4 hours",
      estimatedCostInr: 2800,
      bestTimeOfDay: "Afternoon",
      description: "Cruise slowly down narrow canal passages enjoying freshly caught Karimeen Pollichathu."
    }
  ],
  connectivity: [
    {
      destinationId: "munnar",
      nearestAirport: { name: "Cochin International Airport", code: "COK", distanceKm: 110, driveTime: "3h 30m" },
      nearestRailwayStation: { name: "Aluva (AWY) / Ernakulam (ERS)", code: "AWY", distanceKm: 112, driveTime: "3h 35m" },
      majorRoadRoutes: [
        { fromCity: "Kochi", highway: "NH85 (Kochi-Dhanushkodi)", distanceKm: 125, estimatedDriveTime: "3h 45m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Madurai", highway: "NH85 (via Theni)", distanceKm: 160, estimatedDriveTime: "4h 15m", busConnectivity: "Frequent State Transport" }
      ]
    },
    {
      destinationId: "alleppey",
      nearestAirport: { name: "Cochin International Airport", code: "COK", distanceKm: 85, driveTime: "2h 15m" },
      nearestRailwayStation: { name: "Alappuzha", code: "ALLP", distanceKm: 3, driveTime: "10 mins" },
      majorRoadRoutes: [
        { fromCity: "Kochi", highway: "NH66", distanceKm: 55, estimatedDriveTime: "1h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Trivandrum", highway: "NH66", distanceKm: 145, estimatedDriveTime: "3h 30m", busConnectivity: "Frequent State Transport" }
      ]
    }
  ]
};
