import { createContext, useState } from "react";

const StarredContext = createContext({
  starred: [],
  totalStarred: 0,
  addStarred: (srarredDessert) => {},
  removeStarred: (desserId) => {},
  itemIsStarred: (desserId) => {},
});

export function StarredContextProvider(props) {
  const [userStarred, setUserStarred] = useState([]);

  function addStarredHandler(starredDessert) {
    setUserStarred((prevStarred) => {
      return prevStarred.concat(starredDessert);
    });
  }

  function removeStarredHandler(dessertId) {
    setUserStarred((prevStarred) => {
      return prevStarred.filter((dessert) => dessert.id !== dessertId);
    });
  }

  function itemIsStarredHandler(dessertId) {
    return userStarred.some((dessert) => dessert.id === dessertId);
  }

  const context = {
    starred: userStarred,
    totalStarred: userStarred.length,
    addStarred: addStarredHandler,
    removeStarred: removeStarredHandler,
    itemIsStarred: itemIsStarredHandler,
  };
  return (
    <StarredContext.Provider value={context}>
      {props.children}
    </StarredContext.Provider>
  );
}

export default StarredContext;
