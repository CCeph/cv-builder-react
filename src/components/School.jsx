import FlexInput from "./FlexInput";
import "../styles/School.css";
import { useState } from "react";

export default function School({
  schoolID,
  deleteSchoolFromList,
  schoolName,
  city,
  province,
  country,
  degree,
  startDate,
  endDate,
  updateSchool,
}) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  function updateSchoolInputs(e) {
    const id = e.target.id.split("+")[0];
    const changedInputName = e.target.getAttribute("data-script-name");
    const value = e.target.value;
    updateSchool(id, changedInputName, value);
  }

  return (
    <div className="school">
      <button className="detailsToggle" onClick={toggleDetails}>
        <h2>School</h2>{" "}
        <img src="src/assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg" />
      </button>
      {showDetails && (
        <div className="details">
          <hr />
          <FlexInput
            labelTitle="Institute Name: "
            inputName={`${schoolID}+institute-name`}
            value={schoolName}
            scriptName="schoolName"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="City of Institute: "
            inputName={`${schoolID}+institute-city`}
            value={city}
            scriptName="city"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Province of Institute: (Optional)"
            inputName={`${schoolID}+institute-province`}
            value={province}
            scriptName="province"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Country of Institute: "
            inputName={`${schoolID}+institute-country`}
            value={country}
            scriptName="country"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Degree/Program: "
            inputName={`${schoolID}+program`}
            value={degree}
            scriptName="degree"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Start Date: "
            inputName={`${schoolID}+education-start-date`}
            inputType="date"
            value={startDate}
            scriptName="startDate"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="End Date: "
            inputName={`${schoolID}+education-end-date`}
            inputType="date"
            value={endDate}
            scriptName="endDate"
            valueHandler={updateSchoolInputs}
          ></FlexInput>
          <button
            className="deleteSection"
            onClick={() => deleteSchoolFromList(schoolID)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
