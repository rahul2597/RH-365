/* eslint-disable react/prop-types */

const CustomTextArea = ({style, rows, placeholder, name, onChange, value}) => {
  return (
    <textarea
      className={style}
      placeholder={placeholder}
      rows={rows}
      value={value} 
      name={name} 
      onChange={onChange}
    >
    </textarea>
  )
}

export default CustomTextArea