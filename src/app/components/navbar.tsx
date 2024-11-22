"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "~/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("/");

  const navItems = [
    { href: "/find-shelter", label: "Find Shelter" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl h-14">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-bold text-xl text-brand-gold"
          >
            <Image
              width={100}
              height={40}
              src="/logo.png"
              alt="Need a Bed Logo"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.href)}
                className={`text-sm transition-colors hover:text-brand-gold ${activeItem === item.href ? "text-brand-gold" : "text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Bars3Icon className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-left">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveItem(item.href)}
                      className={`text-sm transition-colors hover:text-brand-gold ${activeItem === item.href ? "text-brand-gold" : "text-foreground"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}