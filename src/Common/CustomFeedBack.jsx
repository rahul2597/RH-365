import PropTypes from "prop-types";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";
import { Fade } from "react-awesome-reveal";

const CustomFeedback = ({
  heading,
  text,
  Style,
  BText,
  BStyle,
  link,
  data,
  isJobCard,
}) => {
  return (
    <div className="py-2 relative z-10 px-10">
      <div className={Style}>
        <div>
          <h1 className="font-raleway font-bold text-5xl">{heading}</h1>
          <p className="font-poppins font-light text-lg my-5">{text}</p>
        </div>
        <CustomButton text={BText} style={BStyle} link={link} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
        {data?.slice(0, 4).map((item, index) => (
          <Fade
            key={item.jobId || index}
            direction="left"
            delay={index * 200}   
            cascade={false}
          >
            <CustomCard isJobCard={isJobCard} item={item} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

CustomFeedback.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string,
  Style: PropTypes.string,
  BText: PropTypes.string.isRequired,
  BStyle: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  isJobCard: PropTypes.oneOf(["jobCard", "feedbackCard"]),
};

export default CustomFeedback;
