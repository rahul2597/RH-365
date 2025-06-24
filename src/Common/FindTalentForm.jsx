// import CustomInput from "./CustomInput"
// import CustomButton from "./CustomButton"
// import { useState } from "react";
// import CustomFileUpload from "./CustomFileUpload";
// import CustomTextArea from "./CustomTextArea";
// const FindTalentForm = () => {

//   const [fileName, setFileName] = useState("");

//   return (
//     <div className="w-[100%]">
//       <CustomInput
//         placeholder={"Name"}
//         type={"text"}
//         style={
//           "w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
//         }
//       />
//       <div className="w-full flex items-center justify-between space-x-8 py-4">
//         {/* Email Input */}
//         <CustomInput
//           placeholder={"Email"}
//           type={"email"}
//           style={
//             "w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
//           }
//         />
//         {/* Tel Input */}
//         <CustomInput
//           placeholder={"Phone"}
//           type={"tel"}
//           style={
//             "w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
//           }
//         />
//       </div>
//       <div className="flex items-center space-x-2">
//         <p className="font-semibold text-lg font-poppins">Job Description</p>
//         <span className="text-red-700">(Required)</span>
//       </div>
//       <CustomFileUpload fileName={fileName} setFileName={setFileName} />
//       <p className="font-poppins">Max. file size: 100 MB.</p>
//       <CustomTextArea style={'w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none my-4'} placeholder={'Additional Information'} rows={'3'} />

//       <CustomButton text={'SUBMIT'} style={'py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600'} />
//     </div>
//   )
// }

// export default FindTalentForm



import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomFileUpload from "./CustomFileUpload";
import CustomTextArea from "./CustomTextArea";

const FindTalentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Find Talent Form Submitted:", { ...formData, fileName });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CustomInput
        placeholder="Name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
      />
      <div className="w-full flex items-center justify-between space-x-8 py-4">
        <CustomInput
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
        <CustomInput
          placeholder="Phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
      </div>
      <p className="font-semibold text-lg font-poppins mb-2 text-white">
        Job Description <span className="text-red-700">(Required)</span>
      </p>
      <CustomFileUpload fileName={fileName} setFileName={setFileName} />
      <p className="font-poppins text-white">Max. file size: 100 MB.</p>
      <CustomTextArea
        placeholder="Additional Information"
        rows="3"
        value={formData.additionalInfo}
        onChange={(e) => handleChange("additionalInfo", e.target.value)}
        style="w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none my-4"
      />
      <CustomButton
        text="SUBMIT"
        style="py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600"
      />
    </form>
  );
};

export default FindTalentForm;
