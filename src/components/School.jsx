import Input from "./Input";

export default function School() {
    return (
        <div className="school">
        <Input labelTitle="Institute Name: " inputName="institute-name"></Input>
        <Input labelTitle="City of Institute: " inputName="institute-city"></Input>
        <Input labelTitle="Province of Institute: (Optional)" inputName="institute-province"></Input>
        <Input labelTitle="Country of Institute: " inputName="institute-country"></Input>
        <Input labelTitle="Degree/Program: " inputName="program"></Input>
        <Input labelTitle="Start Date: " inputName="education-start-date" inputType="date"></Input>
        <Input labelTitle="End Date: " inputName="education-end-date" inputType="date"></Input>
    </div>
    )
}