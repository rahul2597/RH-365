// import { Fade, Zoom } from "react-awesome-reveal";
// import CustomFeedback from "../Common/CustomFeedBack";
// import CustomHeroSection from "../Common/CustomHeroSection";
// import HomeBlogs from "../Components/Home/HomeBlogs";
// import HomeHeroSection from "../Components/Home/HomeHeroSection";
// import HomeWhatWeOffer from "../Components/Home/HomeWhatWeOffer";
// import CustomSector from "../Common/CustomSector";
// import { jobData } from "../Data/jobData";
// import { feedbackData } from "../Data/feedbackData";
// import "./home.css";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PopupForm from "../Components/QuickCVForm";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const containerRef = useRef(null);
//   const sectorsRef = useRef([]);

//   useGSAP(() => {
//     if (!containerRef.current) return;

//     sectorsRef.current.forEach((sector, index) => {
//       gsap.set(sector, {
//         position: "sticky",
//         top: `${index * 60}px`,
//       });

//       ScrollTrigger.create({
//         trigger: sector,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.to(sector, {
//             scale: 1 - progress * 0.1,
//             duration: 0.5,
//           });
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="bg-black text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#051a16] to-[#020b09] z-0">
//         <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
//       </div>

//       <PopupForm />
//       <HomeHeroSection />

//       <section className="z-10 relative py-20">
//         <Fade direction="up" delay={300} triggerOnce>
//           <HomeWhatWeOffer />
//         </Fade>
//       </section>
//       <CustomHeroSection
//         mainStyle="w-full pb-10 z-10 relative"
//         subheading="WHO WE ARE"
//         subheadingStyle="font-bold text-lg py-16 text-[#25caac]"
//         heading="We are RecruitmentHub365 – The Tech Talent Enablers"
//         headingStyle="font-bold text-4xl md:text-5xl"
//         textPara1="RecruitmentHub365 is a premier IT consultancy known for helping HR professionals close top-tier tech profiles effortlessly. With a proven process of deep technical screening, we ensure only the most qualified candidates reach your interview table."
//         textPara2="Our founder, a tech expert himself, conducts hands-on technical evaluations to guarantee precision hiring. We are not just recruiters; we are IT industry insiders bridging the gap between companies and their future innovators."
//         textParaStyle="text-md py-4"
//         buttonText="Learn More"
//         buttonStyle="py-3 my-10 px-8 font-bold bg-gradient-to-tr from-gray-600 to-[#35e985] hover:text-green-500 hover:from-white hover:to-white rounded-full"
//       />

//       {/* SECTOR STICKY EFFECT */}

//       <div ref={containerRef} className="py-20 z-10 relative">
//         <div className="space-y-32">
//           {[...Array(3)].map((_, index) => (
//             <Zoom  key={index}>
//               <div ref={(el) => (sectorsRef.current[index] = el)} className="flex justify-center">
//                 <CustomSector
//                   subHeading="GET IN TOUCH"
//                   heading="Ready to build a future with us?"
//                   text="Let RecruitmentHub365 help you hire smarter. Submit your vacancy or resume to experience hassle-free IT hiring today."
//                   img="https://media.gettyimages.com/id/1191815038/photo/portrait-of-young-businesswoman.jpg?s=612x612&w=0&k=20&c=C29qWQpxBsHYm7GsQ_cvNEr14gCKh161bxUPosW6SPw="
//                   button1Text="SUBMIT VACANCY"
//                   button1Style="py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
//                   button2Text="SUBMIT RESUME"
//                   button2Style="py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
//                 />
//               </div>
//             </Zoom>
//           ))}
//         </div>
//       </div>







//       {/* JOB MATCH */}
//       <Fade direction="up" triggerOnce>
//         <CustomFeedback
//           heading="Find Your Ideal Tech Role"
//           text="Explore curated opportunities that match your expertise. Every listing is verified through our technical screening process."
//           Style="flex md:flex-row flex-col items-center justify-between"
//           BText="VIEW ALL JOBS"
//           BStyle="py-4 px-10 font-bold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
//           link="/jobs"
//           isJobCard="jobCard"
//           data={jobData}
//         />
//       </Fade>

