import React from "react";

export default function EducationForm({ education, addEducation, updateEducation, removeEducation }) {
  const itemStyle = "p-3 border rounded-md bg-white/60 backdrop-blur-sm";

  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Education</h2>
        <button onClick={addEducation} className="px-2 py-1 bg-indigo-500 text-white rounded">Add</button>
      </div>

      <div className="space-y-2">
        {education.map((ed) => (
          <div key={ed.id} className={itemStyle}>
            <input className="p-2 w-full border rounded mb-2" placeholder="Institute" value={ed.institute} onChange={(e) => updateEducation(ed.id, "institute", e.target.value)} />
            <div className="grid grid-cols-3 gap-2">
              <input className="p-2 border rounded col-span-2" placeholder="Degree" value={ed.degree} onChange={(e) => updateEducation(ed.id, "degree", e.target.value)} />
              <input className="p-2 border rounded" placeholder="Year" value={ed.year} onChange={(e) => updateEducation(ed.id, "year", e.target.value)} />
            </div>
            <input className="p-2 w-full border rounded mt-2" placeholder="Details (optional)" value={ed.details} onChange={(e) => updateEducation(ed.id, "details", e.target.value)} />
            <div className="flex justify-end mt-2">
              <button onClick={() => removeEducation(ed.id)} className="px-2 py-1 text-sm border rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
