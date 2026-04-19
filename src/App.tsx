import { useState } from 'react'
import './App.css'
import Schedule from "./component/Schedule.tsx";
import Registration from "./component/Registration.tsx";

function App() {

  const [selectedLecturesIds, setSelectedLecturesIds] = useState<string[]>([])

  const toggleLecture = (lectureId: string) => {
    setSelectedLecturesIds((prev) =>
      prev.includes(lectureId)
        ? prev.filter((id) => id !== lectureId)
        : [...prev, lectureId]
    )
  }


  return (
    <div className='my-[100px] flex flex-col xl:flex-row gap-6 justify-center content-center flex-wrap'>
      <Schedule
        selectedLecturesIds={selectedLecturesIds}
        onToggleLecture={toggleLecture}
      />
      <Registration
        selectedLecturesIds={selectedLecturesIds}
      />
    </div>
  )
}

export default App
