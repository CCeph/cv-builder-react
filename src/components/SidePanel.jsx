import FormSection from "./FormSection";
import Input from "./Input";
import "../styles/SidePanel.css"

export default function SidePanel({inputStates}) {
    console.log(inputStates.fullName);
    return (
        <div className="side-panel">
        <FormSection title="Personal Info">
            <Input labelTitle="Full Name: " inputName="full-name"
            value={inputStates.fullName}
            valueHandler={inputStates.setFullName}></Input>
            <Input labelTitle="Email: " inputName="email" inputType="email"
            value={inputStates.email}
            valueHandler={inputStates.setEmail}></Input>
            <Input labelTitle="Phone Number: " inputName="phone-number"
            value={inputStates.phoneNumber}
            valueHandler={inputStates.setPhoneNumber}></Input>
            <Input labelTitle="Address Line 1: " inputName="address1"
            value={inputStates.address1}
            valueHandler={inputStates.setAddress1}></Input>
            <Input labelTitle="Address Line 2: " inputName="address2"
            value={inputStates.address2}
            valueHandler={inputStates.setAddress2}></Input>
        </FormSection>

        <FormSection title="Education">
            <Input labelTitle="Institute Name: " inputName="institute-name"></Input>
            <Input labelTitle="City of Institute: " inputName="institute-city"></Input>
            <Input labelTitle="Province of Institute: (Optional)" inputName="institute-province"></Input>
            <Input labelTitle="Country of Institute: " inputName="institute-country"></Input>
            <Input labelTitle="Degree/Program: " inputName="program"></Input>
            <Input labelTitle="Start Date: " inputName="education-start-date" inputType="date"></Input>
            <Input labelTitle="End Date: " inputName="education-end-date" inputType="date"></Input>
        </FormSection>

        <FormSection title="Work Experience">
            <Input labelTitle="Employer Name: " inputName="employer-name"></Input>
            <Input labelTitle="City of Employer: " inputName="employer-city"></Input>
            <Input labelTitle="Province of Employer: (Optional)" inputName="employer-province"></Input>
            <Input labelTitle="Country of Employer: " inputName="employer-country"></Input>
            <Input labelTitle="Job Title: " inputName="job-title"></Input>
            <Input labelTitle="Start Date: " inputName="job-start-date" inputType="date"></Input>
            <Input labelTitle="End Date: " inputName="job-end-date" inputType="date"></Input>
        </FormSection>
        </div>
    )
}