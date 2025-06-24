/* eslint-disable react/prop-types */
import { FaCloudUploadAlt } from "react-icons/fa";
const CustomFileUpload = ({fileName, setFileName}) => {
  return (
    <div className="border-2 border-dashed border-blue-400  
      rounded-lg p-4 bg-blue-50 text-center hover:cursor-pointer hover:bg-blue-100 transition">
      <label 
        htmlFor={`file-upload-${fileName}`}
        className="flex flex-col items-center cursor-pointer"
      >
        <FaCloudUploadAlt 
          className="text-4xl text-blue-600"
        />
        <span className="text-blue-600 font-medium"> 
          {fileName ? fileName.name || fileName : "Choose File"}
        </span>
      </label>
      <input 
        id={`file-upload-${fileName}`}
        type="file" 
        className="hidden" 
        onChange={setFileName}/>
    </div>
  )
}

export default CustomFileUpload