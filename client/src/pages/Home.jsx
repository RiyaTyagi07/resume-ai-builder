import { Link, Navigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800 sticky top-0 bg-slate-950 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link
            to="/"
            className="text-3xl font-bold"
          >
            <span className="text-cyan-400">
              Resume
            </span>
            AI
          </Link>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="px-5 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
            >
              Register
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8">
          🚀 AI Powered Resume Builder
        </div>

        <h1 className="text-7xl font-extrabold leading-tight">

          Create Professional

          <span className="block text-cyan-400">
            ATS Friendly Resumes
          </span>

          In Minutes

        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">

          Build stunning resumes, generate AI summaries,
          choose professional templates and download
          PDF resumes instantly.

        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/register"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl text-lg font-bold"
          >
            Start Building
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 border border-slate-700 rounded-xl text-lg hover:bg-slate-900 transition"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500 transition">

            <div className="text-5xl mb-4">
              🤖
            </div>

            <h3 className="text-2xl font-bold mb-3">
              AI Resume Writing
            </h3>

            <p className="text-gray-400">
              Generate professional summaries and
              resume content instantly.
            </p>

          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500 transition">

            <div className="text-5xl mb-4">
              📄
            </div>

            <h3 className="text-2xl font-bold mb-3">
              ATS Friendly
            </h3>

            <p className="text-gray-400">
              Optimized layouts that pass ATS
              screening systems.
            </p>

          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500 transition">

            <div className="text-5xl mb-4">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-3">
              One Click PDF
            </h3>

            <p className="text-gray-400">
              Download your resume instantly
              in PDF format.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
            <h2 className="text-4xl font-bold text-cyan-400">
              10K+
            </h2>
            <p className="text-gray-400 mt-2">
              Resumes Created
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
            <h2 className="text-4xl font-bold text-cyan-400">
              95%
            </h2>
            <p className="text-gray-400 mt-2">
              ATS Success Rate
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
            <h2 className="text-4xl font-bold text-cyan-400">
              24/7
            </h2>
            <p className="text-gray-400 mt-2">
              AI Assistance
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
            <h2 className="text-4xl font-bold text-cyan-400">
              100%
            </h2>
            <p className="text-gray-400 mt-2">
              Free
            </p>
          </div>

        </div>

      </section>

      {/* Templates */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <h2 className="text-5xl font-bold text-center mb-16">
    Resume Templates
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <Link
      to="/builder"
      className="bg-white text-black h-80 rounded-3xl p-6 hover:scale-105 transition"
    >
      <div className="border-b pb-3">
        <h3 className="text-xl font-bold">ATS Resume</h3>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="h-2 bg-gray-300 rounded"></div>
        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
        <div className="h-2 bg-gray-300 rounded"></div>

        <div className="mt-6 h-16 bg-gray-200 rounded"></div>

        <div className="mt-4 h-2 bg-gray-300 rounded"></div>
        <div className="h-2 bg-gray-300 rounded w-2/3"></div>
      </div>
    </Link>

    <Link
      to="/builder"
      className="bg-white text-black h-80 rounded-3xl p-6 hover:scale-105 transition"
    >
      <div className="bg-cyan-500 h-12 rounded mb-4"></div>

      <div className="space-y-2">
        <div className="h-2 bg-gray-300 rounded"></div>
        <div className="h-2 bg-gray-300 rounded w-3/4"></div>

        <div className="h-16 bg-gray-200 rounded mt-4"></div>

        <div className="h-2 bg-gray-300 rounded mt-4"></div>
      </div>

      <h3 className="mt-6 text-center font-bold">
        Modern Resume
      </h3>
    </Link>

    <Link
      to="/builder"
      className="bg-white text-black h-80 rounded-3xl p-6 hover:scale-105 transition"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-1/3 h-40 bg-cyan-400 rounded"></div>
        <div className="w-2/3 h-40 bg-gray-200 rounded"></div>
      </div>

      <h3 className="text-center font-bold">
        Creative Resume
      </h3>
    </Link>

    <Link
      to="/builder"
      className="bg-white text-black h-80 rounded-3xl p-6 hover:scale-105 transition"
    >
      <div className="space-y-3">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-4/5"></div>
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-3/5"></div>
      </div>

      <h3 className="mt-12 text-center font-bold">
        Minimal Resume
      </h3>
    </Link>

  </div>

</section>
      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold">
            Build Your Resume Today
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Join thousands of users creating
            professional resumes with ResumeAI.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 px-10 py-4 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl text-lg font-bold"
          >
            Get Started
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10 text-center">

          <h3 className="text-2xl font-bold">
            ResumeAI
          </h3>

          <p className="text-gray-400 mt-3">
            Build ATS Friendly Resumes with AI.
          </p>

          <p className="text-gray-500 mt-6">
            Built with React, Node.js, Express and MongoDB
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;