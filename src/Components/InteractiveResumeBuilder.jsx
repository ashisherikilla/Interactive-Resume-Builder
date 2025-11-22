import React, { useState } from "react";

import PersonalForm from "./Editor/PersonalForm";
import EducationForm from "./Editor/EducationForm";
import ExperienceForm from "./Editor/ExperienceForm";
import SkillsForm from "./Editor/SkillsForm";

import PreviewHeader from "./Preview/PreviewHeader";
import Summary from "./Preview/Summary";
import ExperienceSection from "./Preview/ExperienceSection";
import EducationSection from "./Preview/EducationSection";
import Skills from "./Preview/Skills";

export default function InteractiveResumeBuilder() {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    portfolio: "",
    linkedin: ""
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skillsText, setSkillsText] = useState("");

  const updatePersonal = (field, val) =>
    setPersonal((p) => ({ ...p, [field]: val }));

  // Education handlers
  const addEducation = () =>
    setEducation((e) => [...e, { id: Date.now(), institute: "", degree: "", year: "", details: "" }]);
  const updateEducation = (id, field, val) =>
    setEducation((e) => e.map((it) => (it.id === id ? { ...it, [field]: val } : it)));
  const removeEducation = (id) => setEducation((e) => e.filter((it) => it.id !== id));

  // Experience handlers
  const addExperience = () =>
    setExperience((x) => [...x, { id: Date.now(), role: "", company: "", from: "", to: "", details: "" }]);
  const updateExperience = (id, field, val) =>
    setExperience((x) => x.map((it) => (it.id === id ? { ...it, [field]: val } : it)));
  const removeExperience = (id) => setExperience((x) => x.filter((it) => it.id !== id));

  const skills = skillsText.split(",").map((s) => s.trim()).filter(Boolean);

  const resetAll = () => {
    setPersonal({ firstName: "", lastName: "", title: "", email: "", phone: "", location: "", summary: "", portfolio: "", linkedin: "" });
    setEducation([]);
    setExperience([]);
    setSkillsText("");
  };

  const handleDownloadPdf = async () => {
    try {
      const el = document.getElementById("resume-preview-for-pdf");
      if (!el) {
        console.error("Preview element not found for PDF export.");
        window.print();
        return;
      }

      const pkg = await import("html2pdf.js");
      const html2pdf = pkg && (pkg.default || pkg);

      const opt = {
        margin: [12, 12, 12, 12],
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      await html2pdf().set(opt).from(el).save();
    } catch (err) {
      console.error("PDF generation failed, falling back to print:", err);
      // fallback: temporarily hide editor and call browser print (print dialog still may include headers — disable in dialog)
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor (left) */}
        <aside className="no-print rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-5 bg-gradient-to-br from-[#5A5CF6] via-[#8A4EFF] to-[#FF8AE2]
 text-white">
            <h1 className="text-2xl font-semibold">Resume Builder</h1>
            <p className="text-sm opacity-90 mt-1">Live preview — edit on the left</p>
          </div>

          <div className="p-5 bg-white space-y-4">
            <PersonalForm personal={personal} onChange={updatePersonal} />
            <EducationForm education={education} addEducation={addEducation} updateEducation={updateEducation} removeEducation={removeEducation} />
            <ExperienceForm experience={experience} addExperience={addExperience} updateExperience={updateExperience} removeExperience={removeExperience} />
            <SkillsForm skillsText={skillsText} onChange={setSkillsText} />

            <div className="flex gap-2 mt-3">
              <button onClick={() => window.print()} className="px-3 py-2 bg-white border rounded text-gray-800">Print / Save (browser)</button>
              <button onClick={handleDownloadPdf} className="px-3 py-2 bg-green-600 text-white rounded">Download Preview PDF</button>
              <button onClick={resetAll} className="px-3 py-2 bg-gray-100 rounded border">Reset</button>
            </div>
          </div>
        </aside>

        {/* Preview (right) — THIS is the element we export */}
        <main id="resume-preview-for-pdf" className="resume-shell p-8 bg-white rounded-2xl shadow-sm">
          <PreviewHeader personal={personal} />
          <hr className="my-4" />

          <Summary text={personal.summary} />
          <ExperienceSection items={experience} />
          <EducationSection items={education} />
          <Skills skills={skills} />
        </main>
      </div>
    </div>
  );
}
