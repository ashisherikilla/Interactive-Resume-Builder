import React from "react";

export default function EducationSection({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="mb-4 resume-serif">
        <h3 className="font-medium">Education</h3>
        <div className="mt-2 text-gray-400 italic">Add your education...</div>
      </section>
    );
  }

  return (
    <section className="mb-4 resume-serif">
      <h3 className="font-medium">Education</h3>
      <div className="mt-2 space-y-3 text-sm">
        {items.map((ed) => (
          <div key={ed.id}>
            <div className="flex justify-between">
              <div className="font-medium">{ed.institute}</div>
              <div className="text-xs text-gray-500">{ed.year}</div>
            </div>
            <div className="mt-1">{ed.degree}{ed.details ? <span className="text-gray-600"> • {ed.details}</span> : null}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
