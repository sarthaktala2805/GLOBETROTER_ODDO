import ExplorePage from "@/app/explore/page";

export async function generateStaticParams() {
  return [
    { city: "delhi" },
    { city: "mumbai" },
    { city: "jaipur" },
    { city: "ahmedabad" },
  ];
}

export default function CitiesPage() {
  return <ExplorePage />;
}
