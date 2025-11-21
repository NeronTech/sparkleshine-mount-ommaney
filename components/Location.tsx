"use client";
import React, { useEffect, useState } from "react";

const Location: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200); // delay for fade-in
    return () => clearTimeout(timer);
  }, []);

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=171+Dandenong+Road+Mount+Ommaney+QLD+4074",
      "_blank"
    );
  };

  return (
    <section id="location" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-secondary mb-4 transition-opacity duration-700 ${
              visible ? "opacity-100 animate-fade-in-up" : "opacity-0"
            }`}
          >
            Find Us
          </h2>
          <p
            className={`text-xl text-gray-600 transition-opacity duration-700 ${
              visible ? "opacity-100 animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Visit our Mount Ommaney location for premium car wash services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Panel */}
          <div
            className={`transition-opacity duration-700 ${
              visible
                ? "opacity-100 animate-fade-in-left delay-400"
                : "opacity-0"
            }`}
          >
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Our Location
              </h3>

              <div className="space-y-4 mb-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1 animate-float">
                    <i className="ri-map-pin-line text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Address</h4>
                    <p className="text-gray-600">
                      171 Dandenong Road
                      <br />
                      Mount Ommaney QLD 4074
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1 animate-float">
                    <i className="ri-phone-line text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Phone</h4>
                    <p className="text-gray-600">0455-435-383</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1 animate-float">
                    <i className="ri-time-line text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">
                      Operating Hours
                    </h4>
                    <p className="text-gray-600">
                      Mon-Fri: 8:30 AM - 5:30 PM
                      <br />
                      Saturday: 8:30 AM - 5:30 PM
                      <br />
                      Sunday: 8:30 AM - 5:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div
            className={`transition-opacity duration-700 ${
              visible
                ? "opacity-100 animate-fade-in-right delay-600"
                : "opacity-0"
            } space-y-4`}
          >
            <div
              className="bg-gray-200 rounded-2xl overflow-hidden h-96 relative"
              style={{
                backgroundImage:
                  "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full mx-auto mb-3 animate-float">
                    <i className="ri-map-pin-fill text-white ri-lg"></i>
                  </div>
                  <h4 className="font-semibold text-secondary mb-1">
                    Sparkles Mount Ommaney
                  </h4>
                  <p className="text-sm text-gray-600">171 Dandenong Road</p>
                  <button
                    onClick={openDirections}
                    className="mt-3 bg-primary text-secondary px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300"
                  >
                    View on Maps
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0056A8] text-white rounded-2xl shadow-lg text-center">
              <button
                onClick={openDirections}
                className="w-full bg-secondary text-white px-3 py-1 rounded-xl font-semibold whitespace-nowrap hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              >
                <i className="ri-navigation-line mr-2"></i>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
