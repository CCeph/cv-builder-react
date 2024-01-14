import { useState } from 'react'
import './App.css'
import ResumeDisplay from './components/ResumeDisplay'
import SidePanel from './components/SidePanel'
import School from './components/School'

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [schoolList, setSchoolList] = useState([]);

  const inputStates = {
    fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber, address1, setAddress1, address2, setAddress2
  }

  return (
    <div className='mainBody'>
      <SidePanel inputStates={inputStates} schoolList={schoolList}></SidePanel>
      <ResumeDisplay inputStates={inputStates}></ResumeDisplay>
    </div>
  )
}

export default App
