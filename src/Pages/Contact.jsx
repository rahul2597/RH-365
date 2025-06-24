// import { useState } from "react";
// import { Fade, Zoom, Slide } from "react-awesome-reveal";
// import CustomButton from "../Common/CustomButton";
// import ContactForm from "../Components/ContactForm";
// import FindTalentForm from "../Common/FindTalentForm";
// import RegisterForm from "../Common/RegisterForm";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// const Contact = () => {
//   const [showForm, setShowForm] = useState(1);

//   const socials = [
//     {
//       site: <FaLinkedinIn size="20" />,
//       url: "https://linkedin.com/company/recruitmenthub365",
//     },
//     {
//       site: <FaInstagram size="20" />,
//       url: "https://instagram.com/recruitmenthub365",
//     },
//     {
//       site: <FaTwitter size="20" />,
//       url: "https://twitter.com/recruitmenthub365",
//     },
//   ];

//   const handleSetShowForm = (value) => {
//     setShowForm(value);
//   };

//   return (
//     <div className="bg-[#000000] text-white relative py-24 z-10">
//       {/* Background image overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('/Home2.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-20 pb-10 px-10 max-w-6xl mx-auto">
//         <Zoom cascade damping={0.2} duration={800} triggerOnce>
//           <h3 className="font-bold font-poppins text-lg py-12 text-[#25caac]">
//             CONTACT US
//           </h3>
//           <h1 className="font-bold font-raleway text-5xl mb-6">
//             Get in touch with us and get started
//           </h1>
//         </Zoom>

//         <Fade delay={800} duration={1000} triggerOnce>
//           <p className="font-poppins text-md py-5 max-w-3xl leading-relaxed">
//             At Recruitment Hub 365, we specialize in providing tailored IT staffing solutions to help your business thrive.
//           </p>
//           <p className="font-poppins text-md max-w-3xl leading-relaxed">
//             Whether you re hiring developers, engineers, or consultants — we offer the right match.
//           </p>
//         </Fade>

//         <Slide direction="right" delay={1800} duration={700} triggerOnce>
//           <button
//             className="mt-8 py-3 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-white rounded-full"
//             onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
//           >
//             LETS CONNECT
//           </button>
//         </Slide>
//       </div>

//       {/* Contact Info + Form Section */}
//       <div className="flex lg:flex-row flex-col justify-between px-10 py-16 z-20 relative max-w-6xl mx-auto space-x-8">
//         {/* Left Column: Address, Map & Socials */}
//         <div className="space-y-8 lg:w-1/3 w-full">
//           <ul className="space-y-4 text-sm md:text-base text-white">
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-[#35e985] mt-1.5" />
//               <address className="not-italic leading-snug">
//                 Pentagon Tower, Lane No. 1,<br />
//                 Near Cummins College, Karvenagar,<br />
//                 Pune, MH 411052, India
//               </address>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-[#35e985]" />
//               <a
//                 href="tel:+917908837683"
//                 className="hover:text-green-400 transition"
//               >
//                 +91 7908837683
//               </a>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-[#35e985]" />
//               <a
//                 href="mailto:contact@recruitmenthub365.com"
//                 className="hover:text-green-400 transition"
//               >
//                 contact@recruitmenthub365.com
//               </a>
//             </li>
//           </ul>

//           {/* Map */}
//           <div className="rounded-lg overflow-hidden shadow-lg border border-[#35e985]">
//             <iframe
//               title="Recruitment Hub 365 Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.732357103784!2d73.81852837515136!3d18.54205568255898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be6a0d65cc9d%3A0x7b8cb0d5d67cc681!2sPentagon%20Tower%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1717737481272!5m2!1sen!2sin"
//               className="w-full h-[300px]"
//               loading="lazy"
//               allowFullScreen=""
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Social Icons */}
//           <div className="mt-6">
//             <h4 className="font-semibold text-white mb-2">Follow us:</h4>
//             <ul className="flex gap-4">
//               {socials.map((social, index) => (
//                 <li key={index}>
//                   <a
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#35e985] hover:text-white transition text-lg"
//                   >
//                     {social.site}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right Column: Buttons + Dynamic Form */}
//         <div className="md:w-2/3 w-full">
//           <Slide direction="up" cascade damping={0.3} duration={600} triggerOnce>
//             <div className="flex md:flex-row flex-col md:space-x-3 mb-10">
//               {[1, 2, 3].map((val) => (
//                 <CustomButton
//                   key={val}
//                   text={
//                     val === 1
//                       ? "CONTACT US"
//                       : val === 2
//                       ? "FIND TALENT"
//                       : "REGISTER NOW"
//                   }
//                   link={""}
//                   value={val}
//                   handleSetShowForm={handleSetShowForm}
//                   style={`py-4 my-2 px-12 font-bold rounded-lg transition duration-300 ${
//                     showForm === val
//                       ? "bg-gradient-to-r from-[#36eb82] to-[#27cea6]"
//                       : "bg-gradient-to-r from-[#06221d] to-[#06221d] hover:from-[#36eb82] hover:to-[#27cea6]"
//                   }`}
//                 />
//               ))}
//             </div>
//           </Slide>

