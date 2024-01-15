import { useState } from "react";
import "./App.css";
import ResumeDisplay from "./components/ResumeDisplay";
import SidePanel from "./components/SidePanel";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [schoolList, setSchoolList] = useState([]);

  function updateSchool(schoolID, changedInputName, newValue) {
    // This code obtains the school object, updates the input that was changed,
    // then creates a new schoolList array that is used as the new state value.
    const isMatchingSchoolID = (school) => {
      return school.id === schoolID;
    };
    const schoolIndex = schoolList.findIndex(isMatchingSchoolID);
    const schoolCopy = { ...schoolList[schoolIndex] };
    schoolCopy[changedInputName] = newValue;
    const shallowSchoolListCopy = [...schoolList];
    shallowSchoolListCopy[schoolIndex] = schoolCopy;
    setSchoolList(shallowSchoolListCopy);
  }

  function addSchoolForm() {
    const uniqueID = uuidv4();
    setSchoolList([
      ...schoolList,
      {
        id: uniqueID,
        schoolName: "",
        city: "",
        province: "",
        country: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function deleteSchoolFromList(selectedSchoolID) {
    const newSchoolList = schoolList.filter(
      (school) => school.id !== selectedSchoolID
    );
    setSchoolList(newSchoolList);
  }

  const inputStates = {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address1,
    setAddress1,
    address2,
    setAddress2,
  };

  return (
    <div className="mainBody">
      <SidePanel
        inputStates={inputStates}
        schoolList={schoolList}
        addSchoolForm={addSchoolForm}
        deleteSchoolFromList={deleteSchoolFromList}
        updateSchool={updateSchool}
      ></SidePanel>
      <ResumeDisplay inputStates={inputStates}></ResumeDisplay>
    </div>
  );
}

export default App;
