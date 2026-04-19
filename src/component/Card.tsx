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
    <div onClick={props.onClick} className={`max-w-[324px] md:max-w-[642px] xl:max-w-[743px] cursor-pointer `}>
      <div className={`flex p-6 gap-4 rounded-[8px] bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A] mb-4 text-white border ${props.isSelected ? 'border-cyan-400' : 'border-transparent'}`}>
        <div className="shrink-0">
          <img
            src={props.imagePath}
            alt={props.speakerName}
            className="w-[120px] h-[160px] rounded-[8px] object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-2 w-fit px-[16px] py-[2px] rounded-[8px] border border-cyan-400 text-[8px] md:text-[12px] xl:text-[14px] font-base bg-gradient-to-r from-[#006DEF1A] to-[#72C7FC1A]">
            {props.time}
          </div>

          <h3 className="mb-2 max-w-4xl text-[12px] md:text-[20px] xl:text-[24px] font-semibold leading-tight">
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