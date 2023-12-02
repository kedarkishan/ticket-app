import React from "react";

const StatusDisplay = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "not Started":
        return "bg-green-500";
      case "in progress":
        return "bg-blue-500";
      case "completed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTextColor = (status) => {
    switch (status.toLowerCase()) {
      case "not Started":
        return "text-green-500";
      case "in progress":
        return "text-blue-500";
      case "completed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  return (
    <span className="flex justify-center items-center">
      <span
        className={`w-3 h-3  rounded-full mr-1 ${getStatusColor(status)}`}
      ></span>
      <span className={`${getTextColor(status)}`}>{status.toUpperCase()}</span>
    </span>
  );
};

export default StatusDisplay;
