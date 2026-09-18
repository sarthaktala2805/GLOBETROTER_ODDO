import { NextRequest, NextResponse } from "next/server";
import { fetchPexelsGallery, fetchPexelsPhoto } from "@/lib/pexels";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const count = parseInt(searchParams.get("count") || "1", 10);
  const orientation = (searchParams.get("orientation") as "landscape" | "portrait") || "landscape";

  if (!query) {
    return NextResponse.json({ error: "Query parameter 'query' is required" }, { status: 400 });
  }

  if (count === 1) {
    const photo = await fetchPexelsPhoto(query, orientation);
    return NextResponse.json({ photo });
  }

  const photos = await fetchPexelsGallery(query, count, orientation);
  return NextResponse.json({ photos });
}
