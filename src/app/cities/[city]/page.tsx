import Link from "next/link";
import { cities, hotels } from "@/lib/data";
import {
  getDestinationById,
  getNearbyAttractions,
  getAccommodations,
  getTransportConnectivity,
} from "@/lib/destinations";
import { compareRouteModes } from "@/lib/destinations/transport-engine";
import ClientCityDetail from "./ClientCityDetail";

// Static export ke liye Next.js is function ka use karega
export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.id,
  }));
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: cityId } = await params;
  const city = cities.find((item) => item.id === cityId);

  if (!city) {
    return (
      <main className="main-content">
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>
            Destination Not Found
          </h2>
          <p style={{ color: "var(--ink-500)", marginBottom: "24px" }}>
            The requested destination record could not be found in our pan-India database.
          </p>
          <Link href="/explore" className="btn btn-primary">
            Browse All Destinations
          </Link>
        </div>
      </main>
    );
  }

  const destMeta = cityId ? getDestinationById(cityId) : undefined;
  const nearbyAttractions = cityId ? getNearbyAttractions(cityId) : [];

  let verifiedStays = cityId ? getAccommodations(cityId) : [];
  if (verifiedStays.length === 0 && cityId) {
    verifiedStays = hotels
      .filter((h) => h.cityId === cityId)
      .map((h) => ({
        id: h.id,
        destinationId: cityId,
        name: h.name,
        type: (h.category.includes("Heritage")
          ? "Heritage Haveli"
          : h.category.includes("Resort")
          ? "Resort"
          : "Hotel") as any,
        locationDescription: `${city?.name}, ${city?.state}`,
        priceRangeInr: { min: h.estimatedCost, max: Math.round(h.estimatedCost * 1.3) },
        rating: h.rating,
        reviewsCount: 120,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Breakfast Available", "24/7 Front Desk"],
        image: h.image,
        bookingOrInfoUrl: "#",
        verifiedSource: "Curated Directory Record",
      }));
  }

  const connectivity = cityId ? getTransportConnectivity(cityId) : undefined;

  return (
    <ClientCityDetail
      city={city}
      cityId={cityId}
      destMeta={destMeta}
      nearbyAttractions={nearbyAttractions}
      verifiedStays={verifiedStays}
      connectivity={connectivity}
    />
  );
}
