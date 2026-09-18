import { StateUTData } from "../types";

export const karnatakaData: StateUTData = {
  stateName: "Karnataka",
  isUnionTerritory: false,
  capital: "Bengaluru",
  region: "South",
  destinations: [
    {
      id: "hampi",
      name: "Hampi (Vijayanagara)",
      state: "Karnataka",
      district: "Vijayanagara",
      region: "South",
      nearestCityHub: "Jindal Vijayanagar Airport (VDY) / Hubli Airport (HBX) / Hospet Railway Station (HPT)",
      coordinates: { lat: 15.335, lng: 76.46 },
      tagline: "The monumental boulder-strewn capital of the forgotten Vijayanagara Empire",
      shortDescription: "UNESCO World Heritage site featuring stone chariots, musical pillars, and dramatic granite boulder landscapes.",
      detailedDescription: "Spread over 4,100 hectares beside the Tungabhadra River, Hampi was in the 15th century the world's second-largest city after Beijing and the opulent seat of the Vijayanagara Empire. Described by Portuguese chronicler Domingo Paes as 'a city of wonders', it mesmerizes travelers with the iconic stone chariot of Vijaya Vittala Temple, the Virupaksha Temple whose worship has continued unbroken since the 7th century, and surreal orange-pink granite boulder peaks.",
      categories: ["Heritage & Forts", "UNESCO World Heritage", "Pilgrimage & Sacred", "Adventure & Treks"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Warm sunny days (22°C–30°C) with pleasant breezy evenings along the river."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1100,
        midRangeInr: 3200,
        luxuryInr: 12000
      },
      openingHours: "Monuments open from sunrise to sunset (06:00 AM – 06:00 PM); Virupaksha Temple: 06:00 AM – 01:00 PM & 05:00 PM – 09:00 PM",
      entryFee: {
        indianInr: 40,
        foreignInr: 600,
        notes: "Composite ticket covers Vijaya Vittala complex and Zenana Enclosure / Lotus Mahal on same day."
      },
      officialSources: [
        { tourismBoardName: "Karnataka Tourism (KSTDC) - Hampi", url: "https://karnatakatourism.org/tour-item/hampi" },
        { tourismBoardName: "Archaeological Survey of India Hampi Mini Circle", url: "https://asihampicircle.in" }
      ],
      image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Rajath Ravi",
      unescoHeritage: true
    },
    {
      id: "bengaluru",
      name: "Bengaluru (Bangalore)",
      state: "Karnataka",
      district: "Bengaluru Urban",
      region: "South",
      nearestCityHub: "Kempegowda International Airport (BLR)",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      tagline: "The Silicon Valley of India, Garden City parks, and craft brewery capital",
      shortDescription: "Lush green tree canopies, microbreweries, historic Tipu Sultan forts, and tech innovation.",
      detailedDescription: "Blessed with year-round pleasant weather, Bengaluru seamlessly fuses garden calm with startup swagger. Spend peaceful mornings strolling under centuries-old rain trees in Cubbon Park, visit Bangalore Palace modeled on Windsor Castle, and sample pioneering Indian craft beers and South Indian filter coffee in Indiranagar and Koramangala.",
      categories: ["Cultural & Tribal", "Heritage & Forts"],
      bestTimeToVisit: {
        season: "Year-round",
        peakMonths: ["October", "November", "December", "January", "February"],
        weatherSummary: "Famous equitable climate with average temperatures of 18°C–28°C."
      },
      recommendedDuration: "2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1400,
        midRangeInr: 4500,
        luxuryInr: 15000
      },
      openingHours: "Lalbagh Botanical Garden: 06:00 AM – 07:00 PM; Bangalore Palace: 10:00 AM – 05:30 PM",
      entryFee: {
        indianInr: 30,
        notes: "Cubbon Park is free; Bangalore Palace has separate ticket."
      },
      officialSources: [
        { tourismBoardName: "Karnataka Tourism - Bengaluru", url: "https://karnatakatourism.org/tour-item/bengaluru" }
      ],
      image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Umar Andrabi",
      unescoHeritage: false
    },
    {
      id: "gokarna",
      name: "Gokarna",
      state: "Karnataka",
      district: "Uttara Kannada",
      region: "South",
      nearestCityHub: "Goa Dabolim Airport (GOI) / Hubli Airport (HBX) / Gokarna Road Railway Station",
      coordinates: { lat: 14.5479, lng: 74.3188 },
      tagline: "Soulful temple town of cliffside beaches, Om-shaped coastline, and Arabian sunset trails",
      shortDescription: "Sacred Mahabaleshwar Shiva temple, Om Beach, Kudle Beach, and coastal trekking trails.",
      detailedDescription: "Where sacred temple rituals meet secluded Arabian Sea coves, Gokarna offers an authentic and unhurried alternative to crowded resort strips. The town centers around the ancient Atmalinga of Mahabaleshwar Temple, from which scenic coastal trails traverse granite headlands connecting Kudle Beach, the sacred natural crescent of Om Beach, and secluded Half Moon and Paradise beaches.",
      categories: ["Coastal & Beaches", "Pilgrimage & Sacred", "Adventure & Treks"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Gentle coastal sunshine (24°C–31°C) with breezy ocean nights."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2800,
        luxuryInr: 9000
      },
      openingHours: "Beaches accessible 24/7; Mahabaleshwar Temple: 06:00 AM – 12:30 PM & 05:00 PM – 08:00 PM",
      entryFee: {
        indianInr: 0,
        notes: "All beaches are free and open to public."
      },
      officialSources: [
        { tourismBoardName: "Karnataka Tourism - Gokarna", url: "https://karnatakatourism.org/tour-item/gokarna" }
      ],
      image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Syed Qaarif Andrabi",
      unescoHeritage: false
    }
  ],
  nearbyAttractions: [
    {
      id: "attr-matanga-hill",
      destinationId: "hampi",
      name: "Matanga Hill Sunrise Trek",
      category: "Viewpoint & Trek",
      distanceKm: 2,
      travelTimeMinutes: 20,
      whyVisit: "Highest point in central Hampi offering unforgettable 360-degree sunrise views over the temple spires and boulder fields."
    },
    {
      id: "attr-yana-caves",
      destinationId: "gokarna",
      name: "Yana Solid Black Karst Rock Caves",
      category: "Caves & Rock-Cut",
      distanceKm: 52,
      travelTimeMinutes: 65,
      whyVisit: "Towering 90-meter monolithic black crystalline karst formations hidden deep inside the Sahyadri rainforest."
    }
  ],
  accommodations: [
    {
      id: "stay-hampi-1",
      destinationId: "hampi",
      name: "Evolve Back Kamalapura Palace",
      type: "Resort",
      locationDescription: "Kamalapura, 4km from Hampi UNESCO ruins",
      priceRangeInr: { min: 24000, max: 55000 },
      rating: 4.9,
      reviewsCount: 1680,
      amenities: ["Vijayanagara Fort Architecture", "Olympic Pool", "Ayurveda Wellness", "Historian Walks"],
      image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.evolveback.com/hampi",
      verifiedSource: "Ministry of Tourism 5-Star Luxury Certified"
    }
  ],
  activities: [
    {
      id: "act-hampi-coracle",
      destinationId: "hampi",
      name: "Tungabhadra Circular Coracle Boat Ride",
      category: "Boating & Water Sports",
      duration: "1 hour",
      estimatedCostInr: 400,
      bestTimeOfDay: "Sunset",
      description: "Float down river rapids in ancient woven bamboo round boats past riverside cave carvings."
    },
    {
      id: "act-gokarna-beach-trek",
      destinationId: "gokarna",
      name: "Golden Coast 5-Beach Cliff Trail Hike",
      category: "Trekking & Hiking",
      duration: "4 hours",
      estimatedCostInr: 300,
      bestTimeOfDay: "Morning",
      description: "Hike along coastal cliffs connecting Belekan, Paradise, Half Moon, Om, and Kudle beaches."
    }
  ],
  connectivity: [
    {
      destinationId: "hampi",
      nearestAirport: { name: "Jindal Vijayanagar Airport / Hubli Airport", code: "VDY", distanceKm: 38, driveTime: "45 mins" },
      nearestRailwayStation: { name: "Hosapete Junction (Hospet)", code: "HPT", distanceKm: 13, driveTime: "25 mins" },
      majorRoadRoutes: [
        { fromCity: "Bengaluru", highway: "NH48 & NH50 (via Chitradurga)", distanceKm: 340, estimatedDriveTime: "6h 00m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Goa", highway: "NH748 & NH67", distanceKm: 310, estimatedDriveTime: "6h 30m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    }
  ]
};
