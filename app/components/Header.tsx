"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Approach", href: "/approach" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-parchment/92 backdrop-blur-md border-b border-parchment-line">
      <div className="max-w-[1120px] mx-auto px-8 h-[76px] flex items-center justify-between">
        <Link href="/" className="font-serif text-[1.3rem] text-ink tracking-wide">
          OTELA<span className="text-brass">.</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 border border-ink rounded-[2px] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-[18px] h-[2px] bg-ink"></span>
          <span className="block w-[18px] h-[2px] bg-ink"></span>
          <span className="block w-[18px] h-[2px] bg-ink"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className={`absolute md:static top-[76px] left-0 w-full md:w-auto bg-parchment md:bg-transparent border-b md:border-none border-parchment-line transition-all overflow-hidden md:overflow-visible ${isMenuOpen ? "max-h-[320px] p-8 md:p-0" : "max-h-0 md:max-h-full"}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`block md:inline-block text-[0.95rem] text-ink-soft pb-1 border-b-2 transition-colors ${isActive ? "border-brass" : "border-transparent hover:border-brass"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-ink text-white hover:bg-ink-soft transition-colors">
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}