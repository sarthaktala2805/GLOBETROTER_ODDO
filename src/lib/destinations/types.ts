export type Region =
  | "North"
  | "South"
  | "West"
  | "East"
  | "North-East"
  | "Central"
  | "Islands";

export type DestinationCategory =
  | "Heritage & Forts"
  | "Palaces & Havens"
  | "Hill Stations"
  | "Coastal & Beaches"
  | "Wildlife & Sanctuaries"
  | "Pilgrimage & Sacred"
  | "Lakes & Waterfalls"
  | "Caves & Rock-Cut"
  | "Adventure & Treks"
  | "Cultural & Tribal"
  | "UNESCO World Heritage"
  | "Offbeat & Hidden Gem";

export interface Destination {
  id: string; // unique slug e.g. "hampi", "dhordo-kutch"
  name: string;
  state: string;
  district: string;
  region: Region;
  nearestCityHub: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  categories: DestinationCategory[];
  bestTimeToVisit: {
    season: string;
    peakMonths: string[];
    weatherSummary: string;
  };
  recommendedDuration: string;
  costIndex: "Value" | "Moderate" | "Premium";
  estimatedBudgetPerDay: {
    backpackerInr: number;
    midRangeInr: number;
    luxuryInr: number;
  };
  openingHours?: string;
  entryFee?: {
    indianInr: number;
    foreignInr?: number;
    notes?: string;
  };
  officialSources: {
    tourismBoardName: string;
    url: string;
  }[];
  image: string;
  imageCredit: string;
  unescoHeritage?: boolean;
}

export interface NearbyAttraction {
  id: string;
  destinationId: string;
  name: string;
  category: string;
  distanceKm: number;
  travelTimeMinutes: number;
  whyVisit: string;
  coordinates?: { lat: number; lng: number };
}

export interface Accommodation {
  id: string;
  destinationId: string;
  name: string;
  type:
    | "Hotel"
    | "Resort"
    | "Heritage Haveli"
    | "Homestay"
    | "Government Tourism Guest House"
    | "Eco Glamping / Camp";
  locationDescription: string;
  priceRangeInr?: {
    min: number;
    max: number;
  };
  rating?: number;
  reviewsCount?: number;
  amenities: string[];
  image: string;
  bookingOrInfoUrl: string;
  verifiedSource: string;
}

export interface DestinationActivity {
  id: string;
  destinationId: string;
  name: string;
  category:
    | "Sightseeing"
    | "Trekking & Hiking"
    | "Boating & Water Sports"
    | "Wildlife Safari"
    | "Cultural & Temple"
    | "Food & Bazaars"
    | "Adventure & Aerial";
  duration: string;
  estimatedCostInr?: number;
  bestTimeOfDay: "Morning" | "Afternoon" | "Sunset" | "All Day";
  description: string;
  image?: string;
}

export interface TransportConnectivity {
  destinationId: string;
  nearestAirport: {
    name: string;
    code: string;
    distanceKm: number;
    driveTime: string;
  };
  nearestRailwayStation: {
    name: string;
    code: string;
    distanceKm: number;
    driveTime: string;
  };
  majorRoadRoutes: {
    fromCity: string;
    highway: string;
    distanceKm: number;
    estimatedDriveTime: string;
    busConnectivity:
      | "Frequent State Transport"
      | "Private AC Sleeper Daily"
      | "Local Minibus";
  }[];
}

export interface StateUTData {
  stateName: string;
  isUnionTerritory: boolean;
  capital: string;
  region: Region;
  destinations: Destination[];
  nearbyAttractions: NearbyAttraction[];
  accommodations: Accommodation[];
  activities: DestinationActivity[];
  connectivity: TransportConnectivity[];
}
