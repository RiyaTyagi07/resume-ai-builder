import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const fetchResumes = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/resumes"
      );

      setResumes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/resumes/${id}`
      );

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <nav className="border-b border-slate-800 px-8 py-5">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            <span className="text-cyan-400">
              Resume
            </span>
            AI
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>

        </div>

      </nav>

      <div className="max-w-7xl mx-auto p-8">

        {/* Welcome Section */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            {user?.name
              ? `Hello ${user.name}, manage your resumes below.`
              : "Manage your resumes below."}
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">

            <h2 className="text-xl font-semibold text-gray-300">
              Total Resumes
            </h2>

            <p className="text-5xl font-bold text-cyan-400 mt-4">
              {resumes.length}
            </p>

          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">

            <h2 className="text-xl font-semibold text-gray-300">
              Templates
            </h2>

            <p className="text-5xl font-bold text-cyan-400 mt-4">
              2
            </p>

          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">

            <h2 className="text-xl font-semibold text-gray-300">
              Status
            </h2>

            <p className="text-2xl font-bold text-green-400 mt-6">
              Active
            </p>

          </div>

        </div>

        {/* Action Button */}

        <div className="mb-10">

          <button
            onClick={() => navigate("/builder")}
            className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-lg font-semibold"
          >
            + Create New Resume
          </button>

        </div>

        {/* Resume Section */}

        <h2 className="text-3xl font-bold mb-6">
          My Resumes
        </h2>

        {resumes.length === 0 ? (
          <div className="bg-slate-900 p-12 rounded-2xl border border-slate-800 text-center">

            <h3 className="text-3xl font-bold">
              No Resumes Found
            </h3>

            <p className="text-gray-400 mt-3">
              Create your first professional
              resume now.
            </p>

            <button
              onClick={() =>
                navigate("/builder")
              }
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg"
            >
              Create Resume
            </button>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {resumes.map((resume) => (
              <div
                key={resume._id}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 transition"
              >

                <div className="mb-4">

                  <h3 className="text-2xl font-bold">
                    {resume.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {resume.email}
                  </p>

                  <p className="text-gray-400">
                    {resume.phone}
                  </p>

                </div>

                <div className="border-t border-slate-800 pt-4 flex gap-3">

                  <button
                    onClick={() =>
                      navigate(
                        `/edit/${resume._id}`
                      )
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteResume(
                        resume._id
                      )
                    }
                    className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;