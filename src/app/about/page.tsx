// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent } from "~/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  school?: {
    name: string;
    logo: string;
  };
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const originalContributors: TeamMember[] = [
  {
    name: "Amanda Hansen",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/AmandaHansen5",
    },
  },
  {
    name: "Matt Juarez",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/matthewjuarez1",
    },
  },
  {
    name: "Vipenjit Singh",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/VSingh-0",
    },
  },
  {
    name: "Cayden Schroader",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/CS-EDU921",
    },
  },
  {
    name: "Braden Shipley",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/Bshiple",
    },
  },
  {
    name: "Jaden Roskelley",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "/Weber-Logo.png",
    },
    socials: {
      github: "https://github.com/croskelley1",
    },
  },
];

const currentTeam: TeamMember[] = [
  {
    name: "Harrison Smith",
    role: "Technical Lead",
    bio: "Leading the technical development and architecture of Need a Bed, ensuring seamless integration of services and resources.",
    image: "/images/harrison-headshot.jpeg",
    email: "harrison@nomadalliance.org",
    socials: {
      github: "https://github.com/hsmith-dev",
      linkedin: "https://www.linkedin.com/in/hsmith-dev/",
    },
  },
  {
    name: "Kseniya",
    role: "Nomad Alliance Executive Director",
    bio: "Leading Nomad Alliance's mission to support and empower individuals experiencing homelessness across Utah.",
    image: "/images/kseniya-headshot.jpg",
    email: "kseniya@nomadalliance.org",
    socials: {},
  },
  {
    name: "Michael",
    role: "Website Developer",
    bio: "Building and maintaining the website interface for Need a Bed, ensuring a seamless experience for users seeking shelter services.",
    image: "/images/michael-headshot.jpeg",
    socials: {
      github: "https://github.com/swayz8148",
      linkedin: "https://linkedin.com/in/michealdownard",
    },
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-background/95 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold">
              About <span className="text-brand-gold">Need a Bed</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Connecting individuals with shelter and support services across
              Utah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Need a Bed was created to bridge the gap between those seeking
              shelter and available resources in Utah. We believe everyone
              deserves access to safe shelter and support services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Original Contributors Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Original Contributors
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {originalContributors.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Team Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Current Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentTeam.map((member, index) => (
              <div key={index} className="h-96">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold">
              Contribute to Our Project
            </h2>
            <p className="text-lg text-muted-foreground">
              We are working to expand this project to make it more dynamic and
              functional in other locations. If you would like to contribute to
              improving this project, please check out our GitHub at{" "}
              <a
                href="https://github.com/Nomad-Alliance/Need-a-Bed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold transition-colors hover:text-brand-gold/75"
              >
                https://github.com/Nomad-Alliance/Need-a-Bed
              </a>{" "}
              or message us at{" "}
              <a
                href="mailto:info@nomadalliance.org"
                className="text-brand-gold transition-colors hover:text-brand-gold/75"
              >
                info@nomadalliance.org
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col justify-between overflow-hidden">
        <CardContent className="flex flex-col items-center p-6">
          {member.school && (
            <div className="mx-auto mb-6 w-32">
              <Image
                src={member.school.logo}
                alt={`${member.school.name} logo`}
                width="100"
                height="100"
                className="h-auto w-full object-contain"
              />
            </div>
          )}
          {member.image && (
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                width="100"
                height="100"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <h3 className="mb-2 text-center text-xl font-semibold">
            {member.name}
          </h3>
          <p className="mb-4 text-center text-brand-gold">{member.role}</p>
          <p className="mb-6 text-center text-muted-foreground">{member.bio}</p>

          {member.email && (
            <div className="mb-4 flex items-center justify-center gap-2">
              <FaEnvelope className="h-4 w-4 text-brand-gold" />
              <a
                href={`mailto:${member.email}`}
                className="text-muted-foreground transition-colors hover:text-brand-gold"
              >
                {member.email}
              </a>
            </div>
          )}

          {member.socials && (
            <div className="flex justify-center gap-4">
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-gold"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              )}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-gold"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-gold"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
