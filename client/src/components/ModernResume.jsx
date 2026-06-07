function ModernResume({
  name,
  email,
  phone,
  summary,
  skills,
  education,
  experience,
}) {
  return (
    <div className="bg-white min-h-[900px] flex">

      <div className="w-1/3 bg-slate-900 text-white p-6">

        <h1 className="text-3xl font-bold">
          {name || "Your Name"}
        </h1>

        <p className="mt-3">{email}</p>
        <p>{phone}</p>

        <h2 className="text-xl font-bold mt-8">
          Skills
        </h2>

        <p>{skills}</p>

      </div>

      <div className="w-2/3 p-8 text-black">

        <h2 className="text-2xl font-bold">
          Profile
        </h2>

        <p>{summary}</p>

        <h2 className="text-2xl font-bold mt-6">
          Education
        </h2>

        <p>{education}</p>

        <h2 className="text-2xl font-bold mt-6">
          Experience
        </h2>

        <p>{experience}</p>

      </div>

    </div>
  );
}

export default ModernResume;