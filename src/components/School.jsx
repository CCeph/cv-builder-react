import Input from "./Input";
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

  return (
    <div className="school">
      <button className="detailsToggle" onClick={toggleDetails}>
        <h2>School</h2>{" "}
        <img src="src/assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg" />
      </button>
      {showDetails && (
        <div className="details">
          <hr />
          <Input
            labelTitle="Institute Name: "
            inputName={`${schoolID}+institute-name`}
            value={schoolName}
            scriptName="schoolName"
          ></Input>
          <Input
            labelTitle="City of Institute: "
            inputName={`${schoolID}+institute-city`}
            value={city}
            scriptName="city"
          ></Input>
          <Input
            labelTitle="Province of Institute: (Optional)"
            inputName={`${schoolID}+institute-province`}
            value={province}
            scriptName="province"
          ></Input>
          <Input
            labelTitle="Country of Institute: "
            inputName={`${schoolID}+institute-country`}
            value={country}
            scriptName="country"
          ></Input>
          <Input
            labelTitle="Degree/Program: "
            inputName={`${schoolID}+program`}
            value={degree}
            scriptName="degree"
          ></Input>
          <Input
            labelTitle="Start Date: "
            inputName={`${schoolID}+education-start-date`}
            inputType="date"
            value={startDate}
            scriptName="startDate"
          ></Input>
          <Input
            labelTitle="End Date: "
            inputName={`${schoolID}+education-end-date`}
            inputType="date"
            value={endDate}
            scriptName="endDate"
          ></Input>
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
