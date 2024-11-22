// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "~/components/ui/card";
import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  school?: {
    name: string;
    logo: string;
  }
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
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/AmandaHansen5"
    }
  },
  {
    name: "Matt Juarez",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/matthewjuarez1"
    }
  },
  {
    name: "Vipenjit Singh",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/VSingh-0"
    }
  },
  {
    name: "Cayden Schroader",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/CS-EDU921"
    }
  },
  {
    name: "Braden Shipley",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/Bshiple"
    }
  },
  {
    name: "Jaden Roskelley",
    role: "Software Engineer Intern",
    bio: "Weber State University student who contributed to the initial development.",
    school: {
      name: "Weber State University",
      logo: "https://cdn.discordapp.com/attachments/1291613499658866719/1305202476923883550/wsu_athletics_primary_full_color_rgb_1500px_w_300ppi.png?ex=67322c07&is=6730da87&hm=0bdda088a17c9fcd958daf8daae9f988337a7eae4c9b877c660543cd43029c2b"
    },
    socials: {
      github: "https://github.com/croskelley1"
    }
  }
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
      linkedin: "https://www.linkedin.com/in/hsmith-dev/"
    }
  },
  {
    name: "Kseniya",
    role: "Nomad Alliance Executive Director",
    bio: "Leading Nomad Alliance's mission to support and empower individuals experiencing homelessness across Utah.",
    image: "/images/kseniya-headshot.jpg",
    email: "kseniya@nomadalliance.org",
    socials: {
    }
  },
  {
    name: "Michael",
    role: "Website Developer",
    bio: "Building and maintaining the website interface for Need a Bed, ensuring a seamless experience for users seeking shelter services.",
    image: "/images/michael-headshot.jpeg",
    socials: {
      github: "https://github.com/swayz8148",
      linkedin: "https://linkedin.com/in/michealdownard"
    }
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">
              About <span className="text-brand-gold">Need a Bed</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Connecting individuals with shelter and support services across Utah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Need a Bed was created to bridge the gap between those seeking shelter
              and available resources in Utah. We believe everyone deserves access
              to safe shelter and support services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Original Contributors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Original Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {originalContributors.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Current Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
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
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          {member.school && (
            <div className="w-32 mx-auto mb-6">
              <Image
                src={member.school.logo}
                alt={`${member.school.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
          {member.image && (
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
          <p className="text-brand-gold text-center mb-4">{member.role}</p>
          <p className="text-muted-foreground text-center mb-6">{member.bio}</p>

          {member.email && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaEnvelope className="w-4 h-4 text-brand-gold" />
              <a
                href={`mailto:${member.email}`}
                className="text-muted-foreground hover:text-brand-gold transition-colors"
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
                  className="text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}