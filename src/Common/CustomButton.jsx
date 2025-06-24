// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// const CustomButton = ({ text, style, link }) => {
//   if (link) {
//     return (
//       <Link to={link} className={style}>
//         {text}
//       </Link>
//     );
//   }

//   return (
//     <button
//       className={style}
//     >
//       {text}
//     </button>
//   );
// };

// export default CustomButton;



/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomButton = ({ text, style, link, value, handleSetShowForm }) => {
  if (link) {
    return (
      <Link to={link} className={style}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={style}
      onClick={() => handleSetShowForm?.(value)} // Trigger handler if passed
    >
      {text}
    </button>
  );
};

export default CustomButton;
