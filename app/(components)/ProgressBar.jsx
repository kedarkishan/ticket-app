import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200  shadow-inner rounded overflow-hidden">
      <div
        style={{ width: `${progress}%` }}
        className=" h-full bg-green-500"
      ></div>
    </div>
  );
};

export default ProgressBar;
