import Slider from "react-slick";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Avatar } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCarousel = ({ feedbacks }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 md:px-20 py-10">
      <Slider {...settings}>
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#051e1a] to-[#000000] text-white p-6 rounded-xl shadow-xl max-w-xl mx-auto h-[340px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <Avatar
                src={item.img}
                alt={item.name}
                sx={{ width: 60, height: 60 }}
              />
              <div className="flex space-x-1 text-yellow-400 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
            </div>

            <p className="py-4 text-sm leading-relaxed line-clamp-5">
              {item.feedback}
            </p>

            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-gray-300">{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;

FeedbackCarousel.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      feedback: PropTypes.string.isRequired,
    })
  ).isRequired,
};
