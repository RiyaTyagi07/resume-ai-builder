import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditResume() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      summary: "",
      skills: "",
      education: "",
      experience: "",
    });

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/resumes/${id}`
    );

    setFormData(res.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const updateResume = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/resumes/${id}`,
        formData
      );

      alert(
        "Resume Updated Successfully"
      );

      navigate("/dashboard");
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Edit Resume
      </h1>

      <div className="bg-slate-900 p-8 rounded-2xl">

        <div className="space-y-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Email"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Phone"
          />

          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Summary"
          />

          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Skills"
          />

          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Education"
          />

          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded"
            placeholder="Experience"
          />

          <button
            onClick={updateResume}
            className="w-full bg-green-600 py-3 rounded"
          >
            Update Resume
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditResume;