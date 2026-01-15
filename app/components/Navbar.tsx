"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
  className="border-b border-black/10 sticky top-0 z-50"
  style={{ backgroundColor: "#ece2da" }}
>

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link href="/" className="font-semibold text-lg leading-tight">
          Dr. Biranda Bucher
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/ueber-mich">Über mich</Link>
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/infusionstherapien">Infusionen</Link>
          <Link href="/aesthetik">Ästhetik</Link>
          <Link href="/preise">Preise</Link>
          <Link href="/apotheke">Apotheke</Link>
        </div>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Menü öffnen"
        >
          <span className="w-6 h-0.5 bg-slate-800"></span>
          <span className="w-6 h-0.5 bg-slate-800"></span>
          <span className="w-6 h-0.5 bg-slate-800"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-black/5">
          <div className="flex flex-col px-6 py-6 gap-4 text-base font-medium">
            <Link href="/ueber-mich" onClick={() => setOpen(false)}>Über mich</Link>
            <Link href="/leistungen" onClick={() => setOpen(false)}>Leistungen</Link>
            <Link href="/infusionstherapien" onClick={() => setOpen(false)}>Infusionen</Link>
            <Link href="/aesthetik" onClick={() => setOpen(false)}>Ästhetik</Link>
            <Link href="/preise" onClick={() => setOpen(false)}>Preise</Link>
            <Link href="/apotheke" onClick={() => setOpen(false)}>Apotheke</Link>
          </div>
        </div>
      )}
    </header>
  );
}
