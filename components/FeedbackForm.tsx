"use client";

import React, { useState } from "react";

interface FeedbackFormData {
  name: string;
  service: string;
  rating: string;
  comment: string;
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbybfHbwtyyyULO1CBwgRVCI99CZpXvcXajZbZLMS8ZJyw0gMKYmIKj3jkApLHyYqzBO8Q/exec"; // replace

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    service: "",
    rating: "",
    comment: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

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

    if (!formData.rating || !formData.comment.trim()) {
      showToast("Please provide rating and feedback.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        action: "feedback",
        name: formData.name,
        service: formData.service,
        rating: formData.rating,
        comment: formData.comment,
      };

      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log(result);

      showToast("Thank you for your feedback!", "success");

      setFormData({
        name: "",
        service: "",
        rating: "",
        comment: "",
      });
    } catch (err) {
      console.error(err);
      showToast("Failed to submit feedback.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Customer Feedback</h2>
          <p className="text-gray-600">
            Tell us how we did — your feedback matters!
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border">
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name (optional)"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* Service */}
            <input
              type="text"
              name="service"
              placeholder="Service Used"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* Rating */}
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            >
              <option value="">Rate the Service</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>

            {/* Comment */}
            <textarea
              name="comment"
              placeholder="Your Feedback"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center"
              disabled={submitting}
            >
              {submitting ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
              ) : null}
              {submitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
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
    </section>
  );
};

export default FeedbackForm;
