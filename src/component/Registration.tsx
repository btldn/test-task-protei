import { useForm } from "react-hook-form"
import { useState } from 'react'
import Modal from './Modal.tsx'

type RegistrationProps = {
  selectedLecturesIds: string[];
}

type FormData = {
  name: string
  phone: string
  company: string
  position: string
  email: string
  questions?: string
  selectedLecturesIds: string[]
}



function Registration(props: RegistrationProps) {

  const { register, handleSubmit, reset, formState: { errors }} = useForm<FormData>()
  const [modalType, setModalType] = useState<'success' | 'error' | null>(null)

  const onSubmit = (data: FormData) => {
    const finalData = {
      ...data,
      selectedLecturesIds: props.selectedLecturesIds,
    }

    console.log(finalData)

    if (Math.random() < 0.4) {
      setModalType('error')
      return
    }
    reset()
    setModalType('success')
  }

  return (
    <aside className='flex flex-col items-center w-full max-w-[324px] md:max-w-[642px] xl:max-w-[360px] '>
      <h2 className='text-[16px] md:text-[32px] xl:text-[40px] font-semibold mb-6 md:mb-12 text-center xl:leading-[48px] xl:max-w-[300px]'>Регистрация на лекторий</h2>
      <form className='w-full p-4 md:p-6 xl:p-12 rounded-[8px] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] border border-[#75C9EA]' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="name">ФИО*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 text-[8px] md:text-[12px] xl:text-[14px]' id="name" type="text" {...register('name', {required: 'Обязательно'})} placeholder='Иванов Иван Иванович'/>
            {errors.name && <p className="text-red-400 text-sm mb-1">{errors.name.message}</p>}
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="phone">Телефон*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 text-[8px] md:text-[12px] xl:text-[14px]' id="phone" type="text" {...register('phone',
              {required: 'Обязательно', pattern: {
                value: /^(?:\+7|8)\s*\(?\d{3}\)?\s*\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
                message: "Некорректный формат телефона"
              }})} placeholder='+7 (987) 654-32-10'/>
              {errors.phone && <p className="text-red-400 text-sm mb-1">{errors.phone.message}</p>}
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="company">Компания*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 text-[8px] md:text-[12px] xl:text-[14px]' id="company" type="text" {...register('company', {required: 'Обязательно'})} placeholder='Название компании'/>
            {errors.company && <p className="text-red-400 text-sm mb-1">{errors.company.message}</p>}
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="position">Должность*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 text-[8px] md:text-[12px] xl:text-[14px]' id="position" type="text" {...register('position', {required: 'Обязательно'})} placeholder='Руководитель отдела...'/>
            {errors.position && <p className="text-red-400 text-sm mb-1">{errors.position.message}</p>}
          </div>
            <div className='flex flex-col md:col-span-2 xl:col-span-1'>
              <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="email">Email*</label>
              <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 text-[8px] md:text-[12px] xl:text-[14px]' id="email" type="text" {...register('email', {required: 'Обязательно',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Некорректный email'
                }})} placeholder='example@company.ru'/>
              {errors.email && <p className="text-red-400 text-sm mb-1">{errors.email.message}</p>}
            </div>
            <div className='flex flex-col md:col-span-2 xl:col-span-1'>
              <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="questions">Ваши вопросы к обсуждению</label>
              <textarea className='bg-[#000C1480] p-2 rounded-[8px] outline-none placeholder:text-white/30 resize-none mb-6 text-[8px] md:text-[12px] xl:text-[14px]' name="questions" id="questions" cols="30" rows="6"  {...register('questions')} placeholder='Какие темы вам особенно интересны?'></textarea>
            </div>

        </div>

        <p className='mb-6 md:mb-12 text-[10px] md:text-[12px] xl:text-[16px]'>Выбрано <span className='text-[#75C9EA] text-[12px] md:text-[14px] xl:text-[18px]'>{props.selectedLecturesIds.length}</span> лекции</p>
        <button className= 'w-full py-3 mb-2 cursor-pointer text-[10px] md:text-[14px] xl:text-[16px] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] border border-[#75C9EA] rounded-[8px] transition-all duration-100 hover:shadow-[0_0_16px_#72C7FC80]'
                type='submit'
        >
          Зарегистрироваться
        </button>
        <p className='text-[8px] md:text-[12px] xl:text-[14px] text-[#FFFFFF4D] text-center font-normal'>Нажимая кнопку, вы соглашаетесь с <a className='border-b-1' href='#'>политикой обработки персональных данных</a>.</p>
      </form>

      <Modal
        isOpen={modalType === 'success'}
        title="Заявка отправлена"
        message="Спасибо! Ваши данные успешно отправлены. Мы свяжемся с вами позже."
        buttonText="Понятно"
        onClose={() => setModalType(null)}
      />

      <Modal
        isOpen={modalType === 'error'}
        title="Ошибка отправки"
        message="Не удалось отправить данные. Попробуйте ещё раз."
        buttonText="Закрыть"
        onClose={() => setModalType(null)}
      />
    </aside>

  )
}

export default Registration