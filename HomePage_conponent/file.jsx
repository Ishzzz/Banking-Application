import React from "react";

const FileCard = ({ pdflink, title, description, onClick, isClicked }) => {


  const handleonclick = (e) => {
    onClick();
    window.open(pdflink, "_blank");
  };
  return (
    <div
      onClick={handleonclick}
      className={`${
        isClicked ? "bg-[#00243d] text-white" : "bg-gray-50"
      } p-4 rounded shadow-md flex flex-col items-center justify-center hover:bg-[#00243d] hover:text-white transition-colors w-full hover:scale-105 hover:duration-100 duration-50 cursor-pointer`}
    >
      <span className="font-bold text-lg">{title}</span>
      <span className="text-sm">{description}</span>
    </div>
  );
};

export default FileCard;
