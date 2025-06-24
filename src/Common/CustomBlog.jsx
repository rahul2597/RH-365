// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const CustomBlog = ({ img, heading, text, link }) => {
//   return (
//     <div className="flex flex-col w-full md:w-[24%] h-screen text-white relative rounded-xl bg-gradient-to-r from-[#020c0a] to-[#041412] border-2 border-gray-700 my-2">
//       {/* Tag */}
//       <p className="absolute z-10 bg-[#25caac] py-1 px-4 rounded-full right-5 top-5">
//         Recruitment
//       </p>

//       {/* Image Section */}
//       <div className="flex-grow overflow-hidden rounded-t-xl">
//         <img
//           src={img}
//           className="w-full h-full object-cover rounded-t-xl"
//           alt="Blog Image"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="p-4 md:px-8 md:py-6 flex flex-col justify-between h-auto">
//         <h2 className="font-raleway font-bold text-lg md:text-xl">{heading}</h2>
//         <p className="font-poppins text-sm my-4 md:my-6">{text}</p>
//         <Link
//           to={link}
//           className="text-[#0c443a] font-raleway font-bold text-xs"
//         >
//           Read More »
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CustomBlog;



/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomBlog = ({  heading, text, link }) => {
  return (
    <div className="flex flex-col w-full md:w-[22%] my-4 text-white relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0a1f1b] to-[#072822] border border-[#2d3f3a] shadow-lg hover:shadow-2xl transition-all duration-300 group  cursor-pointer transform  ease-in-out hover:scale-105">
      {/* Tag */}
      <span className="absolute z-10 bg-[#25caac] text-black text-xs font-semibold py-1 px-3 rounded-full right-4 top-4 shadow-md">
        Recruitment
      </span>

      {/* Image Section */}
      <div className="h-32 overflow-hidden">
        <img
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp"
          alt="Blog Visual"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h2 className="font-raleway font-semibold text-lg md:text-xl mb-2 line-clamp-2">
          {heading}
        </h2>
        <p className="font-poppins text-sm text-gray-300 mb-4 line-clamp-4">
          {text}
        </p>

        <Link
          to={link}
          className="self-start text-white font-poppins text-sm font-medium bg-[#25caac] px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#0a1f1b]"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default CustomBlog;
