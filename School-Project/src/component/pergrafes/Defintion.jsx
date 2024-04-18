import React from "react";

const Defintion = ({ difind }) => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
      }}
    >
      {difind.map((e) => {
        return (
          <div className="d-flex">
            <h5 style={{ marginLeft: "4px",color:"green" }}>{e.title}: </h5>
            <p>{e.difind}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Defintion;
