import './style.css'
const InputForm = ({
    label,
    value,
    disabled,
    ...props}) => {
  return (
    <div className="relative w-full flex flex-col items-center">
        <input value={value}  {...props} className="h-[50px] sm:w-[500px] w-[100%] input-form" />
        <label htmlFor="" className='text-xs sm:left-[27%] left-5  top-[-8px] px-4 bg-white absolute z-10'>{label}</label>
    </div>
  )
}

export default InputForm