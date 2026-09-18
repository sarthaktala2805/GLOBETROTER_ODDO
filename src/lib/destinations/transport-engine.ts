import { getDestinationById } from "./index";

export type TransportMode = "Flight" | "Train" | "Bus" | "Car" | "Taxi";

export interface ModalComparisonResult {
  mode: TransportMode;
  estimatedCostInr: number;
  travelTimeHours: number;
  travelTimeFormatted: string;
  comfortRating: number; // 1 to 5
  convenienceRating: number; // 1 to 5
  summary: string;
  routeHighlights: string;
  co2KgEstimate: number;
  recommendationBadge?: "Cheapest" | "Fastest" | "Most Comfortable" | "Best Overall";
}

export interface RouteComparisonMatrix {
  originName: string;
  destinationName: string;
  distanceKm: number;
  options: ModalComparisonResult[];
  recommendedOption: ModalComparisonResult;
}

/**
 * Calculates great-circle distance in km using Haversine formula
 */
function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function formatHours(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/**
 * Evaluates and compares all 5 transport modes between Origin and Destination
 */
export function compareRouteModes(
  originIdOrCoords: { lat: number; lng: number; name: string },
  destinationId: string
): RouteComparisonMatrix | null {
  const destination = getDestinationById(destinationId);
  if (!destination) return null;

  const straightDistance = calculateDistanceKm(
    originIdOrCoords.lat,
    originIdOrCoords.lng,
    destination.coordinates.lat,
    destination.coordinates.lng
  );

  // Practical road distance is typically 1.25x to 1.35x straight line in India
  const roadDistance = Math.round(straightDistance * 1.3);

  const options: ModalComparisonResult[] = [];

  // 1. Train Option (If road distance >= 60 km)
  if (roadDistance >= 60) {
    const trainSpeed = roadDistance > 400 ? 75 : 60; // average Indian Railways express speed
    const trainHours = roadDistance / trainSpeed + 0.75; // plus boarding buffer
    // 3AC / CC average pricing: ~₹1.4 per km + base ₹180
    const trainCost = Math.round(roadDistance * 1.4 + 180);

    options.push({
      mode: "Train",
      estimatedCostInr: trainCost,
      travelTimeHours: Math.round(trainHours * 10) / 10,
      travelTimeFormatted: formatHours(trainHours),
      comfortRating: 4.2,
      convenienceRating: 4.0,
      summary: "Comfortable air-conditioned rail passage with scenic landscapes.",
      routeHighlights: `Connects via nearest rail junction (${destination.nearestCityHub}).`,
      co2KgEstimate: Math.round(roadDistance * 0.035)
    });
  }

  // 2. Flight Option (Viable if distance > 300 km)
  if (straightDistance > 300) {
    const flightTime = straightDistance / 650 + 2.5; // flight duration + 2.5h airport check-in/security
    // Economy base flight estimate in India: ~₹2,200 base + ₹3.8/km
    const flightCost = Math.round(2200 + straightDistance * 3.8);

    options.push({
      mode: "Flight",
      estimatedCostInr: flightCost,
      travelTimeHours: Math.round(flightTime * 10) / 10,
      travelTimeFormatted: formatHours(flightTime),
      comfortRating: 4.8,
      convenienceRating: 4.1,
      summary: "Fastest option for long-haul inter-state corridors.",
      routeHighlights: `Flies into nearest airport hub followed by local taxi transfer.`,
      co2KgEstimate: Math.round(straightDistance * 0.15)
    });
  }

  // 3. Bus Option (AC Sleeper / State Express)
  if (roadDistance >= 40) {
    const busSpeed = roadDistance > 300 ? 50 : 42;
    const busHours = roadDistance / busSpeed + 0.5;
    // AC bus estimate: ~₹1.15 per km
    const busCost = Math.max(120, Math.round(roadDistance * 1.15));

    options.push({
      mode: "Bus",
      estimatedCostInr: busCost,
      travelTimeHours: Math.round(busHours * 10) / 10,
      travelTimeFormatted: formatHours(busHours),
      comfortRating: 3.4,
      convenienceRating: 4.2,
      summary: "Budget-friendly with multiple overnight sleeper boarding departures.",
      routeHighlights: "Regular state transport and private multi-axle coaches.",
      co2KgEstimate: Math.round(roadDistance * 0.045)
    });
  }

  // 4. Personal Car Option (Fuel + FASTag Tolls)
  {
    const carSpeed = 65; // average highway speed on Indian National Expressways
    const carHours = roadDistance / carSpeed + (roadDistance > 250 ? 1 : 0.3); // rest stop
    // Mileage: 15 km/l @ ₹96/l petrol + ₹1.5/km FASTag toll
    const fuelCost = Math.round((roadDistance / 15) * 96);
    const tollCost = Math.round(roadDistance * 1.35);
    const carCost = fuelCost + tollCost;

    options.push({
      mode: "Car",
      estimatedCostInr: carCost,
      travelTimeHours: Math.round(carHours * 10) / 10,
      travelTimeFormatted: formatHours(carHours),
      comfortRating: 4.3,
      convenienceRating: 4.8,
      summary: "Door-to-door flexibility to stop at dhabas and roadside viewpoints.",
      routeHighlights: "Scenic highway drive with electronic FASTag toll lanes.",
      co2KgEstimate: Math.round(roadDistance * 0.12)
    });
  }

  // 5. Intercity Taxi / Outstation Cab Option
  {
    const taxiSpeed = 65;
    const taxiHours = roadDistance / taxiSpeed + (roadDistance > 250 ? 1 : 0.3);
    // Commercial outstation cab: ~₹13.5 per km + tolls
    const taxiCost = Math.round(roadDistance * 13.5 + roadDistance * 1.35);

    options.push({
      mode: "Taxi",
      estimatedCostInr: taxiCost,
      travelTimeHours: Math.round(taxiHours * 10) / 10,
      travelTimeFormatted: formatHours(taxiHours),
      comfortRating: 4.7,
      convenienceRating: 5.0,
      summary: "Chauffeured sedan or SUV with zero parking or navigation fatigue.",
      routeHighlights: "Direct door-to-door pickup from home or hotel lobby.",
      co2KgEstimate: Math.round(roadDistance * 0.13)
    });
  }

  // Calculate Badges: Cheapest, Fastest, Most Comfortable, Best Overall
  let cheapest = options[0];
  let fastest = options[0];
  let mostComfortable = options[0];

  for (const opt of options) {
    if (opt.estimatedCostInr < cheapest.estimatedCostInr) cheapest = opt;
    if (opt.travelTimeHours < fastest.travelTimeHours) fastest = opt;
    if (opt.comfortRating > mostComfortable.comfortRating) mostComfortable = opt;
  }

  cheapest.recommendationBadge = "Cheapest";
  fastest.recommendationBadge = "Fastest";
  mostComfortable.recommendationBadge = "Most Comfortable";

  // Score for "Best Overall" balancing Cost, Time, and Comfort
  let bestOverall = options[0];
  let bestScore = -Infinity;

  for (const opt of options) {
    // Normalization score: higher comfort & convenience, lower cost and time
    const costScore = 1 - opt.estimatedCostInr / 15000;
    const timeScore = 1 - opt.travelTimeHours / 24;
    const comfortScore = opt.comfortRating / 5;
    const score = costScore * 0.35 + timeScore * 0.35 + comfortScore * 0.3;

    if (score > bestScore) {
      bestScore = score;
      bestOverall = opt;
    }
  }

  // If best overall hasn't already been awarded another badge, label it
  if (!bestOverall.recommendationBadge) {
    bestOverall.recommendationBadge = "Best Overall";
  }

  return {
    originName: originIdOrCoords.name,
    destinationName: destination.name,
    distanceKm: roadDistance,
    options,
    recommendedOption: bestOverall
  };
}
