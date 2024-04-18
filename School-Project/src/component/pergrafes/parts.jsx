import React from "react";

const Parts = ({ expline }) => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
      }}
    >
      <div className="d-flex flex-column align-content-end justify-content-end gap-2">
        <h3 style={{ color: "green" }}>معلومات عامة : </h3>
        <p>{expline}</p>
      </div>
    </div>
  );
};

export default Parts;
