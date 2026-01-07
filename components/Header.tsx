"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/capability", label: "Capability" },
  { href: "/product-status", label: "Product" },
  { href: "/principles", label: "Principles" },
  { href: "/market-infrastructures", label: "Market Infrastructures" },
  { href: "/systemic-banks", label: "Systemic Banks" },
  { href: "/engage", label: "Engage" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-50 text-blue-900 border-b border-blue-100">
      {/* Hard-left company logo (outside grid) */}
      <Link
        href="/"
        aria-label="Asplenz - Home"
        className="absolute left-4 top-1/2 -translate-y-1/2 no-underline hover:no-underline"
      >
        <Image
          src="/logo-white.png"
          alt="Asplenz"
          width={30}
          height={30}
          priority
        />
      </Link>

      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Spacer to account for absolute logo */}
          <div className="flex items-center gap-6 pl-12">
            {/* Capability name */}
            <div className="flex items-baseline gap-2">
              <span className="font-medium tracking-tightish text-black">
                Horizon
              </span>
              <span className="text-black text-xs tracking-[0.18em] uppercase">
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
                className="text-sm text-black no-underline hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer rounded-full px-3 py-1.5 text-sm ring-1 ring-blue-100 hover:ring-blue-500 text-blue-900 bg-transparent"
            >
              Menu
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-blue-50 p-2 shadow-hairline ring-1 ring-blue-100">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-black no-underline hover:no-underline hover:bg-blue-100 hover:text-blue-700"
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
