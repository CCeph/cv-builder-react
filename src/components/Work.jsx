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
}) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
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
            inputName="employer-name"
            value={employerName}
            scriptName="employerName"
            /* 
            valueHandler={updateSchoolInputs} */
          ></FlexInput>
          <FlexInput
            labelTitle="City of Employer: "
            inputName="employer-city"
            value={city}
            scriptName="city"
          ></FlexInput>
          <FlexInput
            labelTitle="Province of Employer: (Optional)"
            inputName="employer-province"
            value={province}
            scriptName="province"
          ></FlexInput>
          <FlexInput
            labelTitle="Country of Employer: "
            inputName="employer-country"
            value={country}
            scriptName="country"
          ></FlexInput>
          <FlexInput
            labelTitle="Job Title: "
            inputName="job-title"
            value={jobTitle}
            scriptName="jobTitle"
          ></FlexInput>
          <FlexInput
            labelTitle="Start Date: "
            inputName="job-start-date"
            inputType="date"
            value={startDate}
            scriptName="startDate"
          ></FlexInput>
          <FlexInput
            labelTitle="End Date: "
            inputName="job-end-date"
            inputType="date"
            value={endDate}
            scriptName="endDate"
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
