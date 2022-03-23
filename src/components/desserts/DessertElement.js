import classes from "./DessertElement.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DessertElement() {
  const dummyData = [
    {
      name: "no bake cheesecake",
      picture:
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/no-bake-cheesecake-4.jpg",
      recipe: "https://sallysbakingaddiction.com/no-bake-cheesecake/",
    },
  ];
  return (
    <div className="DessertElement">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={dummyData[0].picture} />
        <Card.Body>
          <Card.Title>{dummyData[0].name}</Card.Title>
          <a href={dummyData[0].recipe} target="_blank">
            <Button>Go to recipe</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertElement;