//           {/* Render selected form */}
//           <Fade cascade duration={600} damping={0.3} triggerOnce>
//             <div className="flex flex-col w-full">
//               {showForm === 1 && <ContactForm />}
//               {showForm === 2 && <FindTalentForm />}
//               {showForm === 3 && <RegisterForm />}
//             </div>
//           </Fade>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import { useState } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import CustomButton from "../Common/CustomButton";
import ContactForm from "../Components/ContactForm";
import FindTalentForm from "../Common/FindTalentForm";
import RegisterForm from "../Common/RegisterForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [showForm, setShowForm] = useState(1);

  const socials = [
    {
      site: <FaLinkedinIn size="20" />,
      url: "https://linkedin.com/company/recruitmenthub365",
    },
    {
      site: <FaInstagram size="20" />,
      url: "https://instagram.com/recruitmenthub365",
    },
    {
      site: <FaTwitter size="20" />,
      url: "https://twitter.com/recruitmenthub365",
    },
  ];

  const handleSetShowForm = (value) => {
    setShowForm(value);
  };

  return (
    <div className="bg-[#000000] text-white relative py-24 z-10">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-20 pb-10 px-10 max-w-6xl mx-auto">
        <Zoom cascade damping={0.2} duration={800} triggerOnce>
          <h3 className="font-bold font-poppins text-lg py-12 text-[#25caac]">
            CONTACT US
          </h3>
          <h1 className="font-bold font-raleway text-5xl mb-6">
            Get in touch with us and get started
          </h1>
        </Zoom>

        <Fade delay={800} duration={1000} triggerOnce>
          <p className="font-poppins text-md py-5 max-w-3xl leading-relaxed">
            At Recruitment Hub 365, we specialize in providing tailored IT staffing solutions to help your business thrive.
          </p>
          <p className="font-poppins text-md max-w-3xl leading-relaxed">
            Whether you re hiring developers, engineers, or consultants  we offer the right match.
          </p>
        </Fade>

        <Slide direction="right" delay={1800} duration={700} triggerOnce>
          <button
            className="mt-8 py-3 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-white rounded-full"
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            LETS CONNECT
          </button>
        </Slide>
      </div>

      {/* Contact Info + Form Section */}
      <div className="flex lg:flex-row flex-col justify-between px-10 py-16 z-20 relative max-w-6xl mx-auto space-x-8">
        {/* Left Column: Address, Map & Socials */}
        <div className="space-y-8 lg:w-1/3 w-full">
          <ul className="space-y-4 text-sm md:text-base text-white">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#35e985] mt-1.5" />
              <address className="not-italic leading-snug">
                Pentagon Tower, Lane No. 1,<br />
                Near Cummins College, Karvenagar,<br />
                Pune, MH 411052, India
              </address>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#35e985]" />
              <a
                href="tel:+917908837683"
                className="hover:text-green-400 transition"
              >
                +91 7908837683
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#35e985]" />
              <a
                href="mailto:contact@recruitmenthub365.com"
                className="hover:text-green-400 transition"
              >
                contact@recruitmenthub365.com
              </a>
            </li>
          </ul>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-[#35e985]">
            <iframe
              title="Recruitment Hub 365 Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.732357103784!2d73.81852837515136!3d18.54205568255898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be6a0d65cc9d%3A0x7b8cb0d5d67cc681!2sPentagon%20Tower%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1717737481272!5m2!1sen!2sin"
              className="w-full h-[300px]"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <h4 className="font-semibold text-white mb-2">Follow us:</h4>
            <ul className="flex gap-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#35e985] hover:text-white transition text-lg"
                  >
                    {social.site}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Buttons + Dynamic Form */}

     {/* Right Column: Buttons + Dynamic Form */}
<div id="contact-team" className="md:w-2/3 w-full">
  <Slide direction="up" cascade damping={0.3} duration={600} triggerOnce>
    <div className="flex md:flex-row flex-col md:space-x-3 mb-10">
      {[1, 2, 3].map((val) => (
        <CustomButton
          key={val}
          text={
            val === 1
              ? "CONTACT US"
              : val === 2
              ? "FIND TALENT"
              : "REGISTER NOW"
          }
          link={""}
          value={val}
          handleSetShowForm={handleSetShowForm}
          style={`py-4 my-2 px-12 font-bold rounded-lg transition duration-300 ${
            showForm === val
              ? "bg-gradient-to-r from-[#36eb82] to-[#27cea6]"
              : "bg-gradient-to-r from-[#06221d] to-[#06221d] hover:from-[#36eb82] hover:to-[#27cea6]"
          }`}
        />
      ))}
    </div>
  </Slide>

  {/* Render selected form */}
  <Fade cascade duration={600} damping={0.3} triggerOnce>
    <div className="flex flex-col w-full">
      {showForm === 1 && <ContactForm />}
      {showForm === 2 && <FindTalentForm />}
      {showForm === 3 && <RegisterForm />}
    </div>
  </Fade>
</div>



      </div>
    </div>
  );
};

export default Contact;
