function Registration() {

  return (
    <aside className='w-full max-w-[324px] md:max-w-[642px] xl:max-w-[360px]'>
      <h2 className='text-[16px] md:text-[32px] xl:text-[40px] font-semibold mb-5 text-center'>Регистрация на лекторий</h2>
      <form className='p-4 md:p-6 xl:p-12 rounded-[8px] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] border border-cyan-400' action="">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">ФИО*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none' type="text"/>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">Телефон*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none' type="text"/>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">Компания*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none' type="text"/>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">Должность*</label>
            <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none' type="text"/>
          </div>
            <div className='flex flex-col md:col-span-2 xl:col-span-1'>
              <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">Email*</label>
              <input className='bg-[#000C1480] p-2 rounded-[8px] outline-none' type="text"/>
            </div>
            <div className='flex flex-col md:col-span-2 xl:col-span-1'>
              <label className='mb-2 text-[10px] md:text-[14px] xl:text-[16px]' htmlFor="">Ваши вопросы к обсуждению</label>
              <textarea className='bg-[#000C1480] p-2 rounded-[8px] outline-none' name="" id="" cols="30" rows="8"></textarea>
            </div>

        </div>

        <p className='mb-12 text-[16px]'>Выбрано N лекции</p>
        <button className= 'w-full py-3 mb-2 cursor-pointer text-[16px] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] border border-cyan-400 rounded-[8px]'
                type='submit'
        >
          Зарегистрироваться
        </button>
        <p className='text-[8px] md:text-[12px] xl:text-[14px] text-[#FFFFFF4D] text-center font-normal'>Нажимая кнопку, вы соглашаетесь с <u>политикой обработки персональных данных</u>.</p>
      </form>

    </aside>
  )
}

export default Registration