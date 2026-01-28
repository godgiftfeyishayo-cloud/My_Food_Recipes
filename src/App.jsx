import React from "react";
import Header from "./component/Header";
import Recipes from "./component/Recipes";
import Food_Card from "./component/Food_Card";

export default function App() {
  return (
    <div>
      <Header />
      <Recipes />
      <Food_Card />
    </div>
  );
}
