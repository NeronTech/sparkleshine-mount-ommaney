"use client";
// components/Services.tsx
import React from "react";

const servicesList = [
  {
    name: "Web Development",
    description: "Build fast and SEO-ready websites.",
  },
  { name: "Mobile Apps", description: "Cross-platform mobile solutions." },
  {
    name: "Consulting",
    description: "Expert guidance for your digital projects.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 font-sans text-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0056A8] mb-2">
          Our Car Wash Packages
        </h2>
        <p className="text-gray-600">
          Professional, friendly, and reliable detailing for every vehicle type
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            1. Wash (Exterior)
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Hand Wash & Chamois Dry</li>
            <li>• Tyre Shine, Wheel Clean</li>
            <li>• Windows Clean (Outside)</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $40 | Wagon $45 | SUV/4WD $50
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            2. Mini-Detail (In & Out)
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Wash & Vacuum</li>
            <li>• Tyre Shine & Window Clean (In & Out)</li>
            <li>• Dashboard, Console & Interior Wiped</li>
            <li>• Door Well Wiped</li>
            <li>• Add-on Seat Wipe $25</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $65 | Wagon $80 | SUV/4WD $85
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            3. Detail Polish
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Wash, Vacuum & Tyre Shine</li>
            <li>• Window Clean (In & Out)</li>
            <li>• Dashboard, Console & Interior Wiped</li>
            <li>• Door Well Wiped & Hand Polishing</li>
            <li>• Add-on Seat Wipe $25</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $100 | Wagon $125 | SUV/4WD $130
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            4. Interior Detail
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Full Interior Vacuum & Shampoo (Seat, Carpet, Boot, Mats)</li>
            <li>• All Compartments Detailed</li>
            <li>• Leather Seats Cleaned & Conditioned</li>
            <li>• All Interior Detailed & Shined</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $220 | Wagon $250 | SUV/4WD $270
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            5. Full Detail (Pre-Sale)
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Wash & Hand Polishing</li>
            <li>• Tyre Shine & Window Clean (In & Out)</li>
            <li>• Dashboard, Console & Interior Wiped</li>
            <li>• Full Interior Vacuum & Shampoo</li>
            <li>• Leather Seats Cleaned & Conditioned</li>
            <li>• Bugs & Tar Removed</li>
            <li>• Engine Bay Detailing (Upon Request)</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $280 | Wagon $300 | SUV/4WD $330
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-[#0056A8] mb-2">
            6. Premium Detail (Pre-Sale)
          </h3>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Wash & Hand Polishing</li>
            <li>• Tyre Shine & Window Clean (In & Out)</li>
            <li>• Dashboard, Console & Interior Wiped</li>
            <li>• Full Interior Vacuum & Shampoo</li>
            <li>• Leather Seats Cleaned & Conditioned</li>
            <li>• Bugs & Tar Removed</li>
            <li>• Engine Bay Detailing (Upon Request)</li>
            <li>• + Cut & Polish</li>
          </ul>
          <p className="font-semibold text-[#0056A8]">
            Sedan $400 | Wagon $480 | SUV/4WD $495
          </p>
        </div>
      </div>

      <div className="bg-[#0056A8] text-white rounded-2xl p-8 shadow-lg text-center mb-12">
        <h3 className="text-2xl font-bold mb-2">Ceramic Paint Protection</h3>
        <p className="text-lg">
          From <span className="text-[#FFD100] font-bold">$500</span>
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#FFD100] p-8 hover:shadow-xl transition text-center">
        <h3 className="text-2xl font-bold text-[#0056A8] mb-4">
          Extra Services
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          Air-Con Anti-Bacterial Treatment — $40
        </p>
        <p className="text-sm text-gray-700 mb-2">Hand Polishing — From $55</p>
        <p className="text-sm text-gray-700 mb-2">Seat Wipes — From $25</p>
        <p className="text-sm text-gray-700 mb-2">
          Dog Hair Removal — From $20
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Leather Clean & Condition — From $60
        </p>
        <p className="text-sm text-gray-700 mt-4 italic">
          * Extra large or excessively dirty vehicles may cost extra.
        </p>
      </div>
    </section>
  );
};

export default Services;
