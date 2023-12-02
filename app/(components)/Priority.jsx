import React from "react";
import { FaFire } from "react-icons/fa";
const Priority = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <div>
        <FaFire
          className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-400"}`}
        />
      </div>
      <div>
        <FaFire
          className={`pr-1 ${priority > 1 ? "text-red-400" : "text-slate-400"}`}
        />
      </div>
      <div>
        <FaFire
          className={`pr-1 ${priority > 2 ? "text-red-400" : "text-slate-400"}`}
        />
      </div>
      <div>
        <FaFire
          className={`pr-1 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
        />
      </div>
      <div>
        <FaFire
          className={`pr-1 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
        />
      </div>
    </div>
  );
};

export default Priority;