//       {/* HOW CAN WE HELP YOU */}
//       <CustomHeroSection
//         mainStyle="pb-10 z-10 relative"
//         subheading="HOW CAN WE HELP YOU"
//         subheadingStyle="font-bold text-lg py-16 text-[#25caac]"
//         heading="Turn Your Hiring Goals into Success Stories"
//         headingStyle="font-bold text-4xl md:text-5xl"
//         textPara1="Whether you're scaling your team or looking for your dream job, RecruitmentHub365 makes it happen with unmatched precision and expertise."
//         textPara2="We specialize in end-to-end IT recruitment solutions—from technical screening to final hiring—so you can focus on business, while we handle talent."
//         textParaStyle="text-md pt-2 pb-5"
//         buttonText="GET STARTED"
//         buttonStyle="py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:from-white hover:to-white rounded-full"
//       />

//       {/* FINAL CTA */}
//       <Zoom triggerOnce>
//         <CustomSector
//           subHeading="CONNECT WITH US"
//           heading="Let’s shape the future of IT recruitment together"
//           text="Partner with a brand trusted across the IT consulting world. We bring passion, precision, and performance to every profile."
//           img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//           button1Text="SUBMIT VACANCY"
//           button1Style="py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
//           button2Text="SUBMIT RESUME"
//           button2Style="py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
//         />
//       </Zoom>

//       {/* TESTIMONIALS */}

//       <Fade direction="up" triggerOnce>
//         <CustomFeedback
//           heading="What Clients Say About RecruitmentHub365"
//           text="We’ve built strong bonds by delivering consistently high-quality tech talent."
//           Style="flex md:flex-row flex-col items-center justify-between"
//           BText="LET’S WORK TOGETHER"
//           BStyle="py-4 px-10 font-bold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
//           link="/contact"
//           isJobCard="feedbackCard"
//           data={feedbackData}
//         />
//       </Fade>

//       {/* BLOGS */}
//       <Zoom triggerOnce>
//         <HomeBlogs />
//       </Zoom>
//     </div>
//   );
// };

// export default Home;





import { Fade, Zoom } from "react-awesome-reveal";
import CustomFeedback from "../Common/CustomFeedBack";
import CustomHeroSection from "../Common/CustomHeroSection";
import HomeBlogs from "../Components/Home/HomeBlogs";
import HomeHeroSection from "../Components/Home/HomeHeroSection";
import HomeWhatWeOffer from "../Components/Home/HomeWhatWeOffer";
import CustomSector from "../Common/CustomSector";
import { jobData } from "../Data/jobData";
import { feedbackData } from "../Data/feedbackData";
import "./home.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopupForm from "../Components/QuickCVForm";
import sectorData from "../Data/sectorData";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const sectorsRef = useRef([]);
  const navigate = useNavigate();

  useGSAP(() => {
    if (!containerRef.current) return;

    sectorsRef.current.forEach((sector, index) => {
      gsap.set(sector, {
        position: "sticky",
        top: `${index * 60}px`,
      });

      ScrollTrigger.create({
        trigger: sector,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sector, {
            scale: 1 - progress * 0.1,
            duration: 0.5,
          });
        },
      });
    });
  }, []);

  // const handleNavigation = (text) => {
  //   const lower = text.toLowerCase();
  //   if (lower.includes("hire")) navigate("/hire-talent");
  //   else if (lower.includes("book")) navigate("/contact");
  //   else if (lower.includes("resume")) navigate("/submit-resume");
  //   else if (lower.includes("openings")) navigate("/jobs");
  //   else if (lower.includes("requirement")) navigate("/submit-vacancy");
  //   else if (lower.includes("expert")) navigate("/contact");
  //   else navigate("/contact");
  // };


