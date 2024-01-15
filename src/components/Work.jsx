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
          ></FlexInput>
          <FlexInput
            labelTitle="City of Employer: "
            inputName="employer-city"
          ></FlexInput>
          <FlexInput
            labelTitle="Province of Employer: (Optional)"
            inputName="employer-province"
          ></FlexInput>
          <FlexInput
            labelTitle="Country of Employer: "
            inputName="employer-country"
          ></FlexInput>
          <FlexInput labelTitle="Job Title: " inputName="job-title"></FlexInput>
          <FlexInput
            labelTitle="Start Date: "
            inputName="job-start-date"
            inputType="date"
          ></FlexInput>
          <FlexInput
            labelTitle="End Date: "
            inputName="job-end-date"
            inputType="date"
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
