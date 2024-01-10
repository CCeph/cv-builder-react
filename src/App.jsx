import { useState } from 'react'
import './App.css'
import ResumeDisplay from './components/ResumeDisplay'
import SidePanel from './components/SidePanel'

function App() {
  return (
    <div className='mainBody'>
      <SidePanel></SidePanel>
      <ResumeDisplay></ResumeDisplay>
    </div>
  )
}

export default App
