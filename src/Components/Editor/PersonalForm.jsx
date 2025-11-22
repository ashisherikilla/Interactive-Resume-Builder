import React from "react";

export default function PersonalForm({ personal, onChange }) {
  const input = "p-2 border rounded-md bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-indigo-400 transition";

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium">Personal</h2>

      <div className="grid grid-cols-2 gap-2">
        <input className={input} placeholder="First name" value={personal.firstName} onChange={(e) => onChange("firstName", e.target.value)} />
        <input className={input} placeholder="Last name" value={personal.lastName} onChange={(e) => onChange("lastName", e.target.value)} />
      </div>

      <input className={`${input} w-full`} placeholder="Title / Role" value={personal.title} onChange={(e) => onChange("title", e.target.value)} />

      <div className="grid grid-cols-2 gap-2">
        <input className={input} placeholder="Email" value={personal.email} onChange={(e) => onChange("email", e.target.value)} />
        <input className={input} placeholder="Phone" value={personal.phone} onChange={(e) => onChange("phone", e.target.value)} />
      </div>

      <input className={`${input} w-full`} placeholder="Location" value={personal.location} onChange={(e) => onChange("location", e.target.value)} />

      <textarea className={`${input} w-full`} rows={3} placeholder="Short summary" value={personal.summary} onChange={(e) => onChange("summary", e.target.value)} />

      <div className="grid grid-cols-2 gap-2">
        <input className={input} placeholder="Portfolio URL (https://...)" value={personal.portfolio} onChange={(e) => onChange("portfolio", e.target.value)} />
        <input className={input} placeholder="LinkedIn URL (https://...)" value={personal.linkedin} onChange={(e) => onChange("linkedin", e.target.value)} />
      </div>
    </section>
  );
}
