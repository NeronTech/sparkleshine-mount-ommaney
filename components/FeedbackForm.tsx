'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  async function submitFeedback() {
    if (!rating || !comment.trim()) {
      alert('Please provide rating and comment');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'YOUR_APPS_SCRIPT_WEB_APP_URL',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.trim(),
            service: service.trim(),
            rating,
            comment: comment.trim(),
          }),
        }
      );

      if (!res.ok) throw new Error('Request failed');

      alert('Thank you for your feedback!');

      // reset form
      setName('');
      setService('');
      setRating('');
      setComment('');
    } catch (err) {
      alert('Submission failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-xl shadow p-4 mt-4">
      <h5 className="text-lg font-semibold mb-3">Customer Feedback</h5>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full border rounded px-3 py-2 mb-2"
      />

      <input
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Service used"
        className="w-full border rounded px-3 py-2 mb-2"
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-2"
      >
        <option value="">Rate the service</option>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Very Good</option>
        <option value="3">⭐⭐⭐ Good</option>
        <option value="2">⭐⭐ Fair</option>
        <option value="1">⭐ Poor</option>
      </select>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your feedback"
        className="w-full border rounded px-3 py-2 mb-3"
        rows={4}
      />

      <button
        onClick={submitFeedback}
        disabled={loading}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 disabled:opacity-60"
      >
        {loading ? 'Submitting…' : 'Submit'}
      </button>
    </section>
  );
}
