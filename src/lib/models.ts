export type City = {
  id: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  shortDescription: string;
  image: string;
  imageCredit: string;
  latitude: number;
  longitude: number;
  popularity: number;
  costIndex: "Value" | "Moderate" | "Premium";
  bestTimeToVisit: string;
  categories: string[];
  hue: string;
  attractions: {
    name: string;
    description: string;
    category: string;
    duration: string;
    estimatedCost: number;
  }[];
};

export type Activity = {
  id: string;
  name: string;
  cityId: string;
  category: string;
  duration: string;
  estimatedCost: number;
  bestTime: string;
  description: string;
  image: string;
  rating: number;
};

export type Hotel = {
  id: string;
  name: string;
  cityId: string;
  category: "Heritage" | "Boutique" | "Resort" | "Homestay" | "Luxury";
  estimatedCost: number;
  rating: number;
  reviewsCount: number;
  amenities: string[];
  image: string;
  description: string;
};

export type TransportOption = {
  id: string;
  mode: "Flight" | "Train" | "Bus" | "Cab";
  fromCity: string;
  toCity: string;
  priceEstimated: number;
  duration: string;
  badge?: "Best Overall" | "Cheapest" | "Fastest" | "Most Comfortable";
  rationale: string;
  carbonScore?: "Low" | "Moderate" | "High";
};

export type TripStop = {
  cityId: string;
  date: string;
  visited?: boolean;
};

export type Expense = {
  category: "Transport" | "Stay" | "Food" | "Activities" | "Other";
  amount: number;
};

export type ItineraryItem = {
  id: string;
  stopIndex: number;
  time: string;
  title: string;
  duration: string;
  completed?: boolean;
  cost?: number;
  location?: string;
};

export type Trip = {
  id: string;
  name: string;
  dates: string;
  stops: TripStop[];
  budget: number;
  expenses: Expense[];
  cover: string;
  public?: boolean;
  itinerary?: ItineraryItem[];
  notes?: string;
};
