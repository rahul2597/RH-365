// import CustomButton from "./CustomButton";
// import CustomInput from "./CustomInput";
// import CustomTextArea from "./CustomTextArea";
// import CustomFileUpload from "./CustomFileUpload";
// import { useState } from "react";

// const RegisterForm = () => {
//   const [fileName, setFileName] = useState("");
//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between space-x-2 w-full">
//         <CustomInput
//           placeholder={"First Name"}
//           type={"text"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}

//         />
//         <CustomInput
//           placeholder={"Last Name"}
//           type={"text"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}
//         />
//       </div>
//       <div className="flex items-center justify-between space-x-2 w-full py-4">
//         <CustomInput
//           placeholder={"Email"}
//           type={"email"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}

//         />
//         <CustomInput
//           placeholder={"Phone"}
//           type={"tel"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}
//         />
//       </div>
//       <div className="flex items-center justify-between space-x-2 w-full">
//         <CustomInput
//           placeholder={"Town/City"}
//           type={"text"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}
//         />
//         <CustomInput
//           placeholder={"Country"}
//           type={"text"}
//           style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"}
//         />
//       </div>
//       <CustomInput
//         placeholder={"LinkedIn Profile URL"}
//         type={"text"}
//         style={"w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none my-4"}
//       />
//       <CustomFileUpload fileName={fileName} setFileName={setFileName} />
//       <div className="flex flex-col w-full py-4">
//         <CustomTextArea style={'w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none'} placeholder={'Your Key Skills'} rows={'1'} />
//         <p className="text-red-900 text-xs font-poppins">Example: `Managenet`, `Social Media`</p>
//       </div>
//       <CustomTextArea style={'w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none mb-4'} placeholder={'Tell us About Yourself'} rows={'4'} />

//       <CustomButton text={'SUBMIT'} style={'my-4 py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600'} />

//     </div>
//   );
// };

// export default RegisterForm;



import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomFileUpload from "./CustomFileUpload";
import CustomTextArea from "./CustomTextArea";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedIn: "",
    skills: "",
    about: "",
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Form Submitted:", { ...formData, fileName });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center justify-between space-x-2 w-full">
        <CustomInput
          placeholder="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
        <CustomInput
          placeholder="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 w-full py-4">
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
      <div className="flex items-center justify-between space-x-2 w-full">
        <CustomInput
          placeholder="Town/City"
          type="text"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
        <CustomInput
          placeholder="Country"
          type="text"
          value={formData.country}
          onChange={(e) => handleChange("country", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
      </div>
      <CustomInput
        placeholder="LinkedIn Profile URL"
        type="text"
        value={formData.linkedIn}
        onChange={(e) => handleChange("linkedIn", e.target.value)}
        style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none my-4"
      />
      <CustomFileUpload fileName={fileName} setFileName={setFileName} />
      <div className="flex flex-col w-full py-4">
        <CustomTextArea
          placeholder="Your Key Skills"
          rows="1"
          value={formData.skills}
          onChange={(e) => handleChange("skills", e.target.value)}
          style="w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none"
        />
        <p className="text-red-900 text-xs font-poppins">
          Example: `Management`, `Social Media`
        </p>
      </div>
      <CustomTextArea
        placeholder="Tell us About Yourself"
        rows="4"
        value={formData.about}
        onChange={(e) => handleChange("about", e.target.value)}
        style="w-full bg-[#06221d] p-4 rounded font-poppins text-lg focus:outline-none mb-4"
      />
      <CustomButton
        text="SUBMIT"
        style="my-4 py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600"
      />
    </form>
  );
};

export default RegisterForm;
