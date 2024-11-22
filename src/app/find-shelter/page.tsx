"use client";
import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { mockShelters } from "~/lib/api/mockData/shelter";
import { type Shelter } from "~/types/shelter";

export default function FindShelterPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-background to-background/95 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">
              Available <span className="text-brand-gold">Shelters</span> in Utah
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              View available beds and support services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-6">
            {mockShelters.map((shelter) => (
              <motion.div
                key={shelter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold">{shelter.name}</h3>
                        <p className="text-muted-foreground">
                          {shelter.city}, {shelter.state}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            window.open(
                              `https://www.google.com/maps/dir/?api=1&destination=${shelter.coordinates.lat},${shelter.coordinates.lng}`,
                              '_blank'
                            );
                          }}
                        >
                          Get Directions
                        </Button>
                        <Button
                          variant="default"
                          onClick={() => window.open(`tel:${shelter.phone}`)}
                        >
                          Call
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-5 h-5 text-brand-gold" />
                          <span>{shelter.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="w-5 h-5 text-brand-gold" />
                          <span>{shelter.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-5 h-5 text-brand-gold" />
                          <span>{shelter.hours}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {shelter.services.map((service) => (
                          <span
                            key={service}
                            className="px-2 py-1 bg-muted text-sm rounded-md"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {shelter.requirements && (
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {shelter.requirements.map((req) => (
                            <li key={req}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t text-sm text-muted-foreground">
                      Last updated: {new Date(shelter.lastUpdated).toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}