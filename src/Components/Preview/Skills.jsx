import React from "react";

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) {
    return (
      <section className="resume-serif">
        <h3 className="font-medium">Skills</h3>
        <div className="mt-2 text-gray-400 italic">Add your skills...</div>
      </section>
    );
  }

  return (
    <section className="resume-serif">
      <h3 className="font-medium">Skills</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <span key={i} className="px-2 py-1 border rounded text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
