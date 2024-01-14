import Input from "./Input";
import "../styles/School.css"

export default function School({schoolID}) {
    return (
        <div className="school">
        <button className="detailsToggle">
            <h2>Name will go here</h2> <img src="src/assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg"/>
        </button>
        <hr />
        <Input labelTitle="Institute Name: " inputName={`${schoolID}+institute-name`}></Input>
        <Input labelTitle="City of Institute: " inputName={`${schoolID}+institute-city`}></Input>
        <Input labelTitle="Province of Institute: (Optional)" inputName={`${schoolID}+institute-province`}></Input>
        <Input labelTitle="Country of Institute: " inputName={`${schoolID}+institute-country`}></Input>
        <Input labelTitle="Degree/Program: " inputName={`${schoolID}+program`}></Input>
        <Input labelTitle="Start Date: " inputName={`${schoolID}+education-start-date`} inputType="date"></Input>
        <Input labelTitle="End Date: " inputName={`${schoolID}+education-end-date`} inputType="date"></Input>
    </div>
    )
}