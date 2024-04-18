import React, { useEffect, useState } from "react";
import booksdata from "../booksdata.json";
const Resourses = () => {
  let bookdata = booksdata;
  console.log(bookdata);
  return (
    <div className=" page d-flex align-items-center  flex-column">
      <div className="title py-5">
        <h2>المصادر والمراجع</h2>
      </div>
      <div className="table container">
        <table className="col-10 my-5 mx-auto text-center">
          <tr className="row ">
            <th className="col-4 p-3">المادة</th>
            <th className="col-4 p-3">اسم الكتاب</th>
            <th className="col-4 p-3">اسم صاحب الكتاب</th>
          </tr>
          {bookdata.map((e) => {
            return (
              <tr className="row ">
                <td className="col-4 p-3">{e.object}</td>
                <td className="col-4 p-3">{e.book}</td>
                <td className="col-4 p-3">{e.person}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Resourses;
