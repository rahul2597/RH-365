/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const CustomSelect = ({ style, options, value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`font-poppins md:w-full w-[15rem] appearance-none rounded-md border border-gray-200 bg-white px-6 py-2 focus:border-gray-400 focus:outline-none ${style}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <MdOutlineKeyboardArrowDown className="pointer-events-none absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default CustomSelect;