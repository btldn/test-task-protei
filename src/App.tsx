import { useState } from 'react'
import './App.css'
import Schedule from "./component/Schedule.tsx";
import Registration from "./component/Registration.tsx";

function App() {

  return (
    <div className='my-[100px] flex flex-col xl:flex-row gap-6 justify-center content-center flex-wrap'>
      <Schedule/>
      <Registration />
    </div>
  )
}

export default App
