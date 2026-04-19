import { lectures as lecturesData } from "../data/data.ts";
import type { Lecture } from "../data/data.ts";
import { useState } from "react";
import Card from "./Card.tsx";

type ScheduleProps = {
  selectedLecturesIds: string[]
  onToggleLecture: (lectureId: string) => void
}

function Schedule(props: ScheduleProps) {

  const [openedDates, setOpenedDates] = useState<string[]>([]);
  const dates = ['7 апреля', '8 апреля', '9 апреля'];

  function toggleDate(date: string) {
    setOpenedDates((prev) =>
      prev.includes(date)
        ? prev.filter((item) => item !== date)
        : [...prev, date]
    );
  }

  function renderLectures(date: string) {
    return (
      <>
        {lecturesData
          .filter((lecture: Lecture) => lecture.date == date)
          .map((lecture: Lecture) => {
            const isSelected = props.selectedLecturesIds.includes(lecture.id)
            return (
              <Card
                key={lecture.id}
                id={lecture.id}
                date={lecture.date}
                time={lecture.time}
                title={lecture.title}
                speakerName={lecture.speakerName}
                speakerRole={lecture.speakerRole}
                company={lecture.company}
                imagePath={lecture.image}
                isSelected={isSelected}
                onClick={() => props.onToggleLecture(lecture.id)}
              />
            )

          })}
      </>
    )
  }

  function renderDay(date: string) {

    return (
      <div className='max-w-[324px] md:max-w-[642px] xl:max-w-[743px]'>
        <p className='text-[12px] md:text-[20px] xl:text-[24px] font-semibold flex items-center gap-2.5 cursor-pointer leading-4 md:leading-6 xl:leading-8' onClick={() => toggleDate(date)}>
          {date}
          <svg  className={`w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 ${
            openedDates.includes(date) ? "rotate-0" : "rotate-180"
          }`}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="url(#pattern0_47_959)"/>
            <defs>
              <pattern id="pattern0_47_959" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_47_959" transform="scale(0.0166667)"/>
              </pattern>
              <image id="image0_47_959" width="60" height="60" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO3YsS5EQRTG8RGFVUi0W+g0SgXeQEGo0VB5Ba2WzgsIjVrHG9AoNSpiF5VEISTEX24QWdm9O3P2zp1JfL9qi82c79y7d+bsdU5ERERERERE5N8AloEH4B5Yc5kDVr+zFpmXLAvc0WkXGHaZKTIBO3+yti0LdXMKjLtMAGPAcbeglsV6uQKmonQQlm8SuOwV0rJgmSfTc1IRYB54LAtoWbSfd2ArSkfluTaBt37hLAvf4OcQaETprjNPAzjwzHRtKbAIvHgWOAeaUTr9ytIEzjyzFJkXrIWmA+50G5iL0Gxohtk6r+4rsFFhsyvAs2ftC2CiqsIjwD7+9gYZUoAhYBv48Kx3BIxW0qxlhxxkSCkbJpKcFHicgdYhpd8wkWwWIEKwmBeyElX+9AIflZNk8zy/mwuWzaXuzdClPD4Mx926ywkwA7Q8G2gFfnfG5Yiwu1bvMBGL4bmsd5iIJXDnTf63sxKBZ2vyFwt1DylZvDqqa0hJN0wkGFLyGCYivzAvztbb4nO0QiIiIiIiIiLifnwC1BaWCyVav/0AAAAASUVORK5CYII="/>
            </defs>
          </svg>
        </p>
        <div
          className={`transition-all duration-300 ease-in-out ${
            openedDates.includes(date)
              ? "max-h-[1000px] opacity-100"
              : "overflow-hidden max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-col gap-2 md:gap-4 mt-4">
            {renderLectures(date)}
          </div>
        </div>
        <hr className='border-[#75C9EA] mt-2 md:mt-4 mb-6 xl:mb-12' />
      </div>
    )
  }


  return (
    <section>
      <h2 className='text-[16px] md:text-[32px] xl:text-[40px] font-semibold mb-5'>Программа лектория</h2>
      <p className='text-[12px] md:text-[16px] xl:text-[18px] max-w-[324px] md:max-w-[576px] mb-[24px] xl:mb-[52px] xl:max-w-[500px]'>Выберите интересующие вас темы и составьте индивидуальное расписание. Регистрация доступна на каждое событие отдельно.</p>
      {dates.map((date) => renderDay(date))}
    </section>
  )
}

export default Schedule