const handleNavigation = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("hire")) navigate("/hire-talent");
  else if (lower.includes("resume")) navigate("/submit-resume");
  else if (lower.includes("openings")) navigate("/jobs");
  else if (lower.includes("requirement")) navigate("/submit-vacancy");
  else if (
    lower.includes("book") ||
    lower.includes("expert") ||
    lower.includes("call") ||
    lower.includes("connect") ||
    lower.includes("talk")
  ) {
    navigate("/contact", { state: { scrollTo: "contact-team" } }); // ✅ fixed
  } else {
    navigate("/contact");
  }
};



  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#051a16] to-[#020b09] z-0">
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>

      <PopupForm />
      <HomeHeroSection />

      <section className="z-10 relative py-20">
        <Fade direction="up" delay={300} triggerOnce>
          <HomeWhatWeOffer />
        </Fade>
      </section>

      <CustomHeroSection
        mainStyle="w-full pb-10 z-10 relative"
        subheading="WHO WE ARE"
        subheadingStyle="font-bold text-lg py-16 text-[#25caac]"
        heading="We are RecruitmentHub365 – The Tech Talent Enablers"
        headingStyle="font-bold text-4xl md:text-5xl"
        textPara1="RecruitmentHub365 is a premier IT consultancy known for helping HR professionals close top-tier tech profiles effortlessly..."
        textPara2="Our founder, a tech expert himself, conducts hands-on technical evaluations to guarantee precision hiring..."
        textParaStyle="text-md py-4"
        buttonText="Learn More"
        buttonStyle="py-3 my-10 px-8 font-bold bg-gradient-to-tr from-gray-600 to-[#35e985] hover:text-green-500 hover:from-white hover:to-white rounded-full"
      />

      {/* SECTOR STICKY EFFECT */}
      <div ref={containerRef} className="py-20 z-10 relative">
        <div className="space-y-32">
          {sectorData.map((item, index) => (
            <Zoom key={index}>
              <div
                ref={(el) => (sectorsRef.current[index] = el)}
                className="flex justify-center"
              >
                <CustomSector
                  subHeading={item.subHeading}
                  heading={item.heading}
                  text={item.text}
                  img={item.img}
                  button1Text={item.button1Text}
                  button1Style="py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
                  button1Click={() => handleNavigation(item.button1Text)}
                  button2Text={item.button2Text}
                  button2Style="py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
                  button2Click={() => handleNavigation(item.button2Text)}
                />
              </div>
            </Zoom>
          ))}
        </div>
      </div>

      {/* JOB MATCH */}
      <Fade direction="up" triggerOnce>
        <CustomFeedback
          heading="Find Your Ideal Tech Role"
          text="Explore curated opportunities that match your expertise..."
          Style="flex md:flex-row flex-col items-center justify-between"
          BText="VIEW ALL JOBS"
          BStyle="py-4 px-10 font-bold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
          link="/jobs"
          isJobCard="jobCard"
          data={jobData}
        />
      </Fade>

      {/* HOW CAN WE HELP YOU */}
      <CustomHeroSection
        mainStyle="pb-10 z-10 relative"
        subheading="HOW CAN WE HELP YOU"
        subheadingStyle="font-bold text-lg py-16 text-[#25caac]"
        heading="Turn Your Hiring Goals into Success Stories"
        headingStyle="font-bold text-4xl md:text-5xl"
        textPara1="Whether you're scaling your team or looking for your dream job..."
        textPara2="We specialize in end-to-end IT recruitment solutions..."
        textParaStyle="text-md pt-2 pb-5"
        buttonText="GET STARTED"
        buttonStyle="py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:from-white hover:to-white rounded-full"
      />

      {/* FINAL CTA */}
      <Zoom triggerOnce>
        <CustomSector
          subHeading="CONNECT WITH US"
          heading="Let’s shape the future of IT recruitment together"
          text="Partner with a brand trusted across the IT consulting world..."
          img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          button1Text="SUBMIT VACANCY"
          button1Style="py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
          button1Click={() => handleNavigation("SUBMIT VACANCY")}
          button2Text="SUBMIT RESUME"
          button2Style="py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
          button2Click={() => handleNavigation("SUBMIT RESUME")}
        />
      </Zoom>

      {/* TESTIMONIALS */}
      <Fade direction="up" triggerOnce>
        <CustomFeedback
          heading="What Clients Say About RecruitmentHub365"
          text="We’ve built strong bonds by delivering consistently high-quality tech talent."
          Style="flex md:flex-row flex-col items-center justify-between"
          BText="LET’S WORK TOGETHER"
          BStyle="py-4 px-10 font-bold rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
          link="/contact"
          isJobCard="feedbackCard"
          data={feedbackData}
        />
      </Fade>

      {/* BLOGS */}
      <Zoom triggerOnce>
        <HomeBlogs />
      </Zoom>
    </div>
  );
};

export default Home;
