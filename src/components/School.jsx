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
}) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  function updateSchoolInputs(e) {
    console.log(e.target.getAttribute("data-script-name"));
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
          ></FlexInput>
          <FlexInput
            labelTitle="Province of Institute: (Optional)"
            inputName={`${schoolID}+institute-province`}
            value={province}
            scriptName="province"
          ></FlexInput>
          <FlexInput
            labelTitle="Country of Institute: "
            inputName={`${schoolID}+institute-country`}
            value={country}
            scriptName="country"
          ></FlexInput>
          <FlexInput
            labelTitle="Degree/Program: "
            inputName={`${schoolID}+program`}
            value={degree}
            scriptName="degree"
          ></FlexInput>
          <FlexInput
            labelTitle="Start Date: "
            inputName={`${schoolID}+education-start-date`}
            inputType="date"
            value={startDate}
            scriptName="startDate"
          ></FlexInput>
          <FlexInput
            labelTitle="End Date: "
            inputName={`${schoolID}+education-end-date`}
            inputType="date"
            value={endDate}
            scriptName="endDate"
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
