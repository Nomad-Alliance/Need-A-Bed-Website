"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from 'react';
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

interface FooterLink {
  name: string;
  href: string;
}

interface LinkSectionProps {
  title: string;
  links: FooterLink[];
}

const footerLinks = {
  resources: [
    { name: "Find Shelter", href: "/find-shelter" },
    { name: "Emergency Resources", href: "/resources" },
    { name: "Get Help", href: "/help" },
  ],
  about: [
    { name: "Our Mission", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Support Us", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ],
};

const Footer: FC = () => {
  return (
    <footer className="border-t bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <Image
              width={150}
              height={40}
              src="/logo.png"
              alt="Need a Bed Logo"
              priority
            />
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our mission is to connect individuals with available shelter and support services,
            making access to resources simple and immediate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center md:text-left mb-12">
          <LinkSection title="Resources" links={footerLinks.resources} />
          <LinkSection title="About" links={footerLinks.about} />
          <LinkSection title="Legal" links={footerLinks.legal} />
        </div>

        <Separator className="my-8 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Need a Bed. Making shelter accessible for everyone.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="hover:text-[#B19552] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#B19552] transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const LinkSection: FC<LinkSectionProps> = ({ title, links }) => (
  <div className="w-full">
    <h3 className="mb-6 text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
      {title}
    </h3>
    <ul className="space-y-4">
      {links.map((link: FooterLink) => (
        <li key={link.name}>
          <motion.div
            whileHover={{ x: 2 }}
            className="inline-block"
          >
            <Link
              href={link.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-[#B19552] transition-colors duration-200"
            >
              {link.name}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;