import { Activity, City, Hotel, TransportOption, Trip } from "./models";
import {
  getAllDestinations,
  getNearbyAttractions,
  getAccommodations,
  getActivities,
} from "./destinations";

const baseCities: City[] = [
  {
    id: "delhi",
    name: "Delhi",
    state: "National Capital Region",
    tagline: "The heartbeat of centuries, grand monuments and legendary flavors",
    shortDescription: "Layered history, grand Mughal architecture, bold street food and leafy diplomatic avenues.",
    description: "Delhi is an intoxicating tapestry of the ancient and the hyper-modern. From the monumental ramparts of the Red Fort and Qutub Minar to the buzzing spice alleys of Chandni Chowk and the serene lawns of Lodhi Garden, the capital delivers an unmatched feast of culture, heritage, and culinary wonders.",
    image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Asif Methar",
    latitude: 28.6139,
    longitude: 77.209,
    popularity: 98,
    costIndex: "Moderate",
    bestTimeToVisit: "October to March",
    categories: ["Heritage", "Food", "Culture", "Shopping"],
    hue: "#c75c3d",
    attractions: [
      { name: "Humayun's Tomb", description: "Magnificent Mughal garden tomb, precursor to the Taj Mahal.", category: "Heritage", duration: "2 hours", estimatedCost: 50 },
      { name: "Chandni Chowk Food Trail", description: "Historic foodie paradise with centuries-old chaat and paranthas.", category: "Food", duration: "3 hours", estimatedCost: 350 },
      { name: "Qutub Minar Complex", description: "Towering 73m victory minaret dating back to 1192 AD.", category: "Heritage", duration: "2 hours", estimatedCost: 50 },
      { name: "Lodhi Art District & Gardens", description: "Vibrant street art murals juxtaposed with 15th-century royal tombs.", category: "Culture", duration: "2.5 hours", estimatedCost: 0 }
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City of regal fortresses, gemstones, and royal palaces",
    shortDescription: "Rose-tinted terracotta facades, majestic hilltop forts, and living artisan craft traditions.",
    description: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city. Known worldwide as the Pink City, it dazzles visitors with the honeycomb windows of Hawa Mahal, the mirror-inlaid halls of Amber Palace, and buzzing bazaars laden with block prints and gemstones.",
    image: "https://images.pexels.com/photos/19867647/pexels-photo-19867647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / vijesh vijayan",
    latitude: 26.9124,
    longitude: 75.7873,
    popularity: 96,
    costIndex: "Moderate",
    bestTimeToVisit: "November to February",
    categories: ["Heritage", "Palaces", "Crafts", "Culture"],
    hue: "#d67442",
    attractions: [
      { name: "Amber Palace & Sheesh Mahal", description: "Hilltop fortress featuring shimmering glasswork and elephant viewpoints.", category: "Heritage", duration: "3.5 hours", estimatedCost: 100 },
      { name: "Hawa Mahal (Palace of Winds)", description: "Iconic 5-story facade with 953 jharokhas built for royal ladies.", category: "Architecture", duration: "1.5 hours", estimatedCost: 50 },
      { name: "Jantar Mantar Observatory", description: "UNESCO-listed 18th-century astronomical collection with the world's largest sundial.", category: "Science", duration: "2 hours", estimatedCost: 50 },
      { name: "Nahargarh Sunset Point", description: "Panoramic golden-hour views over the illuminated Pink City below.", category: "Views", duration: "2 hours", estimatedCost: 50 }
    ]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    tagline: "The City of Lakes and romantic whitewashed marble palaces",
    shortDescription: "Lakeside royal palaces framed by the rugged purple silhouette of the Aravalli Hills.",
    description: "Revered as the Venice of the East, Udaipur sits serenely beside Lake Pichola. Regal palaces seem to float directly on calm reflective waters, while cobblestone lanes lead to temple courtyards, heritage mansions (havelis), and lakeside rooftop cafes.",
    image: "https://images.pexels.com/photos/33658452/pexels-photo-33658452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Anshul Kaushik",
    latitude: 24.5854,
    longitude: 73.7125,
    popularity: 94,
    costIndex: "Premium",
    bestTimeToVisit: "September to March",
    categories: ["Romance", "Lakes", "Heritage", "Luxury"],
    hue: "#4b8296",
    attractions: [
      { name: "City Palace Complex", description: "Massive royal residence blending Rajasthani and Mughal architectural grandeur.", category: "Heritage", duration: "3 hours", estimatedCost: 300 },
      { name: "Lake Pichola Sunset Boat Cruise", description: "Gentle boat ride past Jag Mandir and the world-famous Taj Lake Palace.", category: "Scenic", duration: "1.5 hours", estimatedCost: 500 },
      { name: "Bagore Ki Haveli Folk Show", description: "Evening cultural dance and puppet performance by the lake ghat.", category: "Culture", duration: "1.5 hours", estimatedCost: 100 },
      { name: "Saheliyon-ki-Bari", description: "Lush royal gardens with lotus pools, marble pavilions, and elephant fountains.", category: "Nature", duration: "1 hour", estimatedCost: 30 }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    tagline: "Sun-drenched tropical coasts, Portuguese villas, and vibrant susegad vibe",
    shortDescription: "Palm-fringed golden beaches, colonial Latin quarters, seafood curries, and bohemian energy.",
    description: "Goa offers the quintessential Indian coastal escape. From quiet southern coves like Palolem and Agonda to the lively northern shores of Anjuna and Vagator, along with UNESCO-listed cathedrals of Old Goa and fragrant spice plantations, it is synonymous with freedom and relaxation.",
    image: "https://images.pexels.com/photos/28520254/pexels-photo-28520254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Mohit Hambiria",
    latitude: 15.2993,
    longitude: 74.124,
    popularity: 97,
    costIndex: "Moderate",
    bestTimeToVisit: "November to March",
    categories: ["Beaches", "Coastal", "Nightlife", "Heritage"],
    hue: "#3d856d",
    attractions: [
      { name: "Fontainhas Latin Quarter Walk", description: "Charming pastel Portuguese-era colonial houses and art galleries in Panjim.", category: "Heritage", duration: "2 hours", estimatedCost: 0 },
      { name: "Palolem Beach Kayaking", description: "Crescent-shaped calm bay ideal for sunset kayaking and dolphin watching.", category: "Adventure", duration: "2.5 hours", estimatedCost: 400 },
      { name: "Basilica of Bom Jesus", description: "16th-century UNESCO Baroque church enshrining relics of St. Francis Xavier.", category: "Spiritual", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Dudhsagar Waterfalls Trek", description: "Spectacular four-tiered milk-white cascades deep inside Bhagwan Mahavir Sanctuary.", category: "Nature", duration: "5 hours", estimatedCost: 750 }
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "The City of Dreams, kinetic seaside boulevards, and cinema legends",
    shortDescription: "A dazzling waterfront metropolis of Art Deco architecture, street food, and sleepless drive.",
    description: "India's financial and entertainment powerhouse, Mumbai thrives on electric momentum. Walk the iconic curve of Marine Drive at dusk, marvel at the Gothic splendour of Chhatrapati Shivaji Maharaj Terminus, catch glimpses of Bollywood history, and relish street-side vada pav and coastal seafood.",
    image: "https://images.pexels.com/photos/33948766/pexels-photo-33948766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Satish Vetal",
    latitude: 19.076,
    longitude: 72.8777,
    popularity: 96,
    costIndex: "Premium",
    bestTimeToVisit: "November to February",
    categories: ["Metropolitan", "Food", "Architecture", "Coastal"],
    hue: "#3a6288",
    attractions: [
      { name: "Gateway of India & Colaba Causeway", description: "Historic 1924 waterfront triumphal arch overlooking the Arabian Sea.", category: "Heritage", duration: "2 hours", estimatedCost: 0 },
      { name: "Marine Drive Queen's Necklace Walk", description: "Breezy 3.6 km promenade lined with UNESCO-listed Art Deco heritage.", category: "Scenic", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Elephanta Caves Island Boat Trip", description: "Ancient rock-cut cave temples dedicated to Shiva on Elephanta Island.", category: "Heritage", duration: "4 hours", estimatedCost: 250 },
      { name: "Bandra Heritage & Street Art Stroll", description: "Portuguese village lanes, hipster cafes, and Bollywood celebrity homes.", category: "Culture", duration: "2.5 hours", estimatedCost: 0 }
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "The timeless spiritual capital of India on the sacred banks of the Ganges",
    shortDescription: "Ancient riverside ghats, mesmerizing evening Ganga Aarti, and profound spiritual rhythm.",
    description: "Mark Twain famously noted that Varanasi is older than history, older than tradition, and looks twice as old as all of them put together. Witness the eternal flame at Manikarnika Ghat, row past centuries-old palazzos at dawn, and be spellbound by the sensory brilliance of the Dashashwamedh Aarti.",
    image: "https://images.pexels.com/photos/18435639/pexels-photo-18435639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Adinath  Gilande",
    latitude: 25.3176,
    longitude: 82.9739,
    popularity: 95,
    costIndex: "Value",
    bestTimeToVisit: "October to March",
    categories: ["Spiritual", "Heritage", "Culture", "Photography"],
    hue: "#aa4b39",
    attractions: [
      { name: "Dawn Boat Ride on River Ganga", description: "Rowing boat at sunrise to witness morning rituals along the historic ghats.", category: "Spiritual", duration: "2 hours", estimatedCost: 350 },
      { name: "Grand Evening Ganga Aarti", description: "Choreographed ritual of brass lamps, incense, chants, and bells at Dashashwamedh Ghat.", category: "Culture", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Sarnath Buddhist Deer Park", description: "Where Lord Buddha preached his first sermon after attaining enlightenment.", category: "Spiritual", duration: "3 hours", estimatedCost: 50 },
      { name: "Old City Alleys & Silk Weaving", description: "Navigating narrow galis to witness Banarasi silk weavers at their looms.", category: "Crafts", duration: "2.5 hours", estimatedCost: 0 }
    ]
  },
  {
    id: "kochi",
    name: "Kochi",
    state: "Kerala",
    tagline: "The Queen of the Arabian Sea, spice docks, and world-class art biennale",
    shortDescription: "Cantilevered Chinese fishing nets, Jewish town spice warehouses, and serene backwater waterways.",
    description: "A crossroads of maritime trade for over six centuries, Fort Kochi tells stories of Arabs, Chinese, Portuguese, Dutch, and British settlers. Today, it combines historic charm with contemporary art at the Kochi-Muziris Biennale, Kathakali dance performances, and soothing Ayurvedic wellness.",
    image: "https://images.pexels.com/photos/35347834/pexels-photo-35347834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Ravi Kant",
    latitude: 9.9312,
    longitude: 76.2673,
    popularity: 91,
    costIndex: "Moderate",
    bestTimeToVisit: "September to March",
    categories: ["Coastal", "Culture", "Art", "Spiritual"],
    hue: "#328373",
    attractions: [
      { name: "Chinese Fishing Nets at Sunset", description: "Iconic 14th-century cantilevered bamboo fishing structures at Fort Kochi beach.", category: "Scenic", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Mattancherry & Jew Town Spices", description: "Dutch Palace murals and 450-year-old Paradesi Synagogue in the spice quarter.", category: "Heritage", duration: "2.5 hours", estimatedCost: 30 },
      { name: "Kathakali Performance & Makeup", description: "Traditional classical dance-drama featuring elaborate facial expressions and costume ritual.", category: "Culture", duration: "2 hours", estimatedCost: 350 },
      { name: "Kumarakom / Alleppey Day Cruise", description: "Glide through emerald backwaters bordered by palm groves on a traditional houseboat.", category: "Nature", duration: "4 hours", estimatedCost: 1200 }
    ]
  },
  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    tagline: "The golden sanctuary of selfless service, resilience, and culinary royalty",
    shortDescription: "The sublime Golden Temple, the world's largest community kitchen, and iconic Punjabi food.",
    description: "Amritsar touches the soul. The Golden Temple (Harmandir Sahib), enveloped by the sacred Amrit Sarovar, glows day and night with timeless serenity. The langar kitchen feeds up to 100,000 pilgrims free daily. Nearby, the patriotic Wagah border ceremony stirs deep emotion.",
    image: "https://images.pexels.com/photos/14890717/pexels-photo-14890717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Akaaljotsingh Anandpuria",
    latitude: 31.634,
    longitude: 74.8723,
    popularity: 93,
    costIndex: "Value",
    bestTimeToVisit: "October to March",
    categories: ["Spiritual", "Heritage", "Food", "Culture"],
    hue: "#b88732",
    attractions: [
      { name: "Sri Harmandir Sahib (Golden Temple)", description: "Revered spiritual sanctum covered in real gold leaf, open to all humanity.", category: "Spiritual", duration: "3 hours", estimatedCost: 0 },
      { name: "Langar Community Kitchen Experience", description: "Participate in or witness the world's largest free community meal operation.", category: "Culture", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Jallianwala Bagh Memorial", description: "Historic memorial park commemorating the watershed freedom struggle event of 1919.", category: "Heritage", duration: "1 hour", estimatedCost: 0 },
      { name: "Wagah Border Beating Retreat Ceremony", description: "Electrifying military drill and flag-lowering at the India-Pakistan border.", category: "National", duration: "3.5 hours", estimatedCost: 150 }
    ]
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    tagline: "Surreal boulder-strewn kingdom of the Vijayanagara Empire",
    shortDescription: "A fantasy landscape of giant granite boulders, monolithic stone chariots, and sacred river ruins.",
    description: "The capital of the glorious 14th-century Vijayanagara Empire, Hampi is an open-air museum spread across 4,100 hectares of otherworldly granite hills beside the Tungabhadra River. Cycles and coracles take you between majestic temples, royal bath complexes, and sunset viewpoints.",
    image: "https://images.pexels.com/photos/38297408/pexels-photo-38297408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Rajath Ravi",
    latitude: 15.335,
    longitude: 76.46,
    popularity: 91,
    costIndex: "Value",
    bestTimeToVisit: "November to February",
    categories: ["Heritage", "Ancient", "Adventure", "Photography"],
    hue: "#9c6838",
    attractions: [
      { name: "Vittala Temple & Stone Chariot", description: "Architectural masterpiece with musical granite pillars and the famed stone chariot.", category: "Heritage", duration: "2.5 hours", estimatedCost: 40 },
      { name: "Virupaksha Temple & Hampi Bazaar", description: "Living 7th-century active temple tower dominating the ancient bazaar street.", category: "Spiritual", duration: "2 hours", estimatedCost: 20 },
      { name: "Matanga Hill Sunrise Trek", description: "Spectacular panoramic sunrise overlooking the entire boulder kingdom.", category: "Adventure", duration: "2 hours", estimatedCost: 0 },
      { name: "Coracle Boat Ride on Tungabhadra", description: "Crossing the river in a traditional round reed boat to Hippie Island.", category: "Nature", duration: "1 hour", estimatedCost: 200 }
    ]
  },
  {
    id: "srinagar",
    name: "Srinagar",
    state: "Jammu & Kashmir",
    tagline: "Paradise on Earth, ornate wooden houseboats, and snow-capped peaks",
    shortDescription: "Tranquil shikara rides on Dal Lake, terraced Mughal gardens, and Kashmiri saffron fields.",
    description: "Encircled by the mighty Pir Panjal mountains, Srinagar has captivated travelers for millenia. Drift on mirror-calm waters in a hand-carved cedarwood houseboat, browse floating vegetable markets at first light, and stroll terraced Mughal pleasure gardens blooming with chinar trees.",
    image: "https://images.pexels.com/photos/6739193/pexels-photo-6739193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Imad Clicks",
    latitude: 34.0837,
    longitude: 74.7973,
    popularity: 94,
    costIndex: "Premium",
    bestTimeToVisit: "April to October (Winter for snow)",
    categories: ["Mountains", "Lakes", "Romance", "Nature"],
    hue: "#3d738f",
    attractions: [
      { name: "Dal Lake Shikara Ride", description: "Gliding through lotus channels and past floating markets in a cushioned wooden boat.", category: "Scenic", duration: "2 hours", estimatedCost: 600 },
      { name: "Nishat & Shalimar Mughal Gardens", description: "Terraced water gardens engineered in the 17th century by Emperor Jahangir.", category: "Heritage", duration: "2.5 hours", estimatedCost: 40 },
      { name: "Old Srinagar Heritage & Jamia Masjid", description: "Ancient wooden spire architecture and aromatic spice and pashmina bazaars.", category: "Culture", duration: "3 hours", estimatedCost: 0 },
      { name: "Pari Mahal (Palace of Fairies)", description: "High hilltop observatory offering breathtaking vistas of the Dal Lake valley.", category: "Views", duration: "1.5 hours", estimatedCost: 30 }
    ]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    tagline: "The Yoga Capital of the World and gateway to the roaring Himalayas",
    shortDescription: "White water river rafting, hillside ashrams, suspension bridges, and meditation caves.",
    description: "Cradled where the jade-green Ganges tumbles out of the Himalayan foothills, Rishikesh blends adrenaline and peace. World-famous for yoga retreats (and the 1968 Beatles visit), it is equally celebrated for thrilling grade-IV rafting, cliff jumping, and serene cliffside aarti ceremonies.",
    image: "https://images.pexels.com/photos/36123978/pexels-photo-36123978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Capturing Rishikesh",
    latitude: 30.0869,
    longitude: 78.2676,
    popularity: 92,
    costIndex: "Value",
    bestTimeToVisit: "September to May",
    categories: ["Adventure", "Spiritual", "Nature", "Mountains"],
    hue: "#37827e",
    attractions: [
      { name: "Ganges White Water Rafting", description: "Thrilling 16 km rapids expedition from Shivpuri down to Lakshman Jhula.", category: "Adventure", duration: "3 hours", estimatedCost: 800 },
      { name: "Beatles Ashram (Chaurasi Kutia)", description: "Iconic meditation retreat where the Beatles composed the White Album, full of graffiti art.", category: "Culture", duration: "2 hours", estimatedCost: 150 },
      { name: "Triveni Ghat Evening Aarti", description: "Deeply moving fire worship ceremony accompanied by devotional drums and floating diyas.", category: "Spiritual", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Neer Garh Waterfall Hike", description: "Short hillside trail through dense forest to clear mountain plunge pools.", category: "Nature", duration: "2.5 hours", estimatedCost: 50 }
    ]
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    tagline: "The Champagne of Teas and front-row vistas of Mount Kanchenjunga",
    shortDescription: "Rolling emerald tea estates, historic UNESCO Toy Train, and sweeping Himalayan summits.",
    description: "Perched at 2,050 meters, Darjeeling offers crisp mountain air, colonial-era bungalows, and world-renowned Muscatel tea gardens. Watch the dawn sun turn Mount Kanchenjunga (the world's third highest peak) into molten gold from Tiger Hill.",
    image: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Prasanta Kr Dutta",
    latitude: 27.041,
    longitude: 88.2663,
    popularity: 90,
    costIndex: "Moderate",
    bestTimeToVisit: "March to May & October to December",
    categories: ["Mountains", "Nature", "Tea", "Scenic"],
    hue: "#477a53",
    attractions: [
      { name: "Tiger Hill Kanchenjunga Sunrise", description: "Iconic dawn spectacle illuminating snow summits across Nepal and Sikkim.", category: "Scenic", duration: "3 hours", estimatedCost: 100 },
      { name: "Darjeeling Himalayan Railway (Toy Train)", description: "UNESCO-listed vintage steam engine ride looping through mountain passes.", category: "Heritage", duration: "2 hours", estimatedCost: 600 },
      { name: "Happy Valley Tea Estate Tour", description: "Walk through terraced bushes and learn delicate tea processing and tasting.", category: "Food & Drink", duration: "2 hours", estimatedCost: 150 },
      { name: "Peace Pagoda & Japanese Temple", description: "White Buddhist stupa radiating quietude with mountain panoramas.", category: "Spiritual", duration: "1.5 hours", estimatedCost: 0 }
    ]
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tagline: "The City of Joy, intellectual heritage, tramways, and grand colonial facades",
    shortDescription: "Literary coffeehouses, yellow Ambassador taxis, Howrah Bridge, and exquisite Bengali sweets.",
    description: "The intellectual and artistic heart of India, Kolkata retains an old-world soul unlike any other metropolis. Victorian monuments stand beside bustling markets, hand-pulled rickshaws share lanes with electric trams, and conversations about poetry, cinema, and football flow endlessly over sweet misti doi.",
    image: "https://images.pexels.com/photos/34019031/pexels-photo-34019031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Arghadeep Chinya",
    latitude: 22.5726,
    longitude: 88.3639,
    popularity: 92,
    costIndex: "Value",
    bestTimeToVisit: "October to March",
    categories: ["Culture", "Food", "Heritage", "Literature"],
    hue: "#85496f",
    attractions: [
      { name: "Victoria Memorial & Maidan", description: "Colossal white Makrana marble monument set in 64 acres of landscaped gardens.", category: "Heritage", duration: "2.5 hours", estimatedCost: 50 },
      { name: "Howrah Bridge & Mullick Ghat Flower Market", description: "World's busiest cantilever bridge overlooking Asia's largest fragrant flower bazaar.", category: "Culture", duration: "2 hours", estimatedCost: 0 },
      { name: "College Street Boi Para & Indian Coffee House", description: "Miles of secondhand book stalls and historic hangout of Nobel laureates.", category: "Literature", duration: "2.5 hours", estimatedCost: 150 },
      { name: "Kumartuli Idol-Makers' Colony", description: "Artisan lanes where clay sculptors craft magnificent idols for Durga Puja.", category: "Art", duration: "2 hours", estimatedCost: 0 }
    ]
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    tagline: "The Silicon Valley of India, Garden City parks, and craft brewery capital",
    shortDescription: "Lush green tree canopies, microbreweries, historic Tipu Sultan forts, and tech innovation.",
    description: "Blessed with year-round pleasant weather, Bengaluru seamlessly fuses garden calm with startup swagger. Spend peaceful mornings strolling under centuries-old rain trees in Cubbon Park, visit Bangalore Palace, and sample pioneering Indian craft beers and South Indian filter coffee in Indiranagar.",
    image: "https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Umar Andrabi",
    latitude: 12.9716,
    longitude: 77.5946,
    popularity: 91,
    costIndex: "Moderate",
    bestTimeToVisit: "Year-round (Best Oct–Feb)",
    categories: ["Modern", "Food", "Nature", "Craft Beer"],
    hue: "#3a6a8c",
    attractions: [
      { name: "Cubbon Park & Vidhana Soudha", description: "300-acre lush lung of the city facing the grand neo-Dravidian state assembly.", category: "Nature", duration: "2 hours", estimatedCost: 0 },
      { name: "Bangalore Palace & Grounds", description: "Tudor-style royal estate modeled on Windsor Castle with stained glass interiors.", category: "Heritage", duration: "2 hours", estimatedCost: 250 },
      { name: "Lalbagh Botanical Garden & Glass House", description: "Historic 240-acre botanical haven founded by Hyder Ali with rare tropical trees.", category: "Nature", duration: "2.5 hours", estimatedCost: 30 },
      { name: "VV Puram Thindi Beedi (Food Street)", description: "Legendary evening vegetarian street food lane famous for dosas, paddus, and sweets.", category: "Food", duration: "2 hours", estimatedCost: 250 }
    ]
  },
  {
    id: "mysuru",
    name: "Mysuru",
    state: "Karnataka",
    tagline: "The Royal Heritage Capital of silk, sandalwood, and palatial splendor",
    shortDescription: "Grand illuminated palaces, fragrant sandalwood oil, Ashtanga yoga, and regal broad boulevards.",
    description: "Mysuru is Karnataka's cultural crown jewel. The magnificent Mysore Palace, illuminated by nearly 100,000 light bulbs on Sundays, is second only to the Taj Mahal in annual visitors. The city is also world-renowned for pure mulberry silk sarees, fragrant incense, and melt-in-the-mouth Mysore Pak.",
    image: "https://images.pexels.com/photos/29604731/pexels-photo-29604731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Sharon  Manuel joy",
    latitude: 12.2958,
    longitude: 76.6394,
    popularity: 89,
    costIndex: "Value",
    bestTimeToVisit: "October to March",
    categories: ["Heritage", "Palaces", "Culture", "Spiritual"],
    hue: "#856543",
    attractions: [
      { name: "Mysore Palace (Amba Vilas)", description: "Indo-Saracenic architectural jewel with stained glass domes and golden thrones.", category: "Heritage", duration: "3 hours", estimatedCost: 100 },
      { name: "Chamundi Hill & Sri Chamundeshwari Temple", description: "Sacred hilltop shrine with monolithic 16-foot Nandi bull statue.", category: "Spiritual", duration: "2.5 hours", estimatedCost: 0 },
      { name: "Devaraja Market Walking Tour", description: "Vibrant 130-year-old traditional bazaar piled high with flowers, spices, and perfumes.", category: "Culture", duration: "2 hours", estimatedCost: 0 },
      { name: "St. Philomena's Neo-Gothic Cathedral", description: "One of Asia's tallest cathedrals featuring twin 175-foot spires.", category: "Architecture", duration: "1 hour", estimatedCost: 0 }
    ]
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "Gateway to South Indian classical arts, temples, and Marina breezes",
    shortDescription: "Ancient Dravidian temple towers, world's second-longest urban beach, and Carnatic music traditions.",
    description: "Chennai is a proud bastion of Tamil culture, Carnatic classical music, and Bharatanatyam dance. Visit the 7th-century Kapaleeshwarar Temple with its color-splashed gopuram, stroll breezy Marina Beach at sunset, and feast on traditional banana-leaf thalis and frothy filter kaapi.",
    image: "https://images.pexels.com/photos/8572308/pexels-photo-8572308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / MARI PANDY",
    latitude: 13.0827,
    longitude: 80.2707,
    popularity: 88,
    costIndex: "Moderate",
    bestTimeToVisit: "November to February",
    categories: ["Temples", "Culture", "Coastal", "Food"],
    hue: "#9c4e3e",
    attractions: [
      { name: "Kapaleeshwarar Temple, Mylapore", description: "Sculpted Dravidian rainbow gopuram dedicated to Lord Shiva in historic Mylapore.", category: "Spiritual", duration: "2 hours", estimatedCost: 0 },
      { name: "Marina Beach Promenade Walk", description: "13 km natural urban sandy beach bustling with street food and evening breezes.", category: "Scenic", duration: "2 hours", estimatedCost: 0 },
      { name: "San Thome Cathedral Basilica", description: "Gleaming white neo-Gothic church built over the tomb of St. Thomas the Apostle.", category: "Heritage", duration: "1.5 hours", estimatedCost: 0 },
      { name: "DakshinaChitra Heritage Village", description: "Living museum showcasing restored traditional homes from all four southern states.", category: "Culture", duration: "3 hours", estimatedCost: 175 }
    ]
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    tagline: "The Athens of the East, eternal temple towers, and jasmine perfume",
    shortDescription: "The monumental Meenakshi Amman temple complex, jasmine flower markets, and midnight street eats.",
    description: "One of the oldest continuously inhabited cities on Earth, Madurai is constructed concentrically around the staggering Meenakshi Amman Temple. Its 14 towering gopurams house an estimated 33,000 multi-colored sculptures, creating a sensory and spiritual experience like nowhere else.",
    image: "https://images.pexels.com/photos/39341994/pexels-photo-39341994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Subbu Rayan",
    latitude: 9.9252,
    longitude: 78.1198,
    popularity: 89,
    costIndex: "Value",
    bestTimeToVisit: "October to March",
    categories: ["Spiritual", "Heritage", "Ancient", "Culture"],
    hue: "#8e4a3c",
    attractions: [
      { name: "Meenakshi Amman Temple Complex", description: "Gigantic 14-acre sacred labyrinth of sculpted towers and the Hall of Thousand Pillars.", category: "Spiritual", duration: "3.5 hours", estimatedCost: 50 },
      { name: "Thirumalai Nayakkar Mahal", description: "17th-century palace celebrated for its massive 82-foot columns and stucco domes.", category: "Heritage", duration: "2 hours", estimatedCost: 20 },
      { name: "Madurai Jasmine (Malli) Flower Market", description: "Whirlwind morning trade of fragrant GI-tagged Madurai jasmine buds.", category: "Culture", duration: "1.5 hours", estimatedCost: 0 },
      { name: "Midnight Jigarthanda & Bun Parotta Trail", description: "Taste the city's legendary almond-gum milk drink and layered street parottas.", category: "Food", duration: "2 hours", estimatedCost: 200 }
    ]
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "City of Pearls, Nizam opulence, and world-conquering biryani",
    shortDescription: "The iconic Charminar, the whispering galleries of Golconda Fort, and aromatic dum biryani.",
    description: "Hyderabad bridges four centuries of royal Qutb Shahi and Nizam heritage with modern cyber hubs. Gaze up at the four minarets of Charminar, explore the diamond vaults and acoustic engineering of Golconda Fort, and savor authentic slow-cooked Hyderabadi Dum Biryani.",
    image: "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Sharath G.",
    latitude: 17.385,
    longitude: 78.4867,
    popularity: 93,
    costIndex: "Moderate",
    bestTimeToVisit: "October to March",
    categories: ["Heritage", "Food", "Palaces", "Culture"],
    hue: "#6a4f7a",
    attractions: [
      { name: "Charminar & Laad Bazaar (Choodi Bazaar)", description: "1591 monument surrounded by sparkling lacquer bangle shops and pearl merchants.", category: "Heritage", duration: "2.5 hours", estimatedCost: 25 },
      { name: "Golconda Fort & Acoustic Echo Claps", description: "Citadel famous for acoustics that warned kings of attacks from 1 kilometer away.", category: "Heritage", duration: "3 hours", estimatedCost: 25 },
      { name: "Chowmahalla Palace", description: "Exquisite seat of the Asaf Jahi dynasty featuring Belgian crystal chandeliers and vintage cars.", category: "Palaces", duration: "2.5 hours", estimatedCost: 80 },
      { name: "Paradise & Shadab Biryani Trail", description: "Savor authentic saffron-infused mutton dum biryani and double ka meetha.", category: "Food", duration: "2 hours", estimatedCost: 400 }
    ]
  },
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    tagline: "The Queen of Hill Stations, pine forests, and colonial mountain charm",
    shortDescription: "Pedestrianized Mall Road, pine-covered ridges, mountain toy trains, and crisp Himalayan vistas.",
    description: "The former summer capital of British India, Shimla rests along a 12-kilometer crescent ridge in the lower Himalayas. Free of vehicle traffic, Mall Road and The Ridge are a joy to walk, while the toy train climbs through 102 mountain tunnels.",
    image: "https://images.pexels.com/photos/4999674/pexels-photo-4999674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Vijay R",
    latitude: 31.1048,
    longitude: 77.1734,
    popularity: 90,
    costIndex: "Moderate",
    bestTimeToVisit: "March to June (Summer) & Dec–Feb (Snow)",
    categories: ["Mountains", "Heritage", "Nature", "Romance"],
    hue: "#50697a",
    attractions: [
      { name: "The Ridge & Christ Church", description: "Open promenade with neo-Gothic stained glass church dating back to 1857.", category: "Scenic", duration: "2 hours", estimatedCost: 0 },
      { name: "Jakhoo Hill & 108ft Hanuman Statue", description: "Highest point in Shimla offering pine forest walks and panoramic peak views.", category: "Nature", duration: "2.5 hours", estimatedCost: 0 },
      { name: "Viceregal Lodge (IIAS)", description: "Imposing Scottish baronial mansion surrounded by manicured mountain gardens.", category: "Heritage", duration: "2 hours", estimatedCost: 100 },
      { name: "Kalka-Shimla Toy Train Journey", description: "Scenic narrow-gauge mountain railway ride across hundreds of arched bridges.", category: "Adventure", duration: "4 hours", estimatedCost: 350 }
    ]
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    tagline: "India's first UNESCO World Heritage City, textile craft, and peace legacies",
    shortDescription: "Intricate wooden pols, Mahatma Gandhi's riverside ashram, and subterranean stepwells.",
    description: "Ahmedabad offers deep heritage, brilliant textile traditions, and warm hospitality. Walk through the carved wooden pols of the historic old city, find peace at Sabarmati Ashram where the Salt March began, and marvel at the 5-story underground architecture of Adalaj Stepwell.",
    image: "https://images.pexels.com/photos/5829962/pexels-photo-5829962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Sonika Agarwal",
    latitude: 23.0225,
    longitude: 72.5714,
    popularity: 88,
    costIndex: "Value",
    bestTimeToVisit: "November to February",
    categories: ["Heritage", "Architecture", "Food", "Culture"],
    hue: "#9c5738",
    attractions: [
      { name: "Sabarmati Gandhi Ashram", description: "Peaceful riverside headquarters where Mahatma Gandhi lived for 12 transformative years.", category: "Heritage", duration: "2 hours", estimatedCost: 0 },
      { name: "Adalaj Stepwell (Vav)", description: "1498 five-story underground architectural wonder of intricately carved sandstone columns.", category: "Architecture", duration: "2 hours", estimatedCost: 0 },
      { name: "Sidi Saiyyed Mosque Jali", description: "Famous delicate 16th-century stone lattice carved in the motif of the Tree of Life.", category: "Art", duration: "1 hour", estimatedCost: 0 },
      { name: "Manek Chowk Night Food Market", description: "Jewelry market by day that transforms at night into a bustling street food haven.", category: "Food", duration: "2 hours", estimatedCost: 200 }
    ]
  },
  {
    id: "leh",
    name: "Leh-Ladakh",
    state: "Ladakh",
    tagline: "The Land of High Mountain Passes, Buddhist Gompas, and Sapphire Lakes",
    shortDescription: "Dramatic high-altitude moonscapes, clifftop Tibetan monasteries, and the crystal blue waters of Pangong Tso.",
    description: "Perched at 3,500 meters in the Trans-Himalayan desert, Leh is a spellbinding realm of Tibetan Buddhist culture, soaring snow-clad peaks, and prayer flags fluttering in mountain breezes. Journey over Khardung La, explore 1,000-year-old frescoed monasteries like Thiksey and Hemis, and camp under the starry skies of Pangong Lake.",
    image: "https://images.pexels.com/photos/27593915/pexels-photo-27593915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Sanskar Vyas",
    latitude: 34.1526,
    longitude: 77.5771,
    popularity: 97,
    costIndex: "Premium",
    bestTimeToVisit: "May to September",
    categories: ["Mountains", "Adventure", "Spiritual", "Scenic"],
    hue: "#4a6fa5",
    attractions: [
      { name: "Pangong Tso Sapphire Lake", description: "World's highest saltwater lake changing colors from turquoise to deep indigo.", category: "Scenic", duration: "6 hours", estimatedCost: 350 },
      { name: "Thiksey & Hemis Monasteries", description: "Clifftop 12-story gompa resembling the Potala Palace of Lhasa.", category: "Spiritual", duration: "3 hours", estimatedCost: 50 },
      { name: "Khardung La Pass (17,982 ft)", description: "One of the world's highest motorable mountain passes with Himalayan vistas.", category: "Adventure", duration: "4 hours", estimatedCost: 100 },
      { name: "Nubra Valley & Diskit Camel Dunes", description: "Double-humped Bactrian camel rides amidst desert dunes flanked by snow peaks.", category: "Adventure", duration: "5 hours", estimatedCost: 400 }
    ]
  },
  {
    id: "shillong",
    name: "Shillong",
    state: "Meghalaya",
    tagline: "Scotland of the East, Living Root Bridges, and mist-veiled cloud valleys",
    shortDescription: "Pine-covered rolling hills, cascading waterfalls, living bio-engineering, and India's indie rock capital.",
    description: "Cradled in the clouds of Meghalaya, Shillong is a verdant paradise of pine-clad hills, crystal-clear rivers, and vibrant music traditions. Nearby, trek down to Cherrapunji's world-famous living root bridges engineered across centuries by the Khasi people, and boat across the glass-like waters of Dawki.",
    image: "https://images.pexels.com/photos/27820314/pexels-photo-27820314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Pushkar  Sarkar",
    latitude: 25.5788,
    longitude: 91.8933,
    popularity: 91,
    costIndex: "Moderate",
    bestTimeToVisit: "October to April (or July for Monsoon lovers)",
    categories: ["Nature", "Adventure", "Scenic", "Culture"],
    hue: "#2d7a5b",
    attractions: [
      { name: "Double Decker Living Root Bridge (Nongriat)", description: "Bio-engineered botanical marvel of living Ficus elastica tree roots.", category: "Nature", duration: "5 hours", estimatedCost: 100 },
      { name: "Umiam Lake (Barapani)", description: "Sprawling tranquil reservoir surrounded by coniferous slopes for kayaking and sailing.", category: "Scenic", duration: "2.5 hours", estimatedCost: 150 },
      { name: "Dawki Umngot River Glass Boat Ride", description: "Crystal transparent waters so clean the boats appear suspended in mid-air.", category: "Adventure", duration: "3.5 hours", estimatedCost: 500 },
      { name: "Nohkalikai Falls & Seven Sisters", description: "India's tallest plunge waterfall (1,115 ft) plummeting dramatically into a green pool.", category: "Scenic", duration: "2 hours", estimatedCost: 50 }
    ]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    tagline: "The Golden City, living sandstone forts, and golden Thar Desert dunes",
    shortDescription: "Yellow sandstone ramparts rising like a mirage out of the Great Indian Desert.",
    description: "Jaisalmer gleams golden under the desert sun. Its UNESCO-listed Sonar Qila (Golden Fort) is unique as one of the world's very few living forts, where thousands of residents, bazaars, and Jain temples still thrive inside ancient ramparts. Venture out to the Sam Sand Dunes for starry nights, folk music, and camel safaris.",
    image: "https://images.pexels.com/photos/30573733/pexels-photo-30573733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Ajay Sharda",
    latitude: 26.9157,
    longitude: 70.9083,
    popularity: 93,
    costIndex: "Moderate",
    bestTimeToVisit: "October to March",
    categories: ["Heritage", "Adventure", "Palaces", "Culture"],
    hue: "#d49a3d",
    attractions: [
      { name: "Jaisalmer Living Golden Fort (Sonar Qila)", description: "12th-century desert fortress made of golden-yellow sandstone with 99 bastions.", category: "Heritage", duration: "3 hours", estimatedCost: 50 },
      { name: "Sam Sand Dunes Camel Safari & Sunset", description: "Rippling golden sand dunes in the Thar Desert with Rajasthani Kalbeliya folk dance.", category: "Adventure", duration: "4 hours", estimatedCost: 650 },
      { name: "Patwon Ki Haveli", description: "Cluster of five opulent 19th-century merchant mansions with delicate jharokha stone carving.", category: "Architecture", duration: "2 hours", estimatedCost: 100 },
      { name: "Gadisar Lake & Desert Gateway", description: "Sacred rainwater reservoir framed by ornate cenotaphs and migratory birds.", category: "Scenic", duration: "1.5 hours", estimatedCost: 50 }
    ]
  },
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    tagline: "Rolling emerald tea carpets, mist-draped peaks, and rare Nilgiri Tahrs",
    shortDescription: "Endless rolling green tea gardens, spice plantations, and the highest peak in South India.",
    description: "Located 1,600 meters above sea level in the Western Ghats, Munnar was the British summer resort in South India. It is renowned for undulating manicured tea estates, mist cascading over green valleys, and Eravikulam National Park, home to the endangered Nilgiri Tahr mountain goat.",
    image: "https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Harsh Chikhalia",
    latitude: 10.0889,
    longitude: 77.0595,
    popularity: 94,
    costIndex: "Moderate",
    bestTimeToVisit: "September to May",
    categories: ["Nature", "Scenic", "Mountains", "Romance"],
    hue: "#1d784a",
    attractions: [
      { name: "Eravikulam National Park & Rajamalai", description: "Rolling shola grasslands sanctuary protecting the endangered Nilgiri Tahr.", category: "Nature", duration: "3 hours", estimatedCost: 200 },
      { name: "Kolukkumalai Sunrise & Highest Tea Estate", description: "World's highest tea plantation reachable by 4x4 jeep through dramatic cloud seas.", category: "Scenic", duration: "4.5 hours", estimatedCost: 700 },
      { name: "Tata Tea Museum & Factory Tour", description: "Witness the century-old art of orthodox tea processing and leaf tasting.", category: "Culture", duration: "2 hours", estimatedCost: 150 },
      { name: "Mattupetty Dam & Kundala Lake", description: "Mountain storage reservoir with boating and reflections of emerald shola hills.", category: "Scenic", duration: "2.5 hours", estimatedCost: 100 }
    ]
  },
  {
    id: "gangtok",
    name: "Gangtok",
    state: "Sikkim",
    tagline: "Gateway to Mount Kanchenjunga, ancient Tibetan gompas, and organic mountain living",
    shortDescription: "Clean Himalayan mountain city with panoramic views of Kanchenjunga and rhododendron forests.",
    description: "Sikkim's capital, Gangtok, sits gracefully on a cloud-brushed ridge facing Mount Kanchenjunga, the world's third-highest peak. As India's first 100% organic state, Sikkim combines pristine Himalayan cleanliness, Tibetan Buddhist monasteries, and breathtaking alpine mountain passes.",
    image: "https://images.pexels.com/photos/27379093/pexels-photo-27379093.png?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Harsh Suthar",
    latitude: 27.3389,
    longitude: 88.6065,
    popularity: 90,
    costIndex: "Moderate",
    bestTimeToVisit: "March to June & September to December",
    categories: ["Mountains", "Spiritual", "Nature", "Scenic"],
    hue: "#3d6480",
    attractions: [
      { name: "Rumtek Monastery (Dharmachakra Centre)", description: "Grand 16th Karmapa Tibetan monastery housing sacred relics and golden stupas.", category: "Spiritual", duration: "2.5 hours", estimatedCost: 20 },
      { name: "Tsomgo (Changu) Glacial Lake & Baba Mandir", description: "Sacred high-altitude alpine lake (12,310 ft) reflecting snow peaks.", category: "Scenic", duration: "5 hours", estimatedCost: 450 },
      { name: "MG Marg Clean Promenade Walk", description: "Pedestrianized, eco-friendly flower-lined boulevard filled with Tibetan cafes.", category: "Culture", duration: "2 hours", estimatedCost: 0 },
      { name: "Ganesh Tok & Kanchenjunga Viewpoint", description: "Hilltop pagoda offering sweeping panoramic vistas of the Kanchenjunga massif.", category: "Views", duration: "1.5 hours", estimatedCost: 20 }
    ]
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    state: "Puducherry",
    tagline: "The French Riviera of the East, pastel colonial boulevards, and coastal serenity",
    shortDescription: "Mustard-yellow French colonial villas, bohemian seaside cafes, and spiritual tranquility.",
    description: "Pondicherry offers a charming fusion of Tamil heritage and French colonial elegance. Stroll down cobblestone avenues lined with bougainvillea-draped pastel villas in the French Quarter, surf gentle Bay of Bengal breaks, savor croissants at artisanal patisseries, and experience the global community vision at Auroville.",
    image: "https://images.pexels.com/photos/38199872/pexels-photo-38199872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageCredit: "Pexels / Tushar",
    latitude: 11.9416,
    longitude: 79.8083,
    popularity: 92,
    costIndex: "Moderate",
    bestTimeToVisit: "October to March",
    categories: ["Beach", "Heritage", "Culture", "Spiritual"],
    hue: "#c28834",
    attractions: [
      { name: "White Town (French Quarter) Heritage Walk", description: "Mustard-yellow neoclassical mansions, arched doorways, and Parisian cafe culture.", category: "Heritage", duration: "2.5 hours", estimatedCost: 0 },
      { name: "Auroville & Matrimandir Golden Dome", description: "Universal township dedicated to human unity featuring the giant golden meditation sphere.", category: "Spiritual", duration: "3.5 hours", estimatedCost: 0 },
      { name: "Promenade Beach Rock Walk & Sunset", description: "1.5 km seaside promenade closed to motor traffic every evening for ocean strolls.", category: "Scenic", duration: "2 hours", estimatedCost: 0 },
      { name: "Serenity Beach Surfing & Coastal Cafes", description: "Golden sand beach with surf schools and freshly caught seaside seafood.", category: "Adventure", duration: "3 hours", estimatedCost: 800 }
    ]
  }
];

// Dynamically construct cities from comprehensive State Registry
const stateRegistryCities: City[] = getAllDestinations().map((d) => {
  const nearby = getNearbyAttractions(d.id);
  const attractions =
    nearby.length > 0
      ? nearby.map((a) => ({
          name: a.name,
          description: a.whyVisit,
          category: a.category,
          duration: `${Math.round(a.travelTimeMinutes / 30) * 0.5 + 1} hours`,
          estimatedCost: d.entryFee?.indianInr || 50,
        }))
      : [
          {
            name: `${d.name} Heritage Exploration`,
            description: d.shortDescription,
            category: d.categories[0] || "Heritage",
            duration: "2.5 hours",
            estimatedCost: d.entryFee?.indianInr || 50,
          },
        ];

  return {
    id: d.id,
    name: d.name,
    state: d.state,
    tagline: d.tagline,
    description: d.detailedDescription,
    shortDescription: d.shortDescription,
    image: d.image,
    imageCredit: d.imageCredit,
    latitude: d.coordinates.lat,
    longitude: d.coordinates.lng,
    popularity: 90 + (d.unescoHeritage ? 6 : 0),
    costIndex: d.costIndex,
    bestTimeToVisit: d.bestTimeToVisit.season,
    categories: d.categories,
    hue: "#c75c3d",
    attractions,
  };
});

// Deduplicate: baseCities takes precedence for specific local custom fields
const baseCityIds = new Set(baseCities.map((c) => c.id));
export const cities: City[] = [
  ...baseCities,
  ...stateRegistryCities.filter((c) => !baseCityIds.has(c.id)),
];

export const activities: Activity[] = cities.flatMap((city) =>
  city.attractions.map((attraction, index) => ({
    id: `${city.id}-act-${index + 1}`,
    name: attraction.name,
    cityId: city.id,
    category: attraction.category,
    duration: attraction.duration,
    estimatedCost: attraction.estimatedCost,
    bestTime: index % 2 === 0 ? "Morning" : "Sunset / Evening",
    description: attraction.description,
    image: city.image,
    rating: Number((4.6 + (index * 0.1) % 0.4).toFixed(1))
  }))
);

const baseHotels: Hotel[] = [
  {
    id: "stay-delhi-1",
    name: "The Imperial Janpath",
    cityId: "delhi",
    category: "Heritage",
    estimatedCost: 14500,
    rating: 4.8,
    reviewsCount: 1420,
    amenities: ["Spa", "Art Collection", "Pool", "Fine Dining", "Wi-Fi"],
    image: "https://images.pexels.com/photos/17209233/pexels-photo-17209233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Legendary 1930s Art Deco luxury sanctuary with expansive lawns in the heart of Lutyens' Delhi."
  },
  {
    id: "stay-delhi-2",
    name: "Haveli Dharampura",
    cityId: "delhi",
    category: "Boutique",
    estimatedCost: 6800,
    rating: 4.7,
    reviewsCount: 890,
    amenities: ["Rooftop Views", "Kathak Evenings", "Mughlai Kitchen", "Courtyard"],
    image: "https://images.pexels.com/photos/33743364/pexels-photo-33743364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Award-winning UNESCO-restored 19th-century Mughal haveli inside the alleys of Old Delhi."
  },
  {
    id: "stay-jaipur-1",
    name: "Samode Haveli",
    cityId: "jaipur",
    category: "Heritage",
    estimatedCost: 11200,
    rating: 4.9,
    reviewsCount: 1100,
    amenities: ["Heritage Pool", "Frescoed Rooms", "Spa", "Private Gardens"],
    image: "https://images.pexels.com/photos/33689321/pexels-photo-33689321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "An intimate 225-year-old royal retreat with hand-painted archways and serene courtyard dining."
  },
  {
    id: "stay-jaipur-2",
    name: "Dera Mandawa Homestay",
    cityId: "jaipur",
    category: "Homestay",
    estimatedCost: 3800,
    rating: 4.8,
    reviewsCount: 640,
    amenities: ["Cooking Classes", "Courtyard", "Home Cooked Meals", "Wi-Fi"],
    image: "https://images.pexels.com/photos/19149605/pexels-photo-19149605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Authentic Rajput hospitality with family recipes, organic gardens, and warm storytelling."
  },
  {
    id: "stay-udaipur-1",
    name: "Fateh Prakash Palace",
    cityId: "udaipur",
    category: "Luxury",
    estimatedCost: 16800,
    rating: 4.9,
    reviewsCount: 1840,
    amenities: ["Lake Pichola View", "Infinity Pool", "Crystal Gallery Access", "Spa"],
    image: "https://images.pexels.com/photos/33658451/pexels-photo-33658451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Located inside the City Palace complex directly on Lake Pichola with peerless sunset vistas."
  },
  {
    id: "stay-udaipur-2",
    name: "Kothar Haveli On The Lake",
    cityId: "udaipur",
    category: "Boutique",
    estimatedCost: 4500,
    rating: 4.6,
    reviewsCount: 520,
    amenities: ["Rooftop Cafe", "Lake Views", "Jharokha Seating", "Wi-Fi"],
    image: "https://images.pexels.com/photos/1719173/pexels-photo-1719173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Charming traditional haveli steps away from Gangaur Ghat with romantic rooftop dinners."
  },
  {
    id: "stay-goa-1",
    name: "Ahilya by the Sea",
    cityId: "goa",
    category: "Boutique",
    estimatedCost: 18500,
    rating: 4.9,
    reviewsCount: 650,
    amenities: ["Sea-facing Pools", "Dolphin Views", "Ayurvedic Spa", "Plunge Pool"],
    image: "https://images.pexels.com/photos/863985/pexels-photo-863985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Quiet understated luxury set in lush tropical gardens directly at the meeting of river and sea in Nerul."
  },
  {
    id: "stay-goa-2",
    name: "Casa Da Graça",
    cityId: "goa",
    category: "Heritage",
    estimatedCost: 4200,
    rating: 4.7,
    reviewsCount: 480,
    amenities: ["Balcony Verandas", "Breakfast Included", "Bicycle Rental"],
    image: "https://images.pexels.com/photos/31897042/pexels-photo-31897042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Lovingly restored 150-year-old Portuguese mansion with high wooden rafters and bird-filled gardens."
  },
  {
    id: "stay-varanasi-1",
    name: "BrijRama Palace",
    cityId: "varanasi",
    category: "Heritage",
    estimatedCost: 19000,
    rating: 4.9,
    reviewsCount: 1350,
    amenities: ["Ghatside Elevator", "Classical Music", "Pure Veg Gourmet", "Sunrise Terrace"],
    image: "https://images.pexels.com/photos/17869844/pexels-photo-17869844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "210-year-old historic sandstone fortress palace perched right atop Darbhanga Ghat on the River Ganga."
  },
  {
    id: "stay-varanasi-2",
    name: "Ganges View Heritage Stays",
    cityId: "varanasi",
    category: "Boutique",
    estimatedCost: 4900,
    rating: 4.7,
    reviewsCount: 710,
    amenities: ["Library", "Ghat Terrace", "Organic Meals", "Yoga Deck"],
    image: "https://images.pexels.com/photos/33790770/pexels-photo-33790770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Intellectual gathering point and peaceful colonial mansion at Assi Ghat, famous for art and scholars."
  },
  {
    id: "stay-kochi-1",
    name: "Brunton Boatyard (CGH Earth)",
    cityId: "kochi",
    category: "Heritage",
    estimatedCost: 12500,
    rating: 4.8,
    reviewsCount: 930,
    amenities: ["Harbour Pier", "Eco-friendly", "Ayurveda", "Sea-view Balcony"],
    image: "https://images.pexels.com/photos/14973045/pexels-photo-14973045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Reconstructed Victorian shipyard on the Fort Kochi harbour channel where ships glide past your room."
  },
  {
    id: "stay-srinagar-1",
    name: "Sukoon Luxury Houseboat",
    cityId: "srinagar",
    category: "Luxury",
    estimatedCost: 13500,
    rating: 4.9,
    reviewsCount: 680,
    amenities: ["Dal Lake Mooring", "Cedar Interiors", "Rooftop Sundeck", "Kashmiri Wazwan"],
    image: "https://images.pexels.com/photos/11522584/pexels-photo-11522584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Eco-certified cedar luxury houseboat on peaceful Nagin Lake with handcrafted chandeliers and mountain sunsets."
  },
  {
    id: "stay-leh-1",
    name: "The Grand Dragon Ladakh",
    cityId: "leh",
    category: "Luxury",
    estimatedCost: 15500,
    rating: 4.8,
    reviewsCount: 820,
    amenities: ["Mountain Views", "Oxygen Enriched", "Solar Heated", "Ladakhi Bakery"],
    image: "https://images.pexels.com/photos/38087449/pexels-photo-38087449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Eco-luxury mountain resort with floor-to-ceiling windows looking out towards the snow peaks of the Stok Kangri range."
  },
  {
    id: "stay-shillong-1",
    name: "Ri Kynjai - Serenity by the Lake",
    cityId: "shillong",
    category: "Resort",
    estimatedCost: 12800,
    rating: 4.9,
    reviewsCount: 610,
    amenities: ["Umiam Lake View", "Khasi Architecture", "Spa", "Pine Terrace"],
    image: "https://images.pexels.com/photos/5036325/pexels-photo-5036325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Designed in traditional thatch-roofed Khasi architecture overlooking the tranquil emerald waters of Umiam Lake."
  },
  {
    id: "stay-jaisalmer-1",
    name: "Suryagarh Desert Citadel",
    cityId: "jaisalmer",
    category: "Heritage",
    estimatedCost: 19800,
    rating: 4.9,
    reviewsCount: 1450,
    amenities: ["Thar Desert Views", "Rasiya Breakfast", "Spa & Pool", "Folk Musicians"],
    image: "https://images.pexels.com/photos/33681488/pexels-photo-33681488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Imposing yellow sandstone fortress palace rising proudly out of the Great Indian Desert with royal hospitality."
  },
  {
    id: "stay-munnar-1",
    name: "Windermere Estate Tea Retreat",
    cityId: "munnar",
    category: "Boutique",
    estimatedCost: 9500,
    rating: 4.8,
    reviewsCount: 770,
    amenities: ["Tea Garden Walks", "Cardamom Farm", "Fireplace", "Valley View"],
    image: "https://images.pexels.com/photos/12035356/pexels-photo-12035356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Charming hillside coffee and cardamom plantation retreat framed by rolling clouds and century-old cedar trees."
  },
  {
    id: "stay-gangtok-1",
    name: "Mayfair Spa Resort & Casino",
    cityId: "gangtok",
    category: "Resort",
    estimatedCost: 13200,
    rating: 4.8,
    reviewsCount: 1050,
    amenities: ["Monastic Architecture", "Forest Spa", "Heated Pool", "Sikkimese Dining"],
    image: "https://images.pexels.com/photos/20046905/pexels-photo-20046905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Monastery-style resort set within 48 acres of lush sub-tropical mountain forests with world-class wellness."
  },
  {
    id: "stay-pondicherry-1",
    name: "Palais de Mahé (CGH Earth)",
    cityId: "pondicherry",
    category: "Heritage",
    estimatedCost: 14200,
    rating: 4.9,
    reviewsCount: 880,
    amenities: ["French Quarter Pool", "Courtyard Dining", "Ayurvedic Treatments", "Beach 50m"],
    image: "https://images.pexels.com/photos/7391720/pexels-photo-7391720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Yellow-tinted French colonial mansion steps from Promenade Beach with arched verandahs and deep stone courtyards."
  }
];

// Merge verified accommodations from state registry
const registryHotels: Hotel[] = getAccommodations().map((h) => ({
  id: h.id,
  name: h.name,
  cityId: h.destinationId,
  category: h.type.includes("Heritage")
    ? "Heritage"
    : h.type.includes("Resort")
    ? "Resort"
    : "Boutique",
  estimatedCost: h.priceRangeInr
    ? Math.round((h.priceRangeInr.min + h.priceRangeInr.max) / 2)
    : 9500,
  rating: h.rating || 4.8,
  reviewsCount: h.reviewsCount || 1000,
  amenities: h.amenities,
  image: h.image,
  description: h.locationDescription,
}));

const baseHotelIds = new Set(baseHotels.map((h) => h.id));
export const hotels: Hotel[] = [
  ...baseHotels,
  ...registryHotels.filter((h) => !baseHotelIds.has(h.id)),
];

export const sampleTransportRoutes: TransportOption[] = [
  {
    id: "trans-1",
    mode: "Train",
    fromCity: "Delhi",
    toCity: "Jaipur",
    priceEstimated: 1250,
    duration: "4h 20m",
    badge: "Best Overall",
    rationale: "Vande Bharat Express offers timely, scenic, and comfortable transit directly from central station to central station.",
    carbonScore: "Low"
  },
  {
    id: "trans-2",
    mode: "Bus",
    fromCity: "Delhi",
    toCity: "Jaipur",
    priceEstimated: 750,
    duration: "5h 15m",
    badge: "Cheapest",
    rationale: "Luxury AC Sleeper coaches run every 30 minutes via the new Delhi-Mumbai Expressway.",
    carbonScore: "Moderate"
  },
  {
    id: "trans-3",
    mode: "Flight",
    fromCity: "Delhi",
    toCity: "Jaipur",
    priceEstimated: 3800,
    duration: "1h 05m",
    badge: "Fastest",
    rationale: "Shortest flight time, though airport security & transit adds roughly 2.5 hours total journey time.",
    carbonScore: "High"
  },
  {
    id: "trans-4",
    mode: "Cab",
    fromCity: "Delhi",
    toCity: "Jaipur",
    priceEstimated: 4200,
    duration: "4h 45m",
    badge: "Most Comfortable",
    rationale: "Door-to-door convenience with option to stop at Neemrana Fort Palace en route.",
    carbonScore: "Moderate"
  }
];

export const sampleTrip: Trip = {
  id: "royal-rajasthan",
  name: "Grand Golden Triangle & Lakes",
  dates: "14 Nov – 21 Nov 2026",
  budget: 65000,
  cover: "https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  public: true,
  stops: [
    { cityId: "delhi", date: "14 Nov", visited: true },
    { cityId: "jaipur", date: "16 Nov", visited: true },
    { cityId: "udaipur", date: "19 Nov", visited: false }
  ],
  expenses: [
    { category: "Stay", amount: 24000 },
    { category: "Transport", amount: 14500 },
    { category: "Activities", amount: 6800 },
    { category: "Food", amount: 9200 },
    { category: "Other", amount: 2500 }
  ],
  itinerary: [
    { id: "itin-1", stopIndex: 0, time: "09:30", title: "Humayun's Tomb Heritage Walk", duration: "2 hours", completed: true, cost: 50, location: "Delhi" },
    { id: "itin-2", stopIndex: 0, time: "14:00", title: "Chandni Chowk Old City Paranthe Wali Gali", duration: "2.5 hours", completed: true, cost: 400, location: "Delhi" },
    { id: "itin-3", stopIndex: 1, time: "09:00", title: "Amber Fort & Sheesh Mahal Exploration", duration: "3.5 hours", completed: true, cost: 100, location: "Jaipur" },
    { id: "itin-4", stopIndex: 1, time: "16:30", title: "Hawa Mahal & Pink City Bazaar Walk", duration: "2 hours", completed: false, cost: 50, location: "Jaipur" },
    { id: "itin-5", stopIndex: 2, time: "10:00", title: "Udaipur City Palace & Crystal Gallery", duration: "3 hours", completed: false, cost: 300, location: "Udaipur" },
    { id: "itin-6", stopIndex: 2, time: "17:00", title: "Lake Pichola Sunset Boat Cruise", duration: "1.5 hours", completed: false, cost: 500, location: "Udaipur" }
  ]
};
