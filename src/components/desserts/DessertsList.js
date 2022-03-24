import DessertElement from "./DessertElement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./DessertsList.css";

function DessertsList(props) {
  return (
    <div className="DessertsList">
      {/* <Container fluid>
        <Row className="row"> */}
      {props.desserts.map((desert) => (
        // <Col className="cardList" md={4}>
        <div>
          <DessertElement
            key={desert.id}
            id={desert.id}
            name={desert.name}
            image={desert.image}
            recipe={desert.recipe}
          />
        </div>
        // </Col>
      ))}
      {/* </Row>
      </Container> */}
    </div>
  );
}

export default DessertsList;
