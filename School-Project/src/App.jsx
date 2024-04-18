import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Main from "./pages/main";
import "./App.css";
import Footer from "./component/footer/footer";
import SubjectDetails from "./pages/subjectDetails";
import Resourses from "./pages/resourses";
import Person from "./pages/person";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resourses" element={<Resourses />} />
          <Route path="/subjectDetails/:id" element={<SubjectDetails />} />
          <Route path="/person" element={<Person />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
