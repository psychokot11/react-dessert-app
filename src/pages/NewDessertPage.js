import NewDessertForm from "../components/desserts/NewDessertForm";
import { useNavigate } from "react-router-dom";

function NewDessertPage() {
  const navigate = useNavigate();

  function handleNewDessert(newDessertData) {
    fetch("https://desserts-api-db.herokuapp.com/desserts", {
      method: "POST",
      body: JSON.stringify(newDessertData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="NewDessertPage">
      <NewDessertForm onAddNewDessert={handleNewDessert} />
    </div>
  );
}

export default NewDessertPage;
