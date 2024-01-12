import FormSection from "./FormSection";
import Input from "./Input";
import "../styles/SidePanel.css"

export default function SidePanel() {
    return (
        <div className="side-panel">
        <FormSection title="Personal Info">
            <Input labelTitle="Full Name: " inputName="full-name"></Input>
            <Input labelTitle="Email: " inputName="email" inputType="email"></Input>
            <Input labelTitle="Phone Number: " inputName="phone-number"></Input>
            <Input labelTitle="Address Line 1: " inputName="address1"></Input>
            <Input labelTitle="Address Line 2: " inputName="address2"></Input>
        </FormSection>

        <FormSection title="Education">
            <Input labelTitle="Institute Name: " inputName="institute-name"></Input>
            <Input labelTitle="City of Institute: " inputName="institute-city"></Input>
            <Input labelTitle="Province of Institute: (Optional)" inputName="institute-province"></Input>
            <Input labelTitle="Country of Institute: " inputName="institute-country"></Input>
            <Input labelTitle="Degree/Program: " inputName="program"></Input>
            <Input labelTitle="Start Date: " inputName="start-date" inputType="date"></Input>
            <Input labelTitle="End Date: " inputName="end-date" inputType="date"></Input>
        </FormSection>
        </div>
    )
}