import React, { act, useState } from "react";

const CardFAQ = ({ title, description }) => {
  const [active, setActive] = useState(false);
  const textActive = "text-primary";
  const textInactive = "text-white";
  return (
    <li className="">
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`${
          active ? "bg-primary" : "bg-primary-50"
        } cursor-pointer flex py-5 pr-5 pl-16 gap-5 justify-between items-center w-full transition-all duration-500`}
      >
        <h3
          className={`${
            !active ? textActive : textInactive
          } text-2xl text-start`}
        >
          {title}
        </h3>
        <h3 className={`${!active ? textActive : textInactive} text-4xl`}>
          {active ? "-" : "+"}
        </h3>
      </button>
      {active && (
        <div className="py-5 pr-5 pl-16 border-x-2 border-b-2 border-primary ">
          {description}
        </div>
      )}
    </li>
  );
};

export default CardFAQ;
