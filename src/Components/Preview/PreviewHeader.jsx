import React from "react";

export default function PreviewHeader({ personal }) {
  const shortLabel = (url) => {
    try {
      const u = new URL(url);
      return u.hostname.replace("www.", "") + (u.pathname !== "/" ? u.pathname : "");
    } catch {
      return url;
    }
  };

  return (
    <header className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl resume-serif font-semibold">
          {(personal.firstName || personal.lastName) ? `${personal.firstName} ${personal.lastName}`.trim() : "Your Name"}
        </h1>
        <p className="text-lg resume-serif text-gray-700 mt-1">{personal.title || "Your Title / Role"}</p>
      </div>

      <div className="text-right text-sm">
        <div>{personal.email || "yourname@email.com"}</div>
        <div className="mt-1">{personal.phone || "+91 XXXXX XXXXX"}</div>
        <div className="mt-1">{personal.location || "Your Location"}</div>

        <div className="mt-2 text-xs">
          {personal.portfolio ? <a href={personal.portfolio} target="_blank" rel="noreferrer">{shortLabel(personal.portfolio)}</a> : <span className="text-gray-400 italic">Portfolio</span>}
        </div>

        <div className="mt-1 text-xs">
          {personal.linkedin ? <a href={personal.linkedin} target="_blank" rel="noreferrer">{shortLabel(personal.linkedin)}</a> : <span className="text-gray-400 italic">LinkedIn</span>}
        </div>
      </div>
    </header>
  );
}
