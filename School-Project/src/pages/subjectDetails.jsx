import React, { useEffect, useState } from "react";
import Aya from "../component/pergrafes/aya";
import Defintion from "../component/pergrafes/defintion";
import Options from "../component/pergrafes/Options";
import Parts from "../component/pergrafes/parts";
import Words from "../component/pergrafes/Words";
import data from "../data.json";
import { useParams } from "react-router-dom";

const SubjectDetails = () => {
  let { id } = useParams();
  let res = data.filter((e) => e.id === id);

  // console.log("id");
  // console.log(id);

  // console.log("data");
  // console.log(res);

  return (
    <div className="container page ">
      {res?.map((e) => {
        return (
          <>
            {e.content === "no content" ? (
              (<div className="  text-center d-flex align-items-center justify-content-center"><h1>No content</h1></div>)
            ) : (
              <>
                <h1 className="p-5 text-center ">{e?.name}</h1>
                <div className=" text-center">
                  <Aya dalel={e?.content?.dalel} />
                </div>
                <div className="info  pt-5 gap-5 d-flex flex-wrap  justify-content-center">
                  {e?.content?.words ? <Words words={e?.content?.words} /> : ""}
                  {e?.content?.difind ? (
                    <Defintion difind={e?.content?.difind} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="info  pt-5 gap-5 d-flex flex-wrap  justify-content-center">
                  <Options options={e?.content?.options} />
                </div>
                <div className="info  p-5 gap-5 ">
                  <Parts expline={e?.content?.expline} />
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default SubjectDetails;
