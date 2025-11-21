'use client';
// components/Location.tsx
import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
      <div className="w-full h-64">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279914337!2d-74.25987568772988!3d40.697670064673095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMTUnMjMuMCJX!5e0!3m2!1sen!2sus!4v1690000000000"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Location;
