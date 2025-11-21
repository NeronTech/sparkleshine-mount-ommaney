'use client';
// components/Services.tsx
import React from 'react';

const servicesList = [
  { name: 'Web Development', description: 'Build fast and SEO-ready websites.' },
  { name: 'Mobile Apps', description: 'Cross-platform mobile solutions.' },
  { name: 'Consulting', description: 'Expert guidance for your digital projects.' },
];

const Services: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold">Services</h2>
      <ul className="mt-4 space-y-4">
        {servicesList.map((svc) => (
          <li key={svc.name} className="p-4 border rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold">{svc.name}</h3>
            <p className="mt-1 text-gray-600">{svc.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
