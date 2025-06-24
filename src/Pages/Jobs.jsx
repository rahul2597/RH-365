// import { useState, useEffect } from "react";
// import CustomCard from "../Common/CustomCard";
// import CustomHeroSection from "../Common/CustomHeroSection";
// import { jobData } from "../Data/jobData";
// import Filter from "../Components/Filter";

// const Jobs = () => {
//   const [favourite, setFavourite] = useState({});
//   const [searchValue, setSearchValue] = useState("");
//   const [selectValues, setSelectValues] = useState({
//     jobTitle: "",
//     jobType: "",
//     location: "",
//     experience: "",
//     remote: "",
//   });

//   const [filteredJobs, setFilteredJobs] = useState(jobData);

//   const handleAddToFav = (id) => {
//     setFavourite((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   // Filter jobs based on current state
//   useEffect(() => {
//     const filterJobs = () => {
//       const filtered = jobData.filter((job) => {
//         // Convert search terms to lowercase for case-insensitive comparison
//         const searchTerm = searchValue.toLowerCase();
//         const jobTitle = job.jobTitle?.toLowerCase() || "";
//         const technologies = job.technologies.map((tech) => tech.toLowerCase()).join(",");
//         const description = job.description?.toLowerCase() || "";

//         // Check if job matches search term
//         const matchesSearch = 
//           !searchValue || 
//           jobTitle.includes(searchTerm) || 
//           technologies.includes(searchTerm) || 
//           description.includes(searchTerm);

//         // Check if job matches selected filters
//         const matchesJobTitle = !selectValues.jobTitle || job.jobTitle === selectValues.jobTitle;
//         const matchesJobType = !selectValues.jobType || job.jobType.includes(selectValues.jobType);
//         const matchesLocation = !selectValues.location || job.location === selectValues.location;
//         const matchesExperience = !selectValues.experience || job.experience === selectValues.experience;
//         const matchesRemote = !selectValues.remote || (
//           selectValues.remote === "Remote Only" ? job.jobType.includes("Remote") :
//           selectValues.remote === "On-Site" ? !job.jobType.includes("Remote") :
//           selectValues.remote === "Hybrid" ? job.jobType.includes("Hybrid") : true
//         );

//         // Return true only if all conditions are met
//         return (
//           matchesSearch &&
//           matchesJobTitle &&
//           matchesJobType &&
//           matchesLocation &&
//           matchesExperience &&
//           matchesRemote
//         );
//       });

//       setFilteredJobs(filtered);
//     };

//     filterJobs();
//   }, [searchValue, selectValues]);

//   return (
//     <div className="bg-[#000000] text-white relative py-24 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('/Home2.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
//       </div>
//       <CustomHeroSection
//         mainStyle={"pb-10"}
//         subheading={"JOB BOARD"}
//         subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
//         heading={"Browse our jobs"}
//         headingStyle={"font-bold font-raleway text-5xl"}
//         textPara1={
//           "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
//         }
//         textParaStyle={"font-poppins text-md py-5"}
//         textPara2={""}
//         buttonText={"Learn More"}
//         buttonStyle={
//           "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
//         }
//         img={"/Home2.jpg"}
//         imgStyle={"absolute inset-0 bg-cover bg-center"}
//         maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
//       />

//       <Filter
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         selectValues={selectValues}
//         setSelectValues={setSelectValues}
//       />

//       <div className="flex flex-wrap gap-3 items-center justify-center relative z-10 px-10">
//         {filteredJobs.map((job, index) => (
//           <CustomCard
//             key={index}
//             isJobCard={"jobCard"}
//             item={job}
//             favourite={favourite[job.id]}
//             jobAddToFav={() => handleAddToFav(job.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;



// import { useState, useEffect } from "react";
// import CustomCard from "../Common/CustomCard";
// import CustomHeroSection from "../Common/CustomHeroSection";
// import { jobData } from "../Data/jobData";
// import Filter from "../Components/Filter";

// const Jobs = () => {
//   const [favourite, setFavourite] = useState({});
//   const [searchValue, setSearchValue] = useState("");
//   const [selectValues, setSelectValues] = useState({
//     jobTitle: "",
//     jobType: "",
//     location: "",
//     experience: "",
//     remote: "",
//   });

//   const [filteredJobs, setFilteredJobs] = useState(jobData);

//   const handleAddToFav = (id) => {
//     setFavourite((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   useEffect(() => {
//     const filterJobs = () => {
//       const filtered = jobData.filter((job) => {
//         const searchTerm = searchValue.toLowerCase();
//         const jobTitle = job.jobTitle?.toLowerCase() || "";
//         const technologies = job.technologies.map((tech) => tech.toLowerCase()).join(",");
//         const description = job.description?.toLowerCase() || "";

//         const matchesSearch =
//           !searchValue ||
//           jobTitle.includes(searchTerm) ||
//           technologies.includes(searchTerm) ||
//           description.includes(searchTerm);

//         const matchesJobTitle = !selectValues.jobTitle || job.jobTitle === selectValues.jobTitle;
//         const matchesJobType = !selectValues.jobType || job.jobType.includes(selectValues.jobType);
//         const matchesLocation = !selectValues.location || job.location === selectValues.location;
//         const matchesExperience = !selectValues.experience || job.experience === selectValues.experience;
//         const matchesRemote =
//           !selectValues.remote ||
//           (selectValues.remote === "Remote Only"
//             ? job.jobType.includes("Remote")
//             : selectValues.remote === "On-Site"
//             ? !job.jobType.includes("Remote")
//             : selectValues.remote === "Hybrid"
//             ? job.jobType.includes("Hybrid")
//             : true);

