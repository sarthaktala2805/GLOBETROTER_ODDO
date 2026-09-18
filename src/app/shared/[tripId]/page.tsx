import ClientSharedTrip from "./ClientSharedTrip";

// Static export ke liye generateStaticParams
export async function generateStaticParams() {
  return [
    { tripId: "sample-trip" },
    { tripId: "demo" },
  ];
}

export default async function SharedTripPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  return <ClientSharedTrip tripId={tripId} />;
}
