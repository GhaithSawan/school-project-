import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Persondata from "../Persondata.json";
function Mycard() {
  console.log(Persondata);
  return (
    <div className="Mycard d-flex align-items-center justify-content-center flex-wrap gap-5 mb-5">
      {Persondata.map((e) => {
        return (
          <Card
            className="border shadow border-2 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              width: "20rem",
              overflow: "hidden",
            }}
          >
            <div className="CardImg">
              <Card.Img
                variant="top"
                src={e?.img}
                className="col-10 rounded-circle"
                width={"100%"}
              />
            </div>
            <Card.Body className=" d-flex align-items-center justify-content-center text-center flex-column">
              <Card.Title className="my-2">{e.name}</Card.Title>
              <Card.Text className="my-2">
                <h3 className=" d-inline-block">عمله:</h3>
                <h4 className=" d-inline-block mx-2">{e.job}</h4>
              </Card.Text>
              <div className="d-flex gap-2">
                {e.facebook ? (
                  <Button variant="primary" className="my-2">
                    <a href={e?.facebook} style={{ color: "#fff" }}>
                      Facebook
                    </a>
                  </Button>
                ) : (
                  ""
                )}
                {e.instegram ? (
                  <Button variant="primary" className="my-2">
                    <a href={e?.instegram} style={{ color: "#fff" }}>
                      Instgram
                    </a>
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Mycard;
