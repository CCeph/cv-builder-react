import "../styles/FormSection.css";

export default function FormSection({ children, title }) {
  return (
    <div className="form-section">
      <h1>{title}</h1>
      <hr />
      {children}
    </div>
  );
}
