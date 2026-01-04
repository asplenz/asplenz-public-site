"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

const nav = [
  { href: "/approach", label: "Approach" },
  { href: "/capability", label: "Capability" },
  { href: "/principles", label: "Principles" },
  { href: "/market-infrastructures", label: "Market Infrastructures" },
  { href: "/systemic-banks", label: "Systemic Banks" },
  { href: "/engage", label: "Engage" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white border-b border-blue-800">
      {/* Hard-left company logo (outside grid) */}
      <Link
        href="/"
        aria-label="Asplenz — Home"
        className="absolute left-4 top-1/2 -translate-y-1/2 no-underline hover:no-underline"
      >
        <Image
          src="/logo-white.png"
          alt="Asplenz"
          width={50}
          height={50}
          priority
        />
      </Link>

      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Spacer to account for absolute logo */}
          <div className="flex items-center gap-6 pl-12">
            {/* Capability name */}
            <div className="flex items-baseline gap-2">
              <span className="font-medium tracking-tightish text-white">
                Horizon
              </span>
              <span className="text-blue-200 text-xs tracking-[0.18em] uppercase">
                Evidence capability
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-blue-100 no-underline hover:no-underline hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer rounded-full px-3 py-1.5 text-sm ring-1 ring-blue-700 hover:ring-blue-500 text-white bg-transparent"
            >
              Menu
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-blue-900 p-2 shadow-hairline ring-1 ring-blue-700">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-blue-100 no-underline hover:no-underline hover:bg-blue-800 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
