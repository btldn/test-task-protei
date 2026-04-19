type ModalProps = {
  isOpen: boolean
  title: string
  message: string
  buttonText?: string
  onClose: () => void
}

export default function Modal(props: ModalProps) {
  if (!props.isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-[360px] md:max-w-[420px] rounded-[20px] border border-white/10 bg-[#0B1620] p-6 text-white shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <h2 className="mb-3 text-[20px] font-semibold md:text-[24px]">
          {props.title}
        </h2>

        <p className="mb-6 text-[14px] leading-relaxed text-white/70 md:text-[16px]">
          {props.message}
        </p>

        <button
          type="button"
          onClick={props.onClose}
          className="w-full rounded-[12px] bg-gradient-to-r from-[#77CDDDCC] to-[#0BA1DDCC] px-4 py-3 text-[14px] font-medium text-white transition hover:opacity-90 md:text-[16px]"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}