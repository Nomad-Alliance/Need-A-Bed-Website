// src/lib/mockData/shelters.ts
import { type Shelter } from "~/types/shelter";

export const mockShelters: Shelter[] = [
  // Utah - Salt Lake City
  {
    id: "ut-slc-1",
    name: "The Road Home - Men's Resource Center",
    address: "3380 South 1000 West",
    city: "South Salt Lake",
    state: "UT",
    zipCode: "84119",
    phone: "(801) 359-4142",
    services: [
      "Emergency Shelter",
      "Case Management",
      "Housing Assistance",
      "Mental Health Services",
      "Substance Use Treatment"
    ],
    coordinates: {
      lat: 40.699932,
      lng: -111.927749
    },
    hours: "24/7",
    requirements: [
      "Valid ID (if available)",
      "Must be 18 or older",
      "Initial health screening"
    ],
    lastUpdated: new Date().toISOString()
  },
  {
    id: "ut-slc-2",
    name: "Geraldine E. King Women's Resource Center",
    address: "131 East 700 South",
    city: "Salt Lake City",
    state: "UT",
    zipCode: "84111",
    phone: "(801) 891-1005",
    services: [
      "Women's Emergency Shelter",
      "Case Management",
      "Employment Resources",
      "Mental Health Support",
      "Domestic Violence Services"
    ],
    coordinates: {
      lat: 40.751161,
      lng: -111.886351
    },
    hours: "24/7",
    requirements: [
      "Women only",
      "18+ years old"
    ],
    lastUpdated: new Date().toISOString()
  },

  // Utah - Ogden
  {
    id: "ut-ogd-1",
    name: "Lantern House",
    address: "269 W 33rd Street",
    city: "Ogden",
    state: "UT",
    zipCode: "84401",
    phone: "(801) 621-5036",
    services: [
      "Emergency Shelter",
      "Food Services",
      "Case Management",
      "Medical Clinic",
      "Employment Services"
    ],
    coordinates: {
      lat: 41.223576,
      lng: -111.974131
    },
    hours: "24/7",
    requirements: [
      "Valid ID preferred but not required",
      "Initial intake assessment"
    ],
    lastUpdated: new Date().toISOString()
  },

  // Utah - Provo
  {
    id: "ut-prv-1",
    name: "Food and Care Coalition",
    address: "299 E 900 South",
    city: "Provo",
    state: "UT",
    zipCode: "84606",
    phone: "(801) 373-1825",
    services: [
      "Emergency Shelter",
      "Transitional Housing",
      "Food Services",
      "Medical Services",
      "Case Management"
    ],
    coordinates: {
      lat: 40.225514,
      lng: -111.654757
    },
    hours: "24/7",
    requirements: [
      "No active warrants",
      "Initial screening required"
    ],
    lastUpdated: new Date().toISOString()
  },

  // Utah - St. George
  {
    id: "ut-stg-1",
    name: "DOVE Center",
    address: "1240 East 100 South",
    city: "St. George",
    state: "UT",
    zipCode: "84790",
    phone: "(435) 628-0458",
    services: [
      "Emergency Shelter",
      "Domestic Violence Services",
      "Crisis Intervention",
      "Counseling",
      "Legal Advocacy"
    ],
    coordinates: {
      lat: 37.104153,
      lng: -113.543677
    },
    hours: "24/7",
    requirements: [
      "Domestic violence victims",
      "Women and children"
    ],
    lastUpdated: new Date().toISOString()
  }
];