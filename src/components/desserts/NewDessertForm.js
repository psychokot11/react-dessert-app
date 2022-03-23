import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./NewDessertForm.css";

function NewDessertForm() {
  return (
    <div className="NewDessertForm">
      <Card>
        <Card.Img
          className="formImg"
          variant="top"
          src="https://sweetcheatsatlanta.com/wp-content/uploads/2014/12/e8bfb0dae7e1d468fc8f1029b922d40f.jpg"
        />
        <Card.Body>
          <Card.Text>
            <form>
              <div className="form">
                <label htmlFor="Name">Name</label>
                <input />
              </div>
              <div className="form">
                <label htmlFor="Image">Image</label>
                <input />
              </div>
              <div className="form">
                <label htmlFor="Label">Recipe</label>
                <input />
              </div>
              <Button className="formButton">Submit the Recipe</Button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewDessertForm;
