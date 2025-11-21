'use client';
// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 p-6 text-center">
      <p>© 2025 Sparkles Mount Ommaney. All rights reserved.</p>
      {/* <nav className="mt-2 space-x-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav> */}
    </footer>
  );
};

export default Footer;

