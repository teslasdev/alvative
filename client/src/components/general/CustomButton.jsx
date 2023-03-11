
const CustomButton = ({
    type,
    title,
    ...props
}) => {
  return (
    <button
      type={type}
      className='btn-primary h-[50px] sm:w-[500px] w-[100%] rounded-full text-white'
      {...props}
    >
      {title}
    </button>
  )
}

export default CustomButton