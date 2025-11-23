"use client";
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
  {
    title: "VIP Detailing",
    desc: "Paint protection, ceramic coating and more.",
    img: "https://images.unsplash.com/photo-1759666765533-9545aa48856d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "View Services",
    buttonLink: "#services",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <div>
      <section id="home" className="relative w-screen">
        <Swiper
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-screen"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="w-screen">
              <div
                className="hero-slide flex items-center justify-center text-center text-white w-screen h-[60vh] bg-cover bg-center"
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
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 opacity-0 animate-fade-in-up bname">
              Why Choose Sparkles Mount Ommaney?
            </h2>
            <p className="text-xl text-gray-600 opacity-0 animate-fade-in-up stagger-1">
              Experience the difference with our premium car care services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center opacity-0 animate-fade-in-up stagger-1">
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6 animate-float">
                <i className="ri-shield-check-line ri-3x text-secondary"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind our work with a complete satisfaction guarantee.
                If you're not happy, we'll make it right.
              </p>
            </div>

            <div className="text-center opacity-0 animate-fade-in-up stagger-2">
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6 animate-float">
                <i className="ri-leaf-line ri-3x text-secondary"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600">
                We use only environmentally safe, biodegradable cleaning
                products that are gentle on your car and the planet.
              </p>
            </div>

            <div className="text-center opacity-0 animate-fade-in-up stagger-3">
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6 animate-float">
                <i className="ri-time-line ri-3x text-secondary"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                Quick &amp; Convenient
              </h3>
              <p className="text-gray-600">
                Fast, efficient service that fits your schedule. Most services
                completed in under 60 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;
