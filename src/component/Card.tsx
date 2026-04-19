type CardProps = {
  id: string;
  date: string;
  time: string;
  title: string;
  speakerName: string;
  speakerRole: string;
  company: string;
  imagePath: string;
  isSelected: boolean
  onClick: () => void
}

function Card(props: CardProps) {

  return (
    <div onClick={props.onClick} className={`w-full cursor-pointer`}>
      <div className={`flex p-4 xl:p-6 gap-4 rounded-[8px]
      transition duration-300 hover:shadow-[0_0_16px_rgba(114,199,252,0.5)] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] hover:from-[#006DEF33] hover:to-[#72C7FC33] text-white border 
      
      ${props.isSelected ? 'border-[#75C9EA]' : 'border-transparent'}`}>
        <div className="shrink-0">
          <img
            src={props.imagePath}
            alt={props.speakerName}
            className="w-[93px] h-[124px] xl:w-[120px] xl:h-[160px] md: rounded-[8px] object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-2 w-fit px-2 xl:px-4 py-0.5 rounded-[8px] border border-[#75C9EA] text-[8px] md:text-[12px] xl:text-[14px] font-base bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A]">
            {props.time}
          </div>

          <h3 className="mb-2 max-w-4xl text-[12px] md:text-[20px] xl:text-[24px] md:font-semibold leading-tight">
            {props.title}
          </h3>

          <div className='text-[10px] md:text-[14px] xl:text-[16px]'>
            <p>
              {props.speakerName}, {props.speakerRole}
            </p>
            <p>{props.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;