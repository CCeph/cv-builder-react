import FormSection from "./FormSection";
import Input from "./Input";
import School from "./School";
import Work from "./Work";
import "../styles/SidePanel.css";
import { createElement } from "react";

export default function SidePanel({
  inputStates,
  schoolList,
  addSchoolForm,
  deleteSchoolFromList,
  updateSchool,
  workList,
  addWorkForm,
  deleteWorkFromList,
  updateWork,
}) {
  return (
    <div className="side-panel">
      <FormSection title="Personal Info">
        <Input
          labelTitle="Full Name: "
          inputName="full-name"
          value={inputStates.fullName}
          valueHandler={inputStates.setFullName}
        ></Input>
        <Input
          labelTitle="Email: "
          inputName="email"
          inputType="email"
          value={inputStates.email}
          valueHandler={inputStates.setEmail}
        ></Input>
        <Input
          labelTitle="Phone Number: "
          inputName="phone-number"
          value={inputStates.phoneNumber}
          valueHandler={inputStates.setPhoneNumber}
        ></Input>
        <Input
          labelTitle="Address Line 1: "
          inputName="address1"
          value={inputStates.address1}
          valueHandler={inputStates.setAddress1}
        ></Input>
        <Input
          labelTitle="Address Line 2: "
          inputName="address2"
          value={inputStates.address2}
          valueHandler={inputStates.setAddress2}
        ></Input>
      </FormSection>

      <FormSection title="Education">
        {schoolList.map((school) => (
          <School
            key={school.id}
            schoolID={school.id}
            deleteSchoolFromList={deleteSchoolFromList}
            schoolName={school.schoolName}
            city={school.city}
            province={school.province}
            country={school.country}
            degree={school.degree}
            startDate={school.startDate}
            endDate={school.endDate}
            updateSchool={updateSchool}
          ></School>
        ))}
        <button className="add-button" onClick={addSchoolForm}>
          <span className="material-symbols-outlined">add</span>Education
        </button>
      </FormSection>

      <FormSection title="Work Experience">
        {workList.map((work) => (
          <Work
            key={work.id}
            workID={work.id}
            deleteWorkFromList={deleteWorkFromList}
            employerName={work.employerName}
            city={work.city}
            province={work.province}
            country={work.country}
            jobTitle={work.jobTitle}
            startDate={work.startDate}
            endDate={work.endDate}
            updateWork={updateWork}
          ></Work>
        ))}
        <button className="add-button" onClick={addWorkForm}>
          <span className="material-symbols-outlined">add</span>Work Experience
        </button>
      </FormSection>
    </div>
  );
}
