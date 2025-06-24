import CustomInput from './CustomInput'
import CustomFileUpload from './CustomFileUpload'
import CustomTextArea from './CustomTextArea'
import CustomButton from './CustomButton'
import { useState } from 'react'
import { handleFileUpload, handleChange, handleSubmit } from '../Utils/handleFile'

const CustomJobApplyForm = () => {
    const [jobApplication, setJobApplication] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
    coverLetter: null,
    additionalInfo: '',
  });

  const resetForm = () => {
    setJobApplication({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      portfolio: '',
      resume: null,
      coverLetter: null,
      additionalInfo: '',
    });
  }

  return (
    <form className='w-full md:mr-0 mr-8' onSubmit={(e) => handleSubmit(e, jobApplication, resetForm)}>
        <h1 className='font-semibold text-2xl'>Apply For the Job:</h1>
        <CustomInput
            placeholder={"First Name"}
            type={"text"}
            name={"firstName"}
            style={
            "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            value={jobApplication.firstName}
            onChange={(e) => handleChange(e, setJobApplication)}
        />
        <CustomInput
            placeholder={"Last Name"}
            type={"text"}
            name={"lastName"}
            style={
            "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            value={jobApplication.lastName}
            onChange={(e) => handleChange(e, setJobApplication)}
        />
        <CustomInput
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            style={
            "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            value={jobApplication.email}
            onChange={(e) => handleChange(e, setJobApplication)}
        />
        <CustomInput
            placeholder={"Phone"}
            type={"tel"}
            name={"phone"}
            style={
            "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            value={jobApplication.phone}
            onChange={(e) => handleChange(e, setJobApplication)}
        />
        <div className='flex flex-col gap-4'>
            <CustomFileUpload 
                fileName={jobApplication.resume} 
                setFileName={(e)=>handleFileUpload(e, 'resume', setJobApplication)} 
            />
            <CustomFileUpload 
                fileName={jobApplication.coverLetter} 
                setFileName={(e)=>handleFileUpload(e, 'coverLetter', setJobApplication)} 
            />
        </div>

        <CustomInput 
            placeholder={"PortFolio / LinkedIn Link"}
            type={"text"}
            name={"portfolio"}
            style={
            "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            } 
            value={jobApplication.portfolio}
            onChange={(e) => handleChange(e, setJobApplication)}
        />

        <CustomTextArea 
            style={'w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none'} placeholder={'Anyting We Should Know About You'} 
            rows={'4'}
            name={'additionalInfo'}
            value={jobApplication.additionalInfo}
            onChange={(e) => handleChange(e, setJobApplication)}
        />

        <CustomButton text={'Apply'} style={'w-full my-4 py-3 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600'} />
    </form>
  )
}

export default CustomJobApplyForm