// import { Zoom, Fade } from "react-awesome-reveal";

// const highlightCards = [
//   {
//     title: "IT Consultancy",
//     description:
//       "RecruitmentHub365 provides expert-driven IT consultancy services to help businesses plan, scale, and transform through tech talent.",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Staffing Solutions",
//     description:
//       "We specialize in placing top-tier DevOps, Cloud, and Full Stack professionals tailored to your company’s unique needs.",
//     image:
//       "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Candidate Services",
//     description:
//       "For job seekers, we offer resume assistance, curated job matching, and career mentoring for long-term success.",
//     image:
//       "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
//   },
//     {
//     title: "IT Consultancy",
//     description:
//       "RecruitmentHub365 provides expert-driven IT consultancy services to help businesses plan, scale, and transform through tech talent.",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const About = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#051a16] to-[#020b09] text-white py-20 px-6 md:px-20 min-h-screen pt-36">
//       <div className="max-w-6xl mx-auto">
//         <Zoom triggerOnce>
//           <h1 className="text-4xl md:text-5xl font-bold text-center text-[#35e985] mb-8">
//             Services at RecruitmentHub365
//           </h1>
//         </Zoom>

//         <Fade direction="up" triggerOnce>
//           <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
//             RecruitmentHub365 is a premier IT consultancy and staffing company helping companies close critical technology roles with top-tier talent. Our deep industry expertise, fast turnaround, and technical screening make us a trusted partner for tech hiring and career growth.
//           </p>
//         </Fade>

//         {/* Highlight Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {highlightCards.map((card, index) => (
//             <Fade key={index} direction="up" delay={index * 100} triggerOnce>
//               <div className="bg-[#0f2e28] rounded-xl overflow-hidden shadow-lg hover:shadow-[#35e985]/30 transition">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="h-48 w-full object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-[#35e985] mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>

//         {/* Mission Statement */}
//         <Fade direction="up" delay={300} triggerOnce>
//           <div className="mt-20 text-center">
//             <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Mission</h2>
//             <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//               To bridge the gap between businesses and top tech talent by delivering
//               precision-driven recruitment and consultancy services that empower
//               innovation and growth.
//             </p>
//           </div>
//         </Fade>

//         {/* CTA */}
//         <Zoom triggerOnce>
//           <div className="text-center mt-16">
//             <p className="text-xl font-semibold mb-6">
//                Ready to build or join a high-performance tech team?
//             </p>
//             <button className="py-4 px-10 bg-gradient-to-r from-[#27cea8] to-[#37ed80] text-black font-bold rounded-full hover:scale-105 transition">
//               Contact Us
//             </button>
//           </div>
//         </Zoom>
//       </div>
//     </div>
//   );
// };

// export default About;




// import { Zoom, Fade } from "react-awesome-reveal";
// import { highlightCards,specialties } from "../Data/ServicesData";

// const Services = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#051a16] to-[#020b09] text-white py-20 px-6 md:px-20 min-h-screen pt-36">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <Zoom triggerOnce>
//           <h1 className="text-4xl md:text-5xl font-bold text-center text-[#35e985] mb-8">
//             Services at RecruitmentHub365
//           </h1>
//         </Zoom>

//         {/* Introduction */}
//         <Fade direction="up" triggerOnce>
//           <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
//             RecruitmentHub365 is a premier IT consultancy and staffing partner
//             dedicated to connecting businesses with exceptional tech talent.
//             Our deep expertise in recruitment, workforce solutions, and
//             consulting services empowers organizations to innovate and thrive
//             in a competitive market.
//           </p>
//         </Fade>

//         {/* Highlight Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {highlightCards.map((card, index) => (
//             <Fade key={index} direction="up" delay={index * 100} triggerOnce>
//               <div className="bg-[#0f2e28] rounded-xl overflow-hidden shadow-lg hover:shadow-[#35e985]/30 transition">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="h-48 w-full object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-[#35e985] mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>

//         {/* Specialties Section */}
//         <Fade direction="up" delay={300} triggerOnce>
//           <div className="mt-20 max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-[#35e985] mb-6 text-center">
//               Our Specialties
//             </h2>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 list-disc list-inside">
//               {specialties.map((spec, idx) => (
//                 <li key={idx} className="hover:text-[#27cea8] cursor-default transition">
//                   {spec}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Fade>

//         {/* Mission Statement */}
//         <Fade direction="up" delay={400} triggerOnce>
//           <div className="mt-20 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Mission</h2>
//             <p className="text-lg text-gray-300">
//               To bridge the gap between businesses and top tech talent by delivering
//               precision-driven recruitment and consultancy services that empower
//               innovation and growth.
//             </p>
//           </div>
//         </Fade>

//         {/* Call to Action */}
//         <Zoom triggerOnce>
//           <div className="text-center mt-16">
//             <p className="text-xl font-semibold mb-6">
//               Ready to build or join a high-performance tech team?
//             </p>
//             <button className="py-4 px-10 bg-gradient-to-r from-[#27cea8] to-[#37ed80] text-black font-bold rounded-full hover:scale-105 transition">
//               Contact Us
//             </button>
//           </div>
//         </Zoom>
//       </div>
//     </div>
//   );
// };

// export default Services;




import { Zoom, Fade } from "react-awesome-reveal";
import { highlightCards, specialties } from "../Data/ServicesData";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // Change this path if your contact form uses a different route
  };

  return (
    <div className="bg-gradient-to-br from-[#051a16] to-[#020b09] text-white py-20 px-6 md:px-20 min-h-screen pt-36">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Zoom triggerOnce>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#35e985] mb-8">
            Services at RecruitmentHub365
          </h1>
        </Zoom>

        {/* Introduction */}
        <Fade direction="up" triggerOnce>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
            RecruitmentHub365 is a premier IT consultancy and staffing partner
            dedicated to connecting businesses with exceptional tech talent.
            Our deep expertise in recruitment, workforce solutions, and
            consulting services empowers organizations to innovate and thrive
            in a competitive market.
          </p>
        </Fade>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlightCards.map((card, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-[#0f2e28] rounded-xl overflow-hidden shadow-lg hover:shadow-[#35e985]/30 transition">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#35e985] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Specialties Section */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#35e985] mb-6 text-center">
              Our Specialties
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 list-disc list-inside">
              {specialties.map((spec, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#27cea8] cursor-default transition"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        {/* Mission Statement */}
        <Fade direction="up" delay={400} triggerOnce>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To bridge the gap between businesses and top tech talent by delivering
              precision-driven recruitment and consultancy services that empower
              innovation and growth.
            </p>
          </div>
        </Fade>

        {/* Call to Action */}
        <Zoom triggerOnce>
          <div className="text-center mt-16">
            <p className="text-xl font-semibold mb-6">
              Ready to build or join a high-performance tech team?
            </p>
            <button
              onClick={handleContactClick}
              className="py-4 px-10 bg-gradient-to-r from-[#27cea8] to-[#37ed80] text-black font-bold rounded-full hover:scale-105 transition"
            >
              Contact Us
            </button>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Services;
