"use client"; // components/BookingForm.tsx
import React, { useEffect, useState } from "react";

interface BookingFormData {
  full_name: string;
  phone_number: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  vehicle_type: string;
  service_package: string;
  special_requests?: string;
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyH10orejwfIvZccYUZSanHA6_uaNdAdAkIm9z43oL53_Q6HnBrzuYJaGcmiyc_lyBS-Q/exec"; // replace with your GAS URL

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    full_name: "",
    phone_number: "",
    email: "",
    preferred_date: "",
    preferred_time: "",
    vehicle_type: "",
    service_package: "",
    special_requests: "",
  });

  const [vehicleTypes, setVehicleTypes] = useState<string[]>([]);
  const [servicePackages, setServicePackages] = useState<string[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const fetchOptions = async () => {
      setLoadingOptions(true);
      try {
        const res = await fetch(GAS_URL);
        const data = await res.json();
        setVehicleTypes(data.vehicles || []);
        setServicePackages(data.services || []);
      } catch (err) {
        console.error("Failed to fetch options:", err);
      } finally {
        setLoadingOptions(false);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    setIsStandalone(standalone);

    // Load saved fields only if PWA installed
    if (standalone) {
      const savedFullName = localStorage.getItem("full_name");
      const savedPhone = localStorage.getItem("phone_number");
      const savedEmail = localStorage.getItem("email");

      setFormData((prev) => ({
        ...prev,
        full_name: savedFullName || "",
        phone_number: savedPhone || "",
        email: savedEmail || "",
      }));
    }

    // Detect when newly installed
    const handleInstalled = () => {
      console.log("PWA Installed!");
      setIsStandalone(true);
    };

    window.addEventListener("appinstalled", handleInstalled);
    return () => window.removeEventListener("appinstalled", handleInstalled);
  }, []);

  useEffect(() => {
    if (!isStandalone) return; // only save when installed

    localStorage.setItem("full_name", formData.full_name);
    localStorage.setItem("phone_number", formData.phone_number);
    localStorage.setItem("email", formData.email);
  }, [formData.full_name, formData.phone_number, formData.email, isStandalone]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        action: "booking",
        name: formData.full_name,
        phone: formData.phone_number,
        email: formData.email,
        date: formData.preferred_date,
        time: formData.preferred_time,
        vehicle: formData.vehicle_type,
        service: formData.service_package,
        request: formData.special_requests,
      };

      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log(result);
      showToast("Booking submitted successfully!", "success");
      setFormData({
        full_name: localStorage.getItem("full_name") || "",
        phone_number: localStorage.getItem("phone_number") || "",
        email: localStorage.getItem("email") || "",
        preferred_date: "",
        preferred_time: "",
        vehicle_type: "",
        service_package: "",
        special_requests: "",
      });
    } catch (err) {
      console.error(err);
      showToast("Failed to submit booking.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section id="booking" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Book Your Service</h2>
            <p className="text-gray-600">
              Schedule your car wash appointment in just a few clicks
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* Preferred Date */}
              <input
                type="date"
                name="preferred_date"
                value={formData.preferred_date}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* Preferred Time */}
              <select
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                required
              >
                <option value="">Select Time</option>
                {Array.from({ length: 9 }).map((_, i) => {
                  const hour = 9 + i; // 9 to 17
                  const ampm = hour < 12 ? "AM" : "PM";
                  const displayHour = hour > 12 ? hour - 12 : hour;
                  return (
                    <option key={hour} value={`${displayHour}:00 ${ampm}`}>
                      {displayHour}:00 {ampm}
                    </option>
                  );
                })}
              </select>

              {/* Vehicle Type */}
              <select
                name="vehicle_type"
                value={formData.vehicle_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                disabled={loadingOptions}
                required
              >
                <option value="">
                  {loadingOptions ? "Loading vehicles..." : "Select Vehicle"}
                </option>
                {vehicleTypes.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>

              {/* Service Package */}
              <select
                name="service_package"
                value={formData.service_package}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                disabled={loadingOptions}
                required
              >
                <option value="">
                  {loadingOptions ? "Loading services..." : "Select Service"}
                </option>
                {servicePackages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {/* Special Requests */}
              <textarea
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
                placeholder="Special Requests (Optional)"
                className="w-full px-4 py-3 border rounded-lg md:col-span-2"
                rows={3}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg md:col-span-2 flex items-center justify-center"
                disabled={submitting || loadingOptions}
              >
                {submitting ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
                ) : null}
                {submitting ? "Submitting..." : "Book Now"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-secondary text-white relative floating-bubbles">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="bname text-4xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Ready to Give Your Car the Treatment It Deserves?
          </h2>
          <p className="bname text-xl mb-8 opacity-0 animate-fade-in-up stagger-1">
            Book your appointment today and experience the Sparkles Mount
            Ommaney difference
          </p>
          <a
            href="#booking"
            className="btn bg-blue-600 text-white px-4 py-2 !rounded-button font-semibold hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </section>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div
            className={`px-6 py-3 rounded-lg shadow-lg opacity-90 animate-fade-in-out ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      {/* Optional Tailwind animation */}
      <style jsx>{`
        @keyframes fade-in-out {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default BookingForm;
