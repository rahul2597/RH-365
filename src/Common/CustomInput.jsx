/* eslint-disable react/prop-types */

const CustomInput = ({placeholder, type, name, style, icon, value, onChange}) => {
  return (
    <div className="font-poppins w-full relative">
      {icon}
      <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} className={style} />
    </div>
  )
}

export default CustomInput;