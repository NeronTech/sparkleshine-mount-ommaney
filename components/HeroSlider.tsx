'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const slides = [
  {
    title: "Fast. Friendly. Sparkling Clean.",
    desc: "Premium car wash services at Mount Ommaney — book online in seconds.",
    img: "https://images.unsplash.com/photo-1760528586235-2a3225e709ff?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    buttonText: "Book Online",
    buttonLink: "#booking",
  },
  {
    title: "Eco-friendly Products",
    desc: "Gentle on your car and the planet.",
    img: "https://images.unsplash.com/photo-1759666765482-7e359ba3a5a1?w=600&auto=format&fit=crop&q=60",
    buttonText: "View Services",
    buttonLink: "#services",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section id="home" className="relative">
      <Swiper
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="hero-slide flex items-center justify-center text-center text-white h-[60vh] md:h-[72vh]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${slide.img}')`,
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8">{slide.desc}</p>
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
