'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationSections } from '@/lib/navigation';
import { Language } from '@/lib/types';

interface MobileMenuProps {
  lang: Language;
}

export default function MobileMenu({ lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (slug: string) => {
    return pathname.includes(`/${slug}`);
  };
  
  let pageNumber = 1;
  
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded transition-colors"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 w-80 bg-white border-l border-black/10 z-50 overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-6 space-y-8">
          {navigationSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 font-normal">
                {section.title[lang]}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const currentNumber = String(pageNumber).padStart(2, '0');
                  pageNumber++;
                  const href = item.externalHref
                    ? `/${lang}${item.externalHref}`
                    : `/${lang}/foundations/${item.slug}`;
                  return (
                    <li key={item.slug || item.externalHref}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm block transition-all duration-200 ${
                          item.slug && isActive(item.slug)
                            ? 'text-black font-medium border-l-2 border-[#1e3a8a] pl-4 bg-[#1e3a8a]/5'
                            : 'text-black/70 hover:text-black hover:bg-zinc-50 pl-4'
                        }`}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span className={`text-xs font-mono ${
                            item.slug && isActive(item.slug) ? 'text-[#1e3a8a]' : 'text-zinc-400'
                          }`}>
                            {currentNumber}
                          </span>
                          <span>{item.title[lang]}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
