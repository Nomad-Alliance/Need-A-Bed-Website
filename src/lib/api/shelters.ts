import { type Shelter } from "~/types/shelter";
import { mockShelters } from "./mockData/shelter";

interface SearchParams {
  latitude: number;
  longitude: number;
  radius?: number;
}

export async function searchShelters(params: SearchParams): Promise<Shelter[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockShelters.filter(shelter => {
    const distance = calculateDistance(
      params.latitude,
      params.longitude,
      shelter.coordinates.lat,
      shelter.coordinates.lng
    );
    return distance <= (params.radius || 25);
  });
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3963;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}