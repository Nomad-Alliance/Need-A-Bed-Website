export interface Shelter {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: string;
  distance?: number;
  lastUpdated: string;
  requirements: string[]
}