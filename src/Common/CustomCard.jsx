import PropTypes from "prop-types";
import { IoLocation } from "react-icons/io5";
import { FaToolbox, FaWallet, FaHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import CustomButton from "./CustomButton";

const CustomCard = ({ item, isJobCard, jobAddToFav, favourite }) => {
  const {
    jobId,
    jobTitle,
    technologies,
    location,
    jobType,
    salary,
    description,
    time,
    name,
    feedback,
  } = item;

  const isFavourite = favourite ? "text-red-500" : "text-white";

  return (
    <div className="shadow-2xl w-full bg-gradient-to-bl from-[#051e1a] to-[#000000] p-4 font-poppins rounded-md  cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
      
      {isJobCard === "jobCard" && (
        <>
          <div className="flex items-center justify-between py-4">
            <img
              src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
              alt=""
              className="w-16 h-12 rounded-lg"
            />
            <p className="flex items-center gap-2">
              {time}{" "}
              <span onClick={jobAddToFav}>
                <FaHeart
                  className={`${isFavourite} hover:text-red-700 cursor-pointer`}
                />
              </span>
            </p>
          </div>

          <h2 className="font-bold text-xl">{jobTitle}</h2>
          <p className="text-sm">{technologies}</p>
          <p className="py-4 h-36 overflow-hidden">{description}</p>

          <div className="flex items-center space-x-2 py-2">
            <IoLocation className="text-cyan-700" />
            <p>{location?.substring(0, 25)}</p>
          </div>

          <div className="flex items-center space-x-2 py-2">
            <FaToolbox className="text-cyan-700" />
            <p>{jobType}</p>
          </div>

          <div className="flex items-center space-x-2 py-2">
            <FaWallet className="text-cyan-700" />
            <p>{salary}</p>
          </div>

          <hr className="my-1 text-gray-700" />

          <div className="flex gap-x-4 items-center">
            <CustomButton
              text="READ Full JD"
              style="py-2 px-1 text-sm text-center w-1/2 my-4 font-poppins rounded-full bg-[#37ed80] block"
              link={`/apply-job/${jobId}`}
            />
            <CustomButton
              text="Apply"
              style="py-2 px-1 text-sm text-center w-1/2 my-4 font-poppins rounded-full bg-[#37ed80] block"
              link="/jobs"
            />
          </div>
        </>
      )}

      {isJobCard === "feedbackCard" && (
        <div className="p-4 ">
          <div className="flex items-center justify-between">
         <img
  src={item.img}
  alt={item.name}
  className="w-16 h-12 rounded-lg"
/>

            <div className="flex items-center justify-center space-x-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaRegStarHalfStroke className="text-yellow-400" />
            </div>
          </div>
          <p className="py-4">{feedback}</p>
          <p className="font-semibold text-lg pt-6">{name}</p>
        </div>
      )}
      
    </div>
  );
};

CustomCard.propTypes = {
  item: PropTypes.shape({
    jobId: PropTypes.string,
    jobTitle: PropTypes.string,
    technologies: PropTypes.string,
    location: PropTypes.string,
    jobType: PropTypes.string,
    salary: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    name: PropTypes.string,
    feedback: PropTypes.string,
      img: PropTypes.string,
  }).isRequired,
  isJobCard: PropTypes.oneOf(["jobCard", "feedbackCard"]),
  jobAddToFav: PropTypes.func,
  favourite: PropTypes.bool,
};

export default CustomCard;



