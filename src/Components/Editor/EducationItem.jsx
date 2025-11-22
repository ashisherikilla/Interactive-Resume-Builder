import React from "react";

export default function EducationItem({ ed, onUpdate, onRemove }) {
  return (
    <div className="p-3 border rounded-md bg-white/60 backdrop-blur-sm">
      <input
        className="p-2 w-full border rounded mb-2"
        placeholder="Institute"
        value={ed.institute}
        onChange={(e) => onUpdate(ed.id, "institute", e.target.value)}
      />

      <div className="grid grid-cols-3 gap-2">
        <input
          className="p-2 border rounded col-span-2"
          placeholder="Degree"
          value={ed.degree}
          onChange={(e) => onUpdate(ed.id, "degree", e.target.value)}
        />
        <input
          className="p-2 border rounded"
          placeholder="Year"
          value={ed.year}
          onChange={(e) => onUpdate(ed.id, "year", e.target.value)}
        />
      </div>

      <input
        className="p-2 w-full border rounded mt-2"
        placeholder="Details (optional)"
        value={ed.details}
        onChange={(e) => onUpdate(ed.id, "details", e.target.value)}
      />

      <div className="flex justify-end mt-2">
        <button onClick={() => onRemove(ed.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">
          Remove
        </button>
      </div>
    </div>
  );
}
