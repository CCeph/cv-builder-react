import Input from "./Input";
import "../styles/School.css"

export default function School({schoolID}) {
    return (
        <div className="school">
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