import React from "react";

export default function SkillsForm({ skillsText, onChange }) {
  return (
    <section className="mt-3">
      <h2 className="text-sm font-medium">Skills</h2>
      <input className="p-2 border rounded w-full" placeholder="Comma separated skills" value={skillsText} onChange={(e) => onChange(e.target.value)} />
      <p className="text-xs text-gray-400 mt-1">Add quick skills like: React, AutoCAD, Java</p>
    </section>
  );
}
