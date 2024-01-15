import FlexInput from "./FlexInput";
import "../styles/Work.css";
import { useState } from "react";

export default function Work({
  workID,
  deleteWorkFromList,
  employerName,
  city,
  province,
  country,
  jobTitle,
  startDate,
  endDate,
  updateWork,
}) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  function updateWorkInputs(e) {
    const id = e.target.id.split("+")[0];
    const changedInputName = e.target.getAttribute("data-script-name");
    const value = e.target.value;
    updateWork(id, changedInputName, value);
  }

  return (
    <div className="school">
      <button className="detailsToggle" onClick={toggleDetails}>
        <h2>Work</h2>{" "}
        <img src="src/assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg" />
      </button>

      {showDetails && (
        <div className="details">
          <hr />
          <FlexInput
            labelTitle="Employer Name: "
            inputName={`${workID}+employer-name`}
            value={employerName}
            scriptName="employerName"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="City of Employer: "
            inputName={`${workID}+employer-city`}
            value={city}
            scriptName="city"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Province of Employer: (Optional)"
            inputName={`${workID}+employer-province`}
            value={province}
            scriptName="province"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Country of Employer: "
            inputName={`${workID}+employer-country`}
            value={country}
            scriptName="country"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Job Title: "
            inputName={`${workID}+job-title`}
            value={jobTitle}
            scriptName="jobTitle"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="Start Date: "
            inputName={`${workID}+job-start-date`}
            inputType="date"
            value={startDate}
            scriptName="startDate"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <FlexInput
            labelTitle="End Date: "
            inputName={`${workID}+job-end-date`}
            inputType="date"
            value={endDate}
            scriptName="endDate"
            valueHandler={updateWorkInputs}
          ></FlexInput>
          <button
            className="deleteSection"
            onClick={() => deleteWorkFromList(workID)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
