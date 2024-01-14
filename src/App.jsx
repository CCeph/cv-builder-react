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
      ></SidePanel>
      <ResumeDisplay inputStates={inputStates}></ResumeDisplay>
    </div>
  );
}

export default App;
