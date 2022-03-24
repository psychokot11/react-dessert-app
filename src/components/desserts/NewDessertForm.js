import { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./NewDessertForm.css";

function NewDessertForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const recipeInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value.toLowerCase();
    const enteredImage = imageInputRef.current.value;
    const enteredRecipe = recipeInputRef.current.value;

    const newDessertData = {
      name: enteredName,
      image: enteredImage,
      recipe: enteredRecipe,
    };

    // console.log(newDessertData);

    props.onAddNewDessert(newDessertData);
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="Name">Name</label>
                <input type="text" required id="name" ref={nameInputRef} />
              </div>
              <div className="form">
                <label htmlFor="Image">Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
              </div>
              <div className="form">
                <label htmlFor="Label">Recipe</label>
                <input type="url" required id="recipe" ref={recipeInputRef} />
              </div>
              <Button className="formButton">
                <button className="classlessButton">Submit the Recipe</button>
              </Button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewDessertForm;
