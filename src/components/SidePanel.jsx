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
        </div>
    )
}