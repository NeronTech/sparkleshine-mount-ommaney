"use client";

import React, { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  service: string;
  rating: number;
  comment: string;
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycby1Ku5LIV-voU1k5IGYqnbsngr4abWnP6HhgRG0k5_xEMomRturT5J12dIzeslNigXirg/exec";

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [avgRating, setAvgRating] = useState("0.0");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(GAS_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTestimonials(data.testimonials || []);
        setAvgRating(data.averageRating || "0.0");
      });
  }, []);

  // Auto slide
  useEffect(() => {
    if (!testimonials.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials.length) return null;
  

  const t = testimonials[index];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>

        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-yellow-500 text-xl">★★★★★</span>
          <span className="font-semibold">{avgRating} / 5</span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md transition-all duration-500">
          <p className="text-lg italic mb-4">“{t.comment}”</p>

          <div className="font-semibold">{t.name}</div>
          <div className="text-sm text-gray-500">
            {t.service} • {"⭐".repeat(t.rating)}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
