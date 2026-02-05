import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Food() {
  const [recipes, setRecipes] = useState([]);
  const path = useParams();
  useEffect(() => {
    async function fetchRecipes() {
      // Logic to fetch recipes
      try {
        const recipes = await fetch(`https://dummyjson.com/recipes/${path.id}`);
        const data = await recipes.json();
        console.log(data);
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  return <div>{path.id}</div>;
}
