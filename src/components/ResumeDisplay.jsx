import "../styles/ResumeDisplay.css"

export default function ResumeDisplay({inputStates}) {
    return (
        <div className="resume-display">
        <h1>I am the Resume</h1>
        <h1>Test the Name: {inputStates.fullName}</h1>
        </div>
    )
}