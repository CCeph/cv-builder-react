import "../styles/FormSection.css"

export default function FormSection() {
    return (
        <div className="form-section">
            <h1>Personal Info</h1>
            <hr />
            <label htmlFor="fullName">Full Name: </label>
            <input type="text" name="fullName" id="fullName" />
        </div>
    )
}