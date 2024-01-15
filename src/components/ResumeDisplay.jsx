import "../styles/ResumeDisplay.css";

export default function ResumeDisplay({ inputStates, schoolList }) {
  return (
    <div className="resume-display">
      <section className="personal-info">
        <p className="address">{inputStates.address1}</p>
        <p className="address">{inputStates.address2}</p>
        <p className="extra">{inputStates.phoneNumber}</p>
        <p className="extra">{inputStates.email}</p>
        <h1>{inputStates.fullName}</h1>
        <hr />
      </section>
      <section className="education-display">
        <h2>EDUCATION</h2>
        {schoolList.map((school) => (
          <section key={school.id} className="school-display">
            <h3>
              {school.schoolName && `${school.schoolName},`}{" "}
              {school.city && `${school.city},`}{" "}
              {school.province && `${school.province},`}{" "}
              {school.country && `${school.country}`}{" "}
              {school.degree && (
                <span className="degree">— {school.degree}</span>
              )}
            </h3>
            <p>
              {school.startDate && `${school.startDate} - `}{" "}
              {school.endDate ? school.endDate : "Present"}
            </p>
          </section>
        ))}
      </section>
    </div>
  );
}
