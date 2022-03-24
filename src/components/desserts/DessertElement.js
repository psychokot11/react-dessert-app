import classes from "./DessertElement.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DessertElement(props) {
  return (
    <div className="DessertElement">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <a href={props.recipe} target="_blank">
            <Button className="button">Go to recipe</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertElement;
