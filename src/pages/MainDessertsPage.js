import DessertsList from "../components/desserts/DessertsList";
import { useState, useEffect } from "react";

function MainDessertsPage() {
  const dummyData = [
    {
      name: "no bake cheesecake",
      picture:
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/no-bake-cheesecake-4.jpg",
      recipe: "https://sallysbakingaddiction.com/no-bake-cheesecake/",
    },
    {
      name: "no bake cheesecake",
      picture:
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/no-bake-cheesecake-4.jpg",
      recipe: "https://sallysbakingaddiction.com/no-bake-cheesecake/",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDessert, setLoadedDesserts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://desserts-api-default-rtdb.firebaseio.com/desserts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const desserts = [];

        for (const key in data) {
          const dessert = {
            id: key,
            ...data[key],
          };

          desserts.push(dessert);
        }
        setIsLoading(false);
        setLoadedDesserts(desserts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="loading">Loading...</div>
        <img
          className="loadingImg"
          src="https://www.grandbazaarist.com/wp-content/uploads/2019/12/Turkish-Delight-Rose-Flavoured-buy.jpg"
        ></img>
      </section>
    );
  }
  return (
    <div className="MainDessertsPage">
      <DessertsList desserts={dummyData} />
    </div>
  );
}

export default MainDessertsPage;