//         return (
//           matchesSearch &&
//           matchesJobTitle &&
//           matchesJobType &&
//           matchesLocation &&
//           matchesExperience &&
//           matchesRemote
//         );
//       });

//       setFilteredJobs(filtered);
//     };

//     filterJobs();
//   }, [searchValue, selectValues]);

//   return (
//     <div className="bg-[#000000] text-white relative py-24 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('/Home2.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
//       </div>

//       <CustomHeroSection
//         mainStyle={"pb-10"}
//         subheading={"JOB BOARD"}
//         subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
//         heading={"Browse our jobs"}
//         headingStyle={"font-bold font-raleway text-5xl"}
//         textPara1={
//           "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
//         }
//         textParaStyle={"font-poppins text-md py-5"}
//         textPara2={""}
//         buttonText={"Learn More"}
//         buttonStyle={
//           "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
//         }
//         img={"/Home2.jpg"}
//         imgStyle={"absolute inset-0 bg-cover bg-center"}
//         maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
//       />

//       <Filter
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         selectValues={selectValues}
//         setSelectValues={setSelectValues}
//       />

//       {/* Responsive Grid Container for Cards */}
//       <div className="relative z-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredJobs.map((job, index) => (
//           <CustomCard
//             key={index}
//             isJobCard={"jobCard"}
//             item={job}
//             favourite={favourite[job.id]}
//             jobAddToFav={() => handleAddToFav(job.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomCard from "../Common/CustomCard";
import CustomHeroSection from "../Common/CustomHeroSection";
import { jobData } from "../Data/jobData";
import Filter from "../Components/Filter";
import { Fade, Zoom } from "react-awesome-reveal";

const Jobs = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || "";

  const [favourite, setFavourite] = useState({});
  const [searchValue, setSearchValue] = useState(initialQuery);
  const [selectValues, setSelectValues] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    experience: "",
    remote: "",
  });
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleAddToFav = (id) => {
    setFavourite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const filterJobs = () => {
      const searchTerm = searchValue.toLowerCase();

      const filtered = jobData.filter((job) => {
        const jobTitle = job.jobTitle?.toLowerCase() || "";
        const technologies = job.technologies.map((tech) => tech.toLowerCase()).join(",");
        const description = job.description?.toLowerCase() || "";

        const matchesSearch =
          !searchValue ||
          jobTitle.includes(searchTerm) ||
          technologies.includes(searchTerm) ||
          description.includes(searchTerm);

        const matchesJobTitle = !selectValues.jobTitle || job.jobTitle === selectValues.jobTitle;
        const matchesJobType = !selectValues.jobType || job.jobType.includes(selectValues.jobType);
        const matchesLocation = !selectValues.location || job.location === selectValues.location;
        const matchesExperience = !selectValues.experience || job.experience === selectValues.experience;
        const matchesRemote =
          !selectValues.remote ||
          (selectValues.remote === "Remote Only"
            ? job.jobType.includes("Remote")
            : selectValues.remote === "On-Site"
            ? !job.jobType.includes("Remote")
            : selectValues.remote === "Hybrid"
            ? job.jobType.includes("Hybrid")
            : true);

        return (
          matchesSearch &&
          matchesJobTitle &&
          matchesJobType &&
          matchesLocation &&
          matchesExperience &&
          matchesRemote
        );
      });

      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [searchValue, selectValues]);

  return (
    <div className="bg-[#000000] text-white relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>

      <Zoom triggerOnce>
        <CustomHeroSection
          mainStyle={"pb-10"}
          subheading={"JOB BOARD"}
          subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
          heading={"Explore Top Tech Opportunities"}
          headingStyle={"font-bold font-raleway text-5xl"}
          textPara1={"Curated job listings from top IT companies. Roles include DevOps, Full Stack, Cloud & more."}
          textParaStyle={"font-poppins text-md py-5"}
          textPara2={"Use smart filters to find positions by skills, experience, or work model."}
          buttonText={"Learn More"}
          buttonStyle={"py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"}
          img={"/Home2.jpg"}
          imgStyle={"absolute inset-0 bg-cover bg-center"}
          maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
        />
      </Zoom>

      <Fade direction="up" triggerOnce>
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectValues={selectValues}
          setSelectValues={setSelectValues}
        />
      </Fade>

      <div className="relative z-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Fade
              key={index}
              direction="up"
              delay={index * 100}
              cascade
              damping={0.1}
              triggerOnce
            >
              <CustomCard
                isJobCard={"jobCard"}
                item={job}
                favourite={favourite[job.id]}
                jobAddToFav={() => handleAddToFav(job.id)}
              />
            </Fade>
          ))
        ) : (
          <Fade triggerOnce>
            <div className="col-span-full text-center py-10 text-gray-300">
              No matching jobs found.
              <br />
              <span className="block mt-2">
                Submit your resume — our team will get back to you!
              </span>
              <button className="mt-4 px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 text-white">
                Submit Resume
              </button>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Jobs;
