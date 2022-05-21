import DessertElement from "./DessertElement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DessertsList.css";

function DessertsList(props) {
  return (
    <div className="DessertsList">
      <Container fluid>
        <Row className="row">
          {props.desserts.map((desert, index) => (
            <Col key={index} className="cardList" md={4}>
              <div>
                <DessertElement
                  name={desert.name}
                  image={desert.image}
                  recipe={desert.recipe}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DessertsList;
