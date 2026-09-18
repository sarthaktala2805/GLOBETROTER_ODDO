import {
  Accommodation,
  Destination,
  DestinationActivity,
  NearbyAttraction,
  Region,
  StateUTData,
  TransportConnectivity,
} from "./types";
import { rajasthanData } from "./states/rajasthan";
import { gujaratData } from "./states/gujarat";
import { uttarPradeshData } from "./states/uttar-pradesh";
import { keralaData } from "./states/kerala";
import { karnatakaData } from "./states/karnataka";
import { allStatesData } from "./states/all-states";
import { remainingStatesData } from "./states/remaining-states";

// Master repository of all States & Union Territories
export const masterStateRegistry: StateUTData[] = [
  rajasthanData,
  gujaratData,
  uttarPradeshData,
  keralaData,
  karnatakaData,
  ...allStatesData,
  ...remainingStatesData,
];

/**
 * Retrieve all States and Union Territories metadata
 */
export function getAllStates(): { name: string; isUT: boolean; capital: string; region: Region; count: number }[] {
  return masterStateRegistry.map((s) => ({
    name: s.stateName,
    isUT: s.isUnionTerritory,
    capital: s.capital,
    region: s.region,
    count: s.destinations.length,
  }));
}

/**
 * Retrieve all destinations across India
 */
export function getAllDestinations(): Destination[] {
  return masterStateRegistry.flatMap((s) => s.destinations);
}

/**
 * Find a destination by unique ID slug
 */
export function getDestinationById(id: string): Destination | undefined {
  const normalized = id.toLowerCase().trim();
  return getAllDestinations().find((d) => d.id === normalized);
}

/**
 * Find destinations by State or UT name
 */
export function getDestinationsByState(stateName: string): Destination[] {
  const normalized = stateName.toLowerCase().trim();
  const stateData = masterStateRegistry.find(
    (s) => s.stateName.toLowerCase() === normalized
  );
  return stateData ? stateData.destinations : [];
}

/**
 * Find destinations by Geographic Region
 */
export function getDestinationsByRegion(region: Region): Destination[] {
  return masterStateRegistry
    .filter((s) => s.region === region)
    .flatMap((s) => s.destinations);
}

/**
 * Full-text search across destinations
 */
export function searchDestinations(query: string): Destination[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllDestinations();

  return getAllDestinations().filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.district.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.shortDescription.toLowerCase().includes(q) ||
      d.categories.some((c) => c.toLowerCase().includes(q))
  );
}

/**
 * Retrieve verified nearby attractions for a destination
 */
export function getNearbyAttractions(destinationId: string): NearbyAttraction[] {
  return masterStateRegistry
    .flatMap((s) => s.nearbyAttractions)
    .filter((a) => a.destinationId === destinationId);
}

/**
 * Retrieve verified real accommodations for a destination
 */
export function getAccommodations(destinationId?: string): Accommodation[] {
  const allStays = masterStateRegistry.flatMap((s) => s.accommodations);
  if (!destinationId) return allStays;
  return allStays.filter((h) => h.destinationId === destinationId);
}

/**
 * Retrieve verified authentic activities for a destination
 */
export function getActivities(destinationId?: string): DestinationActivity[] {
  const allActs = masterStateRegistry.flatMap((s) => s.activities);
  if (!destinationId) return allActs;
  return allActs.filter((a) => a.destinationId === destinationId);
}

/**
 * Retrieve practical transport connectivity for a destination
 */
export function getTransportConnectivity(destinationId: string): TransportConnectivity | undefined {
  return masterStateRegistry
    .flatMap((s) => s.connectivity)
    .find((c) => c.destinationId === destinationId);
}

export * from "./types";
