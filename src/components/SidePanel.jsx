import FormSection from "./FormSection";
import Input from "./Input";
import "../styles/SidePanel.css"

export default function SidePanel() {
    return (
        <div className="side-panel">
        <FormSection>
            <Input labelTitle={"Full Name: "} inputName={"full-name"}></Input>
        </FormSection>
        </div>
    )
}