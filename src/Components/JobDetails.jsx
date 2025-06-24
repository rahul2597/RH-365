import { IoLocation } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import CustomJobApplyForm from "../Common/CustomJobApplyForm";
import { useParams } from "react-router-dom";
import { jobData } from "../Data/jobData";
const JobDetails = () => {
    const { id } = useParams();
    console.log('Id',id)
    const job = jobData.find(job=> job.jobId === Number(id))
    console.log(job)
    if(!job){
        return <p>Job Not Found</p>
    }
  return (
    <div className="flex md:flex-row flex-col justify-center w-full space-x-4 bg-[#051f08] text-white relative py-32 md:px-10 px-4 overflow-hidden">
        <div className="md:w-2/3 w-full">
            <h1 className="font-poppins text-3xl font-semibold">{job.jobTitle}</h1>
            <p className="font-poppins py-2 ">{job.technologies.join(', ')}</p>
            <hr className="flex items-center justify-center w-[97%] mt-4" />
            <div className="flex items-center justify-between py-6 px-5">
                <img src={job.jobImg} alt="Company Image" className="w-56 h-32 rounded-md hover:rounded-none border" />
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2 py-2 font-poppins">
                        <IoLocation className="size-4 text-cyan-700" />
                        <p>{job.location}</p>
                    </div>
                    <div className="flex items-center space-x-2 py-2 font-poppins">
                        <FaToolbox className="size-4 text-cyan-700" />
                        <p>{job.jobType}</p>
                    </div>
                    <div className="flex items-center space-x-2 py-2 font-poppins">
                        <FaWallet className="size-4 text-cyan-700" />
                        <p>{job.salary}</p>
                    </div>
                </div>
            </div>
            <p className="py-4 font-poppins"><span className="font-bold">About US:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit nobis ullam soluta, animi sed beatae voluptatibus illo molestiae sequi illum enim autem suscipit nisi earum distinctio aliquid vel repellat non dignissimos at ducimus dolor? Officia totam impedit recusandae velit reiciendis repellendus sint optio suscipit, reprehenderit eos maxime harum consequatur, assumenda necessitatibus eveniet cumque consequuntur a tenetur blanditiis, facere earum ipsam id aliquam? Maiores odio provident consequatur soluta nostrum maxime accusamus! Quam quae voluptatibus provident eaque laborum, fugiat ut voluptate quo necessitatibus suscipit pariatur minima, adipisci quisquam aperiam blanditiis incidunt officiis id dolores magni nam voluptatem earum maiores accusantium. Quia!</p>
            <h3 className="font-raleway font-bold text-2xl py-4">Resposibilities:</h3>
            <ul className="list-disc pl-3">
                {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="font-poppins text-sm">{responsibility}</li>
                ))}  
            </ul>
            <h3 className="font-raleway font-bold text-2xl py-4">Qualification:</h3>
            <ul className="list-disc pl-3">
                {job.qualifications.map((qualification, index) => (
                    <li key={index} className="font-poppins text-sm">{qualification}</li>
                ))}
            </ul>
            <h3 className="font-raleway font-bold text-2xl py-4">Skills:</h3>
            <ul className="list-disc pl-3">
                {job.skills.map((skill, index) => (
                    <li key={index} className="font-poppins text-sm">{skill}</li>
                ))}
            </ul>
            <h3 className="font-raleway font-bold text-2xl py-4">Experience:</h3>
            <ul className="list-disc pl-3">
                {job.experience.map((exp, index) => (
                    <li key={index} className="font-poppins text-sm">{exp}</li>
                ))}
            </ul>
            <p className="font-poppins py-4"><span className="font-semibold">How to Apply:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus, nam corrupti expedita distinctio culpa dolor quam, aliquid, voluptas eius delectus! Deserunt cumque laboriosam quis magni quisquam nihil ab dolor.</p>
            <ol className="list-disc pl-3">
                <li className="font-poppins text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit ad optio maxime, laboriosam excepturi quam sunt tenetur minima voluptatibus!</li>
                <li className="font-poppins text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit ad optio maxime, laboriosam excepturi quam sunt tenetur minima voluptatibus!</li>
                <li className="font-poppins text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit ad optio maxime, laboriosam excepturi quam sunt tenetur minima voluptatibus!</li>
            </ol>
        </div>
        <div className="md:w-1/3 w-full py-10 flex justify-center">
            <CustomJobApplyForm />  
        </div>
    </div>
  )
}

export default JobDetails