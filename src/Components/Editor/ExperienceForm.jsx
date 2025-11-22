import React from "react";

export default function ExperienceForm({ experience, addExperience, updateExperience, removeExperience }) {
  const itemStyle = "p-3 border rounded-md bg-white/60 backdrop-blur-sm";

  return (
    <section className="mt-3">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Experience</h2>
        <button onClick={addExperience} className="px-2 py-1 bg-pink-500 text-white rounded">Add</button>
      </div>

      <div className="space-y-2">
        {experience.map((exp) => (
          <div key={exp.id} className={itemStyle}>
            <div className="grid grid-cols-3 gap-2">
              <input className="p-2 border rounded" placeholder="Role" value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)} />
              <input className="p-2 border rounded" placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} />
              <button onClick={() => removeExperience(exp.id)} className="px-2 py-1 text-sm border rounded">Remove</button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <input className="p-2 border rounded" placeholder="From" value={exp.from} onChange={(e) => updateExperience(exp.id, "from", e.target.value)} />
              <input className="p-2 border rounded" placeholder="To" value={exp.to} onChange={(e) => updateExperience(exp.id, "to", e.target.value)} />
            </div>

            <textarea className="p-2 w-full border rounded mt-2" rows={2} placeholder="Details" value={exp.details} onChange={(e) => updateExperience(exp.id, "details", e.target.value)} />
          </div>
        ))}
      </div>
    </section>
  );
}
