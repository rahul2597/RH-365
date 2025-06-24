// import CustomButton from "../../Common/CustomButton";
// // import CustomInput from "../../Common/CustomInput"
// // import { IoSearchOutline } from "react-icons/io5";
// // import "./hero.css";
// // import blog1 from "../../../public/blog1.jpg";
// // import blog2 from "../../../public/blog2.jpg";
// // import blog3 from "../../../public/blog3.jpg";
// // import RoundedHexagon from "./RoundedHexagon";
// import "./hero.css"
// import blog1 from '../../assets/blog1.jpg'
// import blog2 from '../../assets/blog2.jpg'
// import blog3 from '../../assets/blog3.jpg'
// import RoundedHexagon from "./RoundedHexagon"

// const HomeHeroSection = () => {
//   return (
//     <div
//       style={{
//         background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
//       }}
//       className="flex md:flex-row flex-col items-center justify-center py-10 px-10 relative z-10"
//     >
//       <div className="md:w-3/5 w-full">
//         <h2 className="text-[#25caac] font-poppins font-bold py-6 text-2xl">
//           REDEFINING RECRUITMENT
//         </h2>
//         <h1 className="font-bold font-raleway md:text-5xl text-4xl  lg:text-6xl sm:pr-10 pb-10 leading-normal">
//           Enabling positive change through the connection of professionals.
//         </h1>
//         <p className="font-poppins text-lg">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry`s standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book.
//         </p>
//         <div className="flex md:flex-row md:pr-4 flex-col gap-y-2 items-center justify-start py-10 space-x-8">
//           {/* <CustomInput placeholder={'Keywords'} style={'w-1/2 py-4 px-12 rounded-full font-medium bg-gray-600 border border-green-900 focus:outline-none text-lg'} type={'text'} icon={<IoSearchOutline className="absolute size-6 text-green-500 top-[30%] left-[4%]" />} /> */}
//           <input
//             type="text"
//             placeholder="Keywords"
//             className="py-4 w-full  px-12 rounded-full font-medium bg-gray-600 border border-green-900 focus:outline-none text-lg"
//           />

//           <CustomButton
//             text={"SEARCH JOBS"}
//             link={"/jobs"}
//             style={
//               "py-4 text-center  px-10 w-full md:w-2/5 text-lg font-semibold font-poppins rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80] hover:bg-gradient-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-500"
//             }
//           />
//         </div>
//       </div>
//       <div className="md:w-2/5 w-full px-0 relative overflow-hidden flex justify-center items-center">
//         {/* Column 1 */}
//         <div className="space-y-6 animate-up-down">
//           <RoundedHexagon imageUrl={blog1} />
//           <RoundedHexagon imageUrl={blog2} />
//           <RoundedHexagon imageUrl={blog3} />
//         </div>

//         {/* Column 2 with overlay */}
//         <div className="space-y-6 animate-up-down-slow ml-10 relative">
//           <RoundedHexagon imageUrl={blog3} />
//           <RoundedHexagon imageUrl={blog1} />
//           <RoundedHexagon imageUrl={blog2} />

//           {/* Overlay */}
//         </div>
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
//             zIndex: 10,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default HomeHeroSection;



// import CustomButton from "../../Common/CustomButton";
// import blog1 from '../../assets/blog1.jpg';
// import blog2 from '../../assets/blog2.jpg';
// import blog3 from '../../assets/blog3.jpg';
// import RoundedHexagon from "./RoundedHexagon";
// import "./hero.css";

// const HomeHeroSection = () => {
//   return (
//     <div
//       style={{
//         background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
//       }}
//       className="flex md:flex-row flex-col items-center justify-between py-16 px-8 md:px-16 lg:px-24 relative z-10 overflow-hidden"
//     >
//       {/* Left Content */}
//       <div className="md:w-3/5 w-full z-20">
//         <h2 className="text-[#25caac] font-poppins font-semibold tracking-wide pb-4 text-xl md:text-2xl">
//           REDEFINING RECRUITMENT
//         </h2>
//         <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-6">
//           Empowering Tech Hiring with Precision and Purpose
//         </h1>
//         <p className="font-poppins text-lg text-gray-200">
//           At RecruitmentHub365, we don’t just fill roles—we build future-ready tech teams. 
//           By combining expert-driven screening with industry insight, we connect innovative companies 
//           with top-tier professionals across the IT spectrum.
//         </p>

