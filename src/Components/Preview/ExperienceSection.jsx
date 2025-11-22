import React from "react";

export default function ExperienceSection({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="mb-4 resume-serif">
        <h3 className="font-medium">Experience</h3>
        <div className="mt-2 text-gray-400 italic">Add your experience...</div>
      </section>
    );
  }

  return (
    <section className="mb-4 resume-serif">
      <h3 className="font-medium">Experience</h3>
      <div className="mt-2 space-y-3 text-sm">
        {items.map((exp) => (
          <div key={exp.id}>
            <div className="flex justify-between">
              <div className="font-medium">{exp.role} <span className="text-gray-600">— {exp.company}</span></div>
              <div className="text-xs text-gray-500">{exp.from} • {exp.to}</div>
            </div>
            {exp.details && <div className="mt-1">{exp.details}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
