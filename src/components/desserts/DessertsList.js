import DessertElement from "./DessertElement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./DessertsList.css";

function DessertsList() {
  return (
    <div className="DessertsList">
      <Container fluid>
        <Row className="row">
          <Col className="cardList" md={4}>
            <DessertElement />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DessertsList;
