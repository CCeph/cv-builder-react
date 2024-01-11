import "../styles/FormSection.css"

export default function FormSection({children}) {
    return (
        <div className="form-section">
            <h1>Personal Info</h1>
            <hr />
            {children}
        </div>
    )
}