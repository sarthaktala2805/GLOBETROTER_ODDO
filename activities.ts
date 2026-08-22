import { ActivityData } from '../types';

export const ACTIVITIES: ActivityData[] = [
  // ─── NEW DELHI ─────────────────────────────────────────────────────────────
  { 
    id: 'del-1', 
    cityId: 'delhi', 
    name: 'Red Fort Heritage Walk', 
    category: 'Sightseeing', 
    description: 'Explore the great red sandstone fortress of Mughal emperor Shah Jahan, with its Diwan-i-Aam, Diwan-i-Khas, and the legendary Lahori Gate.', 
    duration: '2-3 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1592635196078-9ffc67562f1c?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['UNESCO', 'Mughal', 'History'] 
  },
  { 
    id: 'del-2', 
    cityId: 'delhi', 
    name: 'Qutub Minar Exploration', 
    category: 'Sightseeing', 
    description: "Towering 73-metre victory minaret constructed in 1193, set within the ancient Qutub complex containing the rust-free Iron Pillar.", 
    duration: '2 hours', 
    estimatedCost: 250, 
    image: 'https://images.unsplash.com/photo-1545232979-fbf6c1ecf421?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['UNESCO', 'Monuments', 'Architecture'] 
  },
  { 
    id: 'del-3', 
    cityId: 'delhi', 
    name: 'Chandni Chowk Food Walk', 
    category: 'Food/Bhojan', 
    description: "A guided walk through Old Delhi's oldest street-food lanes — Paranthe Wali Gali, Old Famous Jalebi Wala, Natraj Dahi Bhalle, and rabri falooda.", 
    duration: '3-4 hours', 
    estimatedCost: 1200, 
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Street Food', 'Old Delhi', 'Guided Tour'] 
  },
  { 
    id: 'del-4', 
    cityId: 'delhi', 
    name: "Humayun's Tomb Visit", 
    category: 'Culture/Darshan', 
    description: "The architectural precursor to the Taj Mahal — a magnificent UNESCO World Heritage Mughal garden tomb surrounded by water channels.", 
    duration: '1.5-2 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['UNESCO', 'Mughal', 'Garden Tomb'] 
  },
  { 
    id: 'del-5', 
    cityId: 'delhi', 
    name: 'India Gate Sunset Walk', 
    category: 'Sightseeing', 
    description: 'A leisurely evening stroll around the war memorial arch on Kartavya Path, dedicated to 82,000 soldiers with night illumination.', 
    duration: '1-2 hours', 
    estimatedCost: 0, 
    image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80', 
    rating: 4.4, 
    tags: ['Free', 'Evening', 'Memorial'] 
  },
  { 
    id: 'del-6', 
    cityId: 'delhi', 
    name: 'Akshardham Temple Darshan & Light Show', 
    category: 'Culture/Darshan', 
    description: "World's largest comprehensive Hindu temple complex — 10,000 carved figures, musical fountain water show, and Sahaj Anand cultural boat ride.", 
    duration: '4-5 hours', 
    estimatedCost: 500, 
    image: 'https://images.unsplash.com/photo-1600100397608-f010f444f475?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Temple', 'Architecture', 'Spiritual'] 
  },
  { 
    id: 'del-7', 
    cityId: 'delhi', 
    name: 'Dilli Haat Tribal Crafts & Regional Food', 
    category: 'Culture/Darshan', 
    description: "Open-air crafts bazaar representing 28 Indian states — authentic handlooms, tribal brassware, and regional state food stalls serving momos, thalis, and dosas.", 
    duration: '2-3 hours', 
    estimatedCost: 150, 
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80', 
    rating: 4.5, 
    tags: ['Shopping', 'Handicrafts', 'Culture'] 
  },
  { 
    id: 'del-8', 
    cityId: 'delhi', 
    name: 'Lotus Temple Silent Meditation', 
    category: 'Culture/Darshan', 
    description: "The pure white Greek marble Bahá'í House of Worship shaped like a blooming lotus, set amidst nine tranquil ponds and verdant lawns.", 
    duration: '1 hour', 
    estimatedCost: 0, 
    image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['Free', 'Spiritual', 'Architecture'] 
  },

  // ─── AGRA ─────────────────────────────────────────────────────────────────
  { 
    id: 'agr-1', 
    cityId: 'agra', 
    name: 'Taj Mahal Sunrise Experience', 
    category: 'Sightseeing', 
    description: "Witness the marble monument of eternal love bathed in pink dawn light with morning mist rising over the Yamuna River.", 
    duration: '3-4 hours', 
    estimatedCost: 1300, 
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['UNESCO', 'Sunrise', 'Must-See'] 
  },
  { 
    id: 'agr-2', 
    cityId: 'agra', 
    name: 'Agra Fort Mughal Citadel Tour', 
    category: 'Sightseeing', 
    description: "Explore the red sandstone fortress where Emperor Shah Jahan spent his final years gazing at the Taj Mahal — Diwan-i-Khas and Sheesh Mahal.", 
    duration: '2-3 hours', 
    estimatedCost: 650, 
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80', 
    rating: 4.5, 
    tags: ['UNESCO', 'Mughal', 'Fort'] 
  },
  { 
    id: 'agr-3', 
    cityId: 'agra', 
    name: 'Mughlai Food & Petha Tasting Tour', 
    category: 'Food/Bhojan', 
    description: "Tantalizing Mughlai cuisine crawl in Agra — Galouti kebabs, mutton korma, bedmi puri breakfast, and authentic Panchhi Petha confectionary.", 
    duration: '2 hours', 
    estimatedCost: 800, 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Mughlai', 'Kebab', 'Petha', 'Food Tour'] 
  },
  { 
    id: 'agr-4', 
    cityId: 'agra', 
    name: 'Fatehpur Sikri Imperial Ruins Trip', 
    category: 'Sightseeing', 
    description: "Akbar's abandoned red sandstone capital — Buland Darwaza (the 54m Gateway of Magnificence) and the white marble Tomb of Salim Chishti.", 
    duration: '4-5 hours', 
    estimatedCost: 800, 
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80', 
    rating: 4.4, 
    tags: ['UNESCO', 'Day Trip', 'Mughal'] 
  },
  { 
    id: 'agr-5', 
    cityId: 'agra', 
    name: 'Marble Inlay Pietra Dura Craft Workshop', 
    category: 'Culture/Darshan', 
    description: "Learn and observe how master artisans inlay semi-precious lapis lazuli and jasper into white Makrana marble using centuries-old Mughal tools.", 
    duration: '2 hours', 
    estimatedCost: 500, 
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['Craft', 'Marble Inlay', 'Heritage'] 
  },

  // ─── JAIPUR ─────────────────────────────────────────────────────────────────
  { 
    id: 'jai-1', 
    cityId: 'jaipur', 
    name: 'Amber Fort Hilltop Palace Tour', 
    category: 'Sightseeing', 
    description: "Magnificent hilltop fort-palace above Maota Lake — explore the thousand-mirror Sheesh Mahal, Sukh Niwas water-cooled chambers, and Ganesh Pol.", 
    duration: '3-4 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['UNESCO', 'Fort', 'Rajput'] 
  },
  { 
    id: 'jai-2', 
    cityId: 'jaipur', 
    name: 'Hawa Mahal Sunrise Photography Walk', 
    category: 'Sightseeing', 
    description: "Photograph the 5-story pink honeycomb facade of the Palace of Winds with 953 jharokhas as the morning sun casts amber glows on the streets.", 
    duration: '1 hour', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed68b2b?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Photography', 'Iconic', 'Hawa Mahal'] 
  },
  { 
    id: 'jai-3', 
    cityId: 'jaipur', 
    name: 'Authentic Rajasthani Thali & Dal Baati Feast', 
    category: 'Food/Bhojan', 
    description: "Traditional royal Rajasthani spread — crispy Baati crushed in pure ghee, Panchmel Dal, Churma, Gatte ki Sabzi, Ker Sangri, and Mawa Kachori.", 
    duration: '2 hours', 
    estimatedCost: 850, 
    image: 'https://images.unsplash.com/photo-1613292443284-c770fe797406?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Rajasthani Thali', 'Dal Baati', 'Ghee'] 
  },
  { 
    id: 'jai-4', 
    cityId: 'jaipur', 
    name: 'Hand Block Printing Textile Workshop (Bagru)', 
    category: 'Culture/Darshan', 
    description: "Hands-on masterclass in traditional Bagru wooden block printing with natural vegetable dyes on fine cotton scarves to take home.", 
    duration: '3 hours', 
    estimatedCost: 1200, 
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Textile', 'Workshop', 'Handicraft'] 
  },
  { 
    id: 'jai-5', 
    cityId: 'jaipur', 
    name: 'Nahargarh Fort Golden Hour Sunset Trek', 
    category: 'Adventure', 
    description: "Trek along the rugged Aravalli ridge to Padao open-air viewpoint overlooking the entire Pink City skyline glowing under twilight.", 
    duration: '2-3 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1603288940356-9b044c50cbf1?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Sunset', 'Trekking', 'Panorama'] 
  },

  // ─── JODHPUR ─────────────────────────────────────────────────────────────────
  { 
    id: 'jod-1', 
    cityId: 'jodhpur', 
    name: 'Mehrangarh Fort Grand Tour', 
    category: 'Sightseeing', 
    description: "Perched 400 feet above the Blue City, explore one of India's most colossal forts — royal palanquins, weaponry, Moti Mahal, and rampart cannons.", 
    duration: '3-4 hours', 
    estimatedCost: 800, 
    image: 'https://images.unsplash.com/photo-1548013146-72479768badd?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Fort', 'Blue City', 'Must-See'] 
  },
  { 
    id: 'jod-2', 
    cityId: 'jodhpur', 
    name: 'Flying Fox Zip-line Over Mehrangarh Fort', 
    category: 'Adventure', 
    description: "Six thrilling zip-lines flying over battlements, lakes, and desert moats with breathtaking views of the blue rooftops below.", 
    duration: '1.5-2 hours', 
    estimatedCost: 2100, 
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Zip-line', 'Adrenaline', 'Adventure'] 
  },
  { 
    id: 'jod-3', 
    cityId: 'jodhpur', 
    name: 'Jodhpur Mirchi Bada & Pyaaz Kachori Crawl', 
    category: 'Food/Bhojan', 
    description: "Spicy morning food trail around Clock Tower (Ghanta Ghar) tasting hot Mirchi Vada, Pyaaz Kachori, and rich Makhaniya Lassi.", 
    duration: '1.5 hours', 
    estimatedCost: 350, 
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Street Food', 'Mirchi Bada', 'Kachori'] 
  },

  // ─── UDAIPUR ─────────────────────────────────────────────────────────────────
  { 
    id: 'udp-1', 
    cityId: 'udaipur', 
    name: 'Lake Pichola Sunset Boat Cruise', 
    category: 'Sightseeing', 
    description: "Serene sunset cruise gliding past the floating Lake Palace, Jag Mandir island, and the illuminated Ghats reflected in the calm waters.", 
    duration: '1.5 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Lake Pichola', 'Boat Cruise', 'Sunset'] 
  },
  { 
    id: 'udp-2', 
    cityId: 'udaipur', 
    name: 'Bagore Ki Haveli Dharohar Folk Dance Show', 
    category: 'Culture/Darshan', 
    description: "Nightly Rajasthani spectacle by Pichola lake featuring Kalbeliya snake-charmer dance, fire stunts, puppet shows, and 9-pot balancing acts.", 
    duration: '1.5 hours', 
    estimatedCost: 150, 
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Folk Dance', 'Cultural Show', 'Haveli'] 
  },
  { 
    id: 'udp-3', 
    cityId: 'udaipur', 
    name: 'Mewari Lakeside Dining & Laal Maas Experience', 
    category: 'Food/Bhojan', 
    description: "Authentic Mewari dinner at Ambrai Ghat — fiery red Mathania chilli Laal Maas, Govind Gatta curry, and fresh garlic naan under the palace lights.", 
    duration: '2 hours', 
    estimatedCost: 1400, 
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Laal Maas', 'Lakeside', 'Fine Dining'] 
  },

  // ─── JAISALMER ────────────────────────────────────────────────────────────────
  { 
    id: 'jsl-1', 
    cityId: 'jaisalmer', 
    name: 'Sam Sand Dunes Camel Safari & Desert Camp', 
    category: 'Adventure', 
    description: "Camel trek across shifting golden sand dunes of the Thar Desert, followed by Rajasthani folk music around a starlit campfire.", 
    duration: '6-8 hours', 
    estimatedCost: 1800, 
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Camel Safari', 'Thar Desert', 'Campfire'] 
  },
  { 
    id: 'jsl-2', 
    cityId: 'jaisalmer', 
    name: 'Living Golden Fort Heritage Walk', 
    category: 'Sightseeing', 
    description: "Explore the golden sandstone fort where 3,000 residents live among 12th-century Jain temples, rooftop cafes, and royal havelis.", 
    duration: '2-3 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['UNESCO', 'Living Fort', 'Sandstone'] 
  },

  // ─── AMRITSAR ─────────────────────────────────────────────────────────────────
  { 
    id: 'amt-1', 
    cityId: 'amritsar', 
    name: 'Golden Temple Darshan & Community Langar', 
    category: 'Culture/Darshan', 
    description: "Spiritual pilgrimage to Sri Harmandir Sahib — bathe in the sacred Amrit Sarovar, listen to live Gurbani Kirtan, and participate in Langar serving 100k daily.", 
    duration: '3-4 hours', 
    estimatedCost: 0, 
    image: 'https://images.unsplash.com/photo-1573213598665-40fcda09e4a5?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Golden Temple', 'Langar', 'Spiritual', 'Free'] 
  },
  { 
    id: 'amt-2', 
    cityId: 'amritsar', 
    name: 'Crispy Amritsari Kulcha & Lassi Food Tour', 
    category: 'Food/Bhojan', 
    description: "Tasting the world-famous 7-layer tandoori Amritsari Aloo-Pyaaz Kulcha loaded with homemade makhan (white butter), spicy chhole, and thick malai lassi.", 
    duration: '1.5 hours', 
    estimatedCost: 350, 
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Amritsari Kulcha', 'Lassi', 'Punjabi Food'] 
  },
  { 
    id: 'amt-3', 
    cityId: 'amritsar', 
    name: 'Wagah Border Beating Retreat Ceremony', 
    category: 'Culture/Darshan', 
    description: "The thrilling military parade and flag-lowering ceremony between Indian BSF and Pakistan Rangers with roaring crowd energy.", 
    duration: '3 hours', 
    estimatedCost: 0, 
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Patriotic', 'Wagah Border', 'Ceremony', 'Free'] 
  },

  // ─── VARANASI ─────────────────────────────────────────────────────────────────
  { 
    id: 'vns-1', 
    cityId: 'varanasi', 
    name: 'Dashashwamedh Ghat Maha Ganga Aarti', 
    category: 'Culture/Darshan', 
    description: "Spectacular evening ritual where priests in saffron robes raise multi-tiered brass oil lamps amidst rhythmic chanting, conch shells, and incense smoke.", 
    duration: '2 hours', 
    estimatedCost: 300, 
    image: 'https://images.unsplash.com/photo-1583196924294-825595996615?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Ganga Aarti', 'Spiritual', 'Ghats', 'Must-Do'] 
  },
  { 
    id: 'var-2', 
    cityId: 'varanasi', 
    name: 'Subah-e-Banaras Dawn Wooden Boat Ride', 
    category: 'Sightseeing', 
    description: "Rowboat at sunrise past 84 ghats from Assi to Manikarnika — pilgrims offering prayers, sadhus meditating, and centuries of temple spires in morning mist.", 
    duration: '2 hours', 
    estimatedCost: 500, 
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Boat Ride', 'Sunrise', 'Ganges'] 
  },
  { 
    id: 'var-3', 
    cityId: 'varanasi', 
    name: 'Banarasi Kachori Sabzi, Jalebi & Paan Trail', 
    category: 'Food/Bhojan', 
    description: "Morning culinary heritage walk in Thatheri Bazaar for hing kachori, piping hot jalebis dipped in saffron syrup, malyo (winter foam dessert), and Maghai Paan.", 
    duration: '2 hours', 
    estimatedCost: 300, 
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Street Food', 'Kachori', 'Jalebi', 'Banaras'] 
  },
  { 
    id: 'var-4', 
    cityId: 'varanasi', 
    name: 'Banarasi Katan Silk Handloom Weaving Tour', 
    category: 'Culture/Darshan', 
    description: "Visit traditional artisan weaving colonies in Madanpura to watch the intricate jacquard weaving of pure silk sarees using real gold and silver Zari.", 
    duration: '2 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Silk', 'Handloom', 'Weaving', 'Heritage'] 
  },

  // ─── RISHIKESH ────────────────────────────────────────────────────────────────
  { 
    id: 'rsh-1', 
    cityId: 'rishikesh', 
    name: 'Ganges White-Water River Rafting (Shivpuri)', 
    category: 'Adventure', 
    description: "Navigate Grade III and IV rapids — 'Roller Coaster', 'Golf Course', and 'Club House' on the pristine emerald waters of the Ganges.", 
    duration: '3-4 hours', 
    estimatedCost: 1000, 
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['River Rafting', 'Ganges', 'Adrenaline'] 
  },
  { 
    id: 'rsh-2', 
    cityId: 'rishikesh', 
    name: 'Mohanchatti 83m Fixed Platform Bungee Jump', 
    category: 'Adventure', 
    description: "India's highest certified bungee jump platform cantilevered over the rocky Hyul River gorge — extreme adrenaline guaranteed.", 
    duration: '2 hours', 
    estimatedCost: 3500, 
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Bungee Jump', 'Extreme', 'Bucket List'] 
  },
  { 
    id: 'rsh-3', 
    cityId: 'rishikesh', 
    name: 'Sunrise Yoga & Meditation by the Ganges', 
    category: 'Culture/Darshan', 
    description: "Traditional Hatha yoga, pranayama breathing, and guided meditation on the riverbank sandbanks followed by herbal tea.", 
    duration: '2 hours', 
    estimatedCost: 500, 
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Yoga', 'Meditation', 'Wellness'] 
  },

  // ─── MUMBAI ────────────────────────────────────────────────────────────────
  { 
    id: 'mum-1', 
    cityId: 'mumbai', 
    name: 'Gateway of India & Elephanta Island Caves', 
    category: 'Sightseeing', 
    description: "Ferry across Mumbai harbour to UNESCO rock-cut Hindu and Buddhist cave temples featuring the colossal 20ft Trimurti sculpture of Lord Shiva.", 
    duration: '4-5 hours', 
    estimatedCost: 800, 
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['UNESCO', 'Ferry', 'Gateway of India'] 
  },
  { 
    id: 'mum-2', 
    cityId: 'mumbai', 
    name: 'Mumbai Street Food Safari (Vada Pav & Pav Bhaji)', 
    category: 'Food/Bhojan', 
    description: "Legendary culinary tour of Chowpatty and Mohammad Ali Road — spicy butter Pav Bhaji, golden Vada Pav, Pani Puri, and falooda kulfi.", 
    duration: '3 hours', 
    estimatedCost: 650, 
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Vada Pav', 'Pav Bhaji', 'Street Food'] 
  },
  { 
    id: 'mum-3', 
    cityId: 'mumbai', 
    name: "Marine Drive Queen's Necklace Sunset Walk", 
    category: 'Sightseeing', 
    description: "Stroll along the 3.6km Arabian Sea promenade admiring the world's second-largest collection of Art Deco architecture at twilight.", 
    duration: '1.5 hours', 
    estimatedCost: 0, 
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Marine Drive', 'Sunset', 'Free', 'Art Deco'] 
  },

  // ─── GOA ─────────────────────────────────────────────────────────────────
  { 
    id: 'goa-1', 
    cityId: 'goa', 
    name: 'Grande Island Coral Scuba Diving & Snorkeling', 
    category: 'Adventure', 
    description: "Boat dive expedition to Suzy's Wreck and Davy Jones Locker reefs teeming with parrotfish, lionfish, and sea turtles.", 
    duration: '6 hours', 
    estimatedCost: 3500, 
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cf967?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Scuba Diving', 'Island Tour', 'Water Sports'] 
  },
  { 
    id: 'goa-2', 
    cityId: 'goa', 
    name: 'Dudhsagar Four-Tiered Waterfall Jeep Safari', 
    category: 'Adventure', 
    description: "Thrilling 4x4 jungle drive through Bhagwan Mahavir Wildlife Sanctuary to India's 310m 'Sea of Milk' cataract with swimming in freshwater pools.", 
    duration: '6-7 hours', 
    estimatedCost: 2400, 
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Waterfall', 'Jeep Safari', 'Jungle'] 
  },
  { 
    id: 'goa-3', 
    cityId: 'goa', 
    name: 'Goan Seafood Curry, Prawn Balchão & Feni Tasting', 
    category: 'Food/Bhojan', 
    description: "Authentic coastal dining at a Portuguese-era heritage restaurant — tangy Goan Fish Curry with red rice, butter garlic crab, and Bebinca layer cake.", 
    duration: '2 hours', 
    estimatedCost: 1200, 
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Seafood', 'Goan Cuisine', 'Fish Curry'] 
  },
  { 
    id: 'goa-4', 
    cityId: 'goa', 
    name: 'Old Goa UNESCO Baroque Churches & Basilica Tour', 
    category: 'Culture/Darshan', 
    description: "16th-century Portuguese monuments — Basilica of Bom Jesus containing the relics of St. Francis Xavier, and the colossal Se Cathedral.", 
    duration: '2.5 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['UNESCO', 'Portuguese', 'Architecture'] 
  },

  // ─── BENGALURU ────────────────────────────────────────────────────────────────
  { 
    id: 'blr-1', 
    cityId: 'bengaluru', 
    name: 'Authentic South Indian Dosa & Filter Coffee Trail', 
    category: 'Food/Bhojan', 
    description: "Morning heritage breakfast at CTR or MTR — ghee-crisped Benne Masala Dosa, steaming Idli-Vada with spicy coconut chutney, and foaming degree filter coffee.", 
    duration: '2 hours', 
    estimatedCost: 350, 
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Dosa', 'Filter Coffee', 'South Indian'] 
  },
  { 
    id: 'blr-2', 
    cityId: 'bengaluru', 
    name: 'Lalbagh Botanical Glass House Garden Walk', 
    category: 'Sightseeing', 
    description: "240-acre historic garden founded by Hyder Ali, housing an 1889 London Crystal Palace-inspired Glass House and 1,800 exotic tropical botanical species.", 
    duration: '2 hours', 
    estimatedCost: 50, 
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80', 
    rating: 4.6, 
    tags: ['Botanical Garden', 'Nature', 'Glass House'] 
  },

  // ─── MYSURU ─────────────────────────────────────────────────────────────────
  { 
    id: 'mys-1', 
    cityId: 'mysuru', 
    name: 'Mysore Palace Grand Illumination Tour', 
    category: 'Sightseeing', 
    description: "The seat of the Wadiyar dynasty lit up with 100,000 glowing bulbs on weekends — stained-glass Kalyana Mantapa and gold-plated royal howdah.", 
    duration: '2-3 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Palace', 'Illumination', 'Royal'] 
  },
  { 
    id: 'mys-2', 
    cityId: 'mysuru', 
    name: 'Devaraja Market & Mysore Pak Confectionery Trail', 
    category: 'Food/Bhojan', 
    description: "135-year-old sensory bazaar filled with mounds of kumkum, jasmine garlands, and melt-in-the-mouth authentic ghee Mysore Pak from Guru Sweets.", 
    duration: '2 hours', 
    estimatedCost: 400, 
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db7?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Mysore Pak', 'Market', 'Sweets'] 
  },

  // ─── KOCHI ─────────────────────────────────────────────────────────────────
  { 
    id: 'kch-1', 
    cityId: 'kochi', 
    name: 'Fort Kochi Chinese Fishing Nets & Spice Market', 
    category: 'Sightseeing', 
    description: "Explore the 14th-century cantilevered fishing nets at sunset, followed by Mattancherry spice warehouses fragrant with cardamom and black pepper.", 
    duration: '3 hours', 
    estimatedCost: 300, 
    image: 'https://images.unsplash.com/photo-1628172828699-e60d5ed703c1?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Chinese Fishing Nets', 'Fort Kochi', 'Spices'] 
  },
  { 
    id: 'kch-2', 
    cityId: 'kochi', 
    name: 'Classical Kathakali Masked Dance-Drama', 
    category: 'Culture/Darshan', 
    description: "Traditional Kerala temple art performance — observe the 1.5-hour organic herbal makeup application, intricate eye expressions (Navarasas), and live percussion.", 
    duration: '2.5 hours', 
    estimatedCost: 450, 
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9945?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Kathakali', 'Classical Dance', 'Kerala Culture'] 
  },
  { 
    id: 'kch-3', 
    cityId: 'kochi', 
    name: 'Kerala Seafood Cooking Class (Appam & Fish Moilee)', 
    category: 'Food/Bhojan', 
    description: "Hands-on culinary session with a local chef making lacy fermented rice Appams and fresh seer fish simmered in mild coconut milk and curry leaves.", 
    duration: '3 hours', 
    estimatedCost: 1500, 
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Cooking Class', 'Fish Moilee', 'Appam'] 
  },

  // ─── MUNNAR ─────────────────────────────────────────────────────────────────
  { 
    id: 'mun-1', 
    cityId: 'munnar', 
    name: 'Kolukkumalai Sunrise Tea Plantation Trek', 
    category: 'Adventure', 
    description: "Jeep safari to the world's highest organic tea estate at 7,900ft to watch the sunrise pierce through cloud blankets above the Western Ghats.", 
    duration: '4-5 hours', 
    estimatedCost: 1500, 
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Tea Plantation', 'Sunrise', 'Trekking'] 
  },
  { 
    id: 'mun-2', 
    cityId: 'munnar', 
    name: 'Eravikulam National Park Nilgiri Tahr Safari', 
    category: 'Sightseeing', 
    description: "Walk the high-altitude grasslands of Anamudi base to observe the endangered Nilgiri Tahr mountain goat grazing among wildflowers.", 
    duration: '3 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Wildlife', 'Nilgiri Tahr', 'National Park'] 
  },

  // ─── ALLEPPEY ─────────────────────────────────────────────────────────────────
  { 
    id: 'all-1', 
    cityId: 'alleppey', 
    name: 'Luxury Houseboat Cruise on Vembanad Backwaters', 
    category: 'Sightseeing', 
    description: "Day-long glide through coconut-lined lagoons, paddy fields below sea level, and peaceful canal villages on a traditional Kettuvallam.", 
    duration: '5 hours', 
    estimatedCost: 6500, 
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Houseboat', 'Backwaters', 'Luxury', 'Scenic'] 
  },
  { 
    id: 'all-2', 
    cityId: 'alleppey', 
    name: 'Traditional 100-Oar Snake Boat Race Experience', 
    category: 'Adventure', 
    description: "Witness the rhythmic spectacle of 100 oarsmen rowing synchronized to traditional Vanchipattu boat songs on Punnamada Lake.", 
    duration: '2.5 hours', 
    estimatedCost: 800, 
    image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Snake Boat', 'Nehru Trophy', 'Cultural Sport'] 
  },

  // ─── KOLKATA ─────────────────────────────────────────────────────────────────
  { 
    id: 'kol-1', 
    cityId: 'kolkata', 
    name: 'Victoria Memorial & British Raj Heritage Walk', 
    category: 'Sightseeing', 
    description: "Majestic Italian Renaissance white marble monument, Royal Gallery paintings, and surrounding 64-acre Maidan park gardens.", 
    duration: '2.5 hours', 
    estimatedCost: 200, 
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80', 
    rating: 4.7, 
    tags: ['Colonial', 'Museum', 'Architecture'] 
  },
  { 
    id: 'kol-2', 
    cityId: 'kolkata', 
    name: 'Bengali Mishti Doi, Sandesh & Kosha Mangsho Food Walk', 
    category: 'Food/Bhojan', 
    description: "Century-old confectioneries tour — Nolen Gurer Sandesh at Balaram Mullick, clay-pot baked Mishti Doi at K.C. Das, and slow-cooked Kosha Mangsho.", 
    duration: '3 hours', 
    estimatedCost: 750, 
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Bengali Sweets', 'Mishti Doi', 'Food Walk'] 
  },
  { 
    id: 'kol-3', 
    cityId: 'kolkata', 
    name: 'Kumartuli Clay Idol Sculptors Artisan Quarter', 
    category: 'Culture/Darshan', 
    description: "Fascinating studio walk where multi-generational clay artists sculpt majestic Durga Puja idols out of sacred Ganga silt and straw.", 
    duration: '2 hours', 
    estimatedCost: 300, 
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Durga Puja', 'Artisans', 'Potters', 'Culture'] 
  },

  // ─── DARJEELING ─────────────────────────────────────────────────────────────
  { 
    id: 'dj-1', 
    cityId: 'darjeeling', 
    name: 'Tiger Hill Mt. Kanchenjunga Sunrise Panorama', 
    category: 'Sightseeing', 
    description: "4:00 AM Jeep ascent to 8,500ft to watch the world's 3rd highest peak turn from indigo to brilliant pink, amber, and dazzling white.", 
    duration: '3 hours', 
    estimatedCost: 400, 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Kanchenjunga', 'Sunrise', 'Tiger Hill'] 
  },
  { 
    id: 'dj-2', 
    cityId: 'darjeeling', 
    name: 'UNESCO Darjeeling Himalayan Toy Train Joyride', 
    category: 'Sightseeing', 
    description: "Steam engine journey along narrow-gauge tracks looping around Batasia Loop memorial with sweeping valley views.", 
    duration: '2 hours', 
    estimatedCost: 1200, 
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['UNESCO', 'Toy Train', 'Heritage'] 
  },

  // ─── LEH-LADAKH ─────────────────────────────────────────────────────────────
  { 
    id: 'leh-1', 
    cityId: 'leh', 
    name: 'Pangong Tso Turquoise Lake Stargazing Camp', 
    category: 'Adventure', 
    description: "Overnight camp at 14,270ft beside the color-shifting saltwater lake under crystal-clear Himalayan Milky Way night skies.", 
    duration: '2 Days', 
    estimatedCost: 5500, 
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Pangong Lake', 'Camping', 'Stargazing'] 
  },
  { 
    id: 'leh-2', 
    cityId: 'leh', 
    name: 'Khardung La High Mountain Pass Motorcycle Ride', 
    category: 'Adventure', 
    description: "Ride Royal Enfield motorcycles up to 17,982ft through snowy hairpin bends and prayer flag-covered mountain crests.", 
    duration: '6 hours', 
    estimatedCost: 2500, 
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Khardung La', 'Motorcycle', 'High Altitude'] 
  },
  { 
    id: 'leh-3', 
    cityId: 'leh', 
    name: 'Thiksey Monastery Morning Monk Chanting Prayer', 
    category: 'Culture/Darshan', 
    description: "12-storey Tibetan Buddhist gompa resembling the Potala Palace — witness morning puja rituals with resonant long brass horn blowing.", 
    duration: '2.5 hours', 
    estimatedCost: 50, 
    image: 'https://images.unsplash.com/photo-1513094775335-7f3bc4e3e0e9?auto=format&fit=crop&w=800&q=80', 
    rating: 4.9, 
    tags: ['Monastery', 'Tibetan Culture', 'Spiritual'] 
  },

  // ─── CHERRAPUNJI & MEGHALAYA ───────────────────────────────────────────────
  { 
    id: 'chr-1', 
    cityId: 'cherrapunji', 
    name: 'Nongriat Double Decker Living Root Bridge Trek', 
    category: 'Adventure', 
    description: "Descend 3,500 stone steps into subtropical rainforest to walk on 500-year-old living Ficus elastica tree root bridges over turquoise river pools.", 
    duration: '6 hours', 
    estimatedCost: 600, 
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Root Bridge', 'Rainforest', 'Trekking'] 
  },

  // ─── PORT BLAIR & ANDAMANS ────────────────────────────────────────────────
  { 
    id: 'pb-1', 
    cityId: 'port-blair', 
    name: 'Havelock Radhanagar Beach Sunset & Snorkeling', 
    category: 'Adventure', 
    description: "Voted Asia's Best Beach — pristine white powder sands, gentle turquoise breakers, and guided coral snorkeling at Elephant Beach.", 
    duration: '5 hours', 
    estimatedCost: 2800, 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3f?auto=format&fit=crop&w=800&q=80', 
    rating: 5.0, 
    tags: ['Radhanagar', 'Snorkeling', 'Island Beach'] 
  },
  { 
    id: 'pb-2', 
    cityId: 'port-blair', 
    name: 'Historic Cellular Jail Memorial & Sound and Light Show', 
    category: 'Culture/Darshan', 
    description: "Moving patriotic tribute at the national memorial where freedom fighters were exiled during the independence struggle.", 
    duration: '2.5 hours', 
    estimatedCost: 150, 
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80', 
    rating: 4.8, 
    tags: ['Cellular Jail', 'Freedom Struggle', 'Memorial'] 
  }
];

export default ACTIVITIES;
