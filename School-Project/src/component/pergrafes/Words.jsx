import React from "react";

const Words = ({ words }) => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
      }}
    >
      {words.map((e) => {
        return (
          <div className="d-flex align-content-center ">
            <h4 style={{ marginLeft: "5px", color: "green" }}>{e.word}:</h4>
            <p style={{ fontSize: "20px" }}>{e.maen}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Words;
