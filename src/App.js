import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import ListDish from "./components/ListDish/ListDish";
import ListButtons from "./components/ListButtons/ListButtons";

const App = () => {
  const [category, setCategory] = useState("All");

  const handleClickCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <>
      <Header />
      <ListButtons onClick={handleClickCategory} />
      <ListDish category={category} />
    </>
  );
};

export default App;
