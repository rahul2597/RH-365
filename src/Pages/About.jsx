import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import ceo from '../assets/ceo.jpeg'

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // Make sure this route exists in your router
  };

  return (
    <div className="bg-gradient-to-br from-[#051a16] to-[#020b09] text-white py-20 px-6 md:px-20 min-h-screen pt-36">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <Zoom triggerOnce>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#35e985]">
            About RecruitmentHub365
          </h1>
        </Zoom>

        {/* Company Overview */}
        <Fade direction="left" triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Company Overview"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#35e985] mb-4">Company Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Recruitment Hub 365 specializes in delivering comprehensive talent solutions that empower businesses to thrive in today’s dynamic market. We provide IT Consulting, Workforce Solutions, Talent Consulting, Website Development, and end-to-end Recruitment Services. Our core lies in Permanent Staffing, Headhunting, and RPO - ensuring the right match between people and businesses.
              </p>
            </div>
          </div>
        </Fade>

        {/* Our Mission */}
        <Slide direction="right" triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between businesses and exceptional tech talent through
                innovative recruitment solutions that foster business growth and individual
                success. Our mission is driven by passion, precision, and people-first values.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </Slide>

        {/* Our Story */}
        <Slide direction="left" triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://www.groupmgmt.com/media/articulate-import//2019/05/50EmployeeCompanyConsiderations-image.jpg"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2021 and headquartered in Pune, Maharashtra, Recruitment Hub 365 began as a vision to simplify IT hiring. From a humble beginning, we’ve grown into a dynamic force offering scalable workforce solutions, tailored for startups, enterprises, and everything in between.
              </p>
            </div>
          </div>
        </Slide>

        {/* Our Values */}
        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#35e985] mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
              {[
                {
                  title: "Integrity",
                  img: "https://tse1.mm.bing.net/th?id=OIP.adPqL96PupxMqOozcoYEzQHaE-&pid=Api&P=0&h=180",
                },
                {
                  title: "Excellence",
                  img: "https://tse2.mm.bing.net/th?id=OIP.zBP-FNyoeiftJD1PRt9MuAHaEK&pid=Api&P=0&h=180",
                },
                {
                  title: "Customer-Centricity",
                  img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
                },
              ].map((val, i) => (
                <Bounce delay={i * 100} triggerOnce key={val.title}>
                  <div className="bg-[#0f2e28] rounded-lg p-6 text-center shadow hover:shadow-[#35e985]/30 transition">
                    <img
                      src={val.img}
                      alt={val.title}
                      className="w-full h-40 object-cover rounded mb-4"
                    />
                    <h4 className="text-xl font-semibold text-[#35e985]">{val.title}</h4>
                  </div>
                </Bounce>
              ))}
            </div>
          </div>
        </Fade>

        {/* About the CEO */}
        <Slide direction="right" triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={ceo}
              alt="Rohit Kumar Yadav"
              className="rounded-full w-60 h-60 object-cover mx-auto"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#35e985] mb-2">About the CEO</h2>
              <h3 className="text-2xl font-semibold text-white">Rohit Kumar Yadav</h3>
              <p className="text-gray-300 mt-4">
                Rohit Kumar Yadav is the visionary leader behind Recruitment Hub 365. As CEO and Recruitment Head, he is passionate about connecting skilled IT professionals with their dream opportunities and helping companies build world-class tech teams. His leadership has helped Recruitment Hub 365 grow into a reliable recruitment partner.
              </p>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-yadav-4432a423b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#35e985] underline"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </Slide>

        {/* Company Info */}
        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#35e985] mb-4">Company Info</h2>
            <p className="text-gray-300">
              <strong>Location:</strong> Pentagon Tower, Lane No. 1, opposite Raichandani, near Cummins Engineering College, Karvenagar, Pune, Maharashtra 411052<br />
              <strong>Phone:</strong> +91 7908837683<br />
              <strong>Industry:</strong> IT Services and IT Consulting<br />
              <strong>Founded:</strong> 2021
            </p>
          </div>
        </Fade>

        {/* CTA */}
        <Zoom triggerOnce>
          <div className="text-center mt-16">
            <p className="text-xl font-semibold mb-6">
              Ready to grow with the right team?
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

export default About;
