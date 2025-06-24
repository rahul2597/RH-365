// import CustomButton from "../Common/CustomButton";
// import CustomInput from "../Common/CustomInput";
// import CustomTextArea from "../Common/CustomTextArea";
// const ContactForm = () => {
//   return (
//     <div className="w-[100%]">
//       <CustomInput
//         placeholder={"Name"}
//         type={"text"}
//         style={
//           "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
//         }
//       />
//       <div className="w-full flex items-center justify-between space-x-8">
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
//       <CustomTextArea style={'w-full h-60 bg-[#06221d] p-4 rounded font-poppins text-lg my-4 focus:outline-none'} placeholder={'message'} rows={'5'} />
//       <CustomButton
//         link={""}
//         text={"SUBMIT"}
//         style={
//           "my-4 py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600"
//         }
//       />
//     </div>
//   );
// };

// export default ContactForm;



import { useState } from "react";
import CustomInput from "../Common/CustomInput";
import CustomTextArea from "../Common/CustomTextArea";
import CustomButton from "../Common/CustomButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CustomInput
        placeholder={"Name"}
        type={"text"}
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        style="my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
      />
      <div className="w-full flex items-center justify-between space-x-8">
        <CustomInput
          placeholder={"Email"}
          type={"email"}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
        <CustomInput
          placeholder={"Phone"}
          type={"tel"}
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          style="w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        />
      </div>
      <CustomTextArea
        placeholder={"Message"}
        rows={"5"}
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        style="w-full h-60 bg-[#06221d] p-4 rounded font-poppins text-lg my-4 focus:outline-none"
      />
      <CustomButton
        text={"SUBMIT"}
        style="my-4 py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600"
      />
    </form>
  );
};

export default ContactForm;
