import "../styles/ResumeDisplay.css";

export default function ResumeDisplay({ inputStates }) {
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
    </div>
  );
}
