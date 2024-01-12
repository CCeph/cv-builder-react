import FormSection from "./FormSection";
import Input from "./Input";
import "../styles/SidePanel.css"

export default function SidePanel() {
    return (
        <div className="side-panel">
        <FormSection title="Personal Info">
            <Input labelTitle="Full Name: " inputName="full-name"></Input>
            <Input labelTitle="Email: " inputName="email" inputType="email"></Input>
        </FormSection>
        </div>
    )
}