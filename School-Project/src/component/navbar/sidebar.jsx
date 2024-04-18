import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);
  let navi = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function HandelLiClicked(id) {
    console.log(id);
    navi(`./subjectDetails/${id}`);
    setShow(false);
  }
  function personhandel(params) {
    navi(`./person`);
    setShow(false);
  }
  return (
    <div>
      <button
        style={{
          backgroundColor: "#eec15b",
          padding: "5px 40px",
          border: "none",
          color: "white",
        }}
        onClick={() => navi("./resourses")}
        className="me-2"
      >
        المصادر
      </button>
      <button
        style={{
          backgroundColor: "#eec15b",
          padding: "5px 40px",
          border: "none",
          color: "white",
        }}
        onClick={handleShow}
        className="me-2"
      >
        القائمة
      </button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          style={{
            background:
              " linear-gradient(45deg, rgba(231,157,22,1) 0%, #faf7c2 100%)",
          }}
        >
          <Offcanvas.Title>القائمة</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ padding: "20px" }}>
            <a
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                navi(`./`);
              }}
            >
              الصفحة الرئيسية{" "}
            </a>
            <ul className="subjects">
              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>علوم قران</summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("sieance books");
                      }}
                    >
                      <a>الكتب السماوية</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>الفقه الشافعي</summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("pray");
                      }}
                    >
                      <a>الصلاة</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>الحديث النبوي </summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("aqsa");
                      }}
                    >
                      <a>بيت المقدس</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>فرائض</summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("inheretens");
                      }}
                    >
                      <a>الورثة</a>
                    </li>
                  </ul>
                </details>
              </li>

              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>عقيدة</summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("books");
                      }}
                    >
                      <a>التوحيد </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li style={{ marginTop: "10px" }}>
                <details style={{ color: "black" }}>
                  <summary>اداب الحوار</summary>
                  <ul>
                    <li
                      onClick={() => {
                        HandelLiClicked("discase");
                      }}
                    >
                      <a>الحوار</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#eec15b",
                padding: "5px 40px",
                border: "none",
                color: "white",
              }}
              onClick={() => personhandel("./person")}
              className="me-2"
            >
              القائمين على المشروع
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Sidebar;
