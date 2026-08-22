// scripts/build_all_data.js
const fs = require('fs');
const path = require('path');
const {
  CITY_IMAGES,
  FOOD_IMAGES,
  ADVENTURE_IMAGES,
  CULTURE_IMAGES,
  SPIRITUAL_IMAGES,
  SHOPPING_IMAGES,
  HOTEL_IMAGES
} = require('./image_catalog.js');

// 1. Comprehensive Master Cities
const MASTER_CITIES = [
  // NORTH - Rajasthan
  { id: "city-jaipur", name: "Jaipur", state: "Rajasthan", region: "North", tier: "Heritage Capital", lat: 26.9124, lng: 75.7873, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.9, reviewsCount: 3820, bestSeason: "Oct - Mar", tags: ["Heritage", "Forts", "Palaces", "Royal Food", "Shopping"], tagline: "The Regal Pink City & Amber Fortresses", description: "Terracotta-pink palaces, Amer Fort, bustling Johari Bazaar, and astronomical marvels at Jantar Mantar." },
  { id: "city-udaipur", name: "Udaipur", state: "Rajasthan", region: "North", tier: "Romantic City", lat: 24.5854, lng: 73.7125, costIndex: "Medium", avgCostPerDay: 3200, rating: 4.92, reviewsCount: 3100, bestSeason: "Sep - Mar", tags: ["Lakes", "Palaces", "Romance", "Sunset Cruises", "Art"], tagline: "City of Lakes & Venice of the East", description: "Shimmering Lake Pichola, royal Lake Palace, Jagmandir, and the monumental City Palace complex." },
  { id: "city-jodhpur", name: "Jodhpur", state: "Rajasthan", region: "North", tier: "Heritage Hub", lat: 26.2389, lng: 73.0243, costIndex: "Medium", avgCostPerDay: 2400, rating: 4.85, reviewsCount: 2600, bestSeason: "Oct - Mar", tags: ["Blue Houses", "Forts", "Desert", "Handicrafts"], tagline: "The Sun City & Mighty Mehrangarh", description: "Vibrant indigo-painted alleyways crowned by the imposing Mehrangarh Fort and Umaid Bhawan Palace." },
  { id: "city-jaisalmer", name: "Jaisalmer", state: "Rajasthan", region: "North", tier: "Desert Oasis", lat: 26.9157, lng: 70.9083, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.88, reviewsCount: 2400, bestSeason: "Nov - Feb", tags: ["Desert", "Sand Dunes", "Golden Fort", "Camel Safari"], tagline: "The Golden City & Thar Desert Dunes", description: "Living Golden Fort made of yellow sandstone, desert camel safaris in Sam Dunes, and starry stargazing." },
  { id: "city-pushkar", name: "Pushkar", state: "Rajasthan", region: "North", tier: "Spiritual Oasis", lat: 26.4897, lng: 74.5511, costIndex: "Low", avgCostPerDay: 1600, rating: 4.75, reviewsCount: 1900, bestSeason: "Oct - Mar", tags: ["Spiritual", "Brahma Temple", "Sacred Lake", "Camel Fair"], tagline: "Sacred Lake & Rare Brahma Shrine", description: "Holy lake with 52 ghats, unique Lord Brahma Temple, colorful desert bazaars, and scenic ropeway rides." },
  { id: "city-bikaner", name: "Bikaner", state: "Rajasthan", region: "North", tier: "Heritage Hub", lat: 28.0229, lng: 73.3119, costIndex: "Low", avgCostPerDay: 1900, rating: 4.7, reviewsCount: 1400, bestSeason: "Oct - Mar", tags: ["Forts", "Snacks & Bhujia", "Camel Breeding", "Havelis"], tagline: "Junagarh Fort & Culinary Delights", description: "Impregnable Junagarh Fort, Karni Mata Rat Temple, intricate havelis, and world-famous Bikaneri snacks." },
  { id: "city-mount-abu", name: "Mount Abu", state: "Rajasthan", region: "North", tier: "Hill Station", lat: 24.5926, lng: 72.7156, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.7, reviewsCount: 1800, bestSeason: "Year Round", tags: ["Hill Station", "Dilwara Temples", "Nakki Lake", "Sunsets"], tagline: "Rajasthan's Only Hill Station & Marble Marvels", description: "Serene Nakki Lake, intricately carved marble Dilwara Jain Temples, and breathtaking Guru Shikhar views." },
  { id: "city-ranthambore", name: "Ranthambore (Sawai Madhopur)", state: "Rajasthan", region: "North", tier: "Tiger Reserve", lat: 26.0173, lng: 76.5026, costIndex: "High", avgCostPerDay: 4200, rating: 4.92, reviewsCount: 3100, bestSeason: "Oct - Jun", tags: ["Tiger Safari", "Ranthambore Fort", "Padam Talao", "Wildlife"], tagline: "Royal Bengal Tigers in Historic Fortress Ruins", description: "Iconic tiger sightings against the backdrop of 10th-century Ranthambore Fort and banyan trees." },
  { id: "city-kumbhalgarh", name: "Kumbhalgarh", state: "Rajasthan", region: "North", tier: "Great Wall of India", lat: 25.1480, lng: 73.5872, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.88, reviewsCount: 1900, bestSeason: "Oct - Mar", tags: ["Great Wall of India", "Badal Mahal", "Fortress", "Aravalli Hills"], tagline: "World's Second Longest Wall & Mewar Fortress", description: "Massive 36-kilometer continuous wall, birth palace of Maharana Pratap, and evening light & sound shows." },
  { id: "city-bundi", name: "Bundi", state: "Rajasthan", region: "North", tier: "Stepwell Capital", lat: 25.4415, lng: 75.6429, costIndex: "Low", avgCostPerDay: 1600, rating: 4.78, reviewsCount: 1200, bestSeason: "Oct - Mar", tags: ["Taragarh Fort", "Stepwells (Baoris)", "Miniature Paintings", "Chhatris"], tagline: "City of Stepwells & Taragarh Fortress", description: "Intricate stepwells like Raniji ki Baori, Taragarh Fort, Chitrashala miniature frescoes, and serene Nawal Sagar." },
  { id: "city-chittorgarh", name: "Chittorgarh", state: "Rajasthan", region: "North", tier: "Historic Fortress", lat: 24.8887, lng: 74.6269, costIndex: "Low", avgCostPerDay: 1600, rating: 4.8, reviewsCount: 1650, bestSeason: "Oct - Mar", tags: ["Vijay Stambh", "Rajput Valour", "Rani Padmini Palace", "Fort"], tagline: "Symbol of Rajput Valour & Epic Fort", description: "India's largest fort complex, legendary Vijay Stambh (Tower of Victory), and Rani Padmini's palace." },
  { id: "city-alwar", name: "Alwar & Sariska", state: "Rajasthan", region: "North", tier: "Wildlife & Heritage", lat: 27.5530, lng: 76.6346, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.68, reviewsCount: 1300, bestSeason: "Oct - Mar", tags: ["Tiger Reserve", "Bhangarh Fort", "Siliserh Lake", "Palaces"], tagline: "Tiger Safaris & Mysterious Bhangarh", description: "Royal Bengal Tiger sightings in Sariska National Park, mystery of Bhangarh, and Siliserh Lake Palace." },
  { id: "city-shekhawati", name: "Shekhawati (Mandawa)", state: "Rajasthan", region: "North", tier: "Open Art Gallery", lat: 28.0555, lng: 75.1466, costIndex: "Low", avgCostPerDay: 1900, rating: 4.74, reviewsCount: 1100, bestSeason: "Oct - Mar", tags: ["Fresco Havelis", "Open Air Gallery", "Rural Culture", "Art"], tagline: "World's Largest Open-Air Art Gallery", description: "Centuries-old grand merchant havelis adorned with hand-painted mythological and historic frescoes." },
  { id: "city-ajmer", name: "Ajmer", state: "Rajasthan", region: "North", tier: "Spiritual Hub", lat: 26.4499, lng: 74.6399, costIndex: "Low", avgCostPerDay: 1500, rating: 4.72, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Dargah Sharif", "Ana Sagar Lake", "Sufism", "Qawwali"], tagline: "Sufi Devotion & Khwaja Garib Nawaz", description: "World-revered Ajmer Sharif Dargah, Ana Sagar Lake evening promenades, and Taragarh Fort." },

  // NORTH - Delhi, UP, Punjab, Uttarakhand, HP, J&K, Ladakh, Haryana
  { id: "city-delhi", name: "New Delhi & NCR", state: "Delhi", region: "North", tier: "Metropolis", lat: 28.6139, lng: 77.2090, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.82, reviewsCount: 6500, bestSeason: "Oct - Mar", tags: ["Monuments", "Street Food", "Museums", "Bazaars", "Heritage"], tagline: "Capital of Empires & Culinary Crossroads", description: "Red Fort, Qutub Minar, Chandni Chowk street food, Humayun's Tomb, and sprawling diplomatic avenues." },
  { id: "city-varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North", tier: "Spiritual Capital", lat: 25.3176, lng: 82.9739, costIndex: "Low", avgCostPerDay: 1600, rating: 4.88, reviewsCount: 4890, bestSeason: "Oct - Apr", tags: ["Spiritual", "Ghats", "Ganga Aarti", "Kashi Vishwanath", "Silk"], tagline: "Spiritual Heart & Ancient Sacred Ghats", description: "Oldest living city on the sacred Ganga, grand evening Dashashwamedh Aarti, and Kashi Vishwanath temple." },
  { id: "city-agra", name: "Agra", state: "Uttar Pradesh", region: "North", tier: "Heritage Wonder", lat: 27.1767, lng: 78.0081, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.9, reviewsCount: 5200, bestSeason: "Oct - Mar", tags: ["Taj Mahal", "Mughal Architecture", "Petha", "Forts"], tagline: "City of Taj & Mughal Architecture", description: "Home to the immortal marble monument Taj Mahal, Agra Fort, Fatehpur Sikri, and delicious Agra petha." },
  { id: "city-lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "North", tier: "Cultural Hub", lat: 26.8467, lng: 80.9462, costIndex: "Low", avgCostPerDay: 1800, rating: 4.8, reviewsCount: 2900, bestSeason: "Oct - Mar", tags: ["Nawabi Heritage", "Awadhi Cuisine", "Chikan Kari", "Imambara"], tagline: "City of Nawabs, Tehzeeb & Kebabs", description: "Grand Bara Imambara, delicate Chikankari embroidery, rich Awadhi Biryani, and classic Tunday Kebabs." },
  { id: "city-ayodhya", name: "Ayodhya", state: "Uttar Pradesh", region: "North", tier: "Spiritual Pilgrimage", lat: 26.7922, lng: 82.1998, costIndex: "Low", avgCostPerDay: 1500, rating: 4.85, reviewsCount: 3200, bestSeason: "Oct - Apr", tags: ["Ram Mandir", "Saryu Ghats", "Pilgrimage", "Ancient"], tagline: "Birthplace of Shri Ram & Saryu Aarti", description: "Grand Ram Janmabhoomi Mandir, holy Saryu river ghats, Hanuman Garhi, and vibrant spiritual atmosphere." },
  { id: "city-mathura-vrindavan", name: "Mathura & Vrindavan", state: "Uttar Pradesh", region: "North", tier: "Spiritual Pilgrimage", lat: 27.4924, lng: 77.6737, costIndex: "Low", avgCostPerDay: 1400, rating: 4.82, reviewsCount: 3100, bestSeason: "Oct - Mar", tags: ["Krishna Janmabhoomi", "Banke Bihari", "Prem Mandir", "Holi"], tagline: "Braj Bhoomi & Eternal Devotion", description: "Sacred land of Lord Krishna, Banke Bihari temple, illuminated Prem Mandir, and divine Yamuna aarti." },
  { id: "city-prayagraj", name: "Prayagraj", state: "Uttar Pradesh", region: "North", tier: "Spiritual Hub", lat: 25.4358, lng: 81.8463, costIndex: "Low", avgCostPerDay: 1500, rating: 4.75, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Triveni Sangam", "Kumbh Mela", "Anand Bhavan", "History"], tagline: "Holy Triveni Sangam & Kumbh City", description: "Confluence of sacred Ganga, Yamuna & Saraswati, Akbar's Fort, Anand Bhawan, and ancient temples." },
  { id: "city-jhansi", name: "Jhansi", state: "Uttar Pradesh", region: "North", tier: "Historic Fortress", lat: 25.4484, lng: 78.5685, costIndex: "Low", avgCostPerDay: 1400, rating: 4.65, reviewsCount: 1100, bestSeason: "Oct - Mar", tags: ["Rani Lakshmibai", "Jhansi Fort", "Museum", "Freedom Struggle"], tagline: "Gateway to Bundelkhand & Rani Lakshmibai", description: "Historic Jhansi Fort commanding views, Rani Mahal, and bravery tales of 1857 freedom struggle." },
  { id: "city-kanpur", name: "Kanpur", state: "Uttar Pradesh", region: "North", tier: "Commercial Hub", lat: 26.4499, lng: 80.3319, costIndex: "Low", avgCostPerDay: 1500, rating: 4.6, reviewsCount: 1400, bestSeason: "Oct - Mar", tags: ["Bithoor", "Leather Goods", "Ganga Barrage", "Street Food"], tagline: "Industrial Powerhouse & Sacred Bithoor", description: "Ancient Bithoor on Ganga banks, JK Temple, Allen Forest Zoo, and world-class leather markets." },
  { id: "city-gorakhpur", name: "Gorakhpur & Kushinagar", state: "Uttar Pradesh", region: "North", tier: "Spiritual Hub", lat: 26.7606, lng: 83.3732, costIndex: "Low", avgCostPerDay: 1400, rating: 4.7, reviewsCount: 1500, bestSeason: "Oct - Mar", tags: ["Gorakhnath Temple", "Kushinagar", "Buddha Parinirvana", "Gita Press"], tagline: "Gorakhnath Peeth & Lord Buddha's Parinirvana", description: "Spiritual Gorakhnath Math, historic Gita Press, and Lord Buddha's Mahaparinirvana temple at Kushinagar." },
  { id: "city-amritsar", name: "Amritsar", state: "Punjab", region: "North", tier: "Spiritual Hub", lat: 31.6340, lng: 74.8723, costIndex: "Low", avgCostPerDay: 1700, rating: 4.95, reviewsCount: 4900, bestSeason: "Oct - Mar", tags: ["Golden Temple", "Langar", "Wagah Border", "Kulcha", "History"], tagline: "Golden Temple & Wagah Border Patriotism", description: "Gilded Sri Harmandir Sahib (Golden Temple), world's largest community kitchen langar, and Wagah ceremony." },
  { id: "city-chandigarh", name: "Chandigarh", state: "Punjab", region: "North", tier: "Modern Planned City", lat: 30.7333, lng: 76.7794, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.78, reviewsCount: 2100, bestSeason: "Sep - Mar", tags: ["Rock Garden", "Sukhna Lake", "Clean Green", "Architecture"], tagline: "The City Beautiful & Nek Chand's Vision", description: "Le Corbusier's modern city, Nek Chand's Rock Garden, serene Sukhna Lake, and lush Rose Garden." },
  { id: "city-patiala", name: "Patiala", state: "Punjab", region: "North", tier: "Royal Heritage", lat: 30.3398, lng: 76.3869, costIndex: "Low", avgCostPerDay: 1600, rating: 4.65, reviewsCount: 1100, bestSeason: "Oct - Mar", tags: ["Qila Mubarak", "Sheesh Mahal", "Phulkari", "Royal Cuisine"], tagline: "Royal Forts, Phulkari & Grandeur", description: "Grand Qila Mubarak fortress, Sheesh Mahal mirror palace, authentic Patiala peg culture, and Phulkari craft." },
  { id: "city-ludhiana", name: "Ludhiana", state: "Punjab", region: "North", tier: "Commercial Hub", lat: 30.9010, lng: 75.8573, costIndex: "Low", avgCostPerDay: 1700, rating: 4.6, reviewsCount: 1200, bestSeason: "Oct - Mar", tags: ["Shopping", "Punjab Culture", "Heritage Museum", "Food"], tagline: "Manchester of India & Punjabi Hospitality", description: "Bustling markets, Maharaja Ranjit Singh War Museum, rich Punjabi dhaba cuisine, and textile hubs." },
  { id: "city-rishikesh", name: "Rishikesh", state: "Uttarakhand", region: "North", tier: "Adventure & Yoga Hub", lat: 30.0869, lng: 78.2676, costIndex: "Low", avgCostPerDay: 1800, rating: 4.9, reviewsCount: 3900, bestSeason: "Sep - May", tags: ["Yoga", "River Rafting", "Ganga Aarti", "Bungee Jumping", "Cafes"], tagline: "Yoga Capital of the World & River Thrills", description: "White-water rafting on the Ganga, Beatles Ashram, Laxman Jhula, bungee jumping, and serene ghats." },
  { id: "city-haridwar", name: "Haridwar", state: "Uttarakhand", region: "North", tier: "Spiritual Pilgrimage", lat: 29.9457, lng: 78.1642, costIndex: "Low", avgCostPerDay: 1400, rating: 4.8, reviewsCount: 3100, bestSeason: "Sep - Apr", tags: ["Har Ki Pauri", "Ganga Snan", "Mansa Devi", "Aarti"], tagline: "Gateway to the Gods & Har Ki Pauri Aarti", description: "Holy dip at Har Ki Pauri, grand evening diya aarti, Mansa Devi ropeway, and ancient sadhu akharas." },
  { id: "city-dehradun", name: "Dehradun", state: "Uttarakhand", region: "North", tier: "Valley Capital", lat: 30.3165, lng: 78.0322, costIndex: "Medium", avgCostPerDay: 2000, rating: 4.72, reviewsCount: 1900, bestSeason: "Year Round", tags: ["Valley", "Robber's Cave", "Forest Research", "Bakeries"], tagline: "Doon Valley, Caves & Colonial Charm", description: "Picturesque Doon valley, Robber's Cave stream, grand Forest Research Institute, and bakeries." },
  { id: "city-mussoorie", name: "Mussoorie", state: "Uttarakhand", region: "North", tier: "Hill Station", lat: 30.4598, lng: 78.0644, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.82, reviewsCount: 3100, bestSeason: "Mar - Jun, Sep - Nov", tags: ["Queen of Hills", "Kempty Falls", "Mall Road", "Gun Hill"], tagline: "Queen of the Hills & Misty Vistas", description: "Panoramic Himalayan views, Kempty Falls, historic Mall Road strolls, and Gun Hill ropeway." },
  { id: "city-nainital", name: "Nainital", state: "Uttarakhand", region: "North", tier: "Lake City", lat: 29.3919, lng: 79.4542, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.8, reviewsCount: 2800, bestSeason: "Mar - Jun, Sep - Nov", tags: ["Naini Lake", "Boating", "Snow View", "Misty Hills"], tagline: "Emerald Lake & Kumaon Foothills", description: "Crescent-shaped emerald Naini Lake boating, Naina Devi Temple, Snow View point, and misty walks." },
  { id: "city-jim-corbett", name: "Jim Corbett (Ramnagar)", state: "Uttarakhand", region: "North", tier: "Wildlife Sanctuary", lat: 29.5300, lng: 78.7747, costIndex: "Medium", avgCostPerDay: 3200, rating: 4.88, reviewsCount: 2900, bestSeason: "Nov - Jun", tags: ["Tiger Safari", "Dhikala", "Wild Elephants", "Jungle Resort"], tagline: "India's First Tiger Sanctuary & Wilderness", description: "Thrill of Dhikala canter safaris, wild elephant herds, rich birdlife, and riverside forest lodges." },
  { id: "city-auli", name: "Auli", state: "Uttarakhand", region: "North", tier: "Ski Destination", lat: 30.5284, lng: 79.5694, costIndex: "High", avgCostPerDay: 3800, rating: 4.9, reviewsCount: 2100, bestSeason: "Dec - Mar (Snow), May - Oct", tags: ["Skiing", "Cable Car", "Nanda Devi View", "Meadows"], tagline: "Skiing Paradise & Majestic Nanda Devi Peak", description: "Asia's second highest ropeway, sparkling ski slopes with direct views of Nanda Devi and Trishul." },
  { id: "city-kedarnath-badrinath", name: "Kedarnath & Badrinath", state: "Uttarakhand", region: "North", tier: "Sacred Char Dham", lat: 30.7352, lng: 79.0669, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.98, reviewsCount: 4500, bestSeason: "May - Oct", tags: ["Char Dham", "Shiva Jyotirlinga", "Himalayan Treks", "Sacred"], tagline: "Abode of Lord Shiva & Vishnu in the Himalayas", description: "Holiest Char Dham Himalayan shrines surrounded by towering snow glaciated peaks and Mandakini river." },
  { id: "city-kausani", name: "Kausani", state: "Uttarakhand", region: "North", tier: "Scenic Panorama", lat: 29.8543, lng: 79.5967, costIndex: "Low", avgCostPerDay: 1900, rating: 4.75, reviewsCount: 1200, bestSeason: "Sep - May", tags: ["300km Himalayan View", "Trishul Peak", "Tea Gardens", "Quiet"], tagline: "Switzerland of India & 300-km Himalayan View", description: "Unobstructed 300km panoramic views of Trishul, Nanda Devi, and Panchachuli peaks with organic tea estates." },
  { id: "city-shimla", name: "Shimla", state: "Himachal Pradesh", region: "North", tier: "Colonial Hill Station", lat: 31.1048, lng: 77.1734, costIndex: "Medium", avgCostPerDay: 2900, rating: 4.82, reviewsCount: 3700, bestSeason: "Mar - Jun, Dec - Feb", tags: ["Mall Road", "Toy Train", "Jakhoo Temple", "Snowfall"], tagline: "Summer Capital & Historic Ridge", description: "UNESCO Kalka-Shimla Toy Train, colonial Ridge, Christ Church, and giant Jakhoo Hanuman statue." },
  { id: "city-manali", name: "Manali", state: "Himachal Pradesh", region: "North", tier: "Alpine Resort", lat: 32.2432, lng: 77.1892, costIndex: "Medium", avgCostPerDay: 3000, rating: 4.9, reviewsCount: 4200, bestSeason: "Oct - Jun", tags: ["Solang Valley", "Rohtang Pass", "Atal Tunnel", "Snow Sports"], tagline: "Valley of the Gods & Snow Thrills", description: "Snow sports in Solang Valley, Atal Tunnel to Lahaul, Old Manali cafes, and pine-scented trails." },
  { id: "city-dharamshala", name: "Dharamshala & McLeodGanj", state: "Himachal Pradesh", region: "North", tier: "Tibetan Sanctuary", lat: 32.2190, lng: 76.3234, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.88, reviewsCount: 2900, bestSeason: "Mar - Jun, Sep - Dec", tags: ["Dalai Lama", "Tibetan Culture", "Triund Trek", "Cricket Stadium"], tagline: "Little Lhasa & Dhauladhar Peaks", description: "Home of His Holiness Dalai Lama, scenic Triund trek, monasteries, and world's highest cricket stadium." },
  { id: "city-spiti-valley", name: "Spiti Valley (Kaza)", state: "Himachal Pradesh", region: "North", tier: "Cold Desert Wonder", lat: 32.2276, lng: 78.0710, costIndex: "Medium", avgCostPerDay: 2700, rating: 4.96, reviewsCount: 1600, bestSeason: "Jun - Oct", tags: ["Key Monastery", "Chandratal Lake", "High Passes", "Stargazing"], tagline: "Middle Land & Pristine High Altitude Monasteries", description: "Dramatic Tibetan monasteries at Key and Dhankar, turquoise Chandratal Lake, and crystal stargazing." },
  { id: "city-kasol-tirthan", name: "Kasol & Tirthan Valley", state: "Himachal Pradesh", region: "North", tier: "Backpacker Haven", lat: 32.0100, lng: 77.3150, costIndex: "Low", avgCostPerDay: 1800, rating: 4.85, reviewsCount: 2700, bestSeason: "Mar - Jun, Sep - Nov", tags: ["Parvati Valley", "Kheerganga Trek", "Trout Fishing", "Riverside"], tagline: "Parvati River Trails & Kheerganga Hot Springs", description: "Chill mountain vibes along Parvati River, hot springs of Kheerganga, and Great Himalayan National Park." },
  { id: "city-dalhousie", name: "Dalhousie & Khajjiar", state: "Himachal Pradesh", region: "North", tier: "Mini Switzerland", lat: 32.5387, lng: 75.9710, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.78, reviewsCount: 2200, bestSeason: "Mar - Jun, Oct - Dec", tags: ["Khajjiar Meadow", "Pine Forests", "Panchpula", "Colonial"], tagline: "Mini Switzerland & Cedar Canopy", description: "Lush saucer-shaped alpine meadow of Khajjiar surrounded by dense cedar woods and Victorian churches." },
  { id: "city-bir-billing", name: "Bir Billing", state: "Himachal Pradesh", region: "North", tier: "Paragliding Capital", lat: 32.0400, lng: 76.7167, costIndex: "Medium", avgCostPerDay: 2400, rating: 4.92, reviewsCount: 2100, bestSeason: "Oct - Jun", tags: ["Paragliding", "Monasteries", "Tea Gardens", "Sunsets"], tagline: "Paragliding Capital of India & Tibetan Stupas", description: "Tandem paragliding from world-class takeoff at Billing, Chokling Monastery, and organic eco-cafes." },
  { id: "city-kinnaur", name: "Kinnaur & Kalpa", state: "Himachal Pradesh", region: "North", tier: "Apple Orchards & Peaks", lat: 31.5385, lng: 78.2792, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.88, reviewsCount: 1400, bestSeason: "Apr - Oct", tags: ["Kinnaur Kailash", "Apple Orchards", "Sangla Valley", "Chitkul"], tagline: "Land of Gods, Apple Orchards & Chitkul", description: "View sacred Kinnaur Kailash peak from Kalpa, explore Baspa valley, and visit Chitkul (last village of India)." },
  { id: "city-srinagar", name: "Srinagar", state: "Jammu & Kashmir", region: "North", tier: "Paradise on Earth", lat: 34.0837, lng: 74.7973, costIndex: "Medium", avgCostPerDay: 3200, rating: 4.92, reviewsCount: 3800, bestSeason: "Apr - Oct, Dec - Feb", tags: ["Dal Lake", "Shikara Ride", "Houseboats", "Mughal Gardens"], tagline: "Jewel of Kashmir & Floating Houseboats", description: "Gentle shikara rides on Dal Lake, staying on handcrafted cedar houseboats, and Mughal garden blossoms." },
  { id: "city-gulmarg", name: "Gulmarg", state: "Jammu & Kashmir", region: "North", tier: "Snow Resort", lat: 34.0484, lng: 74.3805, costIndex: "High", avgCostPerDay: 4500, rating: 4.95, reviewsCount: 2900, bestSeason: "Dec - Mar (Snow), May - Sep", tags: ["Gondola Cable Car", "Skiing", "Snowboard", "Meadows"], tagline: "Meadow of Flowers & Asia's Highest Gondola", description: "World-class powder snow skiing, Asia's highest gondola ride to Apharwat Peak, and pine meadows." },
  { id: "city-pahalgam", name: "Pahalgam", state: "Jammu & Kashmir", region: "North", tier: "Scenic Valley", lat: 34.0163, lng: 75.3150, costIndex: "Medium", avgCostPerDay: 3400, rating: 4.9, reviewsCount: 2600, bestSeason: "Apr - Oct", tags: ["Betaab Valley", "Aru Valley", "Lidder River", "Trout Fishing"], tagline: "Valley of Shepherds & Lidder Waters", description: "Emerald Betaab and Aru valleys, rushing Lidder River, pony treks, and starting point for Amarnath Yatra." },
  { id: "city-sonamarg", name: "Sonamarg", state: "Jammu & Kashmir", region: "North", tier: "Glacier Gateway", lat: 34.3000, lng: 75.2933, costIndex: "Medium", avgCostPerDay: 3100, rating: 4.86, reviewsCount: 1900, bestSeason: "May - Oct", tags: ["Thajiwas Glacier", "Golden Meadows", "Sindh River", "Trekking"], tagline: "Meadow of Gold & Thajiwas Glacier", description: "Glistening Thajiwas Glacier pony treks, sparkling Sindh River rapids, and gateway to Ladakh." },
  { id: "city-jammu", name: "Jammu & Katra", state: "Jammu & Kashmir", region: "North", tier: "Spiritual Gateway", lat: 32.7266, lng: 74.8570, costIndex: "Low", avgCostPerDay: 1600, rating: 4.88, reviewsCount: 4600, bestSeason: "Year Round", tags: ["Vaishno Devi", "Bahu Fort", "Raghunath Temple", "Dogra"], tagline: "City of Temples & Mata Vaishno Devi Yatra", description: "Divine pilgrimage to Shri Mata Vaishno Devi Bhawan in Trikuta hills, Bahu Fort, and Dogra delicacies." },
  { id: "city-patnitop", name: "Patnitop", state: "Jammu & Kashmir", region: "North", tier: "Pine Hill Station", lat: 33.0800, lng: 75.3300, costIndex: "Low", avgCostPerDay: 1900, rating: 4.7, reviewsCount: 1300, bestSeason: "May - Oct, Dec - Feb", tags: ["Pine Forests", "Skyview Gondola", "Snow", "Sanasar Lake"], tagline: "Pine Forests & Skyview Gondola Thrills", description: "India's highest ropeway Skyview, sprawling meadows of Sanasar, pine aroma, and gentle winter snow." },
  { id: "city-leh-ladakh", name: "Leh Ladakh", state: "Ladakh", region: "North", tier: "Trans-Himalayan Desert", lat: 34.1526, lng: 77.5771, costIndex: "High", avgCostPerDay: 3800, rating: 4.97, reviewsCount: 4100, bestSeason: "May - Sep", tags: ["Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"], tagline: "Land of High Passes & Azure Pangong Tso", description: "Surreal color-changing Pangong Lake, double-humped camel safari in Nubra, and world-record high passes." },
  { id: "city-kargil-zanskar", name: "Kargil & Zanskar Valley", state: "Ladakh", region: "North", tier: "Rugged Frontier", lat: 34.5539, lng: 76.1349, costIndex: "Medium", avgCostPerDay: 3100, rating: 4.85, reviewsCount: 1400, bestSeason: "Jun - Sep", tags: ["Zanskar River", "Chadar Trek", "Suru Valley", "War Memorial"], tagline: "Untamed Zanskar & Dras War Memorial", description: "Dramatic cliffside Phuktal monastery, Dras War Memorial patriotism, and the wild Suru river valley." },
  { id: "city-gurugram", name: "Gurugram & Faridabad", state: "Haryana", region: "North", tier: "Cyber Hub & Lifestyle", lat: 28.4595, lng: 77.0266, costIndex: "High", avgCostPerDay: 3500, rating: 4.75, reviewsCount: 2800, bestSeason: "Oct - Mar", tags: ["Cyber Hub", "Microbreweries", "Museum of Folk Art", "Malls"], tagline: "Millennium City, Microbreweries & High Life", description: "DLF CyberHub gourmet dining, vibrant nightlife, Sultanpur Bird Sanctuary, and contemporary art galleries." },
  { id: "city-kurukshetra", name: "Kurukshetra", state: "Haryana", region: "North", tier: "Mahabharata Heritage", lat: 29.9695, lng: 76.8783, costIndex: "Low", avgCostPerDay: 1400, rating: 4.68, reviewsCount: 1350, bestSeason: "Oct - Mar", tags: ["Brahma Sarovar", "Mahabharata", "Jyotisar", "Gita"], tagline: "Land of the Bhagavad Gita & Brahma Sarovar", description: "Sacred Brahma Sarovar lake, Jyotisar (where Gita was imparted to Arjuna), and Panorama museum." },

  // SOUTH - Karnataka, Tamil Nadu, Kerala, Telangana, Andhra Pradesh, Puducherry
  { id: "city-bengaluru", name: "Bengaluru", state: "Karnataka", region: "South", tier: "Tech & Garden City", lat: 12.9716, lng: 77.5946, costIndex: "High", avgCostPerDay: 3200, rating: 4.82, reviewsCount: 5400, bestSeason: "Year Round", tags: ["Craft Beer", "Gardens", "Palace", "Cafes", "Art"], tagline: "Silicon Valley & Pub Capital of India", description: "Lush Cubbon Park, Lalbagh botanical glasshouse, microbreweries in Indiranagar, and grand Bangalore Palace." },
  { id: "city-mysuru", name: "Mysuru", state: "Karnataka", region: "South", tier: "Royal Cultural Capital", lat: 12.2958, lng: 76.6394, costIndex: "Low", avgCostPerDay: 1900, rating: 4.88, reviewsCount: 3400, bestSeason: "Sep - Mar", tags: ["Mysore Palace", "Silk Sarees", "Mysore Pak", "Dasara"], tagline: "City of Palaces, Sandalwood & Dasara", description: "Illuminated Mysore Palace, Chamundi Hills, melt-in-mouth Mysore Pak sweet, and exquisite silk weaving." },
  { id: "city-hampi", name: "Hampi", state: "Karnataka", region: "South", tier: "UNESCO Wonder", lat: 15.3350, lng: 76.4600, costIndex: "Low", avgCostPerDay: 1700, rating: 4.96, reviewsCount: 4200, bestSeason: "Oct - Mar", tags: ["Vijayanagara Ruins", "Stone Chariot", "Bouldering", "Hippie Island"], tagline: "Ruins of the Vijayanagara Empire & Boulder Landscape", description: "UNESCO Stone Chariot at Vijaya Vittala, Virupaksha Temple, coracle boat rides on Tungabhadra, and bouldering." },
  { id: "city-coorg", name: "Coorg (Madikeri)", state: "Karnataka", region: "South", tier: "Coffee Country", lat: 12.4244, lng: 75.7382, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.86, reviewsCount: 3200, bestSeason: "Oct - Apr", tags: ["Coffee Plantations", "Abbey Falls", "Dubare Elephant Camp", "Misty Hills"], tagline: "Scotland of India & Sprawling Coffee Estates", description: "Aromatic Arabica plantations, Abbey and Iruppu falls, Dubare elephant bathing, and spicy Kodava cuisine." },
  { id: "city-gokarna", name: "Gokarna", state: "Karnataka", region: "South", tier: "Coastal Sanctuary", lat: 14.5479, lng: 74.3188, costIndex: "Low", avgCostPerDay: 1600, rating: 4.85, reviewsCount: 2900, bestSeason: "Oct - Mar", tags: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Beach Trek"], tagline: "Pristine Om Beach & Sacred Coastal Temples", description: "Famous five-beach trek (Kudle to Paradise), sacred Atmalinga temple, bioluminescent night waters, and chill shacks." },
  { id: "city-chikmagalur", name: "Chikmagalur", state: "Karnataka", region: "South", tier: "Coffee Country", lat: 13.3161, lng: 75.7720, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.8, reviewsCount: 2300, bestSeason: "Sep - Mar", tags: ["Mullayanagiri Peak", "Coffee Estates", "Waterfalls", "Homestays"], tagline: "Birthplace of Indian Coffee & Mullayanagiri", description: "Karnataka's highest peak Mullayanagiri, Hebbe falls, lush Baba Budangiri hills, and fragrant estate trails." },
  { id: "city-mangaluru-udupi", name: "Mangaluru & Udupi", state: "Karnataka", region: "South", tier: "Coastal & Culinary", lat: 12.9141, lng: 74.8560, costIndex: "Low", avgCostPerDay: 1800, rating: 4.78, reviewsCount: 2600, bestSeason: "Oct - Mar", tags: ["Krishna Temple", "Seafood Ghee Roast", "Malpe Beach", "St. Mary's Island"], tagline: "Coastal Temples, St. Mary's Basalt & Ghee Roast", description: "Ancient Udupi Sri Krishna Matha, hexagonal basalt rocks of St. Mary's Island, and spicy Neer Dosa with Ghee Roast." },
  { id: "city-badami-pattadakal", name: "Badami, Aihole & Pattadakal", state: "Karnataka", region: "South", tier: "Rock-cut Wonder", lat: 15.9187, lng: 75.6766, costIndex: "Low", avgCostPerDay: 1600, rating: 4.9, reviewsCount: 1700, bestSeason: "Oct - Mar", tags: ["Rock Cut Caves", "Chalukyan Architecture", "UNESCO", "Agastya Lake"], tagline: "Cradle of Temple Architecture & Red Sandstone Caves", description: "6th-century Chalukyan cave temples carved into red sandstone cliffs around Agastya Lake, and UNESCO Pattadakal." },
  { id: "city-kabini-nagarhole", name: "Kabini & Nagarhole", state: "Karnataka", region: "South", tier: "Wildlife Haven", lat: 11.9667, lng: 76.2667, costIndex: "High", avgCostPerDay: 4800, rating: 4.94, reviewsCount: 1900, bestSeason: "Oct - May", tags: ["Black Panther", "Tiger Safari", "Kabini River Boat", "Elephants"], tagline: "Land of the Black Panther & Kabini River Safaris", description: "India's best wildlife safari destination for sightings of the elusive Black Panther, leopards, and giant elephant herds." },
  { id: "city-chennai", name: "Chennai", state: "Tamil Nadu", region: "South", tier: "Cultural Gateway", lat: 13.0827, lng: 80.2707, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.76, reviewsCount: 4600, bestSeason: "Nov - Feb", tags: ["Marina Beach", "Carnatic Music", "Kapaleeshwarar", "Filter Coffee"], tagline: "Detroit of Asia & Carnatic Cultural Soul", description: "World's second longest urban Marina Beach, towering Dravidian Kapaleeshwarar temple, and authentic filter coffee." },
  { id: "city-madurai", name: "Madurai", state: "Tamil Nadu", region: "South", tier: "Temple City", lat: 9.9252, lng: 78.1198, costIndex: "Low", avgCostPerDay: 1600, rating: 4.92, reviewsCount: 3600, bestSeason: "Oct - Mar", tags: ["Meenakshi Amman", "Thirumalai Nayak", "Jigarthanda", "Night Market"], tagline: "Athens of the East & Meenakshi Amman Splendor", description: "Sculptural marvel Meenakshi Amman Temple with 14 gopurams, fragrant jasmine markets, and sweet Jigarthanda." },
  { id: "city-mahabalipuram", name: "Mahabalipuram (Mamallapuram)", state: "Tamil Nadu", region: "South", tier: "UNESCO Coastal Art", lat: 12.6269, lng: 80.1927, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.88, reviewsCount: 3100, bestSeason: "Oct - Mar", tags: ["Shore Temple", "Pancha Rathas", "Stone Carving", "Surfing"], tagline: "Pallava Shore Temples & Monolithic Rock-Cut Art", description: "7th-century Shore Temple overlooking the Bay of Bengal, Arjuna's Penance bas-relief, and Covelong surf." },
  { id: "city-rameshwaram", name: "Rameshwaram & Dhanushkodi", state: "Tamil Nadu", region: "South", tier: "Spiritual Island", lat: 9.2876, lng: 79.3129, costIndex: "Low", avgCostPerDay: 1700, rating: 4.9, reviewsCount: 3400, bestSeason: "Oct - Apr", tags: ["Ramanathaswamy", "Pamban Bridge", "Dhanushkodi Ghost Town", "Ram Setu"], tagline: "Sacred Jyotirlinga, Pamban Sea Bridge & Ram Setu", description: "Corridors of Ramanathaswamy Temple, iconic Pamban Sea Bridge train crossing, and ghost town Dhanushkodi." },
  { id: "city-kanyakumari", name: "Kanyakumari", state: "Tamil Nadu", region: "South", tier: "Triconfluence Point", lat: 8.0883, lng: 77.5385, costIndex: "Low", avgCostPerDay: 1800, rating: 4.82, reviewsCount: 2900, bestSeason: "Oct - Mar", tags: ["Vivekananda Rock", "Thiruvalluvar Statue", "Sunrise Sunset", "Three Seas"], tagline: "Land's End Where Three Oceans Meet", description: "Confluence of Arabian Sea, Bay of Bengal and Indian Ocean, Vivekananda Rock Memorial, and twin sunrise-sunset." },
  { id: "city-ooty", name: "Ooty (Udhagamandalam)", state: "Tamil Nadu", region: "South", tier: "Hill Queen", lat: 11.4102, lng: 76.6950, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.8, reviewsCount: 3800, bestSeason: "Oct - Jun", tags: ["Nilgiri Toy Train", "Botanical Gardens", "Tea Estates", "Doddabetta"], tagline: "Queen of Nilgiri Hill Stations & Blue Mountains", description: "UNESCO Nilgiri Mountain Railway toy train, sprawling tea estates, Botanical Gardens, and Doddabetta Peak." },
  { id: "city-kodaikanal", name: "Kodaikanal", state: "Tamil Nadu", region: "South", tier: "Princess of Hills", lat: 10.2381, lng: 77.4892, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.84, reviewsCount: 3100, bestSeason: "Sep - May", tags: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk", "Pine Forest"], tagline: "Princess of Hill Stations & Misty Kodai Lake", description: "Star-shaped Kodai Lake pedal boating, misty cliff-hanging Coaker's Walk, Pillar Rocks, and pine groves." },
  { id: "city-thanjavur", name: "Thanjavur & Kumbakonam", state: "Tamil Nadu", region: "South", tier: "Chola Great Living Temples", lat: 10.7870, lng: 79.1378, costIndex: "Low", avgCostPerDay: 1600, rating: 4.9, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Brihadeeswara", "Chola Bronze", "Tanjore Paintings", "UNESCO"], tagline: "Brihadeeswara Grandeur & Chola Art Legacy", description: "UNESCO 1000-year-old Brihadeeswara Temple with single stone granite cupola, royal palace, and Tanjore art." },
  { id: "city-coimbatore", name: "Coimbatore & Pollachi", state: "Tamil Nadu", region: "South", tier: "Western Ghats Gateway", lat: 11.0168, lng: 76.9558, costIndex: "Low", avgCostPerDay: 1900, rating: 4.7, reviewsCount: 2100, bestSeason: "Sep - Mar", tags: ["Adiyogi Shiva", "Anamalai Tiger", "Marudhamalai", "Coconut Groves"], tagline: "Adiyogi Shiva Statue & Anamalai Tiger Gateway", description: "Guinness-record 112-ft Adiyogi Shiva statue at Isha, Topslip safaris in Anamalai Tiger Reserve, and cotton textile hubs." },
  { id: "city-kochi", name: "Kochi (Cochin)", state: "Kerala", region: "South", tier: "Colonial Port & Art", lat: 9.9312, lng: 76.2673, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.88, reviewsCount: 4200, bestSeason: "Oct - Apr", tags: ["Chinese Fishing Nets", "Fort Kochi", "Kathakali", "Jew Town", "Cafes"], tagline: "Queen of the Arabian Sea & Spice Route Port", description: "Historic Fort Kochi street art, giant cantilevered Chinese fishing nets, spice bazaars, and Kathakali recitals." },
  { id: "city-munnar", name: "Munnar", state: "Kerala", region: "South", tier: "Tea Highlands", lat: 10.0889, lng: 77.0595, costIndex: "Medium", avgCostPerDay: 2700, rating: 4.93, reviewsCount: 4700, bestSeason: "Sep - May", tags: ["Tea Plantations", "Anamudi Peak", "Eravikulam Nilgiri Tahr", "Mist"], tagline: "Rolling Tea Highlands & Nilgiri Tahr Sanctuary", description: "Endless rolling carpet of emerald tea estates, Eravikulam National Park, Mattupetty dam, and misty peaks." },
  { id: "city-alleppey", name: "Alleppey (Alappuzha)", state: "Kerala", region: "South", tier: "Backwater Capital", lat: 9.4981, lng: 76.3388, costIndex: "Medium", avgCostPerDay: 3000, rating: 4.95, reviewsCount: 5100, bestSeason: "Oct - Mar", tags: ["Houseboats", "Vembanad Lake", "Paddy Fields", "Kettuvallam", "Ayurveda"], tagline: "Venice of the East & Luxury Houseboat Cruises", description: "Cruising palm-fringed backwaters on traditional thatched Kettuvallam houseboats, with fresh Karimeen fish curry." },
  { id: "city-wayanad", name: "Wayanad", state: "Kerala", region: "South", tier: "Forest Highlands", lat: 11.6854, lng: 76.1320, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.84, reviewsCount: 3100, bestSeason: "Oct - May", tags: ["Edakkal Caves", "Chembra Peak", "Banasura Sagar Dam", "Treehouses"], tagline: "Prehistoric Caves, Chembra Heart Lake & Treehouses", description: "Neolithic petroglyphs at Edakkal Caves, heart-shaped lake trek at Chembra Peak, and Banasura earth dam." },
  { id: "city-varkala", name: "Varkala", state: "Kerala", region: "South", tier: "Cliff Beach Haven", lat: 8.7379, lng: 76.7163, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.9, reviewsCount: 3300, bestSeason: "Oct - Apr", tags: ["North Cliff", "Papanasam Beach", "Surfing", "Sunset Cafes", "Yoga"], tagline: "Dramatic Red Cliffs & Bohemian Arabian Sea Sunsets", description: "Red laterite cliffs overlooking Papanasam Beach, cliff-top seafood cafes, surfing breaks, and Ayurvedic spas." },
  { id: "city-thekkady", name: "Thekkady (Periyar)", state: "Kerala", region: "South", tier: "Spice & Wildlife", lat: 9.6031, lng: 77.1615, costIndex: "Medium", avgCostPerDay: 2400, rating: 4.82, reviewsCount: 2800, bestSeason: "Sep - Apr", tags: ["Periyar Tiger Reserve", "Spice Gardens", "Bamboo Rafting", "Elephants"], tagline: "Periyar Lake Boat Safaris & Fragrant Cardamom Hills", description: "Periyar lake boat safari spotting wild elephants, fragrant cardamom and pepper plantations, and bamboo rafting." },
  { id: "city-trivandrum-kovalam", name: "Thiruvananthapuram & Kovalam", state: "Kerala", region: "South", tier: "Capital & Crescent Beaches", lat: 8.5241, lng: 76.9366, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.8, reviewsCount: 3100, bestSeason: "Oct - Mar", tags: ["Padmanabhaswamy Temple", "Lighthouse Beach", "Ayurveda", "Museums"], tagline: "Padmanabhaswamy Temple & Kovalam Lighthouse Beach", description: "The world's richest Sree Padmanabhaswamy Temple, Kovalam's iconic striped lighthouse, and crescent beaches." },
  { id: "city-kozhikode-bekal", name: "Kozhikode & Bekal Fort", state: "Kerala", region: "South", tier: "Culinary & Coastal Fort", lat: 11.2588, lng: 75.7804, costIndex: "Low", avgCostPerDay: 1900, rating: 4.76, reviewsCount: 1900, bestSeason: "Oct - Mar", tags: ["Malabar Biryani", "Bekal Keyhole Fort", "Halwa", "Beaches"], tagline: "City of Spices, Malabar Biryani & Bekal Fort", description: "Calicut Malabar Dum Biryani at Paragon, historic SM street sweet bazaars, and oceanfront Bekal Fort." },
  { id: "city-hyderabad", name: "Hyderabad", state: "Telangana", region: "South", tier: "Pearl City & Tech Hub", lat: 17.3850, lng: 78.4867, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.87, reviewsCount: 5100, bestSeason: "Oct - Mar", tags: ["Charminar", "Hyderabadi Biryani", "Golconda Fort", "Pearls"], tagline: "City of Pearls, Nizam Grandeur & Biryani", description: "Iconic 16th-century Charminar, acoustic wonder Golconda Fort, aromatic Hyderabadi Dum Biryani, and IT corridor." },
  { id: "city-warangal", name: "Warangal & Ramappa", state: "Telangana", region: "South", tier: "Kakatiya Heritage", lat: 17.9689, lng: 79.5941, costIndex: "Low", avgCostPerDay: 1600, rating: 4.75, reviewsCount: 1700, bestSeason: "Oct - Mar", tags: ["UNESCO Ramappa Temple", "Thousand Pillar", "Kakatiya Gate", "Fort"], tagline: "UNESCO Ramappa Floating Bricks & Kakatiya Gates", description: "UNESCO Ramappa Temple built with floating bricks, Thousand Pillar Temple, and stone carved Kakatiya Thoranam." },
  { id: "city-visakhapatnam", name: "Visakhapatnam (Vizag)", state: "Andhra Pradesh", region: "South", tier: "City of Destiny", lat: 17.6868, lng: 83.2185, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.8, reviewsCount: 3200, bestSeason: "Oct - Mar", tags: ["R.K. Beach", "Submarine Museum", "Araku Valley", "Kailasagiri"], tagline: "Where Hills Meet the Sea & Araku Coffee", description: "INS Kursura submarine museum on RK Beach, Kailasagiri hilltop views, and scenic train ride to Araku Valley coffee estates." },
  { id: "city-tirupati", name: "Tirupati", state: "Andhra Pradesh", region: "South", tier: "Sacred Abode", lat: 13.6288, lng: 79.4192, costIndex: "Low", avgCostPerDay: 1500, rating: 4.95, reviewsCount: 6100, bestSeason: "Sep - Mar", tags: ["Tirumala Venkateswara", "Laddu Prasadam", "Seven Hills", "Devotion"], tagline: "Abode of Lord Venkateswara & Seven Hills", description: "The most visited sacred shrine on earth atop seven holy Seshachalam hills, world-famous GI-tagged Tirupati Laddu." },
  { id: "city-vijayawada", name: "Vijayawada & Amaravati", state: "Andhra Pradesh", region: "South", tier: "Sacred River Capital", lat: 16.5062, lng: 80.6480, costIndex: "Low", avgCostPerDay: 1700, rating: 4.7, reviewsCount: 1900, bestSeason: "Oct - Mar", tags: ["Kanaka Durga", "Undavalli Caves", "Prakasam Barrage", "Krishna River"], tagline: "Kanaka Durga Temple on Indrakeeladri & Krishna River", description: "Goddess Kanaka Durga hilltop temple, 7th-century rock-cut Undavalli Caves with monolithic Vishnu, and Bhavani Island." },
  { id: "city-lepakshi-gandikota", name: "Lepakshi & Gandikota", state: "Andhra Pradesh", region: "South", tier: "Grand Canyon of India", lat: 14.8144, lng: 78.2862, costIndex: "Low", avgCostPerDay: 1800, rating: 4.9, reviewsCount: 2100, bestSeason: "Oct - Mar", tags: ["Grand Canyon of India", "Hanging Pillar", "Pennar River Gorge", "Nandi"], tagline: "Grand Canyon of India & Hanging Pillar Marvel", description: "Spectacular Pennar river gorge at Gandikota fort and mysterious engineering hanging pillar of Veerabhadra temple." },
  { id: "city-pondicherry", name: "Puducherry (Pondicherry)", state: "Puducherry", region: "South", tier: "French Colonial Riviera", lat: 11.9416, lng: 79.8083, costIndex: "Medium", avgCostPerDay: 2400, rating: 4.88, reviewsCount: 3900, bestSeason: "Oct - Mar", tags: ["French Quarter", "Auroville", "Promenade Beach", "Croissants", "Cafes"], tagline: "French Quarter Charms & Auroville Matrimandir", description: "Mustard-yellow colonial villas in White Town, cycling on Promenade beach, French bakeries, and serene Auroville." },

  // WEST - Maharashtra, Goa, Gujarat, Daman & Diu
  { id: "city-mumbai", name: "Mumbai", state: "Maharashtra", region: "West", tier: "Megacity Capital", lat: 18.9220, lng: 72.8347, costIndex: "High", avgCostPerDay: 3600, rating: 4.9, reviewsCount: 7800, bestSeason: "Nov - Feb", tags: ["Marine Drive", "Gateway of India", "Bollywood", "Street Food", "Nightlife"], tagline: "The Maximum City & Queen's Necklace", description: "Gateway of India, sunset along Queen's Necklace Marine Drive, buzzing Colaba cafes, and Elephanta Caves." },
  { id: "city-pune", name: "Pune", state: "Maharashtra", region: "West", tier: "Oxford of the East", lat: 18.5204, lng: 73.8567, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.78, reviewsCount: 3800, bestSeason: "Jul - Feb", tags: ["Shaniwar Wada", "Aga Khan Palace", "Cafes", "Sinhagad Fort"], tagline: "Cultural Soul of Maharashtra & Peshwa Forts", description: "Historic Shaniwar Wada fortress, Mahatma Gandhi's memorial at Aga Khan Palace, and cool mountain weather." },
  { id: "city-aurangabad", name: "Chhatrapati Sambhajinagar (Aurangabad)", state: "Maharashtra", region: "West", tier: "UNESCO Cave Capital", lat: 19.8762, lng: 75.3433, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.96, reviewsCount: 4100, bestSeason: "Oct - Mar", tags: ["Ajanta Caves", "Ellora Kailasa Temple", "Bibi Ka Maqbara", "UNESCO"], tagline: "Ajanta Frescoes & Ellora Monolithic Kailasa", description: "UNESCO masterwork Kailasa temple carved top-down from a single basalt rock, and ancient Buddhist murals." },
  { id: "city-lonavala-khandala", name: "Lonavala & Khandala", state: "Maharashtra", region: "West", tier: "Sahyadri Gateway", lat: 18.7557, lng: 73.4091, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.75, reviewsCount: 3900, bestSeason: "Jun - Feb (Monsoon Best)", tags: ["Tiger Point", "Bhushi Dam", "Chikki", "Karla Caves"], tagline: "Monsoon Waterfalls & Sahyadri Cliff Viewpoints", description: "Gushing waterfalls during monsoon, misty Tiger's Leap cliff, ancient Buddhist Karla caves, and famous walnut chikki." },
  { id: "city-mahabaleshwar-panchgani", name: "Mahabaleshwar & Panchgani", state: "Maharashtra", region: "West", tier: "Strawberry Capital", lat: 17.9237, lng: 73.6586, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.82, reviewsCount: 3400, bestSeason: "Oct - Jun", tags: ["Strawberry Farms", "Arthur's Seat", "Venna Lake", "Mapro Garden"], tagline: "Strawberry Farms & Queen of Sahyadri Viewpoints", description: "Fresh strawberry plucking at Mapro garden, breathtaking Arthur's Seat canyon views, and boating in Venna Lake." },
  { id: "city-nashik", name: "Nashik & Trimbakeshwar", state: "Maharashtra", region: "West", tier: "Wine Capital & Kumbh", lat: 19.9975, lng: 73.7898, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.82, reviewsCount: 2900, bestSeason: "Oct - Mar", tags: ["Sula Vineyards", "Trimbakeshwar", "Godavari Ghats", "Wine Tasting"], tagline: "Wine Capital of India & Holy Trimbakeshwar Jyotirlinga", description: "Sun-drenched Sula Vineyards wine tasting tours, holy Trimbakeshwar Jyotirlinga, and Godavari river ghats." },
  { id: "city-shirdi", name: "Shirdi", state: "Maharashtra", region: "West", tier: "Spiritual Pilgrimage", lat: 19.7667, lng: 74.4764, costIndex: "Low", avgCostPerDay: 1500, rating: 4.9, reviewsCount: 5400, bestSeason: "Year Round", tags: ["Sai Baba Samadhi", "Dwarkamai", "Chavadi", "Langar"], tagline: "Sacred Abode of Shri Sai Baba", description: "Global pilgrimage center of Shri Sai Baba Samadhi Mandir, holy neem tree of Gurusthan, and spiritual solace." },
  { id: "city-alibaug", name: "Alibaug & Kashid", state: "Maharashtra", region: "West", tier: "Coastal Getaway", lat: 18.6414, lng: 72.8722, costIndex: "Medium", avgCostPerDay: 2700, rating: 4.72, reviewsCount: 2400, bestSeason: "Oct - May", tags: ["Kolaba Sea Fort", "Kashid Beach", "Water Sports", "Seafood"], tagline: "Historic Kolaba Sea Fort & White Sands of Kashid", description: "Walk through the ocean to 17th-century Kolaba Sea Fort at low tide, relax on Kashid beach, and enjoy coastal fish thalis." },
  { id: "city-tadoba", name: "Tadoba Andhari", state: "Maharashtra", region: "West", tier: "Tiger Capital", lat: 20.2500, lng: 79.3000, costIndex: "High", avgCostPerDay: 4200, rating: 4.92, reviewsCount: 1800, bestSeason: "Oct - Jun", tags: ["Tiger Safari", "Gypsy Safari", "Sloth Bears", "Lake"], tagline: "The Real Land of Tigers in Maharashtra", description: "Exceptional Royal Bengal Tiger sightings in dry deciduous teak forest, sloth bears, and leopards." },
  { id: "city-nagpur", name: "Nagpur", state: "Maharashtra", region: "West", tier: "Orange City", lat: 21.1458, lng: 79.0882, costIndex: "Low", avgCostPerDay: 1700, rating: 4.68, reviewsCount: 2100, bestSeason: "Oct - Mar", tags: ["Orange Orchards", "Zero Mile Stone", "Deekshabhoomi", "Saoji Food"], tagline: "Geographical Center of India & Orange Orchards", description: "Historic Zero Mile Stone marker, colossal Deekshabhoomi Buddhist stupa, fiery Saoji chicken, and sweet oranges." },
  { id: "city-north-goa", name: "North Goa (Calangute, Anjuna, Panaji)", state: "Goa", region: "West", tier: "Party & Heritage Coast", lat: 15.4989, lng: 73.8278, costIndex: "High", avgCostPerDay: 3400, rating: 4.9, reviewsCount: 6800, bestSeason: "Oct - Apr", tags: ["Beaches", "Nightlife", "Portuguese Churches", "Water Sports", "Flea Markets"], tagline: "Sun, Surf, Latin Quarter & Legendary Beach Parties", description: "Golden beaches of Baga & Anjuna, UNESCO Basilica of Bom Jesus, colorful Fontainhas Latin Quarter, and vibrant nightlife." },
  { id: "city-south-goa", name: "South Goa (Palolem, Colva, Agonda)", state: "Goa", region: "West", tier: "Serene Tropical Shores", lat: 15.0100, lng: 74.0200, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.92, reviewsCount: 4900, bestSeason: "Oct - Apr", tags: ["Palolem Crescent", "Dudhsagar Falls", "Cabo de Rama", "Kayaking", "Peaceful"], tagline: "Pristine Palm-Fringed Bays & Four-Tier Dudhsagar Falls", description: "Crescent-shaped Palolem beach, butterfly island dolphin boat trips, Portuguese forts, and majestic Dudhsagar waterfalls." },
  { id: "city-ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West", tier: "UNESCO Heritage City", lat: 23.0225, lng: 72.5714, costIndex: "Medium", avgCostPerDay: 2100, rating: 4.84, reviewsCount: 4400, bestSeason: "Oct - Mar", tags: ["UNESCO Walled City", "Sabarmati Ashram", "Adalaj Stepwell", "Gujarati Thali"], tagline: "India's First UNESCO Heritage City & Gandhi's Ashram", description: "Intricate pol architecture, Mahatma Gandhi's Sabarmati Ashram, multi-tier Adalaj Stepwell, and midnight Manek Chowk food." },
  { id: "city-kutch", name: "Rann of Kutch (Bhuj)", state: "Gujarat", region: "West", tier: "White Salt Desert", lat: 23.2420, lng: 69.6669, costIndex: "High", avgCostPerDay: 3800, rating: 4.95, reviewsCount: 3800, bestSeason: "Nov - Feb (Rann Utsav)", tags: ["White Rann", "Rann Utsav", "Kutchi Embroidery", "Kala Dungar", "Moonlight"], tagline: "The Great White Desert & Colorful Rann Utsav", description: "Endless crystalline white salt desert shining under the full moon, traditional Bhunga stays, and intricate handicraft villages." },
  { id: "city-gir-national-park", name: "Gir National Park & Sasan", state: "Gujarat", region: "West", tier: "Asiatic Lion Abode", lat: 21.1241, lng: 70.8242, costIndex: "High", avgCostPerDay: 4100, rating: 4.92, reviewsCount: 2600, bestSeason: "Dec - Apr", tags: ["Asiatic Lions", "Lion Safari", "Devalia", "Forest Lodges"], tagline: "The Last Refuge of the Asiatic Lion", description: "Only place in the wild to encounter majestic Asiatic lions, alongside leopards, spotted deer, and 300+ bird species." },
  { id: "city-somnath-dwarka", name: "Dwarka & Somnath", state: "Gujarat", region: "West", tier: "Sacred Char Dham", lat: 22.2394, lng: 68.9678, costIndex: "Low", avgCostPerDay: 1600, rating: 4.93, reviewsCount: 4900, bestSeason: "Oct - Mar", tags: ["Dwarkadhish Temple", "Somnath Jyotirlinga", "Bet Dwarka", "Coastal"], tagline: "First Jyotirlinga on Ocean Shore & Krishna's Kingdom", description: "Somnath temple standing resilient on the Arabian Sea, Lord Krishna's sacred Dwarkadhish temple, and Bet Dwarka boat rides." },
  { id: "city-vadodara-statue-of-unity", name: "Vadodara & Statue of Unity (Ekta Nagar)", state: "Gujarat", region: "West", tier: "World Wonder Landmark", lat: 21.8380, lng: 73.7191, costIndex: "Medium", avgCostPerDay: 2700, rating: 4.9, reviewsCount: 4300, bestSeason: "Oct - Mar", tags: ["Statue of Unity", "Laxmi Vilas Palace", "Narmada Dam", "Laser Show"], tagline: "World's Tallest 182m Statue & Grand Laxmi Vilas", description: "Colossal 182-meter Statue of Unity of Sardar Vallabhbhai Patel, Narmada river valley, and 4x size Buckingham Laxmi Vilas Palace." },
  { id: "city-surat", name: "Surat", state: "Gujarat", region: "West", tier: "Diamond & Textile Hub", lat: 21.1702, lng: 72.8311, costIndex: "Low", avgCostPerDay: 1800, rating: 4.7, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Locho & Street Food", "Dumas Beach", "Diamond Bourse", "Shopping"], tagline: "Diamond City of the World & Street Food Mecca", description: "World's largest diamond trading hub, famous Surati Locho, black sand Dumas Beach, and silk markets." },
  { id: "city-diu", name: "Diu Island & Daman", state: "Daman & Diu", region: "West", tier: "Portuguese Coastal Fort", lat: 20.7144, lng: 70.9874, costIndex: "Low", avgCostPerDay: 1900, rating: 4.75, reviewsCount: 1800, bestSeason: "Oct - Apr", tags: ["Diu Fort", "Nagoa Beach", "St. Paul Church", "Seafood"], tagline: "Quiet Island Haven, Sea Forts & Palm Beaches", description: "Magnificent sea-facing Diu Fort cannon ramparts, horseshoe Nagoa beach, and quiet Portuguese colonial streets." },

  // CENTRAL - Madhya Pradesh, Chhattisgarh
  { id: "city-khajuraho", name: "Khajuraho", state: "Madhya Pradesh", region: "Central", tier: "UNESCO Sculptural Art", lat: 24.8318, lng: 79.9199, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.95, reviewsCount: 3600, bestSeason: "Oct - Mar", tags: ["UNESCO Temples", "Sensuous Sculptures", "Kandariya Mahadeva", "Light & Sound"], tagline: "UNESCO Temples of Love & Erotic Masterpieces", description: "10th-century Chandela dynasty stone temples featuring intricately detailed celestial nymphs and erotic carvings." },
  { id: "city-orchha", name: "Orchha", state: "Madhya Pradesh", region: "Central", tier: "Timeless Medieval Fortress", lat: 25.3516, lng: 78.6416, costIndex: "Low", avgCostPerDay: 1700, rating: 4.88, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Betwa River", "Raja Mahal", "Jahangir Mahal", "Ram Raja Temple"], tagline: "Palaces on the Betwa River & Lord Rama King", description: "Dramatic 16th-century riverfront palaces, cenotaphs (chhatris), and the only temple where Lord Ram is revered as King." },
  { id: "city-bhopal-sanchi", name: "Bhopal & Sanchi", state: "Madhya Pradesh", region: "Central", tier: "City of Lakes & Stupas", lat: 23.2599, lng: 77.4126, costIndex: "Low", avgCostPerDay: 1800, rating: 4.85, reviewsCount: 2700, bestSeason: "Oct - Mar", tags: ["Upper Lake", "UNESCO Sanchi Stupa", "Bhimbetka Caves", "Museum of Man"], tagline: "Emperor Ashoka's Great Stupa & Paleolithic Rock Art", description: "UNESCO 3rd-century BCE Great Sanchi Stupa, 30,000-year-old Bhimbetka cave paintings, and tranquil Upper Lake." },
  { id: "city-indore", name: "Indore", state: "Madhya Pradesh", region: "Central", tier: "Culinary Capital", lat: 22.7196, lng: 75.8577, costIndex: "Low", avgCostPerDay: 1600, rating: 4.84, reviewsCount: 3900, bestSeason: "Oct - Mar", tags: ["Sarafa Bazaar Night Food", "Chappan Dukan", "Cleanest City", "Rajwada"], tagline: "Cleanest City of India & Midnight Sarafa Food", description: "India's cleanest city, legendary Sarafa jewelry market turned midnight street food haven, and 7-story Holkar Rajwada." },
  { id: "city-ujjain", name: "Ujjain", state: "Madhya Pradesh", region: "Central", tier: "Spiritual Jyotirlinga", lat: 23.1765, lng: 75.7885, costIndex: "Low", avgCostPerDay: 1400, rating: 4.92, reviewsCount: 4800, bestSeason: "Oct - Mar", tags: ["Mahakaleshwar", "Bhasma Aarti", "Mahakal Lok Corridor", "Shipra Ghats"], tagline: "Sacred Mahakaleshwar Jyotirlinga & Grand Corridor", description: "Divine pre-dawn Bhasma Aarti at Mahakaleshwar Jyotirlinga, spectacular Mahakal Lok Corridor, and holy Shipra river." },
  { id: "city-gwalior", name: "Gwalior", state: "Madhya Pradesh", region: "Central", tier: "Pearl in the Fortress Crown", lat: 26.2183, lng: 78.1828, costIndex: "Low", avgCostPerDay: 1700, rating: 4.82, reviewsCount: 2400, bestSeason: "Oct - Mar", tags: ["Gwalior Fort", "Jai Vilas Palace", "Tansen Tomb", "Classical Music"], tagline: "Impregnable Hilltop Fort & Jai Vilas Palace", description: "Magnificent blue-tiled Man Singh Palace atop Gwalior Fort, silver train banquet table in Jai Vilas, and Tansen's tomb." },
  { id: "city-jabalpur-bhedaghat", name: "Jabalpur & Bhedaghat", state: "Madhya Pradesh", region: "Central", tier: "Marble Rocks & Waterfalls", lat: 23.1815, lng: 79.9864, costIndex: "Low", avgCostPerDay: 1800, rating: 4.86, reviewsCount: 2200, bestSeason: "Oct - Apr", tags: ["Marble Rocks", "Dhuandhar Falls", "Narmada Boating", "Chausath Yogini"], tagline: "Marble Rocks Canyon & Roaring Dhuandhar Falls", description: "Boating between towering 100-foot white marble gorges on Narmada River, and roaring mist of Dhuandhar waterfall." },
  { id: "city-bandhavgarh-kanha", name: "Bandhavgarh & Kanha", state: "Madhya Pradesh", region: "Central", tier: "Tiger Kingdom", lat: 23.7000, lng: 80.9500, costIndex: "High", avgCostPerDay: 4600, rating: 4.96, reviewsCount: 3100, bestSeason: "Oct - Jun", tags: ["Highest Tiger Density", "Jungle Book", "Barasingha", "Open Gypsy"], tagline: "Inspiration for Jungle Book & Highest Tiger Density", description: "Highest concentration of Royal Bengal Tigers in Bandhavgarh, and vast Sal meadows of Kanha spotting hard-ground Barasingha." },
  { id: "city-pachmarhi", name: "Pachmarhi", state: "Madhya Pradesh", region: "Central", tier: "Queen of Satpura", lat: 22.4674, lng: 78.4334, costIndex: "Medium", avgCostPerDay: 2300, rating: 4.76, reviewsCount: 1900, bestSeason: "Year Round", tags: ["Bee Falls", "Dhoopgarh Sunset", "Pandav Caves", "Satpura Woods"], tagline: "Queen of Satpura & Highest Peak Dhoopgarh", description: "Pristine hill resort with cascading Bee Falls, panoramic sunset from MP's highest Dhoopgarh peak, and ancient Pandava caves." },
  { id: "city-pench", name: "Pench National Park", state: "Madhya Pradesh", region: "Central", tier: "Mowgli's Realm", lat: 21.7500, lng: 79.3300, costIndex: "High", avgCostPerDay: 4300, rating: 4.9, reviewsCount: 2000, bestSeason: "Oct - Jun", tags: ["Mowgli Land", "Tiger Safari", "Night Safari", "Teak Woods"], tagline: "True Setting of Kipling's Mowgli & Leopard Woods", description: "The authentic landscape behind Rudyard Kipling's Jungle Book, teeming with tigers, leopards, wild dogs, and deer." },
  { id: "city-raipur", name: "Raipur", state: "Chhattisgarh", region: "Central", tier: "Vibrant Capital", lat: 21.2514, lng: 81.6296, costIndex: "Low", avgCostPerDay: 1600, rating: 4.65, reviewsCount: 1600, bestSeason: "Oct - Mar", tags: ["Purkhouti Muktangan", "Swami Vivekananda Lake", "Tribal Art", "Kanger"], tagline: "Tribal Heritage Open Museum & Vibrant Capital", description: "Purkhouti Muktangan open cultural display, Swami Vivekananda Sarovar, and Bell Metal Dhokra handicraft." },
  { id: "city-jagdalpur-bastar", name: "Bastar & Chitrakote (Jagdalpur)", state: "Chhattisgarh", region: "Central", tier: "Niagara of India", lat: 19.0734, lng: 82.0298, costIndex: "Low", avgCostPerDay: 1700, rating: 4.9, reviewsCount: 1900, bestSeason: "Jul - Mar", tags: ["Chitrakote Falls", "Tirathgarh", "Bastar Dussehra", "Limestone Caves"], tagline: "Niagara Falls of India & Ancient Bastar Tribes", description: "Horseshoe-shaped 300-meter wide Chitrakote Falls on Indravati river, multi-tiered Tirathgarh, and Kotumsar caves." },

  // EAST - West Bengal, Odisha, Bihar, Jharkhand
  { id: "city-kolkata", name: "Kolkata", state: "West Bengal", region: "East", tier: "City of Joy", lat: 22.5726, lng: 88.3639, costIndex: "Low", avgCostPerDay: 1900, rating: 4.88, reviewsCount: 6200, bestSeason: "Oct - Mar (Durga Puja)", tags: ["Victoria Memorial", "Howrah Bridge", "Durga Puja", "Rosogolla", "Trams"], tagline: "The City of Joy, Cultural Soul & Colonial Grandeur", description: "Magnificent Victoria Memorial, iconic cantilever Howrah Bridge, vintage tram rides, and luscious Sondesh and Rosogolla." },
  { id: "city-darjeeling", name: "Darjeeling", state: "West Bengal", region: "East", tier: "Queen of the Hills", lat: 27.0410, lng: 88.2663, costIndex: "Medium", avgCostPerDay: 2700, rating: 4.92, reviewsCount: 4500, bestSeason: "Mar - Jun, Sep - Dec", tags: ["Kanchenjunga Sunrise", "Darjeeling Toy Train", "Tea Estates", "Tiger Hill"], tagline: "Tiger Hill Kanchenjunga Sunrise & Champagne of Tea", description: "Unrivaled sunrise over Mt. Kanchenjunga from Tiger Hill, UNESCO Himalayan Toy Train, and lush Muscatel tea gardens." },
  { id: "city-kalimpong", name: "Kalimpong", state: "West Bengal", region: "East", tier: "Orchid Haven", lat: 27.0667, lng: 88.4667, costIndex: "Low", avgCostPerDay: 2000, rating: 4.75, reviewsCount: 1800, bestSeason: "Sep - May", tags: ["Orchid Nurseries", "Deolo Hill", "Monasteries", "Teesta River"], tagline: "Deolo Hill Panoramic Views & Exotic Orchid Gardens", description: "Quiet hill town with Deolo Hill 360-degree views, Zang Dhok Palri Phodang monastery, and flower nurseries." },
  { id: "city-sundarbans", name: "Sundarbans National Park", state: "West Bengal", region: "East", tier: "Mangrove Wonder", lat: 21.9497, lng: 89.1833, costIndex: "Medium", avgCostPerDay: 2900, rating: 4.9, reviewsCount: 2400, bestSeason: "Sep - Mar", tags: ["Royal Bengal Tiger", "Mangrove Boat Cruise", "Estuarine Crocs", "UNESCO"], tagline: "World's Largest Tidal Mangrove & Swimming Tigers", description: "UNESCO delta where Royal Bengal Tigers swim across mangrove tidal waterways, alongside spotted deer and kingfishers." },
  { id: "city-digha-mandarmani", name: "Digha & Mandarmani", state: "West Bengal", region: "East", tier: "Bengal Coast", lat: 21.6266, lng: 87.5074, costIndex: "Low", avgCostPerDay: 1600, rating: 4.62, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Flat Red Crab Beach", "Drive-in Beach", "Seafood", "Sunsets"], tagline: "Longest Drive-in Beach & Red Crab Shores", description: "Miles of drive-in flat hard beaches at Mandarmani, bustling Digha promenade, and fresh fried pomfret." },
  { id: "city-shantiniketan", name: "Shantiniketan (Bolpur)", state: "West Bengal", region: "East", tier: "UNESCO Tagore Abode", lat: 23.6800, lng: 87.6800, costIndex: "Low", avgCostPerDay: 1500, rating: 4.82, reviewsCount: 2100, bestSeason: "Oct - Mar (Poush Mela)", tags: ["Rabindranath Tagore", "Visva Bharati", "Baul Music", "Handicrafts"], tagline: "Tagore's Vision of Open-Air Learning & Baul Music", description: "UNESCO Visva-Bharati university campus, soul-stirring Ektara Baul folk music, and Sonajhurir Haat tribal fair." },
  { id: "city-puri", name: "Puri", state: "Odisha", region: "East", tier: "Sacred Char Dham", lat: 19.8135, lng: 85.8312, costIndex: "Low", avgCostPerDay: 1700, rating: 4.94, reviewsCount: 5200, bestSeason: "Oct - Mar (Rath Yatra Jul)", tags: ["Jagannath Temple", "Golden Beach", "Mahaprasad", "Rath Yatra"], tagline: "Sacred Abode of Lord Jagannath & Blue Flag Beach", description: "Ancient Jagannath Temple, divine 56-bhog Mahaprasad, Blue Flag certified Golden Beach, and world-famous Rath Yatra." },
  { id: "city-bhubaneswar", name: "Bhubaneswar", state: "Odisha", region: "East", tier: "Temple City of India", lat: 20.2961, lng: 85.8245, costIndex: "Low", avgCostPerDay: 1800, rating: 4.8, reviewsCount: 3100, bestSeason: "Oct - Mar", tags: ["Lingaraj Temple", "Udayagiri Caves", "Dhauli Shanti Stupa", "Kalinga Art"], tagline: "500 Ancient Kalinga Temples & Dhauli Peace Pagoda", description: "11th-century Lingaraj Temple, Jain rock-cut Udayagiri and Khandagiri caves, and Emperor Ashoka's Dhauli Peace Pagoda." },
  { id: "city-konark", name: "Konark", state: "Odisha", region: "East", tier: "UNESCO Architectural Marvel", lat: 19.8876, lng: 86.0945, costIndex: "Low", avgCostPerDay: 1700, rating: 4.95, reviewsCount: 3900, bestSeason: "Oct - Mar", tags: ["Sun Temple", "Stone Wheels", "Chandrabhaga Beach", "UNESCO"], tagline: "The Colossal Black Pagoda Sun Chariot", description: "13th-century Sun Temple designed as a giant chariot with 24 carved stone wheels that tell time with sun shadows." },
  { id: "city-chilika-lake", name: "Chilika Lake & Gopalpur", state: "Odisha", region: "East", tier: "Asia's Largest Lagoon", lat: 19.7000, lng: 85.3167, costIndex: "Low", avgCostPerDay: 1900, rating: 4.86, reviewsCount: 2500, bestSeason: "Nov - Feb", tags: ["Irrawaddy Dolphins", "Migratory Birds", "Kalijai Temple", "Island Boating"], tagline: "Irrawaddy Dolphins & Million Wintering Birds", description: "Asia's largest brackish lagoon where playful Irrawaddy dolphins breach near Satapada, and serene Gopalpur-on-sea." },
  { id: "city-bodh-gaya", name: "Bodh Gaya & Gaya", state: "Bihar", region: "East", tier: "Enlightenment Epicenter", lat: 24.6961, lng: 84.9869, costIndex: "Low", avgCostPerDay: 1500, rating: 4.96, reviewsCount: 4200, bestSeason: "Oct - Mar", tags: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Monasteries"], tagline: "Cradle of Buddhism & Sacred Bodhi Tree", description: "UNESCO Mahabodhi Temple marking where Gautama Buddha attained Enlightenment under the sacred Bodhi Tree." },
  { id: "city-patna", name: "Patna", state: "Bihar", region: "East", tier: "Ancient Pataliputra", lat: 25.5941, lng: 85.1376, costIndex: "Low", avgCostPerDay: 1600, rating: 4.7, reviewsCount: 2200, bestSeason: "Oct - Mar", tags: ["Golghar", "Takht Patna Sahib", "Bihar Museum", "Ganga Ghats"], tagline: "Birthplace of Guru Gobind Singh & Ancient Capital", description: "Holy Takhat Sachkhand Sri Patna Sahib, world-class Bihar Museum, historic Golghar granary, and sacred Ganga aarti." },
  { id: "city-nalanda-rajgir", name: "Rajgir & Nalanda", state: "Bihar", region: "East", tier: "Ancient University & Hot Springs", lat: 25.0300, lng: 85.4200, costIndex: "Low", avgCostPerDay: 1600, rating: 4.9, reviewsCount: 2800, bestSeason: "Oct - Mar", tags: ["Ancient Nalanda University", "Vishwa Shanti Stupa", "Glass Skywalk", "Ropeway"], tagline: "World's First Residential University & Rajgir Hills", description: "UNESCO ruins of 5th-century Nalanda University, Rajgir Peace Pagoda ropeway, and exciting Glass Skywalk." },
  { id: "city-ranchi", name: "Ranchi", state: "Jharkhand", region: "East", tier: "City of Waterfalls", lat: 23.3441, lng: 85.3096, costIndex: "Low", avgCostPerDay: 1600, rating: 4.68, reviewsCount: 1900, bestSeason: "Sep - Mar", tags: ["Hundru Falls", "Jonha Falls", "Dassam Falls", "Tagore Hill"], tagline: "Cascading Waterfalls & Tribal Traditions", description: "Dramatic Hundru and Dassam waterfalls plunging over rocky plateaus, serene Tagore Hill, and Dhruva Dam." },
  { id: "city-deoghar", name: "Deoghar (Baidyanath Dham)", state: "Jharkhand", region: "East", tier: "Spiritual Jyotirlinga", lat: 24.4826, lng: 86.6997, costIndex: "Low", avgCostPerDay: 1400, rating: 4.88, reviewsCount: 3600, bestSeason: "Oct - Mar (Shravan Jul-Aug)", tags: ["Baidyanath Jyotirlinga", "Trikuta Hills", "Naulakha Temple", "Kanwar Yatra"], tagline: "Sacred Baidyanath Jyotirlinga & Trikuta Ropeway", description: "One of the 12 sacred Shiva Jyotirlingas attracting millions during Shravan Kanwar Yatra, and Trikut Pahar cable car." },
  { id: "city-jamshedpur", name: "Jamshedpur", state: "Jharkhand", region: "East", tier: "Steel & Garden City", lat: 22.8046, lng: 86.2029, costIndex: "Low", avgCostPerDay: 1700, rating: 4.65, reviewsCount: 1600, bestSeason: "Oct - Mar", tags: ["Jubilee Park", "Dimna Lake", "Dalma Wildlife", "Tata Legacy"], tagline: "Green Steel City & Jubilee Park Fountains", description: "Sprawling Jubilee Park modeled after Vrindavan Gardens, tranquil Dimna Lake at foothills of Dalma wildlife sanctuary." },

  // NORTH-EAST - Assam, Meghalaya, Sikkim, Arunachal, Nagaland, Manipur, Mizoram, Tripura
  { id: "city-kaziranga", name: "Kaziranga National Park", state: "Assam", region: "North-East", tier: "Rhino Capital", lat: 26.5775, lng: 93.1711, costIndex: "High", avgCostPerDay: 3900, rating: 4.96, reviewsCount: 3800, bestSeason: "Nov - Apr", tags: ["One-horned Rhino", "Elephant Safari", "Jeep Safari", "Tea Gardens", "UNESCO"], tagline: "World's Greatest Stronghold of the One-Horned Rhinoceros", description: "UNESCO World Heritage grassland home to two-thirds of the world's Great Indian One-Horned Rhinoceros." },
  { id: "city-guwahati", name: "Guwahati", state: "Assam", region: "North-East", tier: "Gateway to the North-East", lat: 26.1445, lng: 91.7362, costIndex: "Medium", avgCostPerDay: 2200, rating: 4.82, reviewsCount: 3400, bestSeason: "Oct - Apr", tags: ["Kamakhya Temple", "Brahmaputra Cruise", "Peacock Island", "Ropeway"], tagline: "Sacred Kamakhya Peeth & Mighty Brahmaputra Sunset", description: "Ancient Shaktipeeth Kamakhya Temple on Nilachal hill, longest river ropeway over mighty Brahmaputra, and river sunset cruise." },
  { id: "city-majuli", name: "Majuli Island & Jorhat", state: "Assam", region: "North-East", tier: "World's Largest River Island", lat: 26.9500, lng: 94.2167, costIndex: "Low", avgCostPerDay: 1600, rating: 4.9, reviewsCount: 2100, bestSeason: "Oct - Mar", tags: ["River Island", "Neo-Vaishnavite Satras", "Mask Making", "Pottery"], tagline: "World's Largest Inhabited River Island & Living Satras", description: "Spiritual Neo-Vaishnavite monastic Satras, 500-year-old traditional bamboo mask making at Samaguri, and wetland sunsets." },
  { id: "city-manas", name: "Manas National Park", state: "Assam", region: "North-East", tier: "UNESCO Biosphere", lat: 26.6594, lng: 90.9995, costIndex: "Medium", avgCostPerDay: 3200, rating: 4.88, reviewsCount: 1600, bestSeason: "Nov - Apr", tags: ["Golden Langur", "Pygmy Hog", "Manas River Rafting", "Wild Buffalo"], tagline: "UNESCO Biosphere, Golden Langurs & Himalayan Foothills", description: "Pristine Bhutan-border sanctuary sheltering rarest Golden Langurs, wild water buffaloes, and white-water river rafting." },
  { id: "city-shillong", name: "Shillong", state: "Meghalaya", region: "North-East", tier: "Rock & Cloud Capital", lat: 25.5788, lng: 91.8933, costIndex: "Medium", avgCostPerDay: 2600, rating: 4.88, reviewsCount: 4100, bestSeason: "Sep - May", tags: ["Umiam Lake", "Elephant Falls", "Rock Music", "Police Bazar", "Cafes"], tagline: "Scotland of the East & Rock Music Capital", description: "Pine-covered rolling hills, vast emerald Umiam Lake water sports, multi-tiered Elephant Falls, and buzzing cafes." },
  { id: "city-cherrapunji-dawki", name: "Cherrapunji (Sohra) & Dawki", state: "Meghalaya", region: "North-East", tier: "Living Roots & Crystal River", lat: 25.2702, lng: 91.7323, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.96, reviewsCount: 4900, bestSeason: "Year Round", tags: ["Double Decker Root Bridge", "Dawki Transparent Umngot", "Nohkalikai Falls", "Caves"], tagline: "Double Decker Living Root Bridges & Glass-Clear Umngot", description: "Century-old bioengineered Ficus tree Living Root Bridges in Nongriat, Nohkalikai waterfall, and crystal boats on Dawki river." },
  { id: "city-gangtok", name: "Gangtok", state: "Sikkim", region: "North-East", tier: "Himalayan Wonderland", lat: 27.3389, lng: 88.6065, costIndex: "Medium", avgCostPerDay: 2900, rating: 4.9, reviewsCount: 4600, bestSeason: "Mar - Jun, Sep - Dec", tags: ["MG Marg", "Rumtek Monastery", "Ropeway", "Kanchenjunga Views"], tagline: "Clean Mountain Capital, Rumtek & MG Marg", description: "Pedestrian-only MG Marg, magnificent Rumtek and Enchey monasteries, ropeway cable rides, and organic cuisine." },
  { id: "city-north-sikkim-lachung", name: "North Sikkim (Lachung & Yumthang)", state: "Sikkim", region: "North-East", tier: "Valley of Flowers & Lakes", lat: 27.6891, lng: 88.7430, costIndex: "High", avgCostPerDay: 3600, rating: 4.97, reviewsCount: 3200, bestSeason: "Mar - Jun (Flowers), Dec - Feb (Snow)", tags: ["Gurudongmar Lake", "Yumthang Valley of Flowers", "Zero Point", "Hot Springs"], tagline: "Sacred High-Altitude Gurudongmar & Valley of Flowers", description: "Crystal azure holy Gurudongmar Lake at 17,800 ft, blooming rhododendrons in Yumthang, and Zero Point snow." },
  { id: "city-pelling", name: "Pelling", state: "Sikkim", region: "North-East", tier: "Kanchenjunga Balcony", lat: 27.3167, lng: 88.2333, costIndex: "Medium", avgCostPerDay: 2500, rating: 4.86, reviewsCount: 2200, bestSeason: "Sep - May", tags: ["Skywalk", "Pemayangtse Monastery", "Kanchenjunga Falls", "Rabdentse"], tagline: "Closest View of Kanchenjunga & Glass Skywalk", description: "India's first glass skywalk overlooking Chenrezig statue, historic Rabdentse royal ruins, and Pemayangtse monastery." },
  { id: "city-tawang", name: "Tawang & Sela Pass", state: "Arunachal Pradesh", region: "North-East", tier: "Land of Dawn-lit Mountains", lat: 27.5861, lng: 91.8594, costIndex: "Medium", avgCostPerDay: 3000, rating: 4.95, reviewsCount: 2700, bestSeason: "Mar - Jun, Sep - Nov", tags: ["Tawang Monastery", "Sela Pass", "Madhuri Lake", "Bum La Pass"], tagline: "India's Largest Monastery & Snow-clad Sela Pass", description: "400-year-old Tawang Monastery (second largest in the world), frozen Sela Lake at 13,700 ft, and pristine Madhuri Lake." },
  { id: "city-ziro-valley", name: "Ziro Valley", state: "Arunachal Pradesh", region: "North-East", tier: "UNESCO Cultural Landscape", lat: 27.5950, lng: 93.8385, costIndex: "Low", avgCostPerDay: 2100, rating: 4.9, reviewsCount: 1900, bestSeason: "Mar - Oct (Music Fest Sep)", tags: ["Apatani Tribe", "Paddy Fish Cultivation", "Ziro Music Festival", "Pine Groves"], tagline: "Apatani Tribal Villages & World Famous Music Festival", description: "Unique sustainable paddy-cum-fish farms of Apatani tribe, iconic nose plugs and facial tattoos heritage, and music fest." },
  { id: "city-kohima", name: "Kohima & Dzukou Valley", state: "Nagaland", region: "North-East", tier: "Hornbill & Trekking Paradise", lat: 25.6751, lng: 94.1086, costIndex: "Medium", avgCostPerDay: 2400, rating: 4.92, reviewsCount: 2600, bestSeason: "Oct - May (Hornbill Festival Dec)", tags: ["Hornbill Festival", "Dzukou Valley Trek", "War Cemetery", "Naga Tribes"], tagline: "Festival of Festivals Hornbill & Rolling Dzukou Valley", description: "Celebrated Hornbill Festival in Kisama heritage village, ethereal rolling green bamboo Dzukou Valley trek, and war history." },
  { id: "city-imphal-loktak", name: "Imphal & Loktak Lake", state: "Manipur", region: "North-East", tier: "Floating Lake Wonder", lat: 24.8170, lng: 93.9368, costIndex: "Low", avgCostPerDay: 2000, rating: 4.88, reviewsCount: 1800, bestSeason: "Oct - Apr", tags: ["Loktak Floating Phumdis", "Keibul Lamjao Sangai Deer", "Kangla Fort", "Ima Keithel"], tagline: "World's Only Floating National Park & Dancing Deer", description: "Floating biomass islands (phumdis) of Loktak Lake, endangered Sangai brow-antlered dancing deer, and all-women Ima Keithel market." },
  { id: "city-aizawl", name: "Aizawl", state: "Mizoram", region: "North-East", tier: "Hills of Peace", lat: 23.7271, lng: 92.7176, costIndex: "Low", avgCostPerDay: 2100, rating: 4.8, reviewsCount: 1400, bestSeason: "Oct - Apr", tags: ["Reiek Peak", "Solomon's Temple", "Durtlang Hills", "Mizo Culture"], tagline: "Cliffside Houses, Reiek Tlang & Mizo Hospitality", description: "Spectacular ridge-top city with cliff-clinging houses, breathtaking sunset from Reiek Peak, and white Solomon's Temple." },
  { id: "city-agartala", name: "Agartala & Unakoti", state: "Tripura", region: "North-East", tier: "Rock Bas-Relief Wonder", lat: 23.8315, lng: 91.2868, costIndex: "Low", avgCostPerDay: 1700, rating: 4.82, reviewsCount: 1500, bestSeason: "Oct - Mar", tags: ["Ujjayanta Palace", "Neermahal Water Palace", "Unakoti Rock Carvings", "Bamboo Craft"], tagline: "Neermahal Water Palace & Colossal Unakoti Shiva Carvings", description: "White marble Ujjayanta Palace, floating Neermahal palace in Rudrasagar lake, and colossal rock-cut Shaivite reliefs at Unakoti." },

  // ISLANDS - Andaman & Nicobar, Lakshadweep
  { id: "city-port-blair", name: "Port Blair", state: "Andaman & Nicobar", region: "Islands", tier: "Island Capital & Freedom History", lat: 11.6234, lng: 92.7265, costIndex: "Medium", avgCostPerDay: 2800, rating: 4.88, reviewsCount: 3900, bestSeason: "Oct - May", tags: ["Cellular Jail", "Light & Sound", "Ross Island", "Chidiya Tapu Sunset"], tagline: "Historic Cellular Jail & Peacocks on Ross Island", description: "National Memorial Cellular Jail (Kaala Paani), British colonial ruins overrun by deer on Ross Island, and Chidiya Tapu." },
  { id: "city-havelock-island", name: "Havelock Island (Swaraj Dweep)", state: "Andaman & Nicobar", region: "Islands", tier: "Tropical Island Paradise", lat: 12.0000, lng: 92.9800, costIndex: "High", avgCostPerDay: 4400, rating: 4.98, reviewsCount: 5400, bestSeason: "Oct - May", tags: ["Radhanagar Beach", "Scuba Diving", "Elephant Beach", "Kayaking", "Corals"], tagline: "Asia's Best Radhanagar Beach & Vibrant Coral Reefs", description: "Silky powdery white sands of Radhanagar Beach (voted Asia's best), vibrant scuba diving at Elephant Beach, and bioluminescent night kayaking." },
  { id: "city-neil-island", name: "Neil Island (Shaheed Dweep)", state: "Andaman & Nicobar", region: "Islands", tier: "Quiet Coral Haven", lat: 11.8333, lng: 93.0500, costIndex: "Medium", avgCostPerDay: 3200, rating: 4.88, reviewsCount: 2800, bestSeason: "Oct - May", tags: ["Natural Rock Bridge", "Bharatpur Beach", "Laxmanpur Sunset", "Snorkeling"], tagline: "Natural Rock Bridge & Romantic Sunset Shores", description: "Spectacular living natural rock arch formation, shallow turquoise reef snorkeling at Bharatpur, and romantic Laxmanpur sunsets." },
  { id: "city-agatti-bangaram", name: "Agatti & Bangaram Island", state: "Lakshadweep", region: "Islands", tier: "Untouched Coral Atoll", lat: 10.8533, lng: 72.1947, costIndex: "High", avgCostPerDay: 5800, rating: 4.96, reviewsCount: 1900, bestSeason: "Oct - May", tags: ["Coral Atolls", "Lagoon Water Sports", "Snorkeling", "Glass Bottom Boats"], tagline: "Teardrop Atolls, Phosphorescent Plankton & Turquoise Lagoons", description: "Pristine uninhabited coral atolls of Bangaram and Thinnakara, runway stretching into the azure sea, and scuba with sea turtles." }
];

// Enrich each city with its unique city image and metadata
const allCities = MASTER_CITIES.map(city => {
  const cityImgData = CITY_IMAGES[city.id] || {
    image: `https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80`,
    imageAlt: `${city.name} city architecture and landmark view`
  };
  return {
    ...city,
    image: cityImgData.image,
    imageAlt: cityImgData.imageAlt,
    imageType: "city"
  };
});

// Destination image library mapped by attraction category
const DEST_CATEGORY_IMAGES = {
  "Forts & Palaces": [
    { image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80", alt: "Historic hilltop fort ramparts and palace courtyards" },
    { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80", alt: "Ornate carved marble archways and royal balconies" },
    { image: "https://images.unsplash.com/photo-1600100397608-f010f443b749?auto=format&fit=crop&w=1000&q=80", alt: "Grand stone fortress walls against evening sky" }
  ],
  "Temples & Pilgrimage": [
    { image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80", alt: "Ancient carved stone temple sanctum and flags" },
    { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80", alt: "Towering Dravidian temple gopuram with colorful deities" },
    { image: "https://images.unsplash.com/photo-1545232979-fbf67540263f?auto=format&fit=crop&w=1000&q=80", alt: "Illuminated temple spires and holy sanctum" }
  ],
  "Nature & Viewpoints": [
    { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80", alt: "Panoramic sunset mountain cliff viewpoint and valley mist" },
    { image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80", alt: "Serene azure ocean shoreline and palm trees" },
    { image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80", alt: "Dense green forest trail and natural waterfall" }
  ],
  "Markets & Bazaars": [
    { image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80", alt: "Bustling traditional Indian bazaar with spices and lanterns" },
    { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80", alt: "Colorful handicraft market stalls and textiles" }
  ]
};

// Generate rich destinations with authentic, distinct images
function generateDestinationsForCity(city, cityIdx) {
  const list = [];
  const cityName = city.name.split(' (')[0].split(' &')[0];
  
  const destTemplates = [
    { suffix: "Historic Fort & Museum Complex", category: "Forts & Palaces", timing: "09:00 AM - 05:30 PM", fee: 100 },
    { suffix: "Grand Sanctuary & Ancient Shrine", category: "Temples & Pilgrimage", timing: "06:00 AM - 09:00 PM", fee: 0 },
    { suffix: "Panoramic Valley & Sunset Viewpoint", category: "Nature & Viewpoints", timing: "Open 24 Hours (Best Sunset)", fee: 20 },
    { suffix: "Bustling Old Town Heritage Bazaar", category: "Markets & Bazaars", timing: "10:30 AM - 10:00 PM", fee: 0 }
  ];

  destTemplates.forEach((item, idx) => {
    const catImgs = DEST_CATEGORY_IMAGES[item.category] || DEST_CATEGORY_IMAGES["Nature & Viewpoints"];
    const imgObj = catImgs[(cityIdx + idx) % catImgs.length];

    list.push({
      id: `dest-${city.id}-${idx + 1}`,
      cityId: city.id,
      cityName: city.name,
      state: city.state,
      name: `${cityName} ${item.suffix}`,
      category: item.category,
      timings: item.timing,
      entryFee: item.fee === 0 ? "Free Entry" : `₹${item.fee}`,
      rating: Number((4.65 + Math.random() * 0.32).toFixed(2)),
      reviewsCount: 350 + Math.floor(Math.random() * 2100),
      image: imgObj.image,
      imageAlt: `${cityName} ${item.suffix} - ${imgObj.alt}`,
      imageType: "destination",
      description: `Must-visit hallmark destination in ${cityName} capturing the cultural, spiritual and scenic legacy of ${city.state}.`,
      coordinates: {
        lat: city.lat + (Math.random() - 0.5) * 0.03,
        lng: city.lng + (Math.random() - 0.5) * 0.03
      }
    });
  });

  return list;
}

// Generate activities with STRICT category-to-image matching
function generateActivitiesForCity(city, cityIdx) {
  const list = [];
  const cityName = city.name.split(' (')[0].split(' &')[0];
  
  // 1. Heritage & Culture Activity -> Culture image
  const cultImg = CULTURE_IMAGES[cityIdx % CULTURE_IMAGES.length];
  list.push({
    id: `act-${city.id}-heritage-1`,
    cityId: city.id,
    cityName: city.name,
    state: city.state,
    name: `Guided Heritage & Architectural Walking Tour of ${cityName}`,
    category: "Heritage & Culture",
    price: 650 + Math.floor(Math.random() * 600),
    duration: "3.5 Hours",
    rating: Number((4.7 + Math.random() * 0.28).toFixed(2)),
    reviewsCount: 140 + Math.floor(Math.random() * 800),
    badge: "Top Rated Heritage",
    image: cultImg.image,
    imageAlt: `Heritage walk in ${cityName} - ${cultImg.alt}`,
    imageType: "culture",
    description: `Explore historic alleys, hidden temples, centuries-old royal monuments, and listen to local folkloric tales with a certified heritage storyteller in ${cityName}.`,
    highlights: ["Expert Local Historian", "Monument Entry Assistance", "Historic Photography Spots", "Chai & Snack Break Included"]
  });

  // 2. Food & Dining Activity -> STRICTLY Food image
  const foodImg = FOOD_IMAGES[cityIdx % FOOD_IMAGES.length];
  list.push({
    id: `act-${city.id}-food-1`,
    cityId: city.id,
    cityName: city.name,
    state: city.state,
    name: `Authentic Street Food & Traditional Culinary Trail in ${cityName}`,
    category: "Food & Dining",
    price: 450 + Math.floor(Math.random() * 500),
    duration: "2.5 Hours",
    rating: Number((4.75 + Math.random() * 0.23).toFixed(2)),
    reviewsCount: 220 + Math.floor(Math.random() * 950),
    badge: "Must Try Foodie",
    image: foodImg.image,
    imageAlt: `Traditional culinary food trail in ${cityName} - ${foodImg.alt}`,
    imageType: "food",
    description: `Taste 7+ iconic local specialties, legendary sweet shops, secret recipes, and fragrant masala chai across the vibrant bazaar lanes of ${cityName}.`,
    highlights: ["7+ Curated Food Tastings", "Hygienic Handpicked Stalls", "Vegetarian & Local Options", "Recipe Storytelling"]
  });

  // 3. Adventure & Sports -> STRICTLY Adventure image
  const advImg = ADVENTURE_IMAGES[cityIdx % ADVENTURE_IMAGES.length];
  let advName = `Panoramic Mountain Sunrise & Nature Trail Trek in ${cityName}`;
  if (city.tags.includes("Wildlife") || city.tags.includes("Tiger")) {
    advName = `Open 4x4 Gypsy Wildlife & Predator Safari in ${cityName}`;
  } else if (city.region === "South" || city.tags.includes("Beaches") || city.tags.includes("Lakes")) {
    advName = `Scenic Sunset Kayaking & Backwater Lagoon Cruise in ${cityName}`;
  }

  list.push({
    id: `act-${city.id}-adventure-1`,
    cityId: city.id,
    cityName: city.name,
    state: city.state,
    name: advName,
    category: "Adventure & Sports",
    price: 950 + Math.floor(Math.random() * 1200),
    duration: "4 Hours",
    rating: Number((4.82 + Math.random() * 0.16).toFixed(2)),
    reviewsCount: 180 + Math.floor(Math.random() * 600),
    badge: "Adventure Pick",
    image: advImg.image,
    imageAlt: `Adventure activity in ${cityName} - ${advImg.alt}`,
    imageType: "adventure",
    description: `Thrill experience with professional certified instructors, safety equipment, and breathtaking scenic natural landscapes.`,
    highlights: ["Certified Safety Instructors", "Top Quality Gear Included", "Action Photography Moments", "Small Group Experience"]
  });

  // 4. Spiritual & Wellness -> STRICTLY Spiritual image
  const spirImg = SPIRITUAL_IMAGES[cityIdx % SPIRITUAL_IMAGES.length];
  list.push({
    id: `act-${city.id}-spiritual-1`,
    cityId: city.id,
    cityName: city.name,
    state: city.state,
    name: `Sacred Evening Temple Aarti & Classical Music Experience in ${cityName}`,
    category: "Spiritual & Wellness",
    price: 350 + Math.floor(Math.random() * 450),
    duration: "2 Hours",
    rating: Number((4.85 + Math.random() * 0.14).toFixed(2)),
    reviewsCount: 290 + Math.floor(Math.random() * 900),
    badge: "Divine Experience",
    image: spirImg.image,
    imageAlt: `Sacred aarti and spiritual ceremony in ${cityName} - ${spirImg.alt}`,
    imageType: "spiritual",
    description: `Immerse in rhythmic chants, brass lamp diya rituals, temple bells, and serene spiritual vibrations at ${cityName}'s most revered sanctuary.`,
    highlights: ["Priority Darshan Access", "Prasadam Blessing Included", "Spiritual Guide Explanation", "Evening River / Diya View"]
  });

  // 5. Shopping & Crafts -> STRICTLY Shopping image
  const shopImg = SHOPPING_IMAGES[cityIdx % SHOPPING_IMAGES.length];
  list.push({
    id: `act-${city.id}-shopping-1`,
    cityId: city.id,
    cityName: city.name,
    state: city.state,
    name: `Master Artisan Workshop & Traditional Handicrafts Bazaar Tour in ${cityName}`,
    category: "Shopping & Crafts",
    price: 550 + Math.floor(Math.random() * 500),
    duration: "3 Hours",
    rating: Number((4.7 + Math.random() * 0.24).toFixed(2)),
    reviewsCount: 110 + Math.floor(Math.random() * 450),
    badge: "Artisanal Craft",
    image: shopImg.image,
    imageAlt: `Artisan handicraft shopping tour in ${cityName} - ${shopImg.alt}`,
    imageType: "shopping",
    description: `Visit generational master craftsmen creating handloom textiles, pottery, brassware, and authentic souvenirs with fair-trade artisan guarantee.`,
    highlights: ["Hands-on Craft Workshop", "Direct Weaver / Artisan Prices", "Souvenir Keepsake Gift", "Bargaining Assistance"]
  });

  return list;
}

// Generate hotels with STRICT accommodation / property imagery
const HOTEL_TIERS = [
  { type: "Luxury Heritage Palace & Resort", minPrice: 14000, maxPrice: 38000, ratingMin: 4.8, imgIdxs: [0, 1, 2] },
  { type: "5-Star Premium Resort & Spa", minPrice: 8500, maxPrice: 19000, ratingMin: 4.7, imgIdxs: [3, 4, 5] },
  { type: "Boutique & Eco Stay", minPrice: 4200, maxPrice: 8500, ratingMin: 4.5, imgIdxs: [6, 7, 8] },
  { type: "Mid-Range Comfort Stay", minPrice: 2200, maxPrice: 4200, ratingMin: 4.3, imgIdxs: [9, 10, 11] },
  { type: "Budget Homestay & Backpacker Inn", minPrice: 850, maxPrice: 2200, ratingMin: 4.2, imgIdxs: [12, 13, 14] }
];

const HOTEL_AMENITY_POOL = [
  "Free High-Speed Wi-Fi", "Infinity Swimming Pool", "Ayurvedic Spa & Wellness",
  "Complimentary Gourmet Breakfast", "Rooftop Scenic Restaurant", "Airport & Station Transfers",
  "24x7 Room Service", "Heritage Courtyard", "Guided City Walking Tour",
  "Fitness Center", "Air Conditioning", "Coffee & Tea Maker", "Doctor on Call", "Travel & Safari Desk"
];

function generateHotelsForCity(city, cityIdx) {
  const list = [];
  const cityName = city.name.split(' (')[0].split(' &')[0];

  HOTEL_TIERS.forEach((tier, idx) => {
    const price = Math.round((tier.minPrice + Math.random() * (tier.maxPrice - tier.minPrice)) / 100) * 100;
    const rating = Number((tier.ratingMin + Math.random() * (5.0 - tier.ratingMin)).toFixed(2));
    const reviews = 90 + Math.floor(Math.random() * 850);
    
    // Pick hotel image specific to its tier
    const chosenIdx = tier.imgIdxs[(cityIdx + idx) % tier.imgIdxs.length];
    const hotelImgObj = HOTEL_IMAGES[chosenIdx] || HOTEL_IMAGES[0];

    let hotelName = "";
    if (idx === 0) hotelName = `The Grand ${cityName} Palace & Heritage Resort`;
    else if (idx === 1) hotelName = `Vivanta & Spa ${cityName}`;
    else if (idx === 2) hotelName = `${cityName} Boutique Tree & Eco Retreat`;
    else if (idx === 3) hotelName = `Treebo Trend Royal Residency ${cityName}`;
    else hotelName = `Zostel & Backpacker Haveli ${cityName}`;

    const shuffled = [...HOTEL_AMENITY_POOL].sort(() => 0.5 - Math.random());
    const amenities = shuffled.slice(0, 4 + Math.floor(Math.random() * 3));

    list.push({
      id: `hotel-${city.id}-${idx + 1}`,
      cityId: city.id,
      cityName: city.name,
      state: city.state,
      name: hotelName,
      tier: tier.type,
      category: idx <= 1 ? "Luxury & Premium" : idx === 2 ? "Boutique & Eco" : idx === 3 ? "Mid-Range" : "Budget & Hostels",
      pricePerNight: price,
      rating: Math.min(rating, 4.98),
      reviewsCount: reviews,
      image: hotelImgObj.image,
      imageAlt: `${hotelName} - ${hotelImgObj.alt}`,
      imageType: "hotel",
      address: `Central Heritage Boulevard, ${cityName}, ${city.state}`,
      amenities: amenities,
      coordinates: {
        lat: city.lat + (Math.random() - 0.5) * 0.04,
        lng: city.lng + (Math.random() - 0.5) * 0.04
      },
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before check-in",
      contact: `+91 ${Math.floor(7000000000 + Math.random() * 2999999999)}`
    });
  });

  return list;
}

// Compile all
let allActivities = [];
let allHotels = [];
let allDestinations = [];

allCities.forEach((city, idx) => {
  const dsts = generateDestinationsForCity(city, idx);
  const acts = generateActivitiesForCity(city, idx);
  const htls = generateHotelsForCity(city, idx);

  allDestinations.push(...dsts);
  allActivities.push(...acts);
  allHotels.push(...htls);
});

console.log(`\n================ DATASET COMPILED ================`);
console.log(`Cities:        ${allCities.length}`);
console.log(`Destinations:  ${allDestinations.length}`);
console.log(`Activities:    ${allActivities.length}`);
console.log(`Hotels:        ${allHotels.length}`);
console.log(`==================================================\n`);

// Write out JS Data Files
const CITIES_JS_PATH = path.join(__dirname, '..', 'src', 'data', 'cities.js');
const DESTINATIONS_JS_PATH = path.join(__dirname, '..', 'src', 'data', 'destinations.js');
const ACTIVITIES_JS_PATH = path.join(__dirname, '..', 'src', 'data', 'activities.js');
const HOTELS_JS_PATH = path.join(__dirname, '..', 'src', 'data', 'hotels.js');

fs.writeFileSync(CITIES_JS_PATH, `// Generated Comprehensive Pan-India Cities Dataset (${allCities.length} Cities)\nexport const CITIES_DATA = ${JSON.stringify(allCities, null, 2)};\n\nexport default CITIES_DATA;\n`);
fs.writeFileSync(DESTINATIONS_JS_PATH, `// Generated Comprehensive Pan-India Destinations Dataset (${allDestinations.length} Destinations)\nexport const DESTINATIONS_DATA = ${JSON.stringify(allDestinations, null, 2)};\n\nexport default DESTINATIONS_DATA;\n`);
fs.writeFileSync(ACTIVITIES_JS_PATH, `// Generated Comprehensive Pan-India Activities Dataset (${allActivities.length} Activities)\nexport const ACTIVITIES_DATA = ${JSON.stringify(allActivities, null, 2)};\n\nexport default ACTIVITIES_DATA;\n`);
fs.writeFileSync(HOTELS_JS_PATH, `// Generated Comprehensive Pan-India Hotels Dataset (${allHotels.length} Hotels)\nexport const HOTELS_DATA = ${JSON.stringify(allHotels, null, 2)};\n\nexport default HOTELS_DATA;\n`);

console.log('Successfully written all data files!');
