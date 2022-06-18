import { useContext } from "react";
import StarredContext from "../context/starred-context";
import DessertList from "../components/desserts/DessertsList";

export default function Starred() {
  const starredCtx = useContext(StarredContext);
  let content;
  if (starredCtx.totalStarred === 0) {
    content = <p className="starred-text">No Starred Items</p>;
  } else {
    content = <DessertList desserts={starredCtx.starred} />;
  }
  return <div className="Starred">{content}</div>;
}
