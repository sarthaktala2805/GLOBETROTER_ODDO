import { HotelData } from '../types';

export const HOTELS: HotelData[] = [
  // ─── NEW DELHI ─────────────────────────────────────────────────────────────
  { 
    id: 'del-h1', 
    cityId: 'delhi', 
    name: 'Zostel Delhi (Paharganj)', 
    category: 'Budget', 
    rating: 4.3, 
    pricePerNight: 550, 
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80', 
    location: 'Paharganj, Central Delhi', 
    amenities: ['Dorm Bunk Beds', 'Rooftop Cafe', 'Common Kitchen', 'High-Speed Wi-Fi', 'Luggage Lockers'], 
    description: 'Vibrant backpacker hub steps from New Delhi Railway Station with a colorful rooftop cafe and social common room.' 
  },
  { 
    id: 'del-h2', 
    cityId: 'delhi', 
    name: 'The Connaught Hotel (IHCL SeleQtions)', 
    category: 'Mid-range', 
    rating: 4.5, 
    pricePerNight: 6500, 
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', 
    location: 'Connaught Place, Central Delhi', 
    amenities: ['Outdoor Pool', 'Art Deco Dining', 'Fitness Center', 'Cocktail Bar', 'Concierge'], 
    description: 'Boutique art deco luxury situated in the heart of Lutyens Delhi overlooking the historic colonnades of CP.' 
  },
  { 
    id: 'del-h3', 
    cityId: 'delhi', 
    name: 'The Leela Palace New Delhi', 
    category: 'Luxury', 
    rating: 4.9, 
    pricePerNight: 28000, 
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', 
    location: 'Diplomatic Enclave, Chanakyapuri', 
    amenities: ['Rooftop Temperature-Controlled Infinity Pool', 'ESPA Royal Spa', 'Butler Service', 'Fine Dining Megu & Le Cirque', 'Helipad Access'], 
    description: 'Opulent palace hotel inspired by Lutyens architecture with hand-woven silk tapestries and 24-karat gold leaf domes.' 
  },

  // ─── AGRA ─────────────────────────────────────────────────────────────────
  { 
    id: 'agr-h1', 
    cityId: 'agra', 
    name: 'Hotel Kamal Rooftop View', 
    category: 'Budget', 
    rating: 4.0, 
    pricePerNight: 950, 
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80', 
    location: 'Taj Ganj, South Gate Agra', 
    amenities: ['Rooftop Taj View', 'Attached Bath', 'Free Wi-Fi', 'Travel Desk', 'Vegetarian Kitchen'], 
    description: 'Cozy budget inn offering direct rooftop breakfast views of the Taj Mahal just 200m from the South Gate.' 
  },
  { 
    id: 'agr-h2', 
    cityId: 'agra', 
    name: 'Radisson Hotel Agra', 
    category: 'Mid-range', 
    rating: 4.4, 
    pricePerNight: 4800, 
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80', 
    location: 'Fatehabad Road, Agra', 
    amenities: ['Rooftop Pool', 'Oasis Spa', 'Sky Grill Rooftop Lounge', 'Fitness Studio', 'Buffet Dining'], 
    description: 'Contemporary comfort on Agra tourist corridor with a rooftop swimming pool gazing at the distant marble dome.' 
  },
  { 
    id: 'agr-h3', 
    cityId: 'agra', 
    name: 'The Oberoi Amarvilas Agra', 
    category: 'Luxury', 
    rating: 5.0, 
    pricePerNight: 65000, 
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', 
    location: 'Taj East Gate Road, Agra', 
    amenities: ['Unobstructed Taj View from Every Room', 'Tiered Pool with Mughal Arches', 'Oberoi Ayurvedic Spa', 'Private Golf Buggy to Taj', 'Private Dining'], 
    description: 'Rated among the world top 10 luxury hotels — pure Mughal opulence located just 600m from the Taj Mahal.' 
  },

  // ─── JAIPUR ─────────────────────────────────────────────────────────────────
  { 
    id: 'jai-h1', 
    cityId: 'jaipur', 
    name: 'Moustache Jaipur Heritage Hostel', 
    category: 'Budget', 
    rating: 4.4, 
    pricePerNight: 450, 
    image: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=80', 
    location: 'MI Road, Jaipur', 
    amenities: ['Custom Bunks', 'Rooftop Pool & Cafe', 'Yoga Sessions', 'Walking Tours', 'Fast Wi-Fi'], 
    description: 'Colorful Rajasthani backpacker hostel with daily heritage walks, rooftop dip pool, and vibrant traveler culture.' 
  },
  { 
    id: 'jai-h2', 
    cityId: 'jaipur', 
    name: 'Samode Haveli Boutique Palace Hotel', 
    category: 'Premium', 
    rating: 4.8, 
    pricePerNight: 14000, 
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', 
    location: 'Gangapole, Old City Jaipur', 
    amenities: ['Courtyard Garden Pool', 'Hand-Painted Fresco Suites', 'Spa & Jacuzzi', 'Royal Dining Hall', 'Puppet Shows'], 
    description: 'A 225-year-old royal residence hidden inside the historic walled city with private courtyards and mosaic-tiled pool.' 
  },
  { 
    id: 'jai-h3', 
    cityId: 'jaipur', 
    name: 'Rambagh Palace (The Jewel of Jaipur)', 
    category: 'Luxury', 
    rating: 5.0, 
    pricePerNight: 48000, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', 
    location: 'Bhawani Singh Road, Jaipur', 
    amenities: ['Former Royal Residence of Maharaja', 'Suvarna Mahal Gilded Ballroom', 'Jiva Grande Spa', 'Peacock Gardens', 'Vintage Car Transfer'], 
    description: 'Former residence of the Maharaja of Jaipur — 47 manicured acres of Mughal gardens, marble corridors, and regal grandeur.' 
  },

  // ─── UDAIPUR ─────────────────────────────────────────────────────────────────
  { 
    id: 'udp-h1', 
    cityId: 'udaipur', 
    name: 'Nukkad Guest House & Lake View Rooftop', 
    category: 'Budget', 
    rating: 4.3, 
    pricePerNight: 850, 
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', 
    location: 'Old City, near Jagdish Temple', 
    amenities: ['Lake Pichola Rooftop View', 'Clean Private Rooms', 'Home-Cooked Thali', 'Wi-Fi', 'Luggage Storage'], 
    description: 'Warm family-run homestay situated in the cobblestone lanes of old Udaipur with breathtaking sunset views.' 
  },
  { 
    id: 'udp-h2', 
    cityId: 'udaipur', 
    name: 'Taj Lake Palace (Floating Palace on Lake Pichola)', 
    category: 'Luxury', 
    rating: 5.0, 
    pricePerNight: 55000, 
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80', 
    location: 'Lake Pichola Island, Udaipur', 
    amenities: ['Private Royal Boat Transfer', 'Jiva Spa Boat', 'Bhairo Open-Air Rooftop Restaurant', 'Butler Service', 'Royal Courtyard'], 
    description: 'Built in 1746 as an island pleasure palace on Lake Pichola — India\'s most celebrated romantic hotel.' 
  },

  // ─── GOA ─────────────────────────────────────────────────────────────────
  { 
    id: 'goa-h1', 
    cityId: 'goa', 
    name: 'Jungle by The Hostel Crowd', 
    category: 'Budget', 
    rating: 4.5, 
    pricePerNight: 650, 
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', 
    location: 'Vagator, North Goa', 
    amenities: ['Open-Air Jungle Bar', 'Yoga Shala', 'Dorms & Private Huts', 'Bicycle Rental', 'Bonfire Nights'], 
    description: 'Eco-conscious bohemian haven nestled among swaying coconut palms near Vagator and Anjuna beaches.' 
  },
  { 
    id: 'goa-h2', 
    cityId: 'goa', 
    name: 'Taj Exotica Resort & Spa Goa', 
    category: 'Luxury', 
    rating: 4.9, 
    pricePerNight: 26000, 
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', 
    location: 'Benaulim Beach, South Goa', 
    amenities: ['56 Acres of Private Beachfront', 'Executive Golf Course', 'Jiva Ayurveda Spa', 'Plunge Pool Villas', 'Water Sports Desk'], 
    description: 'Mediterranean-style luxury beachfront sanctuary on pristine Benaulim beach with private sea-facing villas.' 
  },
  { 
    id: 'goa-h3', 
    cityId: 'goa', 
    name: 'Pousada Tauma Boutique Ayurvedic Resort', 
    category: 'Premium', 
    rating: 4.7, 
    pricePerNight: 9500, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099946?auto=format&fit=crop&w=800&q=80', 
    location: 'Calangute, Goa', 
    amenities: ['12 Themed Suites', 'Central Stone Lagoon Pool', 'Ayurvedic Treatment Pavilion', 'Copper Leaf Restaurant'], 
    description: 'Exquisite hideaway featuring 12 individually handcrafted suites built with Goan laterite stone around a central lagoon.' 
  },

  // ─── MUMBAI ─────────────────────────────────────────────────────────────────
  { 
    id: 'mum-h1', 
    cityId: 'mumbai', 
    name: 'The Taj Mahal Palace & Tower Mumbai', 
    category: 'Luxury', 
    rating: 5.0, 
    pricePerNight: 42000, 
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80', 
    location: 'Apollo Bunder, Colaba, South Mumbai', 
    amenities: ['Arabian Sea & Gateway Views', 'Wasabi by Morimoto Restaurant', 'Heritage Palace Wing', 'Jiva Spa', 'Pool Oasis'], 
    description: 'Legendary flagship built in 1903 standing proud over the Gateway of India and the Arabian Sea.' 
  },
  { 
    id: 'mum-h2', 
    cityId: 'mumbai', 
    name: 'Trident Hotel Nariman Point', 
    category: 'Premium', 
    rating: 4.6, 
    pricePerNight: 16000, 
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80', 
    location: 'Nariman Point, Marine Drive', 
    amenities: ['Panoramic Marine Drive Views', 'Outdoor Pool', 'Frangipani & India Jones Dining', 'Fitness Center'], 
    description: 'Soaring 35-storey luxury tower offering premier views of the shimmering Queen\'s Necklace coastline.' 
  },

  // ─── RISHIKESH ─────────────────────────────────────────────────────────────
  { 
    id: 'rsh-h1', 
    cityId: 'rishikesh', 
    name: 'Zostel Rishikesh (Tapovan)', 
    category: 'Budget', 
    rating: 4.5, 
    pricePerNight: 500, 
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', 
    location: 'Tapovan, Rishikesh', 
    amenities: ['Ganges View Rooftop', 'Yoga Deck', 'Dorms & Deluxe Privates', 'Cafe', 'Adventure Booking Desk'], 
    description: 'Backpacker hotspot in Tapovan surrounded by yoga ashrams and organic cafes with river-facing rooftop terrace.' 
  },
  { 
    id: 'rsh-h2', 
    cityId: 'rishikesh', 
    name: 'Ananda in the Himalayas Palace Retreat', 
    category: 'Luxury', 
    rating: 5.0, 
    pricePerNight: 52000, 
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80', 
    location: 'Narendra Nagar, Rishikesh Ridge', 
    amenities: ['24,000 sq ft Ayurvedic Wellness Spa', 'Maharaja Palace Estate', 'Yoga & Vedanta Pavilions', 'Sal Forest Views'], 
    description: 'World-renowned destination spa spread over 100 acres of Maharaja Palace estate overlooking the holy valley.' 
  },

  // ─── MUNNAR ─────────────────────────────────────────────────────────────────
  { 
    id: 'mun-h1', 
    cityId: 'munnar', 
    name: 'Windermere Estate Tea Plantation Bungalow', 
    category: 'Premium', 
    rating: 4.8, 
    pricePerNight: 11000, 
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', 
    location: 'Pothamedu, Munnar', 
    amenities: ['Plantation Bungalow Suites', 'Barn Dining Room', 'Cardamom Valley Treks', 'Campfire Deck'], 
    description: 'A 60-acre working coffee and cardamom plantation retreat perched high on the cliff-slopes with mist-shrouded valley views.' 
  },

  // ─── ALLEPPEY ─────────────────────────────────────────────────────────────────
  { 
    id: 'all-h1', 
    cityId: 'alleppey', 
    name: 'Spice Routes Luxury AC Houseboat', 
    category: 'Luxury', 
    rating: 4.9, 
    pricePerNight: 12500, 
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80', 
    location: 'Punnamada Lake Jetty, Alleppey', 
    amenities: ['Air-Conditioned Glass Bedroom', 'Private Chef Onboard', 'Upper Sun Deck', 'Ensuite Bathrooms', 'Canoe Excursions'], 
    description: 'Private 5-star eco-houseboat with teakwood interiors and floor-to-ceiling glass windows cruising Kerala canals.' 
  }
];

export default HOTELS;
