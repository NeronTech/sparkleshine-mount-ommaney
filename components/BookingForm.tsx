
'use client';// components/BookingForm.tsx
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking submitted: ${name} for ${service}`);
    setName('');
    setService('');
  };

  return (
    <section className="max-w-4xl mx-auto mt-12 p-6 border rounded shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={service}
          placeholder="Service Name"
          onChange={(e) => setService(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
