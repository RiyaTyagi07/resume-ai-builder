import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import ATSResume from "../components/ATSResume";
import ModernResume from "../components/ModernResume";

function Builder() {
  const [template, setTemplate] = useState("ats");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const generateSummary = () => {
    setSummary(
      `Professional with expertise in ${
        skills || "modern technologies"
      }. Passionate about solving problems, learning new skills, and contributing to organizational growth.`
    );
  };

  const saveResume = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/resumes/save",
        {
          name,
          email,
          phone,
          summary,
          skills,
          education,
          experience,
          template,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Resume Saved Successfully 🚀");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Save Failed"
      );
    }
  };

  const downloadPDF = async () => {
    const input =
      document.getElementById(
        "resume-preview"
      );

    const canvas =
      await html2canvas(input);

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(
      `${name || "Resume"}.pdf`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <h1 className="text-5xl font-bold">
            AI Resume Builder
          </h1>

          <p className="text-gray-400 mt-3">
            Create professional ATS-friendly resumes
            in minutes.
          </p>

        </div>

      </div>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto p-6">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Panel */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

            <h2 className="text-3xl font-bold mb-8">
              Resume Details
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

              <textarea
                rows="3"
                placeholder="Skills (React, Node.js, MongoDB)"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={skills}
                onChange={(e) =>
                  setSkills(e.target.value)
                }
              />

              <textarea
                rows="3"
                placeholder="Education"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={education}
                onChange={(e) =>
                  setEducation(e.target.value)
                }
              />

              <textarea
                rows="4"
                placeholder="Experience"
                className="w-full p-4 bg-slate-800 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500"
                value={experience}
                onChange={(e) =>
                  setExperience(e.target.value)
                }
              />

              {/* Template Selection */}

              <div>

                <h3 className="text-xl font-semibold mb-4">
                  Choose Template
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  <button
                    onClick={() =>
                      setTemplate("ats")
                    }
                    className={`p-4 rounded-xl font-semibold transition ${
                      template === "ats"
                        ? "bg-cyan-500"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    ATS Template
                  </button>

                  <button
                    onClick={() =>
                      setTemplate("modern")
                    }
                    className={`p-4 rounded-xl font-semibold transition ${
                      template === "modern"
                        ? "bg-cyan-500"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    Modern Template
                  </button>

                </div>

              </div>

              {/* Buttons */}

              <div className="grid gap-4 pt-4">

                <button
                  onClick={generateSummary}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-bold"
                >
                  Generate AI Summary
                </button>

                <button
                  onClick={saveResume}
                  className="w-full bg-green-600 hover:bg-green-700 transition py-4 rounded-xl font-bold"
                >
                  Save Resume
                </button>

                <button
                  onClick={downloadPDF}
                  className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-bold"
                >
                  Download PDF
                </button>

              </div>

            </div>

          </div>

          {/* Resume Preview */}

          <div>

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-3xl font-bold">
                Live Preview
              </h2>

              <span className="bg-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold">
                {template === "ats"
                  ? "ATS Template"
                  : "Modern Template"}
              </span>

            </div>

            <div
              id="resume-preview"
              className="rounded-3xl overflow-hidden shadow-2xl"
            >

              {template === "ats" ? (
                <ATSResume
                  name={name}
                  email={email}
                  phone={phone}
                  summary={summary}
                  skills={skills}
                  education={education}
                  experience={experience}
                />
              ) : (
                <ModernResume
                  name={name}
                  email={email}
                  phone={phone}
                  summary={summary}
                  skills={skills}
                  education={education}
                  experience={experience}
                />
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Builder;