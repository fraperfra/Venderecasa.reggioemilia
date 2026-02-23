"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/blog", label: "Blog" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/logo-diba.png"
            alt="Diba Servizi Immobiliari"
            className="logo-img"
            width="147"
            height="48"
          />
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? "nav-active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/valutazione-gratuita-eredita" className="navbar-cta-btn">
              Valutazione Gratuita →
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`} role="navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "nav-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/valutazione-gratuita-eredita"
          className="nav-mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Valutazione Gratuita →
        </Link>
      </div>
    </nav>
  );
}
