import { City, ActivityData, HotelData, RegionType, CostIndexType, HotelCategory, DiscoveryActivityCategory } from '../types';
import { CITIES } from './cities';
import { ACTIVITIES } from './activities';
import { HOTELS } from './hotels';

// ─── City Queries ─────────────────────────────────────────────────────────────

export const getCityById = (id: string): City | undefined =>
  CITIES.find((c) => c.id === id);

export const getCitiesByRegion = (region: RegionType): City[] =>
  CITIES.filter((c) => c.region === region);

export const getCitiesByCostIndex = (costIndex: CostIndexType): City[] =>
  CITIES.filter((c) => c.costIndex === costIndex);

export const searchCities = (
  query: string,
  region?: RegionType | 'All',
  costIndex?: CostIndexType | 'All'
): City[] => {
  const q = query.toLowerCase().trim();

  return CITIES.filter((c) => {
    // Region filter
    if (region && region !== 'All' && c.region !== region) return false;
    // Cost index filter
    if (costIndex && costIndex !== 'All' && c.costIndex !== costIndex) return false;
    // Text search — name, state, popularFor tags, keywords
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q) ||
      c.popularFor.some((tag) => tag.toLowerCase().includes(q)) ||
      (c.keywords || []).some((kw) => kw.toLowerCase().includes(q))
    );
  });
};

// ─── Activity Queries ─────────────────────────────────────────────────────────

export const getActivitiesByCity = (cityId: string): ActivityData[] =>
  ACTIVITIES.filter((a) => a.cityId === cityId);

export const getActivitiesByCategory = (category: DiscoveryActivityCategory): ActivityData[] =>
  ACTIVITIES.filter((a) => a.category === category);

export const getActivitiesByMaxCost = (maxCost: number): ActivityData[] =>
  ACTIVITIES.filter((a) => a.estimatedCost <= maxCost);

export const getActivitiesForCity = (
  cityId: string,
  category?: DiscoveryActivityCategory | 'All',
  maxCost?: number
): ActivityData[] =>
  ACTIVITIES.filter((a) => {
    if (a.cityId !== cityId) return false;
    if (category && category !== 'All' && a.category !== category) return false;
    if (maxCost !== undefined && a.estimatedCost > maxCost) return false;
    return true;
  });

// ─── Hotel Queries ────────────────────────────────────────────────────────────

export const getHotelsByCity = (cityId: string): HotelData[] =>
  HOTELS.filter((h) => h.cityId === cityId);

export const getHotelsByCategory = (category: HotelCategory): HotelData[] =>
  HOTELS.filter((h) => h.category === category);

export const getHotelsByMaxPrice = (maxPrice: number): HotelData[] =>
  HOTELS.filter((h) => h.pricePerNight <= maxPrice);

export const getHotelsForCity = (
  cityId: string,
  category?: HotelCategory | 'All',
  maxPrice?: number
): HotelData[] =>
  HOTELS.filter((h) => {
    if (h.cityId !== cityId) return false;
    if (category && category !== 'All' && h.category !== category) return false;
    if (maxPrice !== undefined && h.pricePerNight > maxPrice) return false;
    return true;
  });

// ─── Featured City Selector ───────────────────────────────────────────────────

/** Returns a curated mix of cities from all regions for the dashboard grid */
export const getFeaturedCities = (count: number = 12): City[] => {
  const featured = [
    'delhi', 'jaipur', 'mumbai', 'goa', 'bengaluru', 'kochi',
    'varanasi', 'udaipur', 'leh', 'gangtok', 'shillong', 'hampi',
    'alleppey', 'pondicherry', 'amritsar', 'jaisalmer', 'munnar', 'darjeeling',
  ];
  return featured
    .slice(0, count)
    .map((id) => getCityById(id))
    .filter((c): c is City => !!c);
};

// ─── Stats per City ───────────────────────────────────────────────────────────

export const getCityStats = (cityId: string) => ({
  activityCount: ACTIVITIES.filter((a) => a.cityId === cityId).length,
  hotelCount: HOTELS.filter((h) => h.cityId === cityId).length,
});

// ─── Cost Index Display ───────────────────────────────────────────────────────

export const costIndexLabel: Record<CostIndexType, string> = {
  Low: '₹ Budget-Friendly',
  Medium: '₹₹ Mid-Range',
  High: '₹₹₹ Premium',
};

export const costIndexColor: Record<CostIndexType, string> = {
  Low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  High: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const hotelCategoryColor: Record<HotelCategory, string> = {
  Budget: 'bg-emerald-50 text-emerald-700',
  'Mid-range': 'bg-amber-50 text-amber-700',
  Premium: 'bg-indigo-50 text-indigo-700',
  Luxury: 'bg-rose-50 text-rose-700',
};

export const activityCategoryColor: Record<DiscoveryActivityCategory, string> = {
  Sightseeing: 'bg-sky-50 text-sky-700',
  'Food/Bhojan': 'bg-orange-50 text-orange-700',
  'Culture/Darshan': 'bg-purple-50 text-purple-700',
  Adventure: 'bg-emerald-50 text-emerald-700',
};

export const formatINR = (amount: number): string => {
  if (amount === 0) return 'Free';
  return `₹${amount.toLocaleString('en-IN')}`;
};
