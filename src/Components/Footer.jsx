import { Fade } from "react-awesome-reveal";
import { FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0c1f1b] text-white pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Overview */}
        <Fade direction="up" triggerOnce>
          <div>
            <h3 className="text-2xl font-bold text-[#35e985] mb-4">Recruitment Hub 365</h3>
            <p className="text-gray-400 text-sm">
              Empowering IT companies and professionals through innovative hiring, consulting, and staffing solutions.
            </p>
          </div>
        </Fade>

        {/* Important Page Links */}
        <Fade direction="up" delay={100} triggerOnce>
          <div>
            <h4 className="text-xl font-semibold text-[#35e985] mb-4">Important Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-[#35e985] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#35e985] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#35e985] transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#35e985] transition">Contact</Link></li>

            </ul>
          </div>
        </Fade>

        {/* Contact Info */}
        <Fade direction="up" delay={200} triggerOnce>
          <div>
            <h4 className="text-xl font-semibold text-[#35e985] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#35e985] mt-1" />
                Pentagon Tower, Lane No. 1, near Cummins College, Karvenagar, Pune, MH 411052
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#35e985]" />
                +91 7908837683
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#35e985]" />
                contact@recruitmenthub365.com
              </li>
            </ul>
          </div>
        </Fade>

        {/* Social Media & CEO */}
        <Fade direction="up" delay={300} triggerOnce>
          <div>
            <h4 className="text-xl font-semibold text-[#35e985] mb-4">Connect With Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-[#35e985]" />
                <a
                  href="https://www.linkedin.com/company/recruitment-hub-365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#35e985] transition"
                >
                  Company LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserTie className="text-[#35e985]" />
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-yadav-4432a423b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#35e985] transition"
                >
                  CEO: Rohit Kumar Yadav
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <Fade triggerOnce delay={400}>
          &copy; {new Date().getFullYear()} Recruitment Hub 365. All rights reserved.
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
