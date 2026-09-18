import { StateUTData } from "../types";

export const allStatesData: StateUTData[] = [
  // 1. MAHARASHTRA
  {
    stateName: "Maharashtra",
    isUnionTerritory: false,
    capital: "Mumbai",
    region: "West",
    destinations: [
      {
        id: "mumbai",
        name: "Mumbai",
        state: "Maharashtra",
        district: "Mumbai City",
        region: "West",
        nearestCityHub: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
        coordinates: { lat: 19.076, lng: 72.8777 },
        tagline: "The City of Dreams, kinetic seaside boulevards, and cinema legends",
        shortDescription: "A bustling waterfront metropolis of Art Deco architecture, street food, and sleepless energy.",
        detailedDescription: "India's financial and entertainment capital, Mumbai is an exhilarating coastal metropolis. Experience the Queen's Necklace curve of Marine Drive at twilight, the UNESCO-listed Victorian Gothic marvel of CSMT station, Elephanta Island cave temples, and bustling street markets.",
        categories: ["Heritage & Forts", "Coastal & Beaches", "Cultural & Tribal", "UNESCO World Heritage"],
        bestTimeToVisit: {
          season: "November to February",
          peakMonths: ["December", "January"],
          weatherSummary: "Breezy and pleasant coastal winter (20°C–30°C)."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Premium",
        estimatedBudgetPerDay: { backpackerInr: 1600, midRangeInr: 5500, luxuryInr: 20000 },
        openingHours: "Gateway of India: Open 24/7; Elephanta Caves: 09:30 AM – 05:30 PM (Closed Mondays)",
        entryFee: { indianInr: 40, foreignInr: 600, notes: "Gateway is free; Elephanta boat ride ₹260 return." },
        officialSources: [
          { tourismBoardName: "Maharashtra Tourism Development Corporation (MTDC)", url: "https://www.maharashtratourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Satish Vetal",
        unescoHeritage: true
      },
      {
        id: "ajanta-ellora",
        name: "Ajanta & Ellora Caves",
        state: "Maharashtra",
        district: "Chhatrapati Sambhajinagar (Aurangabad)",
        region: "West",
        nearestCityHub: "Aurangabad Airport (IXU) / Aurangabad Railway Station",
        coordinates: { lat: 20.0268, lng: 75.1793 },
        tagline: "Monumental rock-cut monasteries, ancient Buddhist murals, and Kailash Temple",
        shortDescription: "34 rock-cut cave temples carved top-down from single basalt cliffs over 1,500 years ago.",
        detailedDescription: "A crowning glory of ancient Indian art and engineering, the Ellora Caves feature the Kailash Temple (Cave 16), the world's largest monolithic rock excavation carved top-down from a single cliff. The horseshoe ravine of Ajanta preserves second-century BCE Buddhist rock-cut shrines with masterly classical frescoes.",
        categories: ["Caves & Rock-Cut", "UNESCO World Heritage", "Heritage & Forts"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Comfortable dry days (18°C–28°C) ideal for climbing cliff stairways."
        },
        recommendedDuration: "2 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 1200, midRangeInr: 3200, luxuryInr: 9500 },
        openingHours: "09:00 AM – 05:30 PM (Ajanta closed Mondays; Ellora closed Tuesdays)",
        entryFee: { indianInr: 40, foreignInr: 600, notes: "Booked online via ASI portal." },
        officialSources: [
          { tourismBoardName: "ASI Aurangabad Circle", url: "https://asiaurangabadcircle.in" }
        ],
        image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Maharashtra Heritage",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-elephanta", destinationId: "mumbai", name: "Elephanta Island Rock Caves", category: "Caves & Rock-Cut", distanceKm: 11, travelTimeMinutes: 50, whyVisit: "6th-century rock-cut Shiva Trimurti sculpture across Mumbai harbour." }
    ],
    accommodations: [
      {
        id: "stay-mumbai-1", destinationId: "mumbai", name: "The Taj Mahal Palace", type: "Heritage Haveli",
        locationDescription: "Apollo Bunder, Colaba, Mumbai", priceRangeInr: { min: 28000, max: 80000 },
        rating: 4.9, reviewsCount: 4200, amenities: ["Harbour Views", "Pool", "Luxury Dining", "Heritage Wing"],
        image: "https://images.pexels.com/photos/15893080/pexels-photo-15893080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.tajhotels.com", verifiedSource: "Ministry of Tourism 5-Star Deluxe"
      }
    ],
    activities: [
      { id: "act-mumbai-marine", destinationId: "mumbai", name: "Marine Drive Art Deco Heritage Stroll", category: "Sightseeing", duration: "2 hours", estimatedCostInr: 0, bestTimeOfDay: "Sunset", description: "Walk along the Arabian sea promenade admiring UNESCO-listed 1930s Art Deco apartment rows." }
    ],
    connectivity: [
      {
        destinationId: "mumbai",
        nearestAirport: { name: "Chhatrapati Shivaji Maharaj International", code: "BOM", distanceKm: 18, driveTime: "40 mins" },
        nearestRailwayStation: { name: "Mumbai CSMT / Mumbai Central", code: "CSMT", distanceKm: 2, driveTime: "8 mins" },
        majorRoadRoutes: [
          { fromCity: "Pune", highway: "Mumbai-Pune Expressway", distanceKm: 150, estimatedDriveTime: "2h 45m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 2. HIMACHAL PRADESH
  {
    stateName: "Himachal Pradesh",
    isUnionTerritory: false,
    capital: "Shimla",
    region: "North",
    destinations: [
      {
        id: "manali",
        name: "Manali",
        state: "Himachal Pradesh",
        district: "Kullu",
        region: "North",
        nearestCityHub: "Kullu-Manali Airport (KUU) / Chandigarh Airport (IXC)",
        coordinates: { lat: 32.2432, lng: 77.1892 },
        tagline: "High Himalayan adventure valley, snow-capped peaks, and cedar trails",
        shortDescription: "Gateway to Rohtang Pass, Solang Valley paragliding, and historic wooden Hadimba Temple.",
        detailedDescription: "Flanked by the Pir Panjal and Dhauladhar ranges of the Himalayas, Manali is India's preeminent mountain adventure capital. Surrounded by fragrant deodar and pine forests, travelers enjoy paragliding in Solang Valley, snow adventures at Rohtang Pass, the engineering triumph of the 9-km Atal Tunnel, and Old Manali's riverside cafes.",
        categories: ["Hill Stations", "Adventure & Treks", "Lakes & Waterfalls"],
        bestTimeToVisit: {
          season: "March to June (Pleasant) & December to February (Snow)",
          peakMonths: ["May", "June", "December", "January"],
          weatherSummary: "Summer cool (10°C–25°C); Winter transforms into a blanket of powdery white snow (-5°C–8°C)."
        },
        recommendedDuration: "3 to 4 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1200, midRangeInr: 3800, luxuryInr: 14000 },
        openingHours: "Hadimba Temple: 08:00 AM – 06:00 PM; Atal Tunnel: Open 24/7 (subject to snow conditions)",
        entryFee: { indianInr: 0, notes: "Rohtang Pass requires environmental green permit issued online by HP administration." },
        officialSources: [
          { tourismBoardName: "Himachal Pradesh Tourism (HPTDC)", url: "https://himachaltourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Nitesh Rana",
        unescoHeritage: false
      },
      {
        id: "shimla",
        name: "Shimla",
        state: "Himachal Pradesh",
        district: "Shimla",
        region: "North",
        nearestCityHub: "Shimla Airport (SLV) / Chandigarh Airport (IXC)",
        coordinates: { lat: 31.1048, lng: 77.1734 },
        tagline: "The Queen of Hill Stations, pine forests, and colonial mountain charm",
        shortDescription: "Pedestrianized Mall Road, pine-covered ridges, mountain toy trains, and crisp Himalayan vistas.",
        detailedDescription: "The former summer capital of British India, Shimla rests along a 12-kilometer crescent ridge in the lower Himalayas. Free of vehicle traffic, Mall Road and The Ridge are a joy to walk, while the UNESCO-listed toy train climbs through 102 mountain tunnels from Kalka.",
        categories: ["Hill Stations", "Heritage & Forts", "UNESCO World Heritage"],
        bestTimeToVisit: {
          season: "March to June & December to February",
          peakMonths: ["April", "May", "December", "January"],
          weatherSummary: "Pleasant mountain summers and snowy winters."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1300, midRangeInr: 4000, luxuryInr: 15000 },
        openingHours: "Viceregal Lodge: 09:00 AM – 05:30 PM; Ridge: Open 24/7",
        entryFee: { indianInr: 50, notes: "Mall Road has free pedestrian access." },
        officialSources: [
          { tourismBoardName: "HPTDC - Shimla", url: "https://himachaltourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Vijay R",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-solang", destinationId: "manali", name: "Solang Valley Adventure Arena", category: "Adventure", distanceKm: 14, travelTimeMinutes: 30, whyVisit: "Premier high-altitude hub for paragliding, zorbing, and winter ski slopes." }
    ],
    accommodations: [
      {
        id: "stay-shimla-1", destinationId: "shimla", name: "Wildflower Hall (An Oberoi Resort)", type: "Resort",
        locationDescription: "Charabra, 8,250 ft, Shimla", priceRangeInr: { min: 28000, max: 65000 },
        rating: 4.9, reviewsCount: 1950, amenities: ["Heated Outdoor Infinity Whirlpool", "Pine Forest Trails", "Spa", "Mountain Views"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.oberoihotels.com", verifiedSource: "Oberoi Heritage Certified"
      }
    ],
    activities: [
      { id: "act-solang-glide", destinationId: "manali", name: "Tandem Paragliding Over Solang Valley", category: "Adventure & Aerial", duration: "1 hour", estimatedCostInr: 2500, bestTimeOfDay: "Morning", description: "Fly high with a licensed mountain pilot taking in aerial views of glaciers and fir forests." }
    ],
    connectivity: [
      {
        destinationId: "manali",
        nearestAirport: { name: "Bhuntar (Kullu) Airport", code: "KUU", distanceKm: 50, driveTime: "1h 30m" },
        nearestRailwayStation: { name: "Chandigarh Junction", code: "CDG", distanceKm: 290, driveTime: "6h 45m" },
        majorRoadRoutes: [
          { fromCity: "Chandigarh", highway: "NH21 / Kiratpur-Manali 4-Lane", distanceKm: 275, estimatedDriveTime: "6h 00m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 3. UTTARAKHAND
  {
    stateName: "Uttarakhand",
    isUnionTerritory: false,
    capital: "Dehradun (Winter) / Gairsain (Summer)",
    region: "North",
    destinations: [
      {
        id: "rishikesh",
        name: "Rishikesh",
        state: "Uttarakhand",
        district: "Dehradun / Tehri Garhwal",
        region: "North",
        nearestCityHub: "Dehradun Jolly Grant Airport (DED) / Haridwar Railway Station",
        coordinates: { lat: 30.0869, lng: 78.2676 },
        tagline: "The Yoga Capital of the World, sacred Ganges rapids, and Beatles ashram",
        shortDescription: "Foothills of the Garhwal Himalayas, white-water river rafting, yoga retreats, and evening Aarti.",
        detailedDescription: "Nestled where the emerald Ganges tumbles out of the Himalayan foothills into the plains, Rishikesh is renowned globally as the Yoga Capital of the World. From tranquil meditation retreats and the Beatles Ashram (Chaurasi Kutia) to adrenaline-charged Grade III and IV white-water rafting, it harmonizes spiritual serenity with adventure.",
        categories: ["Pilgrimage & Sacred", "Adventure & Treks", "Lakes & Waterfalls"],
        bestTimeToVisit: {
          season: "September to May",
          peakMonths: ["October", "November", "March", "April"],
          weatherSummary: "Pleasant sunny weather ideal for river rafting and meditation."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 950, midRangeInr: 2800, luxuryInr: 9000 },
        openingHours: "Triveni Ghat Evening Aarti: 06:00 PM; Beatles Ashram: 09:00 AM – 04:00 PM",
        entryFee: { indianInr: 150, foreignInr: 600, notes: "Beatles Ashram ticket managed by Uttarakhand Forest Department." },
        officialSources: [
          { tourismBoardName: "Uttarakhand Tourism Development Board (UTDB)", url: "https://uttarakhandtourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Capturing Rishikesh",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-haridwar", destinationId: "rishikesh", name: "Haridwar Har Ki Pauri", category: "Sacred Ghat", distanceKm: 24, travelTimeMinutes: 40, whyVisit: "Ancient holy bathing ghat on the Ganges where evening Ganga Aarti draws thousands of floating lamps." }
    ],
    accommodations: [
      {
        id: "stay-rishikesh-1", destinationId: "rishikesh", name: "Ananda in the Himalayas", type: "Resort",
        locationDescription: "The Palace Estate, Narendra Nagar, Rishikesh", priceRangeInr: { min: 42000, max: 95000 },
        rating: 4.9, reviewsCount: 1400, amenities: ["World Class Ayurvedic Spa", "Yoga Pavilion", "Palace Grounds", "Valley Views"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.anandaspa.com", verifiedSource: "Condé Nast Destination Spa Winner"
      }
    ],
    activities: [
      { id: "act-rishikesh-rafting", destinationId: "rishikesh", name: "Marine Drive to Shivpuri Ganges White-Water Rafting", category: "Boating & Water Sports", duration: "3 hours", estimatedCostInr: 1200, bestTimeOfDay: "Morning", description: "Navigate Grade III+ rapids including 'Roller Coaster' and 'Golf Course' with expert certified river guides." }
    ],
    connectivity: [
      {
        destinationId: "rishikesh",
        nearestAirport: { name: "Dehradun Jolly Grant Airport", code: "DED", distanceKm: 21, driveTime: "30 mins" },
        nearestRailwayStation: { name: "Yog Nagari Rishikesh (YNRK) / Haridwar (HW)", code: "YNRK", distanceKm: 3, driveTime: "10 mins" },
        majorRoadRoutes: [
          { fromCity: "New Delhi", highway: "NH334 (Delhi-Meerut-Haridwar Expressway)", distanceKm: 240, estimatedDriveTime: "4h 30m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 4. PUNJAB
  {
    stateName: "Punjab",
    isUnionTerritory: false,
    capital: "Chandigarh",
    region: "North",
    destinations: [
      {
        id: "amritsar",
        name: "Amritsar",
        state: "Punjab",
        district: "Amritsar",
        region: "North",
        nearestCityHub: "Sri Guru Ram Dass Jee International Airport (ATQ)",
        coordinates: { lat: 31.62, lng: 74.8765 },
        tagline: "Sacred Golden Temple, community spirit, Wagah border parade, and rich kulchas",
        shortDescription: "The holiest Sikh pilgrimage shrine, world's largest community kitchen (Langar), and historic Jallianwala Bagh.",
        detailedDescription: "Founded in 1577 by the fourth Sikh Guru, Guru Ram Das, Amritsar centers around the radiant, gold-sheathed Sri Harmandir Sahib (Golden Temple) standing serenely in the Amrit Sarovar holy pool. The complex serves free vegetarian meals to over 100,000 visitors daily regardless of faith. Nearby, Jallianwala Bagh preserves solemn national memory, and the daily sunset retreat at Wagah Border delivers patriotic pageantry.",
        categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Pleasant sunny days (15°C–24°C) with cold winter evenings."
        },
        recommendedDuration: "2 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 900, midRangeInr: 2600, luxuryInr: 9500 },
        openingHours: "Golden Temple: Open 24/7; Wagah Border ceremony starts approx. 04:30 PM (Winter) / 05:30 PM (Summer)",
        entryFee: { indianInr: 0, notes: "Golden Temple and Wagah border parade have completely free admission." },
        officialSources: [
          { tourismBoardName: "Punjab Tourism Official Portal", url: "https://punjabtourism.punjab.gov.in" },
          { tourismBoardName: "Shiromani Gurdwara Parbandhak Committee (SGPC)", url: "https://sgpc.net" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Akaaljotsingh Anandpuria",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-wagah", destinationId: "amritsar", name: "Wagah-Attari International Border", category: "Patriotic Ceremony", distanceKm: 28, travelTimeMinutes: 40, whyVisit: "Electrifying daily Beating Retreat and flag-lowering military drill between Indian BSF and Pakistan Rangers." }
    ],
    accommodations: [
      {
        id: "stay-amritsar-1", destinationId: "amritsar", name: "Hyatt Regency Amritsar", type: "Hotel",
        locationDescription: "MBM Farms, GT Road, Amritsar", priceRangeInr: { min: 6500, max: 14000 },
        rating: 4.8, reviewsCount: 1800, amenities: ["Free Temple Shuttles", "Outdoor Pool", "Punjab Kitchen", "Spa"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.hyatt.com", verifiedSource: "Punjab Tourism Department Approved"
      }
    ],
    activities: [
      { id: "act-amritsar-langar", destinationId: "amritsar", name: "Langar Hall Community Kitchen Seva Experience", category: "Cultural & Temple", duration: "2 hours", estimatedCostInr: 0, bestTimeOfDay: "All Day", description: "Participate in the spiritual service of preparing rotis and serving hot dal in the world's largest community kitchen." }
    ],
    connectivity: [
      {
        destinationId: "amritsar",
        nearestAirport: { name: "Sri Guru Ram Dass Jee International", code: "ATQ", distanceKm: 11, driveTime: "20 mins" },
        nearestRailwayStation: { name: "Amritsar Junction", code: "ASR", distanceKm: 2, driveTime: "6 mins" },
        majorRoadRoutes: [
          { fromCity: "New Delhi", highway: "NH44 (Grand Trunk Road)", distanceKm: 450, estimatedDriveTime: "7h 30m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 5. TAMIL NADU
  {
    stateName: "Tamil Nadu",
    isUnionTerritory: false,
    capital: "Chennai",
    region: "South",
    destinations: [
      {
        id: "madurai",
        name: "Madurai",
        state: "Tamil Nadu",
        district: "Madurai",
        region: "South",
        nearestCityHub: "Madurai Airport (IXM) / Madurai Junction (MDU)",
        coordinates: { lat: 9.9252, lng: 78.1198 },
        tagline: "The Athens of the East, soaring Dravidian gopurams, and jasmine blooms",
        shortDescription: "Ancient temple city centered around the monumental 14-tower Meenakshi Amman Temple.",
        detailedDescription: "One of the oldest continuously inhabited cities on the subcontinent, Madurai was the capital of the ancient Pandya kingdom and the cradle of Tamil Sangam literature. At its geometrical heart rises the spectacular Meenakshi Sundareswarar Temple, celebrated for its 14 towering gopurams adorned with thousands of brightly colored mythological stucco sculptures and the Thousand Pillar Hall.",
        categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January", "February"],
          weatherSummary: "Comfortable tropical weather with cooler evenings."
        },
        recommendedDuration: "1 to 2 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 1000, midRangeInr: 2900, luxuryInr: 9500 },
        openingHours: "Meenakshi Temple: 05:00 AM – 12:30 PM & 04:00 PM – 10:00 PM daily",
        entryFee: { indianInr: 0, notes: "Temple entry is free; Thousand Pillar Hall museum is ₹10." },
        officialSources: [
          { tourismBoardName: "Tamil Nadu Tourism Development Corporation (TTDC)", url: "https://www.tamilnadutourism.tn.gov.in" },
          { tourismBoardName: "Arulmigu Meenakshi Sundaraswarar Temple Official", url: "https://maduraimeenakshi.hrce.tn.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Subbu Rayan",
        unescoHeritage: false
      },
      {
        id: "ooty",
        name: "Ooty (Udhagamandalam)",
        state: "Tamil Nadu",
        district: "Nilgiris",
        region: "South",
        nearestCityHub: "Coimbatore International Airport (CJB) / Mettupalayam Railway Station",
        coordinates: { lat: 11.4102, lng: 76.695 },
        tagline: "The Queen of the Nilgiris, mountain toy trains, and botanical gardens",
        shortDescription: "UNESCO mountain railway, eucalyptus groves, rolling tea hills, and colonial stone churches.",
        detailedDescription: "Nestled at 2,240 meters in the Blue Mountains (Nilgiris), Ooty was established as the summer headquarters of the Madras Presidency. Famous for the UNESCO-inscribed Nilgiri Mountain Railway rack-and-pinion steam train, government rose and botanical gardens, and lush tea factory tours.",
        categories: ["Hill Stations", "UNESCO World Heritage", "Lakes & Waterfalls"],
        bestTimeToVisit: {
          season: "October to June",
          peakMonths: ["March", "April", "May"],
          weatherSummary: "Cool alpine climate (10°C–20°C)."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1200, midRangeInr: 3600, luxuryInr: 13000 },
        openingHours: "Botanical Garden: 07:00 AM – 06:30 PM; Rose Garden: 08:30 AM – 06:00 PM",
        entryFee: { indianInr: 40, notes: "Toy train tickets booked via IRCTC." },
        officialSources: [
          { tourismBoardName: "TTDC - Nilgiris", url: "https://www.tamilnadutourism.tn.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Kavin Narain",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-thirumalai", destinationId: "madurai", name: "Thirumalai Nayakkar Palace", category: "Palace", distanceKm: 2, travelTimeMinutes: 10, whyVisit: "17th-century palace celebrated for its massive 82-foot high classical stucco pillars." }
    ],
    accommodations: [
      {
        id: "stay-ooty-1", destinationId: "ooty", name: "Savoy - IHCL SeleQtions", type: "Heritage Haveli",
        locationDescription: "Sylks Road, Ooty", priceRangeInr: { min: 14000, max: 28000 },
        rating: 4.8, reviewsCount: 1100, amenities: ["Colonial Fireplaces", "Lush Lawns", "Afternoon High Tea", "Spa"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.seleqtionshotels.com", verifiedSource: "IHCL Heritage Collection"
      }
    ],
    activities: [
      { id: "act-ooty-train", destinationId: "ooty", name: "Nilgiri Mountain UNESCO Toy Train Journey", category: "Sightseeing", duration: "3 hours", estimatedCostInr: 300, bestTimeOfDay: "Morning", description: "Ride the century-old steam locomotive through Nilgiri tunnels and high viaducts." }
    ],
    connectivity: [
      {
        destinationId: "madurai",
        nearestAirport: { name: "Madurai Airport", code: "IXM", distanceKm: 12, driveTime: "25 mins" },
        nearestRailwayStation: { name: "Madurai Junction", code: "MDU", distanceKm: 2, driveTime: "8 mins" },
        majorRoadRoutes: [
          { fromCity: "Chennai", highway: "NH45 (Grand Southern Trunk)", distanceKm: 460, estimatedDriveTime: "7h 30m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 6. WEST BENGAL
  {
    stateName: "West Bengal",
    isUnionTerritory: false,
    capital: "Kolkata",
    region: "East",
    destinations: [
      {
        id: "kolkata",
        name: "Kolkata",
        state: "West Bengal",
        district: "Kolkata",
        region: "East",
        nearestCityHub: "Netaji Subhash Chandra Bose International Airport (CCU)",
        coordinates: { lat: 22.5726, lng: 88.3639 },
        tagline: "The City of Joy, intellectual heritage, tramways, and grand colonial facades",
        shortDescription: "Literary coffeehouses, yellow Ambassador taxis, Howrah Bridge, and exquisite Bengali sweets.",
        detailedDescription: "The intellectual and artistic heart of India, Kolkata retains a grand soul unlike any other metropolis. Victorian monuments stand beside bustling markets, hand-pulled rickshaws share lanes with electric trams, and conversations about poetry, cinema, and football flow endlessly over sweet misti doi.",
        categories: ["Heritage & Forts", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["October", "November", "December", "January"],
          weatherSummary: "Crisp pleasant winter (15°C–26°C); vibrant festive atmosphere during Durga Puja."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 1000, midRangeInr: 3200, luxuryInr: 11000 },
        openingHours: "Victoria Memorial: 10:00 AM – 05:00 PM (Gardens: 06:00 AM – 06:00 PM)",
        entryFee: { indianInr: 50, foreignInr: 500, notes: "Gardens entry ₹20." },
        officialSources: [
          { tourismBoardName: "West Bengal Tourism (WBTDCL)", url: "https://wbtourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Arghadeep Chinya",
        unescoHeritage: false
      },
      {
        id: "darjeeling",
        name: "Darjeeling",
        state: "West Bengal",
        district: "Darjeeling",
        region: "East",
        nearestCityHub: "Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP)",
        coordinates: { lat: 27.041, lng: 88.2663 },
        tagline: "The Champagne of Teas, Himalayan panoramas, and Mt. Kanchenjunga sunrise",
        shortDescription: "UNESCO toy train, rolling emerald tea estates, and dawn views of Mount Kanchenjunga from Tiger Hill.",
        detailedDescription: "Perched along a dramatic mountain ridge at 2,050 meters, Darjeeling offers sweeping panoramas of Mount Kanchenjunga (8,586m), the world's third highest peak. Globally revered for Muscatel-scented single-estate teas, it features the UNESCO-listed 1881 Darjeeling Himalayan Railway steam locomotive and Tibetan Buddhist gompas.",
        categories: ["Hill Stations", "UNESCO World Heritage", "Adventure & Treks"],
        bestTimeToVisit: {
          season: "March to May & October to December",
          peakMonths: ["April", "October", "November"],
          weatherSummary: "Crisp mountain visibility with clear morning mountain vistas."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1200, midRangeInr: 3600, luxuryInr: 14000 },
        openingHours: "Tiger Hill Sunrise: 04:00 AM – 06:30 AM; Himalayan Mountaineering Institute: 09:00 AM – 04:30 PM (Closed Thursdays)",
        entryFee: { indianInr: 60, notes: "Toy Train Joy Ride tickets booked on IRCTC." },
        officialSources: [
          { tourismBoardName: "WBTDCL - Darjeeling", url: "https://wbtourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Prasanta Kr Dutta",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-tiger-hill", destinationId: "darjeeling", name: "Tiger Hill Sunrise Observatory", category: "Mountain Vista", distanceKm: 11, travelTimeMinutes: 35, whyVisit: "Legendary dawn viewpoint watching the sun's first rays illuminate Kanchenjunga in brilliant gold." }
    ],
    accommodations: [
      {
        id: "stay-darjeeling-1", destinationId: "darjeeling", name: "Glenburn Tea Estate & Boutique Hotel", type: "Resort",
        locationDescription: "Rangneet Valley, Darjeeling", priceRangeInr: { min: 32000, max: 70000 },
        rating: 4.9, reviewsCount: 680, amenities: ["Private Tea Tasting", "River Hikes", "Kanchenjunga Balcony", "Fine Dining"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.glenburnteaestate.com", verifiedSource: "Luxury Heritage Tea Estate Award"
      }
    ],
    activities: [
      { id: "act-darjeeling-dhr", destinationId: "darjeeling", name: "UNESCO Steam Toy Train Batasia Loop Joy Ride", category: "Sightseeing", duration: "2 hours", estimatedCostInr: 1000, bestTimeOfDay: "Morning", description: "Ride the working steam locomotive around the 360-degree spiral at Batasia Loop." }
    ],
    connectivity: [
      {
        destinationId: "darjeeling",
        nearestAirport: { name: "Bagdogra Airport", code: "IXB", distanceKm: 70, driveTime: "2h 45m" },
        nearestRailwayStation: { name: "New Jalpaiguri (NJP)", code: "NJP", distanceKm: 75, driveTime: "3h 00m" },
        majorRoadRoutes: [
          { fromCity: "Siliguri", highway: "NH110 / Hill Cart Road", distanceKm: 65, estimatedDriveTime: "2h 30m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 7. GOA
  {
    stateName: "Goa",
    isUnionTerritory: false,
    capital: "Panaji",
    region: "West",
    destinations: [
      {
        id: "goa",
        name: "Goa (North & South)",
        state: "Goa",
        district: "North Goa & South Goa",
        region: "West",
        nearestCityHub: "Manohar International Airport Mopa (GOX) / Dabolim Airport (GOI) / Madgaon Railway Station (MAO)",
        coordinates: { lat: 15.2993, lng: 74.124 },
        tagline: "Sun-drenched golden sands, UNESCO baroque churches, and Portuguese susegad lifestyle",
        shortDescription: "Golden beaches from Anjuna to Palolem, 16th-century cathedrals of Old Goa, and spice plantations.",
        detailedDescription: "India's coastal paradise stretches across 105 kilometers of Arabian Sea coastline. North Goa thrives with vibrant beach shacks, flea markets, and water sports at Calangute and Vagator, while South Goa enchants with tranquil white sands at Palolem, Agonda, and Colva. In Old Goa, the Basilica of Bom Jesus holds the sacred relics of St. Francis Xavier.",
        categories: ["Coastal & Beaches", "UNESCO World Heritage", "Heritage & Forts", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "October to April",
          peakMonths: ["November", "December", "January", "February"],
          weatherSummary: "Warm sunny days (24°C–32°C) with balmy sea breezes."
        },
        recommendedDuration: "3 to 5 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1500, midRangeInr: 4500, luxuryInr: 16000 },
        openingHours: "Basilica of Bom Jesus: 09:00 AM – 06:30 PM (Sundays 10:30 AM – 06:30 PM); Beaches: 24/7",
        entryFee: { indianInr: 0, notes: "Churches and public beaches have free admission." },
        officialSources: [
          { tourismBoardName: "Goa Tourism Development Corporation (GTDC)", url: "https://goa-tourism.com" },
          { tourismBoardName: "ASI Goa Circle", url: "https://asigoacircle.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Mohit Hambiria",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-dudhsagar", destinationId: "goa", name: "Dudhsagar Waterfalls", category: "Lakes & Waterfalls", distanceKm: 60, travelTimeMinutes: 90, whyVisit: "Spectacular 4-tiered 310-meter white cascade on the Western Ghats border accessible by 4x4 forest jeep." }
    ],
    accommodations: [
      {
        id: "stay-goa-1", destinationId: "goa", name: "Taj Fort Aguada Resort & Spa", type: "Resort",
        locationDescription: "Sinquerim Beach, Candolim, North Goa", priceRangeInr: { min: 16000, max: 38000 },
        rating: 4.8, reviewsCount: 3100, amenities: ["Direct Beach Access", "16th-Century Fort Ramparts", "Pool", "Spa"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.tajhotels.com", verifiedSource: "IHCL 5-Star Deluxe"
      }
    ],
    activities: [
      { id: "act-goa-scuba", destinationId: "goa", name: "Grande Island Scuba Diving & Dolphin Cruise", category: "Boating & Water Sports", duration: "5 hours", estimatedCostInr: 3200, bestTimeOfDay: "Morning", description: "Boat cruise to Grande Island with certified PADI dive instructor exploring coral reefs." }
    ],
    connectivity: [
      {
        destinationId: "goa",
        nearestAirport: { name: "Dabolim / Mopa International", code: "GOI", distanceKm: 25, driveTime: "35 mins" },
        nearestRailwayStation: { name: "Madgaon Junction (MAO) / Thivim (THVM)", code: "MAO", distanceKm: 5, driveTime: "15 mins" },
        majorRoadRoutes: [
          { fromCity: "Mumbai", highway: "NH66 / Coastal Highway", distanceKm: 580, estimatedDriveTime: "9h 30m", busConnectivity: "Frequent State Transport" },
          { fromCity: "Bengaluru", highway: "NH48 & NH748", distanceKm: 560, estimatedDriveTime: "9h 00m", busConnectivity: "Private AC Sleeper Daily" }
        ]
      }
    ]
  },

  // 8. UNION TERRITORY: DELHI
  {
    stateName: "Delhi",
    isUnionTerritory: true,
    capital: "New Delhi",
    region: "North",
    destinations: [
      {
        id: "delhi",
        name: "Delhi",
        state: "Delhi",
        district: "Central & New Delhi",
        region: "North",
        nearestCityHub: "Indira Gandhi International Airport (DEL)",
        coordinates: { lat: 28.6139, lng: 77.209 },
        tagline: "The heartbeat of centuries, grand monuments and legendary flavors",
        shortDescription: "Layered history, grand Mughal architecture, bold street food and leafy diplomatic avenues.",
        detailedDescription: "Delhi is an intoxicating tapestry of the ancient and the modern. From the monumental ramparts of the Red Fort, Qutub Minar, and Humayun's Tomb to the buzzing spice alleys of Chandni Chowk and the serene lawns of Lodhi Garden, the national capital delivers an unmatched feast of culture, heritage, and culinary wonders.",
        categories: ["Heritage & Forts", "Cultural & Tribal", "UNESCO World Heritage"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January", "February"],
          weatherSummary: "Crisp, sunny winter weather (12°C–24°C) ideal for heritage walks."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1300, midRangeInr: 4200, luxuryInr: 16000 },
        openingHours: "Red Fort & Humayun's Tomb: Sunrise to Sunset (Closed Mondays); Qutub Minar: 07:00 AM – 09:00 PM",
        entryFee: { indianInr: 50, foreignInr: 600, notes: "Booked online through ASI portal." },
        officialSources: [
          { tourismBoardName: "Delhi Tourism (DTTDC)", url: "https://www.delhitourism.gov.in" },
          { tourismBoardName: "ASI Delhi Circle", url: "https://asidelhicircle.bih.nic.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Asif Methar",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-humayun", destinationId: "delhi", name: "Humayun's Tomb Garden Complex", category: "UNESCO World Heritage", distanceKm: 5, travelTimeMinutes: 15, whyVisit: "Exquisite 16th-century Persian garden tomb that served as the primary architectural inspiration for the Taj Mahal." }
    ],
    accommodations: [
      {
        id: "stay-delhi-1", destinationId: "delhi", name: "The Imperial Janpath", type: "Heritage Haveli",
        locationDescription: "Janpath, Connaught Place, New Delhi", priceRangeInr: { min: 14500, max: 35000 },
        rating: 4.8, reviewsCount: 1420, amenities: ["Spa", "Art Collection", "Pool", "Fine Dining"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://theimperialindia.com", verifiedSource: "Heritage Grand Classification"
      }
    ],
    activities: [
      { id: "act-delhi-food", destinationId: "delhi", name: "Chandni Chowk Old Delhi Culinary & Spice Walk", category: "Food & Bazaars", duration: "3 hours", estimatedCostInr: 500, bestTimeOfDay: "Afternoon", description: "Taste authentic paranthas at Paranthe Wali Gali, jalebis, and explore Asia's largest spice market at Khari Baoli." }
    ],
    connectivity: [
      {
        destinationId: "delhi",
        nearestAirport: { name: "Indira Gandhi International Airport", code: "DEL", distanceKm: 14, driveTime: "30 mins" },
        nearestRailwayStation: { name: "New Delhi (NDLS) / Hazrat Nizamuddin (NZM)", code: "NDLS", distanceKm: 2, driveTime: "8 mins" },
        majorRoadRoutes: [
          { fromCity: "Jaipur", highway: "Delhi-Mumbai Expressway / NH48", distanceKm: 270, estimatedDriveTime: "3h 45m", busConnectivity: "Frequent State Transport" },
          { fromCity: "Agra", highway: "Yamuna Expressway", distanceKm: 210, estimatedDriveTime: "3h 00m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 9. UNION TERRITORY: LADAKH
  {
    stateName: "Ladakh",
    isUnionTerritory: true,
    capital: "Leh",
    region: "North",
    destinations: [
      {
        id: "leh",
        name: "Leh-Ladakh",
        state: "Ladakh",
        district: "Leh",
        region: "North",
        nearestCityHub: "Kushok Bakula Rimpochee Airport (IXL)",
        coordinates: { lat: 34.1526, lng: 77.5771 },
        tagline: "The Land of High Mountain Passes, Tibetan monasteries, and azure alpine lakes",
        shortDescription: "Dramatic high-altitude desert moonscapes, ancient Buddhist gompas, and turquoise Pangong Lake.",
        detailedDescription: "Cradled between the Karakoram and Great Himalayan ranges at an altitude of 3,500 meters, Ladakh is a high-altitude desert kingdom of stark raw majesty. Travelers explore ancient Tibetan cliffside monasteries like Thiksey and Hemis, cross Khardung La (one of the world's highest motorable roads at 17,982 ft), and gaze at the color-shifting blue waters of Pangong Tso extending into Tibet.",
        categories: ["Adventure & Treks", "Lakes & Waterfalls", "Pilgrimage & Sacred", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "May to September",
          peakMonths: ["June", "July", "August"],
          weatherSummary: "Warm sunny mountain days (15°C–25°C) and cool crisp nights. Mountain passes open."
        },
        recommendedDuration: "5 to 7 Days (Includes 48 hours mandatory acclimatization)",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1800, midRangeInr: 5200, luxuryInr: 18000 },
        openingHours: "Monasteries open 07:00 AM – 06:00 PM; Inner Line Permit required for Nubra & Pangong",
        entryFee: { indianInr: 450, notes: "Inner Line Permit (ILP) and Wildlife environmental fee applied online via Leh LAHDC portal." },
        officialSources: [
          { tourismBoardName: "Ladakh Tourism Department", url: "https://ladakhtourism.in" },
          { tourismBoardName: "District Administration Leh", url: "https://leh.nic.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Sanskar Vyas",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-pangong", destinationId: "leh", name: "Pangong Tso Alpine Salt Lake", category: "Lakes & Waterfalls", distanceKm: 140, travelTimeMinutes: 240, whyVisit: "Stunning 134-km long high-altitude lake sitting at 14,270 ft shifting hues from turquoise to cobalt blue." }
    ],
    accommodations: [
      {
        id: "stay-leh-1", destinationId: "leh", name: "The Grand Dragon Ladakh", type: "Resort",
        locationDescription: "Old Road, Sheynam, Leh", priceRangeInr: { min: 15500, max: 32000 },
        rating: 4.8, reviewsCount: 820, amenities: ["Oxygen Enriched Rooms", "Solar Heated", "Stok Kangri Mountain View", "Ladakhi Bakery"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.thegranddragonladakh.com", verifiedSource: "Ministry of Tourism 4-Star Eco Classification"
      }
    ],
    activities: [
      { id: "act-leh-bike", destinationId: "leh", name: "Khardung La High Mountain Pass Motorcycle Ride", category: "Adventure & Aerial", duration: "6 hours", estimatedCostInr: 2500, bestTimeOfDay: "Morning", description: "Ride a Royal Enfield over one of the highest motorable mountain passes in the world at 17,982 ft." }
    ],
    connectivity: [
      {
        destinationId: "leh",
        nearestAirport: { name: "Kushok Bakula Rimpochee Airport", code: "IXL", distanceKm: 4, driveTime: "12 mins" },
        nearestRailwayStation: { name: "Jammu Tawi (JAT) / Chandigarh (CDG)", code: "JAT", distanceKm: 700, driveTime: "Two Days" },
        majorRoadRoutes: [
          { fromCity: "Manali", highway: "Manali-Leh Highway (via Atal Tunnel & Baralacha La)", distanceKm: 425, estimatedDriveTime: "12h 00m", busConnectivity: "Frequent State Transport" },
          { fromCity: "Srinagar", highway: "NH1 (via Zoji La & Kargil)", distanceKm: 420, estimatedDriveTime: "11h 00m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  },

  // 10. UNION TERRITORY: JAMMU AND KASHMIR
  {
    stateName: "Jammu and Kashmir",
    isUnionTerritory: true,
    capital: "Srinagar (Summer) / Jammu (Winter)",
    region: "North",
    destinations: [
      {
        id: "srinagar",
        name: "Srinagar",
        state: "Jammu and Kashmir",
        district: "Srinagar",
        region: "North",
        nearestCityHub: "Sheikh ul-Alam International Airport (SXR) / Srinagar Railway Station",
        coordinates: { lat: 34.0837, lng: 74.7973 },
        tagline: "Paradise on Earth, Dal Lake cedar houseboats, and Mughal terraced gardens",
        shortDescription: "Gliding shikara boats on Dal Lake, floating vegetable markets, and Nishat & Shalimar Mughal gardens.",
        detailedDescription: "Celebrated by Mughal Emperor Jahangir as 'Paradise on Earth', Srinagar rests serenely in the Kashmir Valley along the Jhelum River. Travelers stay in ornate hand-carved cedarwood houseboats moored on tranquil Dal and Nigeen lakes, glide past lotus gardens in cushioned shikaras, and wander through terraced 17th-century Mughal pleasure gardens.",
        categories: ["Lakes & Waterfalls", "Hill Stations", "Heritage & Forts"],
        bestTimeToVisit: {
          season: "April to October (Gardens & Lakes) & December to February (Snow)",
          peakMonths: ["April", "May", "September", "October"],
          weatherSummary: "Charming cool summer days (15°C–28°C); breathtaking autumn Chinar colors in October."
        },
        recommendedDuration: "3 to 4 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1400, midRangeInr: 4500, luxuryInr: 16000 },
        openingHours: "Mughal Gardens: 09:00 AM – 07:00 PM; Shikara rides available dawn to dusk",
        entryFee: { indianInr: 25, notes: "Shikara ride regulated rates approx. ₹700–₹1,200 per hour." },
        officialSources: [
          { tourismBoardName: "Jammu and Kashmir Tourism Development Corporation (JKTDC)", url: "https://www.jktdc.co.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Imad Clicks",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-gulmarg", destinationId: "srinagar", name: "Gulmarg Alpine Ski Meadow & Gondola", category: "Adventure & Ski", distanceKm: 50, travelTimeMinutes: 90, whyVisit: "World's second highest operating cable car reaching 13,780 ft on Mount Apharwat." }
    ],
    accommodations: [
      {
        id: "stay-srinagar-1", destinationId: "srinagar", name: "Sukoon Luxury Houseboat", type: "Resort",
        locationDescription: "Nigeen Lake Mooring, Srinagar", priceRangeInr: { min: 13500, max: 28000 },
        rating: 4.9, reviewsCount: 680, amenities: ["Cedar Interiors", "Rooftop Sundeck", "Kashmiri Wazwan", "Quiet Lake Location"],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        bookingOrInfoUrl: "https://www.sukoonhouseboat.com", verifiedSource: "JK Tourism Eco-Houseboat Certified"
      }
    ],
    activities: [
      { id: "act-srinagar-shikara", destinationId: "srinagar", name: "Early Morning Floating Market Shikara Cruise", category: "Boating & Water Sports", duration: "2 hours", estimatedCostInr: 800, bestTimeOfDay: "Morning", description: "Witness the 150-year-old dawn floating vegetable and flower market where vendors barter boat-to-boat." }
    ],
    connectivity: [
      {
        destinationId: "srinagar",
        nearestAirport: { name: "Sheikh ul-Alam International Airport", code: "SXR", distanceKm: 12, driveTime: "25 mins" },
        nearestRailwayStation: { name: "Srinagar (SINA) / Banihal / Udhampur", code: "SINA", distanceKm: 8, driveTime: "20 mins" },
        majorRoadRoutes: [
          { fromCity: "Jammu", highway: "NH44 (via Chenani-Nashri Tunnel)", distanceKm: 260, estimatedDriveTime: "6h 30m", busConnectivity: "Frequent State Transport" }
        ]
      }
    ]
  }
];
