// import { useState } from "react";
// import { Link } from "react-router-dom";
// import QuickCVForm from "./QuickCVForm";
// import logo from '../assets/recruitmenthubLogo (2).png'

// const Header = () => {
//   // State to toggle the mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // State to toggle the pop-up form
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   // Toggle menu function
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Toggle form function
//   const toggleForm = () => {
//     setIsFormOpen(!isFormOpen);
//   };

//   return (
//     <header className=" md:py-1 md:px-6  font-poppins bg-transparent fixed w-full top-0 left-0 z-50 backdrop-blur-md border-b border-slate-500">
//       <div className="max-w-screen mx-auto flex items-center justify-between">
//         <Link to="/" className="text-white font-semibold text-2xl">
//         <img src={logo} alt="" className="h-[7rem] w-60" />
//         </Link>

//         <div className="flex items-center justify-center space-x-10 font-semibold">
//           <nav className="hidden md:flex space-x-6 md:gap-x-4  text-white">
//             <Link to="/about" className="hover:text-green-500">
//               ABOUT US
//             </Link>
//             <Link to="/jobs" className="hover:text-green-500">
//               JOBS
//             </Link>
//             <Link to="/employers" className="hover:text-green-500">
//               EMPLOYERS
//             </Link>
//             <Link to="/insights" className="hover:text-green-500">
//               INSIGHTS
//             </Link>
//             <Link to="/contact" className="hover:text-green-500">
//               CONTACT
//             </Link>
//           </nav>

//           <div className="hidden md:block">
//             <button
//               onClick={toggleForm}
//               className="bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white px-5 py-1 rounded-full font-semibold hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] transition"
//             >
//               QUICK CV DROP
//             </button>
//           </div>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-10 h-10 mr-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="3"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
        
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`${
//           isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         } md:hidden transition-all duration-300 ease-in-out bg-[#1e2a2f] text-white font-medium py-4 px-6 space-y-4 overflow-hidden flex flex-col`}
//       >
//         <Link to="/about" className="hover:text-green-500">
//           ABOUT US
//         </Link>
//         <Link to="/jobs" className="hover:text-green-500">
//           JOBS
//         </Link>
//         <Link to="/employers" className="hover:text-green-500">
//           EMPLOYERS
//         </Link>
//         <Link to="/insights" className="hover:text-green-500">
//           INSIGHTS
//         </Link>
//         <Link to="/contact" className="hover:text-green-500">
//           CONTACT
//         </Link>
//         <button
//           onClick={toggleForm}
//           className="bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white px-5 py-1 rounded-full font-semibold hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] transition"
//         >
//           QUICK CV DROP
//         </button>
//       </div>

//       {/* Pop-Up Form */}
//       <QuickCVForm isVisible={isFormOpen} onClose={toggleForm} />
//     </header>
//   );
// };

// export default Header;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickCVForm from "./QuickCVForm";
import logo from "../assets/recruitmenthubLogo (2).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-slate-500">
      <div className="max-w-screen-xl mx-auto px-4 py-1 grid grid-cols-2 md:grid-cols-3 items-center font-poppins">
        {/* Logo */}
        <div className="col-span-1 flex items-center">
          <img
            src={logo}
            alt="Recruitment Hub 365 Logo"
            className="h-24 w-48 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between items-center gap-2 text-white font-semibold">
          <button onClick={() => navigate("/about")} className="hover:text-green-500">ABOUT US</button>
          <button onClick={() => navigate("/jobs")} className="hover:text-green-500">JOBS</button>
          <button onClick={() => navigate("/services")} className="hover:text-green-500">SERVICES</button>
          <button onClick={() => navigate("/insights")} className="hover:text-green-500">INSIGHTS</button>
          <button onClick={() => navigate("/contact")} className="hover:text-green-500">CONTACT</button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={toggleForm}
            className="bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white px-5 py-1 rounded-full font-semibold hover:text-black transition"
          >
            QUICK CV DROP
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex justify-end md:hidden col-span-1">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
        } bg-[#1e2a2f] text-white font-medium px-6 flex flex-col space-y-4`}
      >
        <button onClick={() => navigate("/about")} className="hover:text-green-500">ABOUT US</button>
        <button onClick={() => navigate("/jobs")} className="hover:text-green-500">JOBS</button>
   <button onClick={() => navigate("/services")} className="hover:text-green-500">SERVICE</button>
        <button onClick={() => navigate("/insights")} className="hover:text-green-500">INSIGHTS</button>
        <button onClick={() => navigate("/contact")} className="hover:text-green-500">CONTACT</button>
        <button
          onClick={toggleForm}
          className="bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white px-5 py-1 rounded-full font-semibold hover:text-green-500 transition"
        >
          QUICK CV DROP
        </button>
      </div>

      {/* Quick CV Form Modal */}
      <QuickCVForm isVisible={isFormOpen} onClose={toggleForm} />
    </header>
  );
};

export default Header;
