"use client";
import { motion } from "framer-motion";
import { HomeIcon, MapIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl"
        >
          <Badge variant="secondary" className="mb-6">
            Free Resource Locator
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
            Connecting You with <span className="text-brand-gold">Available Shelter</span>
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary dark:text-content-inverse/80 mb-8">
            Simple, immediate access to nearby shelters and support services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              Find Shelter Near Me
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Mission Statement - New */}
      <section className="py-12 px-4 bg-surface-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-xl md:text-2xl leading-relaxed text-content-primary dark:text-content-inverse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our mission is to connect individuals with available shelter and support services,
            making access to resources simple and immediate.
          </motion.p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access to Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Locate Resources"
              description="Find shelters and support services in your immediate area"
            />
            <StepCard
              number="2"
              title="Check Available Space"
              description="See real-time availability at nearby shelters"
            />
            <StepCard
              number="3"
              title="Connect Directly"
              description="Get location details and access information"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<HomeIcon className="w-8 h-8" />}
            title="Shelter Access"
            description="Find available beds at nearby shelters and support centers"
            color="primary"
          />
          <FeatureCard
            icon={<MapIcon className="w-8 h-8" />}
            title="Resource Mapping"
            description="Easy-to-follow directions to available resources"
            color="primary"
          />
          <FeatureCard
            icon={<UserGroupIcon className="w-8 h-8" />}
            title="Support Network"
            description="Connect with local support services and organizations"
            color="primary"
          />
        </motion.div>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary';
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card className="border-border/40">
        <CardHeader>
          <div className="text-brand-gold mb-4">{icon}</div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Card className="border-border/40">
        <CardHeader>
          <div className="text-4xl font-bold text-brand-gold">{number}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}