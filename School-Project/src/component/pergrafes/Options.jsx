import React from "react";

const Options = ({ options }) => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
        width:"60%"
      }}
    >
      <div className="d-flex flex-column align-items-start justify-content-start">
        {options.map((e) => {
          return (
            <>
              <h4 style={{color:"green"}}>{e?.title} : </h4>
              <ul style={{ marginRight: "20px" }}>
                {e?.options?.map((o) => {
                  return <li className="mt-2 ">{o}</li>;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
