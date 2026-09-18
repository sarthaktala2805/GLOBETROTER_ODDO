const PEXELS_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || process.env.PEXELS_API_KEY || "";

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  alt: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export interface PexelsSearchResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
}

// In-memory cache for fast client-side performance
const photoCache = new Map<string, string[]>();

/**
 * Fetch a single photo from Pexels matching a query
 */
export async function fetchPexelsPhoto(
  query: string,
  orientation: "landscape" | "portrait" | "square" = "landscape"
): Promise<string | null> {
  const cacheKey = `${query}_${orientation}_1`;
  if (photoCache.has(cacheKey)) {
    return photoCache.get(cacheKey)![0] || null;
  }

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=1&orientation=${orientation}`,
      {
        headers: {
          Authorization: PEXELS_KEY,
        },
        next: { revalidate: 86400 }, // Cache for 24h
      }
    );

    if (!res.ok) return null;
    const data: PexelsSearchResponse = await res.json();
    if (data.photos && data.photos.length > 0) {
      const url = data.photos[0].src.large || data.photos[0].src.landscape;
      photoCache.set(cacheKey, [url]);
      return url;
    }
  } catch (err) {
    console.error(`[Pexels] Error fetching query "${query}":`, err);
  }

  return null;
}

/**
 * Fetch multiple photos from Pexels for galleries
 */
export async function fetchPexelsGallery(
  query: string,
  count: number = 4,
  orientation: "landscape" | "portrait" = "landscape"
): Promise<string[]> {
  const cacheKey = `${query}_${orientation}_${count}`;
  if (photoCache.has(cacheKey)) {
    return photoCache.get(cacheKey)!;
  }

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=${count}&orientation=${orientation}`,
      {
        headers: {
          Authorization: PEXELS_KEY,
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) return [];
    const data: PexelsSearchResponse = await res.json();
    if (data.photos && data.photos.length > 0) {
      const urls = data.photos.map((p) => p.src.large || p.src.landscape);
      photoCache.set(cacheKey, urls);
      return urls;
    }
  } catch (err) {
    console.error(`[Pexels] Error fetching gallery for "${query}":`, err);
  }

  return [];
}
