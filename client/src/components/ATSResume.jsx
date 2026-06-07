function ATSResume({
  name,
  email,
  phone,
  summary,
  skills,
  education,
  experience,
}) {
  return (
    <div className="bg-white text-black p-10 min-h-[900px]">

      <h1 className="text-4xl font-bold">
        {name || "Your Name"}
      </h1>

      <p>{email}</p>
      <p>{phone}</p>

      <hr className="my-4" />

      <h2 className="font-bold text-xl">
        Professional Summary
      </h2>

      <p>{summary}</p>

      <h2 className="font-bold text-xl mt-6">
        Skills
      </h2>

      <p>{skills}</p>

      <h2 className="font-bold text-xl mt-6">
        Education
      </h2>

      <p>{education}</p>

      <h2 className="font-bold text-xl mt-6">
        Experience
      </h2>

      <p>{experience}</p>

    </div>
  );
}

export default ATSResume;