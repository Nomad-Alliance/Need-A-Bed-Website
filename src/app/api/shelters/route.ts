import { NextResponse } from "next/server";
import { env } from "~/env";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  if (!latitude || !longitude) {
    return NextResponse.json({ error: "Missing coordinates" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` +
      `key=${env.NEXT_PUBLIC_GOOGLE_API_KEY}&` +
      `location=${latitude},${longitude}&` +
      `radius=40000&` +
      `type=establishment&` +
      `keyword=homeless+shelter+social+services&` +
      `rankby=distance`
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch shelters" },
      { status: 500 }
    );
  }
}