//         {/* Search */}
//         <div className="flex md:flex-row flex-col items-center justify-start gap-4 mt-10">
//           <input
//             type="text"
//             placeholder="Search by skill or job title"
//             className="py-4 px-6 w-full md:w-2/3 rounded-full font-medium bg-gray-700 border border-green-600 focus:outline-none text-white placeholder-gray-300"
//           />
//           <CustomButton
//             text={"SEARCH JOBS"}
//             link={"/jobs"}
//             style="py-4 px-8 w-full md:w-auto text-lg font-semibold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80] hover:from-white hover:to-white hover:text-green-500 transition"
//           />
//         </div>
//       </div>

//       {/* Right Animation Area */}
//       <div className="md:w-2/5 w-full mt-12 md:mt-0 flex justify-center relative z-10">
//         <div className="flex space-x-6">
//           {/* Left Column */}
//           <div className="space-y-6 animate-up-down">
//             <RoundedHexagon imageUrl={blog1} />
//             <RoundedHexagon imageUrl={blog2} />
//             <RoundedHexagon imageUrl={blog3} />
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6 animate-up-down-slow">
//             <RoundedHexagon imageUrl={blog3} />
//             <RoundedHexagon imageUrl={blog1} />
//             <RoundedHexagon imageUrl={blog2} />
//           </div>
//         </div>

//         {/* Overlay for fade effect */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
//             zIndex: 5,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomeHeroSection;





// src/Pages/HomeHeroSection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import RoundedHexagon from "./RoundedHexagon";
import "./hero.css";

const HomeHeroSection = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/jobs?query=${encodeURIComponent(keyword.trim())}`);
    } else {
      navigate("/jobs");
    }
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
      }}
      className="flex md:flex-row flex-col items-center justify-between py-16 px-8 md:px-16 lg:px-24 relative z-10 overflow-hidden"
    >
      <div className="md:w-3/5 w-full z-20">
        <h2 className="text-[#25caac] font-poppins font-semibold tracking-wide pb-4 text-xl md:text-2xl">
          REDEFINING RECRUITMENT
        </h2>
        <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-6">
          Empowering Tech Hiring with Precision and Purpose
        </h1>
        <p className="font-poppins text-lg text-gray-200">
          At RecruitmentHub365, we don’t just fill roles—we build future-ready tech teams. 
          By combining expert-driven screening with industry insight, we connect innovative companies 
          with top-tier professionals across the IT spectrum.
        </p>

        {/* Search */}
        <div className="flex md:flex-row flex-col items-center justify-start gap-4 mt-10">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by skill or job title"
            className="py-4 px-6 w-full md:w-2/3 rounded-full font-medium bg-gray-700 border border-green-600 focus:outline-none text-white placeholder-gray-300"
          />
          <button
            onClick={handleSearch}
            className="py-4 px-8 w-full md:w-auto text-lg font-semibold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80] hover:from-white hover:to-white hover:text-green-500 transition"
          >
            SEARCH JOBS
          </button>
        </div>
      </div>

      {/* Right Animation Area */}
      <div className="md:w-2/5 w-full mt-12 md:mt-0 flex justify-center relative z-10">
        <div className="flex space-x-6">
          <div className="space-y-6 animate-up-down">
            <RoundedHexagon imageUrl={blog1} />
            <RoundedHexagon imageUrl={blog2} />
            <RoundedHexagon imageUrl={blog3} />
          </div>
          <div className="space-y-6 animate-up-down-slow">
            <RoundedHexagon imageUrl={blog3} />
            <RoundedHexagon imageUrl={blog1} />
            <RoundedHexagon imageUrl={blog2} />
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
