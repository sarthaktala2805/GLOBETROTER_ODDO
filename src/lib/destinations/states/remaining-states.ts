import { StateUTData } from "../types";

export const remainingStatesData: StateUTData[] = [
  // 1. ODISHA
  {
    stateName: "Odisha",
    isUnionTerritory: false,
    capital: "Bhubaneswar",
    region: "East",
    destinations: [
      {
        id: "puri",
        name: "Puri & Konark",
        state: "Odisha",
        district: "Puri",
        region: "East",
        nearestCityHub: "Biju Patnaik International Airport Bhubaneswar (BBI) / Puri Railway Station",
        coordinates: { lat: 19.8135, lng: 85.8312 },
        tagline: "Sacred Jagannath Dham, monumental Konark Sun Temple chariot, and Golden Beach",
        shortDescription: "One of the four sacred Char Dham pilgrimage sites and the 13th-century UNESCO Konark Sun Temple.",
        detailedDescription: "Consecrated on the Bay of Bengal, Puri is one of Hinduism's most sacred Char Dham destinations, home to the 12th-century Lord Jagannath Temple and the annual Rath Yatra festival. Just 35 km along the Marine Drive rises the 13th-century Konark Sun Temple, a UNESCO World Heritage architectural marvel conceived as a colossal stone chariot with 24 carved wheels pulled by seven horses.",
        categories: ["Pilgrimage & Sacred", "UNESCO World Heritage", "Coastal & Beaches"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Breezy pleasant tropical coastal weather (18°C–28°C)."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 900, midRangeInr: 2700, luxuryInr: 9500 },
        openingHours: "Jagannath Temple: 05:00 AM – 11:00 PM; Konark Sun Temple: 06:00 AM – 08:00 PM",
        entryFee: { indianInr: 40, foreignInr: 600, notes: "Konark ticket booked via ASI portal." },
        officialSources: [
          { tourismBoardName: "Odisha Tourism (OTDC)", url: "https://odishatourism.gov.in" },
          { tourismBoardName: "ASI Bhubaneswar Circle", url: "https://asibhubaneswarcircle.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Odisha Heritage",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-chilika", destinationId: "puri", name: "Chilika Lake & Irrawaddy Dolphin Sanctuary", category: "Lakes & Waterfalls", distanceKm: 45, travelTimeMinutes: 60, whyVisit: "Asia's largest brackish water lagoon, home to rare endangered Irrawaddy dolphins and migratory birds." }
    ],
    accommodations: [],
    activities: [
      { id: "act-konark-wheels", destinationId: "puri", name: "Konark Sun Chariot Sundial Demonstration", category: "Sightseeing", duration: "2 hours", estimatedCostInr: 200, bestTimeOfDay: "Morning", description: "Learn how the ancient carved chariot wheels accurately measure time down to the minute." }
    ],
    connectivity: []
  },

  // 2. MADHYA PRADESH
  {
    stateName: "Madhya Pradesh",
    isUnionTerritory: false,
    capital: "Bhopal",
    region: "Central",
    destinations: [
      {
        id: "khajuraho",
        name: "Khajuraho",
        state: "Madhya Pradesh",
        district: "Chhatarpur",
        region: "Central",
        nearestCityHub: "Khajuraho Airport (HJR) / Khajuraho Railway Station (KURJ)",
        coordinates: { lat: 24.8318, lng: 79.9199 },
        tagline: "UNESCO-inscribed masterpieces of medieval Chandela art and temple architecture",
        shortDescription: "Magnificent Nagara-style sandstone temples celebrated for intricate sculptures and harmonious geometry.",
        detailedDescription: "Built between 950 and 1050 AD under the Chandela dynasty, the Khajuraho Group of Monuments represents one of the historical summits of temple architecture in northern India. The Western Group, led by the towering Kandariya Mahadeva Temple, features thousands of sculpted celestial dancers, musicians, warriors, and allegorical scenes carved in fine sandstone.",
        categories: ["Heritage & Forts", "UNESCO World Heritage", "Pilgrimage & Sacred"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January", "February"],
          weatherSummary: "Pleasant sunny winter days (15°C–26°C); annual Khajuraho Dance Festival in February."
        },
        recommendedDuration: "2 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 1000, midRangeInr: 2800, luxuryInr: 11000 },
        openingHours: "Temples open sunrise to sunset (06:00 AM – 06:00 PM); Sound & Light Show: 06:30 PM & 07:30 PM",
        entryFee: { indianInr: 40, foreignInr: 600, notes: "Tickets booked on ASI portal." },
        officialSources: [
          { tourismBoardName: "Madhya Pradesh Tourism (MP Tourism)", url: "https://www.mptourism.com" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / vidya nath bharti",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-raneh-falls", destinationId: "khajuraho", name: "Raneh Canyons & Ken River Waterfalls", category: "Lakes & Waterfalls", distanceKm: 21, travelTimeMinutes: 35, whyVisit: "Pure crystalline multi-colored granite gorge with deep river waterfalls and ghariyal crocodiles." }
    ],
    accommodations: [],
    activities: [],
    connectivity: []
  },

  // 3. ASSAM
  {
    stateName: "Assam",
    isUnionTerritory: false,
    capital: "Dispur (Guwahati)",
    region: "North-East",
    destinations: [
      {
        id: "kaziranga",
        name: "Kaziranga National Park",
        state: "Assam",
        district: "Golaghat / Nagaon",
        region: "North-East",
        nearestCityHub: "Jorhat Airport (JRH) / Guwahati Airport (GAU) / Furkating Railway Station",
        coordinates: { lat: 26.5775, lng: 93.1711 },
        tagline: "The world sanctuary of the Great One-Horned Rhinoceros on the Brahmaputra floodplains",
        shortDescription: "UNESCO World Heritage wilderness protecting two-thirds of the planet's wild one-horned rhinos.",
        detailedDescription: "Sprawled across the fertile floodplains of the mighty Brahmaputra River, Kaziranga National Park is one of the world's most successful wildlife conservation epics. Home to over 2,400 wild Great Indian One-Horned Rhinoceroses, as well as wild water buffaloes, swamp deer, elephants, and Royal Bengal tigers.",
        categories: ["Wildlife & Sanctuaries", "UNESCO World Heritage", "Adventure & Treks"],
        bestTimeToVisit: {
          season: "November to April",
          peakMonths: ["December", "January", "February", "March"],
          weatherSummary: "Mild, comfortable dry season. Park closed during Brahmaputra monsoon floods (May–October)."
        },
        recommendedDuration: "2 to 3 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1600, midRangeInr: 4500, luxuryInr: 14000 },
        openingHours: "Safari Shifts: Morning 07:00 AM – 10:00 AM; Afternoon 01:30 PM – 04:30 PM",
        entryFee: { indianInr: 100, foreignInr: 650, notes: "Jeep safari vehicle & guide charges separate (approx. ₹2,000–₹3,500 per vehicle)." },
        officialSources: [
          { tourismBoardName: "Assam Tourism Development Corporation (ATDC)", url: "https://tourism.assam.gov.in" },
          { tourismBoardName: "Kaziranga National Park Forest Authority", url: "https://kaziranga.assam.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Naman Aggarwal",
        unescoHeritage: true
      }
    ],
    nearbyAttractions: [
      { id: "attr-majuli", destinationId: "kaziranga", name: "Majuli River Island", category: "Cultural & Tribal", distanceKm: 85, travelTimeMinutes: 120, whyVisit: "World's largest inhabited river island celebrated for Neo-Vaishnavite Satra monasteries and traditional mask making." }
    ],
    accommodations: [],
    activities: [
      { id: "act-kaziranga-jeep", destinationId: "kaziranga", name: "Bagori Central Range 4x4 Rhino Safari", category: "Wildlife Safari", duration: "3 hours", estimatedCostInr: 2800, bestTimeOfDay: "Morning", description: "Spot wild rhinos, swamp deer, and wild buffaloes grazing peacefully in tall elephant grass." }
    ],
    connectivity: []
  },

  // 4. MEGHALAYA
  {
    stateName: "Meghalaya",
    isUnionTerritory: false,
    capital: "Shillong",
    region: "North-East",
    destinations: [
      {
        id: "shillong",
        name: "Shillong & Cherrapunji (Sohra)",
        state: "Meghalaya",
        district: "East Khasi Hills",
        region: "North-East",
        nearestCityHub: "Shillong Airport Umroi (SHL) / Guwahati Airport (GAU)",
        coordinates: { lat: 25.5788, lng: 91.8933 },
        tagline: "The Abode of the Clouds, living root bridges, and deepest plunging waterfalls",
        shortDescription: "Bio-engineered centuries-old Living Root Bridges, crystal-clear Dawki river, and roaring Nohkalikai Falls.",
        detailedDescription: "Meghalaya, meaning 'Abode of the Clouds', is a lush subtropical mountain paradise of astonishing natural engineering. In Cherrapunji (Sohra) and Nongriat, indigenous Khasi communities guide the aerial roots of Ficus elastica trees across rushing streams to form living root bridges that grow stronger with age. Also renowned for the 340-meter Nohkalikai plunge waterfall and the glass-like waters of the Umngot River in Dawki.",
        categories: ["Hill Stations", "Lakes & Waterfalls", "Adventure & Treks", "Offbeat & Hidden Gem"],
        bestTimeToVisit: {
          season: "September to May",
          peakMonths: ["October", "November", "December", "March"],
          weatherSummary: "Clean, fresh mountain air (12°C–22°C); waterfalls roar at their fullest post-monsoon."
        },
        recommendedDuration: "3 to 4 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1300, midRangeInr: 3800, luxuryInr: 13000 },
        openingHours: "Living root bridges: Open during daylight; Dawki boating: 08:00 AM – 05:00 PM",
        entryFee: { indianInr: 50, notes: "Double Decker living root bridge has local Khasi village council development fee." },
        officialSources: [
          { tourismBoardName: "Meghalaya Tourism Official Portal", url: "https://www.meghalayatourism.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Pushkar Sarkar",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-dawki", destinationId: "shillong", name: "Dawki Umngot Transparent River", category: "Boating & Water Sports", distanceKm: 82, travelTimeMinutes: 130, whyVisit: "Crystal-clear river where wooden boats appear to float in mid-air on mirror-like turquoise water." }
    ],
    accommodations: [],
    activities: [
      { id: "act-root-bridge-trek", destinationId: "shillong", name: "Nongriat Double Decker Living Root Bridge Trek", category: "Trekking & Hiking", duration: "6 hours", estimatedCostInr: 600, bestTimeOfDay: "Morning", description: "Hike down 3,500 stone steps into the subtropical gorge to cross the 200-year-old living tree bridge." }
    ],
    connectivity: []
  },

  // 5. TELANGANA
  {
    stateName: "Telangana",
    isUnionTerritory: false,
    capital: "Hyderabad",
    region: "South",
    destinations: [
      {
        id: "hyderabad",
        name: "Hyderabad",
        state: "Telangana",
        district: "Hyderabad",
        region: "South",
        nearestCityHub: "Rajiv Gandhi International Airport (HYD)",
        coordinates: { lat: 17.385, lng: 78.4867 },
        tagline: "City of Pearls, Nizam opulence, Golconda acoustics, and world-famous biryani",
        shortDescription: "The 1591 Charminar, acoustic engineering of Golconda Fort, and authentic royal Awadhi-Telugu dining.",
        detailedDescription: "Hyderabad bridges four centuries of royal Qutb Shahi and Asaf Jahi (Nizam) heritage with modern tech campuses. Marvel at the four minarets of Charminar in the bustling Laad Bazaar, test the whispering acoustic sound-transfers of Golconda Fort, tour Chowmahalla Palace, and relish authentic slow-cooked dum biryani.",
        categories: ["Heritage & Forts", "Palaces & Havens", "Cultural & Tribal"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Pleasant winter days (16°C–28°C)."
        },
        recommendedDuration: "2 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1100, midRangeInr: 3500, luxuryInr: 12000 },
        openingHours: "Charminar: 09:30 AM – 05:30 PM; Golconda Fort: 09:00 AM – 05:30 PM",
        entryFee: { indianInr: 25, foreignInr: 300, notes: "Booked online via ASI portal." },
        officialSources: [
          { tourismBoardName: "Telangana Tourism (TSTDC)", url: "https://tourism.telangana.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Sharath G.",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-qutb-tombs", destinationId: "hyderabad", name: "Qutb Shahi Royal Tombs Complex", category: "Heritage & Forts", distanceKm: 2, travelTimeMinutes: 10, whyVisit: "Grand 16th-century domed mausoleums built on elevated platforms with Persian geometric tilework." }
    ],
    accommodations: [],
    activities: [],
    connectivity: []
  },

  // 6. ANDHRA PRADESH
  {
    stateName: "Andhra Pradesh",
    isUnionTerritory: false,
    capital: "Amaravati",
    region: "South",
    destinations: [
      {
        id: "visakhapatnam",
        name: "Visakhapatnam (Vizag) & Araku Valley",
        state: "Andhra Pradesh",
        district: "Visakhapatnam",
        region: "South",
        nearestCityHub: "Visakhapatnam International Airport (VTZ)",
        coordinates: { lat: 17.6868, lng: 83.2185 },
        tagline: "City of Destiny, golden coastal headlands, Borra Caves, and organic coffee hills",
        shortDescription: "Submarine museum on RK Beach, panoramic Kailasagiri headland, and VistaDome train into coffee valleys.",
        detailedDescription: "The jewel of the Coromandel coast, Visakhapatnam is where the verdant Eastern Ghats meet the Bay of Bengal. Highlights include the INS Kursura Submarine Museum (a decommissioned Soviet-built submarine on the beach), the scenic VistaDome rail journey through 58 tunnels into the mist-covered Araku Valley, and the million-year-old Borra limestone caves.",
        categories: ["Coastal & Beaches", "Hill Stations", "Caves & Rock-Cut"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Comfortable coastal breeze and pleasant coffee hill days."
        },
        recommendedDuration: "3 Days",
        costIndex: "Value",
        estimatedBudgetPerDay: { backpackerInr: 1000, midRangeInr: 3000, luxuryInr: 10000 },
        openingHours: "Submarine Museum: 02:00 PM – 08:30 PM (Sundays from 10:00 AM); Borra Caves: 10:00 AM – 05:00 PM",
        entryFee: { indianInr: 70, notes: "Borra Caves entry ₹80." },
        officialSources: [
          { tourismBoardName: "Andhra Pradesh Tourism (APTDC)", url: "https://tourism.ap.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Vizag Heritage",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-borra", destinationId: "visakhapatnam", name: "Borra Million-Year Limestone Caves", category: "Caves & Rock-Cut", distanceKm: 90, travelTimeMinutes: 150, whyVisit: "Deepest karst cave system in India with dramatic speleothem stalactites and stalagmites." }
    ],
    accommodations: [],
    activities: [],
    connectivity: []
  },

  // 7. SIKKIM
  {
    stateName: "Sikkim",
    isUnionTerritory: false,
    capital: "Gangtok",
    region: "North-East",
    destinations: [
      {
        id: "gangtok",
        name: "Gangtok & North Sikkim",
        state: "Sikkim",
        district: "East Sikkim",
        region: "North-East",
        nearestCityHub: "Pakyong Airport (PYG) / Bagdogra Airport (IXB)",
        coordinates: { lat: 27.3389, lng: 88.6065 },
        tagline: "First 100% Organic State, Mount Kanchenjunga vistas, and sacred alpine lakes",
        shortDescription: "Tibetan Buddhist gompas, pedestrianized MG Marg, and crystal-clear high altitude Tsomgo Lake.",
        detailedDescription: "Perched on a cloud-covered mountain ridge at 1,650 meters, Gangtok offers majestic front-row views of Mount Kanchenjunga. Recognized as India's first 100% organic and cleanest state, visitors explore the 16th Karmapa seat at Rumtek Monastery, stroll down the flower-lined pedestrian promenade of MG Marg, and ascend to the sacred high-altitude waters of Tsomgo Lake (12,310 ft).",
        categories: ["Hill Stations", "Pilgrimage & Sacred", "Lakes & Waterfalls", "Adventure & Treks"],
        bestTimeToVisit: {
          season: "March to May (Rhododendrons) & October to December (Clear Peaks)",
          peakMonths: ["April", "May", "October", "November"],
          weatherSummary: "Fresh Himalayan mountain air (10°C–20°C); snow-capped mountain views."
        },
        recommendedDuration: "3 to 4 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1300, midRangeInr: 3900, luxuryInr: 13500 },
        openingHours: "Rumtek Monastery: 06:00 AM – 06:00 PM; Tsomgo Lake requires Inner Line Permit",
        entryFee: { indianInr: 200, notes: "Permit and protected area fees for Tsomgo Lake / Nathu La." },
        officialSources: [
          { tourismBoardName: "Sikkim Tourism Official Portal", url: "https://sikkimtourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Harsh Suthar",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-tsomgo", destinationId: "gangtok", name: "Tsomgo (Changu) Sacred Alpine Lake", category: "Lakes & Waterfalls", distanceKm: 40, travelTimeMinutes: 90, whyVisit: "Sacred glacial lake at 12,310 ft reflecting surrounding snow peaks and prayer flags." }
    ],
    accommodations: [],
    activities: [],
    connectivity: []
  },

  // 8. UNION TERRITORY: ANDAMAN AND NICOBAR ISLANDS
  {
    stateName: "Andaman and Nicobar Islands",
    isUnionTerritory: true,
    capital: "Port Blair",
    region: "Islands",
    destinations: [
      {
        id: "andaman",
        name: "Andaman Islands (Havelock & Neil)",
        state: "Andaman and Nicobar Islands",
        district: "South Andaman",
        region: "Islands",
        nearestCityHub: "Veer Savarkar International Airport Port Blair (IXZ)",
        coordinates: { lat: 11.6234, lng: 92.7265 },
        tagline: "Pristine tropical islands, Asia's best beaches, and rich coral reefs",
        shortDescription: "Radhanagar Beach turquoise waters, Elephant Beach coral reefs, and historic Cellular Jail.",
        detailedDescription: "Floating in splendid isolation in the Bay of Bengal, the Andaman archipelago features dense tropical rainforests rimmed by blindingly white sand and vibrant coral gardens. Radhanagar Beach on Swaraj Dweep (Havelock) was voted the best beach in Asia by Time Magazine, while Port Blair's national memorial Cellular Jail preserves the heroic sacrifices of India's freedom fighters.",
        categories: ["Coastal & Beaches", "Adventure & Treks", "Heritage & Forts"],
        bestTimeToVisit: {
          season: "October to May",
          peakMonths: ["November", "December", "January", "February"],
          weatherSummary: "Warm tropical island sunshine (23°C–31°C) with calm turquoise sea ideal for diving."
        },
        recommendedDuration: "4 to 6 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1800, midRangeInr: 5500, luxuryInr: 19000 },
        openingHours: "Cellular Jail: 09:00 AM – 05:00 PM; Light & Sound Show: 06:00 PM & 07:15 PM; Beaches: 06:00 AM – 05:30 PM",
        entryFee: { indianInr: 30, notes: "Catamaran ferry from Port Blair to Havelock approx. ₹1,200–₹1,800." },
        officialSources: [
          { tourismBoardName: "Andaman Tourism (IP&T)", url: "https://www.andamantourism.gov.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Nabil Naidu",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-radhanagar", destinationId: "andaman", name: "Radhanagar Beach No. 7", category: "Coastal & Beaches", distanceKm: 12, travelTimeMinutes: 20, whyVisit: "Ranked among the top 10 beaches globally for its powdery white sand and emerald Arabian sunset." }
    ],
    accommodations: [],
    activities: [
      { id: "act-andaman-snorkel", destinationId: "andaman", name: "Elephant Beach Coral Reef Snorkeling", category: "Boating & Water Sports", duration: "3 hours", estimatedCostInr: 1500, bestTimeOfDay: "Morning", description: "Discover vibrant brain corals, clownfish, and sea turtles in clear shallow waters." }
    ],
    connectivity: []
  },

  // 9. UNION TERRITORY: PUDUCHERRY
  {
    stateName: "Puducherry",
    isUnionTerritory: true,
    capital: "Puducherry",
    region: "South",
    destinations: [
      {
        id: "pondicherry",
        name: "Puducherry (Pondicherry)",
        state: "Puducherry",
        district: "Puducherry",
        region: "South",
        nearestCityHub: "Puducherry Airport (PNY) / Chennai International Airport (MAA)",
        coordinates: { lat: 11.9416, lng: 79.8083 },
        tagline: "The French Riviera of the East, bohemian cafes, and Sri Aurobindo spiritual haven",
        shortDescription: "Mustard-yellow French colonial mansions, seaside Promenade, and universal township Auroville.",
        detailedDescription: "A tranquil coastal enclave that was under French rule until 1954, Puducherry preserves an enchanting dual identity. White Town enchants with tree-shaded boulevards, pastel villas with bougainvillea gates, and French bistros, while the nearby experimental township of Auroville centers around the golden sphere of the Matrimandir.",
        categories: ["Heritage & Forts", "Coastal & Beaches", "Pilgrimage & Sacred"],
        bestTimeToVisit: {
          season: "October to March",
          peakMonths: ["November", "December", "January"],
          weatherSummary: "Breezy and pleasant seaside weather (20°C–29°C)."
        },
        recommendedDuration: "2 Days",
        costIndex: "Moderate",
        estimatedBudgetPerDay: { backpackerInr: 1100, midRangeInr: 3400, luxuryInr: 12000 },
        openingHours: "Sri Aurobindo Ashram: 08:00 AM – 12:00 PM & 02:00 PM – 06:00 PM; Matrimandir Viewing: 09:00 AM – 04:00 PM",
        entryFee: { indianInr: 0, notes: "Ashram and Matrimandir viewpoint pass have free admission." },
        officialSources: [
          { tourismBoardName: "Puducherry Tourism Official Portal", url: "https://pondytourism.in" }
        ],
        image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        imageCredit: "Pexels / Tushar",
        unescoHeritage: false
      }
    ],
    nearbyAttractions: [
      { id: "attr-auroville", destinationId: "pondicherry", name: "Auroville Universal Township & Matrimandir", category: "Pilgrimage & Sacred", distanceKm: 12, travelTimeMinutes: 25, whyVisit: "Iconic golden geodesic dome designed as a place of silent concentration and human unity." }
    ],
    accommodations: [],
    activities: [
      { id: "act-pondy-cycle", destinationId: "pondicherry", name: "French Quarter Morning Vintage Bicycle Tour", category: "Sightseeing", duration: "2 hours", estimatedCostInr: 400, bestTimeOfDay: "Morning", description: "Pedal past colonial consular buildings, Goubert Market, and the rocky beach promenade." }
    ],
    connectivity: []
  }
];
