import React from "react";

const FlexBox = ({ title, text }) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-5">
        <h2 className="text-2xl  font-bold">{title}</h2>
        <p className="height-3 text-md">{text}</p>
      </div>
    </div>
  );
};

export default FlexBox;
