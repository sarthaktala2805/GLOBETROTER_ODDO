import { StateUTData } from "../types";

export const gujaratData: StateUTData = {
  stateName: "Gujarat",
  isUnionTerritory: false,
  capital: "Gandhinagar",
  region: "West",
  destinations: [
    {
      id: "ahmedabad",
      name: "Ahmedabad",
      state: "Gujarat",
      district: "Ahmedabad",
      region: "West",
      nearestCityHub: "Sardar Vallabhbhai Patel International Airport (AMD)",
      coordinates: { lat: 23.0225, lng: 72.5714 },
      tagline: "India's first UNESCO World Heritage City of wooden pols, stepwells, and peace legacies",
      shortDescription: "Historic pol architecture, Mahatma Gandhi's Sabarmati Ashram, and intricate subterranean stepwells.",
      detailedDescription: "Inscribed in 2017 as India's first UNESCO World Heritage City, Ahmedabad preserves over 600 traditional residential neighbourhoods known as pols, featuring intricately carved wooden bird-feeders (chabutras) and secret underground rainwater harvesting systems. It is also the historic cradle of the Indian freedom movement where Mahatma Gandhi established the riverside Sabarmati Ashram.",
      categories: ["Heritage & Forts", "UNESCO World Heritage", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Mild, comfortable daytime temperatures (18°C–28°C) and cool winter breezes."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3500,
        luxuryInr: 10000
      },
      openingHours: "Sabarmati Ashram: 08:30 AM – 06:30 PM (Free); Adalaj Stepwell: 08:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 0,
        notes: "Sabarmati Ashram and Sidi Saiyyed Mosque have free admission; Stepwells are free."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism Official Portal", url: "https://www.gujarattourism.com" },
        { tourismBoardName: "Ahmedabad World Heritage City Trust (AMC)", url: "https://ahmedabadcity.gov.in" }
      ],
      image: "https://images.pexels.com/photos/1109968/pexels-photo-1109968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sonika Agarwal",
      unescoHeritage: true
    },
    {
      id: "gandhinagar",
      name: "Gandhinagar",
      state: "Gujarat",
      district: "Gandhinagar",
      region: "West",
      nearestCityHub: "Ahmedabad (AMD) - 18 km",
      coordinates: { lat: 23.2156, lng: 72.6369 },
      tagline: "The green capital city of grand temples, dinosaur fossils, and Sabarmati riverside parks",
      shortDescription: "One of Asia's greenest capital cities featuring the monumental Akshardham complex and India's Jurassic fossil park.",
      detailedDescription: "Designed by H.K. Mewada and Prakash M. Apte, Gandhinagar serves as Gujarat's administrative capital, celebrated for extensive tree cover organized across 30 numbered sectors. Highlights include the magnificent sandstone Akshardham Temple complex with water-laser fountains and the Indroda Dinosaur and Fossil Park, recognized by the Geological Survey of India as the world's second-largest hatchery of dinosaur eggs.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Crisp sunny days with temperature around 20°C–28°C."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1000,
        midRangeInr: 3000,
        luxuryInr: 7500
      },
      openingHours: "Akshardham Temple: 09:30 AM – 07:30 PM (Closed Mondays); Indroda Park: 08:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 30,
        foreignInr: 100,
        notes: "Akshardham complex entry is free; exhibition and water show have separate nominal tickets."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Gandhinagar", url: "https://www.gujarattourism.com/central-zone/gandhinagar.html" },
        { tourismBoardName: "GEER Foundation Indroda Nature Park", url: "http://www.geerfoundation.gujarat.gov.in" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sayan Nath",
      unescoHeritage: false
    },
    {
      id: "vadodara",
      name: "Vadodara (Baroda)",
      state: "Gujarat",
      district: "Vadodara",
      region: "West",
      nearestCityHub: "Vadodara Airport (BDQ) / Vadodara Junction (BRC)",
      coordinates: { lat: 22.3072, lng: 73.1812 },
      tagline: "The cultural capital of Gujarat, Maratha royalty, and four-times-the-size-of-Buckingham-Palace",
      shortDescription: "Grand Gaekwad palaces, the opulent Laxmi Vilas estate, royal art galleries, and banyan avenues.",
      detailedDescription: "Revered as Sanskari Nagari (the City of Culture), Vadodara flourished under Maharaja Sayajirao Gaekwad III. The city's crown jewel is the Laxmi Vilas Palace, an Indo-Saracenic marvel four times the size of Buckingham Palace featuring Venetian mosaic floors, Belgian stained glass, and royal collections of Raja Ravi Varma paintings in the Maharaja Fateh Singh Museum.",
      categories: ["Palaces & Havens", "Heritage & Forts", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["October (Navratri)", "November", "December", "January"],
        weatherSummary: "Pleasant winters and legendary Navratri garba festival celebrations."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1300,
        midRangeInr: 3800,
        luxuryInr: 11000
      },
      openingHours: "Laxmi Vilas Palace: 09:30 AM – 05:00 PM (Closed Mondays); Sayaji Baug: 06:00 AM – 08:00 PM",
      entryFee: {
        indianInr: 250,
        foreignInr: 600,
        notes: "Includes audio guide for Laxmi Vilas Palace."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Vadodara", url: "https://www.gujarattourism.com/central-zone/vadodara.html" },
        { tourismBoardName: "Vadodara Municipal Corporation", url: "https://vmc.gov.in" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Rahul Pandit",
      unescoHeritage: false
    },
    {
      id: "kutch",
      name: "Rann of Kutch (Dhordo)",
      state: "Gujarat",
      district: "Kutch",
      region: "West",
      nearestCityHub: "Bhuj Airport (BHJ) / Bhuj Railway Station (80 km)",
      coordinates: { lat: 23.8344, lng: 69.8597 },
      tagline: "The Great White Salt Desert, full moon vistas, and vibrant artisan villages",
      shortDescription: "Endless crystalline white salt flats glistening under moonlight, Kutchi Rogan art, and desert camps.",
      detailedDescription: "The Great Rann of Kutch is one of the world's largest seasonal salt marshes, spanning over 7,500 square kilometers. During winter, receding seawater leaves a blinding layer of pure white salt crystals. Surrounding artisan hamlets like Nirona, Hodka, and Bhirandiyara are world capitals of traditional handicrafts including rare castor oil Rogan art, bell-making, and mirror embroidery.",
      categories: ["Offbeat & Hidden Gem", "Cultural & Tribal", "Lakes & Waterfalls"],
      bestTimeToVisit: {
        season: "November to February (Rann Utsav)",
        peakMonths: ["December", "January"],
        weatherSummary: "Pleasant days (20°C–26°C) turning sharply cold at night (6°C–12°C)."
      },
      recommendedDuration: "2 to 3 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1800,
        midRangeInr: 5500,
        luxuryInr: 16000
      },
      openingHours: "Salt Desert Viewing: 06:00 AM – 08:00 PM (Night permits required for border zone)",
      entryFee: {
        indianInr: 100,
        foreignInr: 100,
        notes: "Online permit from Gujarat Police portal required for Dhordo border zone."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Rann of Kutch", url: "https://www.gujarattourism.com/kutch.html" },
        { tourismBoardName: "District Administration Kutch (Bhuj)", url: "https://kutch.nic.in" }
      ],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / NiAksh Prit",
      unescoHeritage: false
    },
    {
      id: "bhuj",
      name: "Bhuj",
      state: "Gujarat",
      district: "Kutch",
      region: "West",
      nearestCityHub: "Bhuj Airport (BHJ) / Bhuj Railway Station (RWY)",
      coordinates: { lat: 23.242, lng: 69.6669 },
      tagline: "Heart of Kutch, Venetian-style palaces, and living textile artisan guilds",
      shortDescription: "Historic walled city featuring the Hall of Mirrors (Aina Mahal), Gothic Prag Mahal, and artisan bazars.",
      detailedDescription: "Founded in 1510 by Rao Hamirji, Bhuj is the cultural and geographical anchor of the Kutch district. Walk through the mirrored halls of the 18th-century Aina Mahal crafted by Ramsingh Malam, ascend the clock tower of the Gothic Prag Mahal, visit the royal cenotaphs at Chhatardi, and explore Bhujodi village where master weavers create award-winning Kutchi shawls.",
      categories: ["Heritage & Forts", "Cultural & Tribal", "Palaces & Havens"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Warm, sunny days and cool breezy desert nights."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3200,
        luxuryInr: 8000
      },
      openingHours: "Aina Mahal & Prag Mahal: 09:00 AM – 11:45 AM & 03:00 PM – 05:45 PM (Closed Thursdays)",
      entryFee: {
        indianInr: 50,
        foreignInr: 150,
        notes: "Nominal camera fee extra."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Bhuj", url: "https://www.gujarattourism.com/kutch/bhuj.html" },
        { tourismBoardName: "Kutch District Tourism Portal", url: "https://kutch.nic.in/tourism/" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ajay Sharda",
      unescoHeritage: false
    },
    {
      id: "mandvi",
      name: "Mandvi",
      state: "Gujarat",
      district: "Kutch",
      region: "West",
      nearestCityHub: "Bhuj (58 km via State Highway 47)",
      coordinates: { lat: 22.8339, lng: 69.3556 },
      tagline: "400-year-old wooden shipbuilding yards, pristine coastal beaches, and royal sea palaces",
      shortDescription: "A historic maritime port town famed for hand-built wooden dhow vessels and the Vijay Vilas beach palace.",
      detailedDescription: "Established in 1574 by the Rao of Kutch, Mandvi has a 400-year-old living tradition of handcrafted wooden shipbuilding along the banks of the Rukmavati River, where massive wooden cargo vessels bound for the Persian Gulf and East Africa are constructed entirely by hand. The coastline is graced by the red sandstone Vijay Vilas Palace with private beaches that served as royal summer retreats.",
      categories: ["Coastal & Beaches", "Heritage & Forts", "Palaces & Havens"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Breezy coastal weather with pleasant temperatures (22°C–28°C)."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1100,
        midRangeInr: 3400,
        luxuryInr: 9000
      },
      openingHours: "Vijay Vilas Palace: 09:00 AM – 06:00 PM; Windmill Beach: Open 24 Hours",
      entryFee: {
        indianInr: 70,
        foreignInr: 150,
        notes: "Beach access is free; palace museum has nominal admission."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Mandvi", url: "https://www.gujarattourism.com/kutch/mandvi.html" }
      ],
      image: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Asad Photo",
      unescoHeritage: false
    },
    {
      id: "dwarka",
      name: "Dwarka",
      state: "Gujarat",
      district: "Devbhumi Dwarka",
      region: "West",
      nearestCityHub: "Jamnagar Airport (JGA - 130 km) / Dwarka Railway Station (DWK)",
      coordinates: { lat: 22.2442, lng: 68.9685 },
      tagline: "One of the sacred Char Dham pilgrimage centers and Lord Krishna's ancient golden kingdom",
      shortDescription: "5-story 72-pillar Dwarkadhish Temple, holy Gomti Ghat where the river meets the Arabian Sea, and Bet Dwarka.",
      detailedDescription: "Dwarka is one of Hinduism's foremost sacred Char Dham sites and one of the seven Sapta Puri holy cities. The 2,200-year-old Dwarkadhish Temple (Jagat Mandir) features a 5-story sandstone spire supported by 72 carved limestone pillars, flying a sacred 52-yard triangular flag changed five times daily. Underwater archaeological explorations off Dwarka's coast have revealed submerged stone jetty walls and ancient Harappan anchor stones.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Coastal & Beaches"],
      bestTimeToVisit: {
        season: "September to March",
        peakMonths: ["October", "November", "December", "January (Janmashtami)"],
        weatherSummary: "Refreshing sea breezes with moderate humidity and pleasant coastal daytime temperatures."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1000,
        midRangeInr: 2800,
        luxuryInr: 7000
      },
      openingHours: "Dwarkadhish Temple: 06:30 AM – 01:00 PM & 05:00 PM – 09:30 PM",
      entryFee: {
        indianInr: 0,
        notes: "Temple darshan is free. Special puja and VIP queues managed by Dwarka Devasthanam Board."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Dwarka", url: "https://www.gujarattourism.com/saurashtra/devbhumi-dwarka/dwarka.html" },
        { tourismBoardName: "Dwarkadhish Devasthanam Official", url: "https://dwarkadhish.org" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Subbu Rayan",
      unescoHeritage: false
    },
    {
      id: "shivrajpur",
      name: "Shivrajpur Beach",
      state: "Gujarat",
      district: "Devbhumi Dwarka",
      region: "West",
      nearestCityHub: "Dwarka (12 km via NH51)",
      coordinates: { lat: 22.3328, lng: 68.9515 },
      tagline: "International Blue Flag certified white-sand beach with pristine turquoise Arabian Sea waters",
      shortDescription: "Pristine certified Blue Flag coastal paradise offering scuba diving, coral reefs, and water sports.",
      detailedDescription: "Shivrajpur Beach is one of only a handful of beaches in India awarded the prestigious international Blue Flag certification by the Foundation for Environmental Education (Denmark) for impeccable water cleanliness, eco-friendly infrastructure, and swimmer safety. Visitors can enjoy calm turquoise surf, dolphin sightings, scuba diving around offshore marine life, and coastal cycling trails.",
      categories: ["Coastal & Beaches", "Adventure & Treks", "Offbeat & Hidden Gem"],
      bestTimeToVisit: {
        season: "October to April",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Sunny, clear waters with low tides ideal for beach walks and diving."
      },
      recommendedDuration: "1 Day",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2500,
        luxuryInr: 6000
      },
      openingHours: "07:00 AM – 07:00 PM Daily",
      entryFee: {
        indianInr: 30,
        foreignInr: 30,
        notes: "Nominal facility upkeep ticket by Gujarat Ecology Commission. Scuba diving approx ₹2,500."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Shivrajpur Blue Flag Beach", url: "https://www.gujarattourism.com" }
      ],
      image: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Asad Photo",
      unescoHeritage: false
    },
    {
      id: "somnath",
      name: "Somnath",
      state: "Gujarat",
      district: "Gir Somnath",
      region: "West",
      nearestCityHub: "Veraval Railway Station (VRL - 6 km) / Diu Airport (85 km)",
      coordinates: { lat: 20.888, lng: 70.4012 },
      tagline: "The Eternal Shrine: First of the Twelve sacred Shiva Jyotirlingas on the Arabian ocean rim",
      shortDescription: "Majestic Chalukyan-style temple rising on the oceanfront where Triveni Sangam sacred rivers converge.",
      detailedDescription: "Somnath is revered as the first (Adya) of the twelve sacred Jyotirlinga shrines of Lord Shiva. Located at Prabhas Patan, the temple has survived numerous destructions and reconstructions throughout millenniums, culminating in the grand honey-colored Kailash Mahameru Prasad temple reconstructed in 1951 spearheaded by Sardar Vallabhbhai Patel. The famous Ban Stambha (Arrow Pillar) marks an uninterrupted straight sea line from Somnath to Antarctica.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Coastal & Beaches"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February (Maha Shivratri)"],
        weatherSummary: "Pleasant coastal temperatures with breezy evenings and ocean spray."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2600,
        luxuryInr: 7000
      },
      openingHours: "06:00 AM – 10:00 PM; Sound & Light Show: 08:00 PM – 09:00 PM",
      entryFee: {
        indianInr: 0,
        notes: "Temple darshan is free. Sound & Light Show: ₹30 adults, ₹15 children."
      },
      officialSources: [
        { tourismBoardName: "Shree Somnath Trust Official Portal", url: "https://somnath.org" },
        { tourismBoardName: "Gujarat Tourism - Somnath", url: "https://www.gujarattourism.com/saurashtra/gir-somnath/somnath.html" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sayan Nath",
      unescoHeritage: false
    },
    {
      id: "junagadh",
      name: "Junagadh",
      state: "Gujarat",
      district: "Junagadh",
      region: "West",
      nearestCityHub: "Rajkot Airport (100 km) / Junagadh Junction (JND)",
      coordinates: { lat: 21.5222, lng: 70.4579 },
      tagline: "The ancient fortified city of Ashokan rock edicts, gothic mausoleums, and Girnar ropeway",
      shortDescription: "Ancient Uparkot Fort, the fairytale Gothic-Islamic Mahabat Maqbara, and the sacred 9,999-step Girnar mountain.",
      detailedDescription: "Junagadh, meaning 'Old Fort', is a treasure trove of ancient Indian history. Features include the 2,300-year-old Uparkot Citadel with subterranean Buddhist caves and massive canons (Neelam and Manek), Emperor Ashoka's rock edicts in Brahmi script dating to 250 BC, and the Mahabat Maqbara with spiral staircase minarets. Mount Girnar, soaring 1,031m, is now accessible via Asia's highest ropeway.",
      categories: ["Heritage & Forts", "Pilgrimage & Sacred", "Adventure & Treks", "Caves & Rock-Cut"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February (Bhavnath Fair)"],
        weatherSummary: "Cool, crisp mountain breezes and sunny clear skies."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1100,
        midRangeInr: 3000,
        luxuryInr: 7500
      },
      openingHours: "Uparkot Fort: 09:00 AM – 06:00 PM; Girnar Ropeway: 07:00 AM – 05:00 PM",
      entryFee: {
        indianInr: 50,
        foreignInr: 300,
        notes: "Uparkot Fort ASI entry ₹50. Girnar Ropeway round-trip ticket approx ₹700."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Junagadh", url: "https://www.gujarattourism.com/saurashtra/junagadh.html" },
        { tourismBoardName: "Usha Breco Girnar Ropeway Official", url: "https://udankhatola.com" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ajay Sharda",
      unescoHeritage: false
    },
    {
      id: "gir",
      name: "Gir National Park",
      state: "Gujarat",
      district: "Junagadh / Gir Somnath",
      region: "West",
      nearestCityHub: "Keshod Airport (40 km) / Junagadh Railway Station (65 km)",
      coordinates: { lat: 21.1243, lng: 70.8242 },
      tagline: "The only natural sanctuary on planet Earth for wild Asiatic Lions",
      shortDescription: "Dry deciduous teak forests protecting over 670 Asiatic lions, leopards, and marsh crocodiles.",
      detailedDescription: "Spanning 1,412 square kilometers in the Saurashtra peninsula, Gir is the sole remaining wild habitat of the majestic Asiatic Lion (Panthera leo persica). Rescued from the brink of extinction by the Nawab of Junagadh and modern conservationists, open-top 4x4 Gypsy safaris offer rare opportunities to observe lion prides, spotted deer, and rare raptors in their natural dry teak savanna.",
      categories: ["Wildlife & Sanctuaries", "Adventure & Treks"],
      bestTimeToVisit: {
        season: "December to April",
        peakMonths: ["January", "February", "March"],
        weatherSummary: "Dry, clear visibility. Peak wildlife sightings around waterholes in March-April."
      },
      recommendedDuration: "2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 2000,
        midRangeInr: 6000,
        luxuryInr: 15000
      },
      openingHours: "Safari Timings: Morning 06:00 AM – 09:00 AM; Afternoon 03:00 PM – 06:00 PM (Closed Jun 16 – Oct 15 monsoon)",
      entryFee: {
        indianInr: 800,
        foreignInr: 5600,
        notes: "Permit cost per vehicle + Gypsy rental and guide fees booked via official forest portal."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Forest Department - Gir National Park", url: "https://girlion.gujarat.gov.in" },
        { tourismBoardName: "Gujarat Tourism - Gir", url: "https://www.gujarattourism.com/saurashtra/junagadh/gir-national-park.html" }
      ],
      image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Pixabay",
      unescoHeritage: false
    },
    {
      id: "jamnagar",
      name: "Jamnagar",
      state: "Gujarat",
      district: "Jamnagar",
      region: "West",
      nearestCityHub: "Jamnagar Airport (JGA) / Jamnagar Railway Station (JAM)",
      coordinates: { lat: 22.4707, lng: 70.0577 },
      tagline: "Jewel of Kathiawar, Marine National Park coral islands, and royal lake palaces",
      shortDescription: "India's first Marine National Park, Lakhota Lake Palace, and the world-famous Bandhani tie-dye bazaars.",
      detailedDescription: "Founded in 1540 as the capital of Nawanagar State by Jam Rawal, Jamnagar blends princely Rajput architecture with marine biodiversity. Highlights include the Lakhota Palace situated in the middle of Lakhota Lake, the Bala Hanuman Temple (holding a Guinness World Record for continuous Ram Dhun chanting since 1964), and India's first Marine National Park in the Gulf of Kutch containing 42 islands with exposed coral reefs during low tide.",
      categories: ["Heritage & Forts", "Wildlife & Sanctuaries", "Coastal & Beaches", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February (Flamingos at Khijadiya)"],
        weatherSummary: "Pleasant winter weather ideal for birdwatching and coastal island walks."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1000,
        midRangeInr: 2900,
        luxuryInr: 7500
      },
      openingHours: "Lakhota Museum: 10:30 AM – 02:00 PM & 02:30 PM – 05:30 PM (Closed Wednesdays)",
      entryFee: {
        indianInr: 20,
        foreignInr: 100,
        notes: "Marine National Park boat permits issued by Forest Department at Bedi Port."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Jamnagar", url: "https://www.gujarattourism.com/saurashtra/jamnagar.html" },
        { tourismBoardName: "Khijadiya Bird Sanctuary Portal", url: "https://forests.gujarat.gov.in" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ajay Sharda",
      unescoHeritage: false
    },
    {
      id: "dholavira",
      name: "Dholavira",
      state: "Gujarat",
      district: "Kutch",
      region: "West",
      nearestCityHub: "Bhuj (215 km via Road over White Rann) / Rapar (90 km)",
      coordinates: { lat: 23.8864, lng: 70.2173 },
      tagline: "UNESCO World Heritage 4,500-year-old Indus Valley civilization metropolis and stone reservoirs",
      shortDescription: "One of the most remarkable Harappan cities with sophisticated water reservoirs and urban planning.",
      detailedDescription: "Inscribed as a UNESCO World Heritage Site in 2021, Dholavira is located on Khadir Bet island surrounded by the Great Rann. Thriving between 2500 BCE and 1900 BCE, this Indus Valley metropolis is world-renowned for its monumental stepped stone rainwater harvesting reservoirs, stone fortifications, stratified citadel-middle-lower towns, and the famous ten-symbol Harappan signboard.",
      categories: ["UNESCO World Heritage", "Heritage & Forts", "Offbeat & Hidden Gem"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Dry, clear desert skies with cool temperatures (15°C–25°C)."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3200,
        luxuryInr: 7000
      },
      openingHours: "Excavation Site & ASI Museum: Sunrise to Sunset (06:00 AM – 06:00 PM)",
      entryFee: {
        indianInr: 25,
        foreignInr: 300,
        notes: "Official ASI ticket. Free admission for children under 15."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India (ASI) - Dholavira", url: "https://asi.nic.in" },
        { tourismBoardName: "Gujarat Tourism - Dholavira UNESCO Site", url: "https://www.gujarattourism.com/kutch/dholavira.html" }
      ],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / NiAksh Prit",
      unescoHeritage: true
    },
    {
      id: "lothal",
      name: "Lothal",
      state: "Gujarat",
      district: "Ahmedabad",
      region: "West",
      nearestCityHub: "Ahmedabad (78 km via Dholka-Bhurkhi Highway)",
      coordinates: { lat: 22.524, lng: 72.2494 },
      tagline: "World's oldest known tidal dockyard and Indus Valley civilization maritime trading port",
      shortDescription: "4,400-year-old Harappan maritime port featuring an engineered brick dockyard and bead-making factory.",
      detailedDescription: "Excavated between 1955 and 1960 by the ASI, Lothal is celebrated as the world's earliest known engineered dockyard connected to an ancient course of the Sabarmati River. Trade was conducted with ancient Sumer and Egypt in carnelian beads, copper, and ivory. The site features an acropolis, residential quarters, sophisticated drainage channels, and an on-site ASI Archaeological Museum.",
      categories: ["Heritage & Forts", "Cultural & Tribal", "Offbeat & Hidden Gem"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Pleasant winter weather; can be hot during summer months."
      },
      recommendedDuration: "Half Day (Day trip from Ahmedabad)",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 800,
        midRangeInr: 2200,
        luxuryInr: 5000
      },
      openingHours: "10:00 AM – 05:00 PM (Closed Fridays)",
      entryFee: {
        indianInr: 25,
        foreignInr: 300,
        notes: "ASI Archaeological Museum ticket. Children under 15 free."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India - Lothal", url: "https://asi.nic.in" },
        { tourismBoardName: "Gujarat Tourism - Lothal Harappan Port", url: "https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html" }
      ],
      image: "https://images.pexels.com/photos/1109968/pexels-photo-1109968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sonika Agarwal",
      unescoHeritage: false
    },
    {
      id: "patan",
      name: "Patan",
      state: "Gujarat",
      district: "Patan",
      region: "West",
      nearestCityHub: "Ahmedabad (125 km via Mehsana Highway)",
      coordinates: { lat: 23.8567, lng: 72.1328 },
      tagline: "UNESCO World Heritage Rani ki Vav subterranean stepwell and royal Patola silk weaving",
      shortDescription: "The Queen's Stepwell with over 500 high-relief sculptures and double-ikat Patola looms.",
      detailedDescription: "Built in 1063 CE by Queen Udayamati in memory of King Bhimdev I of the Solanki dynasty, Rani ki Vav is an upside-down subterranean temple celebrating the sanctity of water. Inscribed as a UNESCO World Heritage Site in 2014, its seven levels of stairs house over 500 principal sculptures depicting the Dasavatara of Lord Vishnu. Patan is also famous for centuries-old double-ikat Patola silk weaving, where a single saree requires six months of precision craftsmanship.",
      categories: ["UNESCO World Heritage", "Heritage & Forts", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Pleasant sunny weather ideal for exploring the open-air stepped monument."
      },
      recommendedDuration: "1 Day",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1000,
        midRangeInr: 2800,
        luxuryInr: 6500
      },
      openingHours: "08:00 AM – 06:00 PM Daily",
      entryFee: {
        indianInr: 40,
        foreignInr: 600,
        notes: "Official ASI ticket. Free entry for children under 15."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India - Rani ki Vav", url: "https://asi.nic.in" },
        { tourismBoardName: "Gujarat Tourism - Patan", url: "https://www.gujarattourism.com/north-zone/patan.html" }
      ],
      image: "https://images.pexels.com/photos/1109968/pexels-photo-1109968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sonika Agarwal",
      unescoHeritage: true
    },
    {
      id: "modhera",
      name: "Modhera",
      state: "Gujarat",
      district: "Mehsana",
      region: "West",
      nearestCityHub: "Ahmedabad (98 km) / Mehsana (25 km)",
      coordinates: { lat: 23.5836, lng: 72.1332 },
      tagline: "The 11th-century Solanki Sun Temple, Surya Kund stepwell, and India's first 24x7 solar village",
      shortDescription: "Exquisite 1026 CE Sun Temple designed so equinox sun rays illuminate the sanctum, beside a stepped reservoir with 108 shrines.",
      detailedDescription: "Constructed in 1026 CE along the Pushpavati River by King Bhimdev I of the Solanki dynasty, the Modhera Sun Temple is a pinnacle of Maru-Gurjara temple architecture. It consists of the Gudhamandapa (shrine hall), the Sabhamandapa (assembly hall with 52 intricately carved pillars depicting episodes from Ramayana and Mahabharata), and the rectangular Surya Kund stepwell with 108 miniature shrines. Modhera is also recognized as India's first round-the-clock solar-powered heritage village.",
      categories: ["Heritage & Forts", "Pilgrimage & Sacred", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March (Uttarardh Dance Festival in January)",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Sunny, pleasant dry days; evenings are cool and breezy."
      },
      recommendedDuration: "Half Day (Often combined with Patan)",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2500,
        luxuryInr: 6000
      },
      openingHours: "07:00 AM – 06:00 PM; Light & Sound Show: 07:00 PM – 07:45 PM",
      entryFee: {
        indianInr: 25,
        foreignInr: 300,
        notes: "ASI entrance ticket. Light & Sound show has separate nominal tickets."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India - Modhera Sun Temple", url: "https://asi.nic.in" },
        { tourismBoardName: "Gujarat Tourism - Modhera", url: "https://www.gujarattourism.com/north-zone/mehsana/modhera.html" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sayan Nath",
      unescoHeritage: false
    },
    {
      id: "champaner-pavagadh",
      name: "Champaner-Pavagadh",
      state: "Gujarat",
      district: "Panchmahal",
      region: "West",
      nearestCityHub: "Vadodara (47 km via Halol Highway)",
      coordinates: { lat: 22.4833, lng: 73.5333 },
      tagline: "UNESCO World Heritage Archaeological Park of Sultanate citadels and holy Kalika Mata hill temple",
      shortDescription: "An unexcavated 16th-century pre-Mughal Islamic capital and prehistoric hill fortress.",
      detailedDescription: "Inscribed as a UNESCO World Heritage Site in 2004, Champaner-Pavagadh is the only complete and unchanged pre-Mughal Islamic city in India. Built by Sultan Mahmud Begada, the archaeological park includes fortified gates, palaces, stepwells (Helical Vav), and the Jama Masjid with 172 stone pillars and minarets. Rising behind the ruins is the 800-meter Pavagadh volcanic peak crowned by the Kalika Mata Shaktipeeth temple, accessible by ropeway.",
      categories: ["UNESCO World Heritage", "Heritage & Forts", "Pilgrimage & Sacred", "Adventure & Treks"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Pleasant days; lush green foliage during and immediately after monsoon."
      },
      recommendedDuration: "1 Day",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 950,
        midRangeInr: 2600,
        luxuryInr: 6500
      },
      openingHours: "Monument Complex: 08:30 AM – 05:30 PM; Pavagadh Ropeway: 06:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 40,
        foreignInr: 600,
        notes: "ASI ticket covers all monuments. Pavagadh ropeway round-trip approx ₹170."
      },
      officialSources: [
        { tourismBoardName: "Archaeological Survey of India - Champaner", url: "https://asi.nic.in" },
        { tourismBoardName: "Gujarat Tourism - Champaner Pavagadh", url: "https://www.gujarattourism.com/central-zone/panchmahal/champaner.html" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Ajay Sharda",
      unescoHeritage: true
    },
    {
      id: "vadnagar",
      name: "Vadnagar",
      state: "Gujarat",
      district: "Mehsana",
      region: "West",
      nearestCityHub: "Mehsana (35 km) / Ahmedabad (105 km)",
      coordinates: { lat: 23.784, lng: 72.6375 },
      tagline: "Ancient 2,500-year-old continuous settlement, 12th-century Kirti Toran arches, and Buddhist monasteries",
      shortDescription: "Archaeological marvel with ancient red sandstone torans, Hatkeshwar Mahadev, and excavated Buddhist stupas.",
      detailedDescription: "Mentioned in the Mahabharata and visited by the Chinese Buddhist traveler Xuanzang in the 7th century, Vadnagar is an unbroken 2,500-year-old inhabited historical town. The town's iconic emblem is the pair of freestanding 12th-century Solanki Kirti Torans standing 40 feet high. Recent ASI excavations have revealed a massive Buddhist monastery complex, fortified ramparts, and Roman-era amphorae artifacts.",
      categories: ["Heritage & Forts", "Cultural & Tribal", "Offbeat & Hidden Gem"],
      bestTimeToVisit: {
        season: "October to March (Tana-Riri Music Festival in November)",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Mild sunny days, cool evenings with light breezes."
      },
      recommendedDuration: "1 Day",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 850,
        midRangeInr: 2200,
        luxuryInr: 5500
      },
      openingHours: "Kirti Torans & Sharmistha Lake: Open Sunrise to Sunset; Hatkeshwar Temple: 06:00 AM – 08:30 PM",
      entryFee: {
        indianInr: 0,
        notes: "Open public heritage sites and active temples; no entry fees."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Vadnagar", url: "https://www.gujarattourism.com/north-zone/mehsana/vadnagar.html" },
        { tourismBoardName: "Archaeological Survey of India Excavation Branch", url: "https://asi.nic.in" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sayan Nath",
      unescoHeritage: false
    },
    {
      id: "palitana",
      name: "Palitana",
      state: "Gujarat",
      district: "Bhavnagar",
      region: "West",
      nearestCityHub: "Bhavnagar Airport (50 km) / Palitana Railway Station (PIT)",
      coordinates: { lat: 21.5235, lng: 71.8267 },
      tagline: "The City of Temples: 863 sacred marble Jain temples atop Mount Shatrunjaya",
      shortDescription: "World's only mountain with over 800 consecrated marble temples, and the world's first legally vegetarian city.",
      detailedDescription: "Palitana is the holiest pilgrimage site (Tirtha) for the Svetambara Jain tradition. Mount Shatrunjaya features a breathtaking sacred city of 863 intricately carved marble shrines built over nine centuries from the 11th century onwards, dedicated to Lord Adinath. Ascending the 3,500 stone steps from dawn reveals shimmering marble spires gleaming in the morning sun. Palitana is legally the world's first 100% vegetarian city where meat and animal slaughter are prohibited by law.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts", "Adventure & Treks"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Climbing is best done in early morning (06:00 AM – 10:00 AM) when the weather is brisk and pleasant."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 950,
        midRangeInr: 2500,
        luxuryInr: 6000
      },
      openingHours: "Shatrunjaya Hill Climb: 05:30 AM – 06:00 PM (No staying allowed on mountain after sunset)",
      entryFee: {
        indianInr: 0,
        notes: "Free entry. Doli (palanquin) services available for elderly climbers (approx ₹2,000–₹3,500 round-trip)."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Palitana", url: "https://www.gujarattourism.com/saurashtra/bhavnagar/palitana.html" },
        { tourismBoardName: "Anandji Kalyanji Trust (Shatrunjaya Management)", url: "https://anandjikalyanjitrust.org" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Sayan Nath",
      unescoHeritage: false
    },
    {
      id: "saputara",
      name: "Saputara",
      state: "Gujarat",
      district: "Dang",
      region: "West",
      nearestCityHub: "Surat Airport (160 km) / Nashik (80 km)",
      coordinates: { lat: 20.5756, lng: 73.7497 },
      tagline: "The Abode of Serpents: Gujarat's only hill station in the lush Sahyadri Western Ghats",
      shortDescription: "Misty pine and teak hills, emerald Saputara Lake, Gira Waterfalls, tribal handicraft museums, and ropeway.",
      detailedDescription: "Perched at an altitude of 1,000 meters in the Dang forest region of the Sahyadri ranges, Saputara is Gujarat's premier hill station. Surrounded by dense bamboo and teak forests, it is named after the snake deity worshipped by local Warli and Bhil tribal communities. Key attractions include boating on Saputara Lake, the cable car ropeway to Sunset Point, the Artist Village, and the cascading Gira Waterfalls.",
      categories: ["Hill Stations", "Lakes & Waterfalls", "Adventure & Treks", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "July to March",
        peakMonths: ["August", "September (Lush Monsoon)", "December", "January (Crisp Winter)"],
        weatherSummary: "Pleasant year-round; monsoon brings cascading mist and waterfalls, while winter is chilly."
      },
      recommendedDuration: "2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 1200,
        midRangeInr: 3400,
        luxuryInr: 8500
      },
      openingHours: "Saputara Ropeway: 09:00 AM – 06:00 PM; Tribal Museum: 10:00 AM – 05:00 PM",
      entryFee: {
        indianInr: 10,
        foreignInr: 50,
        notes: "Museum entry ₹10. Cable car ropeway approx ₹80 round trip."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Saputara Hill Station", url: "https://www.gujarattourism.com/south-zone/dang/saputara.html" }
      ],
      image: "https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Harsh Chikhalia",
      unescoHeritage: false
    },
    {
      id: "polo-forest",
      name: "Polo Forest (Vijaynagar)",
      state: "Gujarat",
      district: "Sabarkantha",
      region: "West",
      nearestCityHub: "Ahmedabad (150 km) / Himatnagar (70 km)",
      coordinates: { lat: 24.0042, lng: 73.3086 },
      tagline: "Ancient 15th-century ruined stone temples hidden inside dense Aravalli deciduous forests",
      shortDescription: "Pristine forest retreat where the Harnav River winds past ancient Jain and Hindu stone temple ruins.",
      detailedDescription: "Nestled in the foothills of the Aravalli range along the pristine Harnav River, Polo Forest was an ancient gateway city (Pol) founded in the 10th century by the Parihar kings of Idar. Concealed within dense forest canopy are exquisitely carved 15th-century Jain and Shiva temples, stepped stepwells, and ancient viharas. Today it is a celebrated ecotourism hotspot for hiking, birdwatching, and riverside camping.",
      categories: ["Heritage & Forts", "Adventure & Treks", "Offbeat & Hidden Gem", "Lakes & Waterfalls"],
      bestTimeToVisit: {
        season: "August to February",
        peakMonths: ["September", "October (Post-monsoon greenery)", "November", "December"],
        weatherSummary: "Lush green forests and flowing rivers after monsoon; pleasant dry winter weather."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2800,
        luxuryInr: 7000
      },
      openingHours: "Forest Gate: 07:00 AM – 06:00 PM (Camping permits handled by Forest Department)",
      entryFee: {
        indianInr: 0,
        notes: "Forest entry is free. Ecotourism tented camps and guided nature treks available via Gujarat Tourism."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Polo Forest Ecotourism", url: "https://www.gujarattourism.com/north-zone/sabarkantha/polo-monuments-and-vijaynagar-forest.html" },
        { tourismBoardName: "Gujarat Forest Department", url: "https://forests.gujarat.gov.in" }
      ],
      image: "https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Harsh Chikhalia",
      unescoHeritage: false
    },
    {
      id: "velavadar",
      name: "Blackbuck National Park (Velavadar)",
      state: "Gujarat",
      district: "Bhavnagar",
      region: "West",
      nearestCityHub: "Bhavnagar (55 km via Vallabhipur Road) / Ahmedabad (145 km)",
      coordinates: { lat: 21.9406, lng: 72.0305 },
      tagline: "Rolling golden savannah grasslands protecting thousands of leaping Blackbucks and Indian Wolves",
      shortDescription: "Unique semi-arid grassland sanctuary famous for blackbuck antelopes, strip-necked wolves, and rare harrier roosts.",
      detailedDescription: "Encompassing 34 square kilometers of pristine Bhal savannah grasslands, Velavadar Blackbuck National Park was historically the private hunting preserve of the Maharaja of Bhavnagar. Today it hosts over 3,000 blackbucks (celebrated for their corkscrew spiral horns and spectacular leaps), the endangered Indian Grey Wolf, striped hyenas, and one of the world's largest winter roosts of Montagu's and Pallid harriers.",
      categories: ["Wildlife & Sanctuaries", "Offbeat & Hidden Gem"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Warm sunny days and cool breezy mornings ideal for grassland game drives."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1500,
        midRangeInr: 4500,
        luxuryInr: 12000
      },
      openingHours: "Safari Timings: Morning 06:30 AM – 09:30 AM; Afternoon 03:00 PM – 06:00 PM (Closed Jun 16 – Oct 15)",
      entryFee: {
        indianInr: 50,
        foreignInr: 400,
        notes: "Vehicle permit fee extra (approx ₹100 per car); guide charges compulsory."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Forest Department - Velavadar", url: "https://forests.gujarat.gov.in" },
        { tourismBoardName: "Gujarat Tourism - Blackbuck National Park", url: "https://www.gujarattourism.com/saurashtra/bhavnagar/blackbuck-national-park.html" }
      ],
      image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Pixabay",
      unescoHeritage: false
    },
    {
      id: "little-rann-of-kutch",
      name: "Little Rann of Kutch (Dasada)",
      state: "Gujarat",
      district: "Surendranagar",
      region: "West",
      nearestCityHub: "Ahmedabad (90 km via Viramgam Highway)",
      coordinates: { lat: 23.2392, lng: 71.7456 },
      tagline: "Wild Ass Sanctuary: Vast cracked salt marsh home to the endangered Asiatic Wild Ass (Khur)",
      shortDescription: "Endless cracked mud flats, traditional Agariya salt-workers, Asiatic wild ass herds, and pink flamingos.",
      detailedDescription: "Spanning 4,953 square kilometers, the Little Rann of Kutch is a vast salt-encrusted plain designated as the Wild Ass Sanctuary. It is the last refuge on Earth for the Indian Wild Ass (Equus hemionus khur), known locally as Khur. In winter, shallow lakes fill with thousands of Greater and Lesser Flamingos, cranes, and desert foxes, while indigenous Agariya families harvest crystal sea salt using traditional solar evaporation.",
      categories: ["Wildlife & Sanctuaries", "Offbeat & Hidden Gem", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January", "February"],
        weatherSummary: "Crisp dry desert air; clear night skies and dramatic daytime mirages."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1400,
        midRangeInr: 4200,
        luxuryInr: 11000
      },
      openingHours: "Safari Timings: Morning 06:00 AM – 09:30 AM; Afternoon 03:00 PM – 06:30 PM",
      entryFee: {
        indianInr: 250,
        foreignInr: 1200,
        notes: "Sanctuary permit per vehicle booked at Bajana or Dhrangadhra forest checkposts."
      },
      officialSources: [
        { tourismBoardName: "Gujarat Tourism - Wild Ass Sanctuary Little Rann", url: "https://www.gujarattourism.com/north-zone/surendranagar/wild-ass-sanctuary.html" },
        { tourismBoardName: "Forest Department Wild Ass Sanctuary", url: "https://forests.gujarat.gov.in" }
      ],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / NiAksh Prit",
      unescoHeritage: false
    },
    {
      id: "ambaji",
      name: "Ambaji",
      state: "Gujarat",
      district: "Banaskantha",
      region: "West",
      nearestCityHub: "Abu Road Railway Station (ABR - 20 km) / Ahmedabad (180 km)",
      coordinates: { lat: 24.3333, lng: 72.85 },
      tagline: "Supreme Shaktipeeth pilgrimage: Sacred Gabbar Hill and the iconic Viso Yantra",
      shortDescription: "Major Hindu Shaktipeeth where the Heart of Goddess Sati fell, featuring a golden marble temple without an idol.",
      detailedDescription: "Ambaji is one of the 51 revered Shaktipeeth shrines of Goddess Durga, where the Heart of Goddess Sati fell according to legend. The white marble temple complex has no idol; instead, the sacred gold-plated Viso Yantra is worshipped with intricate floral shringars. 4 km away rises the steep Gabbar Hill, where a holy flame burns eternally atop 999 stone stairs, now accessible via modern ropeway.",
      categories: ["Pilgrimage & Sacred", "Heritage & Forts"],
      bestTimeToVisit: {
        season: "September to March (Bhadrapad Purnima Fair in September)",
        peakMonths: ["October (Navratri)", "November", "December", "January"],
        weatherSummary: "Cool, pleasant hilly terrain in the Aravalli range."
      },
      recommendedDuration: "1 to 2 Days",
      costIndex: "Value",
      estimatedBudgetPerDay: {
        backpackerInr: 900,
        midRangeInr: 2400,
        luxuryInr: 6000
      },
      openingHours: "Ambaji Temple: 07:00 AM – 11:30 AM, 12:30 PM – 04:30 PM, 06:30 PM – 09:00 PM; Gabbar Ropeway: 07:00 AM – 06:00 PM",
      entryFee: {
        indianInr: 0,
        notes: "Temple entry is free. Gabbar Hill ropeway approx ₹125 round trip."
      },
      officialSources: [
        { tourismBoardName: "Shree Arasuri Ambaji Mata Devasthan Trust", url: "https://ambajitemple.in" },
        { tourismBoardName: "Gujarat Tourism - Ambaji", url: "https://www.gujarattourism.com/north-zone/banaskantha/ambaji.html" }
      ],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Subbu Rayan",
      unescoHeritage: false
    },
    {
      id: "statue-of-unity",
      name: "Statue of Unity (Ekta Nagar)",
      state: "Gujarat",
      district: "Narmada",
      region: "West",
      nearestCityHub: "Vadodara (90 km) / Ekta Nagar Railway Station (EKNR - 5 km)",
      coordinates: { lat: 21.838, lng: 73.7191 },
      tagline: "World's tallest statue (182m) honoring the Iron Man of India overlooking the Narmada River",
      shortDescription: "Colossal 182-meter bronze-clad monument to Sardar Vallabhbhai Patel with high-speed viewing gallery at 153m.",
      detailedDescription: "Soaring 182 meters high on the Sadhu Bet island in the Narmada River facing the Sardar Sarovar Dam, the Statue of Unity is the tallest statue in the world. Dedicated to Sardar Vallabhbhai Patel, the visionary who united 562 princely states into the Republic of India, the monument features high-speed elevators rising to a chest-height viewing gallery (153m), the Valley of Flowers, a 375-acre Jungle Safari, and the evening Sardar Sarovar laser light and sound show.",
      categories: ["Heritage & Forts", "Lakes & Waterfalls", "Cultural & Tribal"],
      bestTimeToVisit: {
        season: "October to March",
        peakMonths: ["November", "December", "January"],
        weatherSummary: "Pleasant days and cool evenings by the scenic Narmada riverside."
      },
      recommendedDuration: "2 Days",
      costIndex: "Moderate",
      estimatedBudgetPerDay: {
        backpackerInr: 1500,
        midRangeInr: 4500,
        luxuryInr: 12000
      },
      openingHours: "08:00 AM – 06:00 PM (Closed Mondays for maintenance); Laser Show: 07:00 PM Daily",
      entryFee: {
        indianInr: 150,
        foreignInr: 1500,
        notes: "Basic entry ₹150 (adults); Viewing Gallery ticket ₹380 includes 153m elevator ride."
      },
      officialSources: [
        { tourismBoardName: "Statue of Unity Official Ticketing Portal", url: "https://www.soutickets.in" },
        { tourismBoardName: "Gujarat Tourism - Statue of Unity", url: "https://www.gujarattourism.com/central-zone/narmada/statue-of-unity.html" }
      ],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      imageCredit: "Pexels / Rahul Pandit",
      unescoHeritage: false
    }
  ],
  nearbyAttractions: [
    {
      id: "near-ahm-adalaj",
      destinationId: "ahmedabad",
      name: "Adalaj Stepwell (Rudabai Stepwell)",
      category: "Heritage & Stepwell",
      distanceKm: 18,
      travelTimeMinutes: 30,
      whyVisit: "Stunning 5-story 15th-century subterranean stepped water reservoir featuring Indo-Islamic stone carvings.",
      coordinates: { lat: 23.1667, lng: 72.5806 }
    },
    {
      id: "near-ahm-akshardham",
      destinationId: "ahmedabad",
      name: "Akshardham Temple Complex Gandhinagar",
      category: "Pilgrimage & Sacred",
      distanceKm: 28,
      travelTimeMinutes: 40,
      whyVisit: "Grand pink sandstone temple set amidst 23 acres of gardens with evening water-laser sound and light show.",
      coordinates: { lat: 23.23, lng: 72.6738 }
    },
    {
      id: "near-dwarka-bet",
      destinationId: "dwarka",
      name: "Bet Dwarka & Sudarshan Bridge",
      category: "Pilgrimage & Islands",
      distanceKm: 32,
      travelTimeMinutes: 35,
      whyVisit: "Original mythological residence island of Lord Krishna, reached via India's longest cable-stayed bridge.",
      coordinates: { lat: 22.4419, lng: 69.1022 }
    },
    {
      id: "near-dwarka-nageshwar",
      destinationId: "dwarka",
      name: "Nageshwar Jyotirlinga Temple",
      category: "Pilgrimage & Sacred",
      distanceKm: 16,
      travelTimeMinutes: 25,
      whyVisit: "One of the 12 holy Shiva Jyotirlinga shrines crowned by a towering 80-foot seated statue of Lord Shiva.",
      coordinates: { lat: 22.3342, lng: 69.0556 }
    },
    {
      id: "near-dwarka-shivrajpur",
      destinationId: "dwarka",
      name: "Shivrajpur Blue Flag Beach",
      category: "Coastal & Beaches",
      distanceKm: 12,
      travelTimeMinutes: 20,
      whyVisit: "International Blue Flag certified white-sand beach with clear waters and scuba diving.",
      coordinates: { lat: 22.3328, lng: 68.9515 }
    },
    {
      id: "near-somnath-bhalka",
      destinationId: "somnath",
      name: "Bhalka Tirtha & Triveni Sangam",
      category: "Pilgrimage & Sacred",
      distanceKm: 4,
      travelTimeMinutes: 10,
      whyVisit: "Sacred spot where Lord Krishna concluded his earthly incarnation; confluence of Hiran, Kapila, and Saraswati rivers.",
      coordinates: { lat: 20.8953, lng: 70.4042 }
    },
    {
      id: "near-junagadh-girnar",
      destinationId: "junagadh",
      name: "Mount Girnar Peak & Jain Tirth",
      category: "Adventure & Pilgrimage",
      distanceKm: 5,
      travelTimeMinutes: 15,
      whyVisit: "Sacred 1,031m mountain peak with ancient 12th-century Neminath Jain temples, now reached by scenic ropeway.",
      coordinates: { lat: 21.528, lng: 70.528 }
    },
    {
      id: "near-patan-modhera",
      destinationId: "patan",
      name: "Modhera Sun Temple",
      category: "Heritage & Forts",
      distanceKm: 34,
      travelTimeMinutes: 40,
      whyVisit: "Magnificent 11th-century temple dedicated to the Sun God with a stepped water tank featuring 108 miniature shrines.",
      coordinates: { lat: 23.5836, lng: 72.1332 }
    },
    {
      id: "near-kutch-kalo-dungar",
      destinationId: "kutch",
      name: "Kalo Dungar (Black Hill) & Dattatreya Temple",
      category: "Viewpoints & Mountains",
      distanceKm: 45,
      travelTimeMinutes: 55,
      whyVisit: "Highest point in Kutch (462m) offering panoramic vistas over the border and the Great White Rann.",
      coordinates: { lat: 23.9067, lng: 69.815 }
    },
    {
      id: "near-sou-zarwani",
      destinationId: "statue-of-unity",
      name: "Zarwani Waterfalls & Shoolpaneshwar Sanctuary",
      category: "Lakes & Waterfalls",
      distanceKm: 28,
      travelTimeMinutes: 45,
      whyVisit: "Deep forest waterfall tucked inside the Shoolpaneshwar Wildlife Sanctuary ideal for nature treks.",
      coordinates: { lat: 21.8489, lng: 73.7786 }
    }
  ],
  accommodations: [
    {
      id: "stay-ahmedabad-house-of-mg",
      destinationId: "ahmedabad",
      name: "The House of MG (Mangaldas Girdhardas)",
      type: "Heritage Haveli",
      locationDescription: "Opposite Sidi Saiyyed Mosque, Old City Ahmedabad",
      priceRangeInr: { min: 6500, max: 14000 },
      rating: 4.8,
      reviewsCount: 1850,
      amenities: ["Agashiye Rooftop Gujarati Thali", "Lotus Pool", "Textile Heritage Gallery", "Spa"],
      image: "https://images.pexels.com/photos/1109968/pexels-photo-1109968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.houseofmg.com",
      verifiedSource: "Gujarat Tourism Heritage Category Certified"
    },
    {
      id: "stay-kutch-white-rann-resort",
      destinationId: "kutch",
      name: "White Rann Resort (Gujarat Tourism)",
      type: "Eco Glamping / Camp",
      locationDescription: "Dhordo Village, Gateway to Great Rann of Kutch",
      priceRangeInr: { min: 5500, max: 16000 },
      rating: 4.6,
      reviewsCount: 2200,
      amenities: ["Air Conditioned Swiss Tents", "Kutchi Folk Performances", "Desert Safari Transfers", "Artisan Dining"],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.whiterannresort.com",
      verifiedSource: "Official Gujarat Tourism Partner"
    },
    {
      id: "stay-gir-fern-forest-resort",
      destinationId: "gir",
      name: "The Fern Gir Forest Resort",
      type: "Resort",
      locationDescription: "Sasan Gir, on the banks of River Hiran",
      priceRangeInr: { min: 6000, max: 14500 },
      rating: 4.7,
      reviewsCount: 1400,
      amenities: ["Riverfront Dining", "Outdoor Pool", "Ayurvedic Spa", "Official Safari Desk"],
      image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.fernhotels.com",
      verifiedSource: "Eco-certified Wildlife Resort"
    },
    {
      id: "stay-dwarka-toran-tourist-bungalow",
      destinationId: "dwarka",
      name: "Toran Tourist Bungalow Dwarka",
      type: "Government Tourism Guest House",
      locationDescription: "Near Circuit House, Dwarka",
      priceRangeInr: { min: 1400, max: 3200 },
      rating: 4.2,
      reviewsCount: 650,
      amenities: ["AC Sea View Rooms", "Veg Gujarati Restaurant", "Temple Walking Distance", "Free Parking"],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.gujarattourism.com/hotels/toran-dwarka.html",
      verifiedSource: "Tourism Corporation of Gujarat Limited (TCGL)"
    },
    {
      id: "stay-somnath-sagar-darshan",
      destinationId: "somnath",
      name: "Sagar Darshan Guest House (Somnath Trust)",
      type: "Government Tourism Guest House",
      locationDescription: "Oceanfront Promenade, Opposite Somnath Temple",
      priceRangeInr: { min: 1800, max: 4500 },
      rating: 4.5,
      reviewsCount: 3100,
      amenities: ["Direct Arabian Sea View", "Pure Vegetarian Bhojanalaya", "Elevators", "Temple VIP Access Desk"],
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://somnath.org",
      verifiedSource: "Shree Somnath Trust Managed Official Facility"
    },
    {
      id: "stay-sou-tent-city-1",
      destinationId: "statue-of-unity",
      name: "Tent City Narmada (Ekta Nagar)",
      type: "Eco Glamping / Camp",
      locationDescription: "Dyke 3, Sardar Sarovar Dam, Ekta Nagar",
      priceRangeInr: { min: 5000, max: 15000 },
      rating: 4.6,
      reviewsCount: 1950,
      amenities: ["Luxury Cottages", "Golf Carts", "Cultural Amphitheatre", "Monument Shuttle"],
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://tentcitynarmada.com",
      verifiedSource: "Official Gujarat Tourism Partner"
    },
    {
      id: "stay-saputara-toran-hill-resort",
      destinationId: "saputara",
      name: "Toran Hill Resort Saputara",
      type: "Government Tourism Guest House",
      locationDescription: "Sainath Road, near Saputara Lake",
      priceRangeInr: { min: 1800, max: 3800 },
      rating: 4.1,
      reviewsCount: 820,
      amenities: ["Valley View Balconies", "In-house Multi-cuisine Restaurant", "Garden", "Travel Desk"],
      image: "https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.gujarattourism.com/hotels/toran-saputara.html",
      verifiedSource: "Tourism Corporation of Gujarat Limited (TCGL)"
    },
    {
      id: "stay-dasada-rann-riders",
      destinationId: "little-rann-of-kutch",
      name: "Rann Riders Safari Resort",
      type: "Resort",
      locationDescription: "Dasada, edge of Little Rann of Kutch",
      priceRangeInr: { min: 6500, max: 13000 },
      rating: 4.7,
      reviewsCount: 940,
      amenities: ["Traditional Kooba Mud Cottages", "Open Jeep Desert Safaris", "Horse Safaris", "Swimming Pool"],
      image: "https://images.pexels.com/photos/34685953/pexels-photo-34685953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      bookingOrInfoUrl: "https://www.rannriders.com",
      verifiedSource: "Heritage Ecotourism Certified"
    }
  ],
  activities: [
    {
      id: "act-ahm-heritage-walk",
      destinationId: "ahmedabad",
      name: "Ahmedabad Municipal Corporation Old City Heritage Walk",
      category: "Cultural & Temple",
      duration: "2.5 hours",
      estimatedCostInr: 200,
      bestTimeOfDay: "Morning",
      description: "Guided early morning stroll from Kalupur Swaminarayan Temple to Jama Masjid through secret pol lanes."
    },
    {
      id: "act-gir-safari",
      destinationId: "gir",
      name: "Official Asiatic Lion Forest Jeep Safari",
      category: "Wildlife Safari",
      duration: "3 hours",
      estimatedCostInr: 2800,
      bestTimeOfDay: "Morning",
      description: "Track wild Asiatic lions and leopards with an authorized forest ranger across dense teak trails."
    },
    {
      id: "act-kutch-sunset",
      destinationId: "kutch",
      name: "White Rann Desert Sunset & Full Moon Walk",
      category: "Sightseeing",
      duration: "3 hours",
      estimatedCostInr: 100,
      bestTimeOfDay: "Sunset",
      description: "Watch the sun sink below the pure white salt horizon and witness the salt flats illuminate under moonlight."
    },
    {
      id: "act-dwarka-scuba",
      destinationId: "shivrajpur",
      name: "Shivrajpur Blue Flag Beach Scuba Diving",
      category: "Boating & Water Sports",
      duration: "2 hours",
      estimatedCostInr: 2500,
      bestTimeOfDay: "Morning",
      description: "PADI-guided discovery scuba dive exploring shallow coral reefs, sea anemones, and Arabian Sea fish."
    },
    {
      id: "act-palitana-climb",
      destinationId: "palitana",
      name: "Mount Shatrunjaya Sacred Hill Climb",
      category: "Trekking & Hiking",
      duration: "4.5 hours",
      estimatedCostInr: 0,
      bestTimeOfDay: "Morning",
      description: "Ascend 3,500 stone steps at sunrise to reach the 863 consecrated marble Jain temple complex."
    },
    {
      id: "act-sou-viewing-gallery",
      destinationId: "statue-of-unity",
      name: "Statue of Unity 153m Viewing Gallery Experience",
      category: "Sightseeing",
      duration: "2 hours",
      estimatedCostInr: 380,
      bestTimeOfDay: "All Day",
      description: "Ascend high-speed internal elevators to the chest of the 182-meter statue overlooking the Narmada River and Sardar Sarovar Dam."
    }
  ],
  connectivity: [
    {
      destinationId: "ahmedabad",
      nearestAirport: { name: "Sardar Vallabhbhai Patel International", code: "AMD", distanceKm: 8, driveTime: "20 mins" },
      nearestRailwayStation: { name: "Ahmedabad Junction (Kalupur)", code: "ADI", distanceKm: 2, driveTime: "8 mins" },
      majorRoadRoutes: [
        { fromCity: "Mumbai", highway: "NE1 / NH48", distanceKm: 525, estimatedDriveTime: "8h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Udaipur", highway: "NH48", distanceKm: 260, estimatedDriveTime: "4h 30m", busConnectivity: "Frequent State Transport" }
      ]
    },
    {
      destinationId: "vadodara",
      nearestAirport: { name: "Vadodara Airport", code: "BDQ", distanceKm: 6, driveTime: "15 mins" },
      nearestRailwayStation: { name: "Vadodara Junction", code: "BRC", distanceKm: 1, driveTime: "5 mins" },
      majorRoadRoutes: [
        { fromCity: "Ahmedabad", highway: "NE1 Expressway", distanceKm: 110, estimatedDriveTime: "1h 45m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Mumbai", highway: "NH48", distanceKm: 415, estimatedDriveTime: "7h 00m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    },
    {
      destinationId: "kutch",
      nearestAirport: { name: "Bhuj Airport", code: "BHJ", distanceKm: 80, driveTime: "1h 30m" },
      nearestRailwayStation: { name: "Bhuj Railway Station", code: "BHUJ", distanceKm: 82, driveTime: "1h 30m" },
      majorRoadRoutes: [
        { fromCity: "Bhuj", highway: "SH45", distanceKm: 80, estimatedDriveTime: "1h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Ahmedabad", highway: "NH947", distanceKm: 410, estimatedDriveTime: "7h 30m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    },
    {
      destinationId: "dwarka",
      nearestAirport: { name: "Jamnagar Airport", code: "JGA", distanceKm: 130, driveTime: "2h 30m" },
      nearestRailwayStation: { name: "Dwarka Railway Station", code: "DWK", distanceKm: 2, driveTime: "6 mins" },
      majorRoadRoutes: [
        { fromCity: "Jamnagar", highway: "NH51", distanceKm: 130, estimatedDriveTime: "2h 30m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Ahmedabad", highway: "NH47 / NH51", distanceKm: 440, estimatedDriveTime: "7h 45m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    },
    {
      destinationId: "somnath",
      nearestAirport: { name: "Diu Airport", code: "DIU", distanceKm: 85, driveTime: "1h 45m" },
      nearestRailwayStation: { name: "Veraval Junction", code: "VRL", distanceKm: 6, driveTime: "12 mins" },
      majorRoadRoutes: [
        { fromCity: "Rajkot", highway: "NH151", distanceKm: 195, estimatedDriveTime: "3h 45m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Ahmedabad", highway: "NH47 / NH151", distanceKm: 410, estimatedDriveTime: "7h 30m", busConnectivity: "Private AC Sleeper Daily" }
      ]
    },
    {
      destinationId: "statue-of-unity",
      nearestAirport: { name: "Vadodara Airport", code: "BDQ", distanceKm: 90, driveTime: "1h 45m" },
      nearestRailwayStation: { name: "Ekta Nagar Railway Station", code: "EKNR", distanceKm: 5, driveTime: "10 mins" },
      majorRoadRoutes: [
        { fromCity: "Vadodara", highway: "SH11 / Dabhoi-Kevadia Hwy", distanceKm: 90, estimatedDriveTime: "1h 45m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Ahmedabad", highway: "NE1 / SH11", distanceKm: 195, estimatedDriveTime: "3h 15m", busConnectivity: "Frequent State Transport" },
        { fromCity: "Surat", highway: "NH48 / SH5", distanceKm: 155, estimatedDriveTime: "2h 45m", busConnectivity: "Frequent State Transport" }
      ]
    },
    {
      destinationId: "dholavira",
      nearestAirport: { name: "Bhuj Airport", code: "BHJ", distanceKm: 215, driveTime: "3h 45m" },
      nearestRailwayStation: { name: "Bhachau Railway Station", code: "BCOB", distanceKm: 140, driveTime: "2h 30m" },
      majorRoadRoutes: [
        { fromCity: "Bhuj", highway: "Road over the Rann / Khavda Route", distanceKm: 215, estimatedDriveTime: "3h 45m", busConnectivity: "Local Minibus" },
        { fromCity: "Ahmedabad", highway: "NH947 / Rapar Route", distanceKm: 360, estimatedDriveTime: "6h 30m", busConnectivity: "Local Minibus" }
      ]
    }
  ]
};
