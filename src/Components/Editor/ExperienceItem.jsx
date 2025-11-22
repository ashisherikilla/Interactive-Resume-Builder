import React from "react";

export default function ExperienceItem({ exp, onUpdate, onRemove }) {
  return (
    <div className="p-3 border rounded-md bg-white/60 backdrop-blur-sm">
      <div className="grid grid-cols-3 gap-2">
        <input
          className="p-2 border rounded"
          placeholder="Role"
          value={exp.role}
          onChange={(e) => onUpdate(exp.id, "role", e.target.value)}
        />
        <input
          className="p-2 border rounded"
          placeholder="Company"
          value={exp.company}
          onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
        />
        <button onClick={() => onRemove(exp.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">
          Remove
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <input
          className="p-2 border rounded"
          placeholder="From"
          value={exp.from}
          onChange={(e) => onUpdate(exp.id, "from", e.target.value)}
        />
        <input
          className="p-2 border rounded"
          placeholder="To"
          value={exp.to}
          onChange={(e) => onUpdate(exp.id, "to", e.target.value)}
        />
      </div>

      <textarea
        className="p-2 w-full border rounded mt-2"
        rows={2}
        placeholder="Details"
        value={exp.details}
        onChange={(e) => onUpdate(exp.id, "details", e.target.value)}
      />
    </div>
  );
}
