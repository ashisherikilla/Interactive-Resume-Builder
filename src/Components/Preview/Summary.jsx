import React from "react";

export default function Summary({ text }) {
  if (!text) {
    return (
      <section className="mb-4 resume-serif">
        <h3 className="font-medium">Summary</h3>
        <p className="mt-2 text-gray-400 italic">Write a short summary about yourself...</p>
      </section>
    );
  }

  return (
    <section className="mb-4 resume-serif">
      <h3 className="font-medium">Summary</h3>
      <p className="mt-2">{text}</p>
    </section>
  );
}
