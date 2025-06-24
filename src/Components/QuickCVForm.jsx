/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomFileUpload from "../Common/CustomFileUpload";
import CustomInput from "../Common/CustomInput";
import CustomTextArea from "../Common/CustomTextArea";
import { handleChange, handleFileUpload, handleSubmit } from "../Utils/handleFile";
import CustomButton from "../Common/CustomButton";

const QuickCVForm = ({ isVisible, onClose }) => {
  const [userData, setUserData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      linkedIn: "",
      keySkills: "",
      about: "",
      resume: null
    }
  );

  const resetForm = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      linkedIn: "",
      keySkills: "",
      about: "",
      resume: null
    })
  }
  if (!isVisible) return null;

  return (
    <div className="inset-0 flex items-center justify-center z-50 w-full bg-opacity-50 py-5 text-white">
      <div className="bg-white shadow-lg md:w-3/5 w-full relative max-h-[80vh] overflow-y-auto">
        <div className="py-5  bg-green-900">
          <button className="absolute top-2 right-5 text-2xl text-gray-500 hover:text-gray-800" onClick={onClose}>×</button>
          <h2 className=" text-2xl font-raleway font-semibold mb-4 text-center">
            Register with us so we can help you find a job
          </h2>
        </div>
        <form className="space-y-4 p-5" onSubmit={(e) => handleSubmit(e, userData, resetForm)}>
          <div className="w-full  flex items-center justify-between space-x-8">
            <CustomInput
              placeholder={"First Name"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
              name={"firstName"}
              value={userData.firstName}
              onChange={(e) => handleChange(e, setUserData)}
            />

            <CustomInput
              placeholder={"Last Name"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
              name={"lastName"}
              value={userData.lastName}
              onChange={(e) => handleChange(e, setUserData)}
            />
          </div>
          <CustomInput
            placeholder={"Personal Email"}
            type={"email"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            name={"email"}
            value={userData.email}
            onChange={(e) => handleChange(e, setUserData)}
          />
          <CustomInput
            placeholder={"Phone Number"}
            type={"tel"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            name={"phone"}
            value={userData.phone}
            onChange={(e) => handleChange(e, setUserData)}
          />
          <div className="w-full flex items-center justify-between space-x-8">
            <CustomInput
              placeholder={"City"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
              name={"city"}
              value={userData.city}
              onChange={(e) => handleChange(e, setUserData)}
            />

            <CustomInput
              placeholder={"Country"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
              name={"country"}
              value={userData.country}
              onChange={(e) => handleChange(e, setUserData)}
            />
          </div>
          <CustomInput
            placeholder={"LinkedIn Profile"}
            type={"text"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
            name={"linkedIn"}
            value={userData.linkedIn}
            onChange={(e) => handleChange(e, setUserData)}
          />
          <CustomFileUpload fileName={userData.resume} setFileName={(e)=>handleFileUpload(e, 'resume', setUserData)} />

          <CustomTextArea 
            style={'w-full bg-[#06221d] py-2 px-4 rounded font-poppins text-lg my-4 focus:outline-none'} 
            placeholder={"Your Key Skills"} 
            rows={'1'}
            name={"keySkills"}
            value={userData.keySkills}
            onChange={(e) => handleChange(e, setUserData)}
          />
          
          <CustomTextArea 
            style={'w-full bg-[#06221d] py-2 px-4 rounded font-poppins text-lg my-4 focus:outline-none'} 
            placeholder={"Tell us About Yourself"} 
            rows={'4'}
            name={"about"}
            value={userData.about}
            onChange={(e) => handleChange(e, setUserData)}
          />

          {/* <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button> */}
          <CustomButton style={'w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition'} text={'Submit'} />
        </form>
      </div>
    </div>
  );
};

export default QuickCVForm;
