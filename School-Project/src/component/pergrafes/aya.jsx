import React from "react";

const Aya = ({ dalel }) => {
  return (
    <div
      className="border shadow"
      style={{
        color: "green",
        margin:"auto",
        marginBottom:"10px",
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
        width: "80%",
      }}
    >
      <h4>{dalel}</h4>
    </div>
  );
};

export default Aya;
