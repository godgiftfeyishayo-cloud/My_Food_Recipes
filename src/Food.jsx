import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Food() {
  // The use state is a memory hook that stores the data
  const [recipe, food] = useState({});
  const path = useParams();

  // Use effect prevents it from running infinitely
  useEffect(() => {
    async function getSingleRecipe() {
      // Logic to fetch recipes
      try {
        const recipes = await fetch(`https://dummyjson.com/recipes/${path.id}`);
        const data = await recipes.json();
       food(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getSingleRecipe();
  }, []);

  return <div>{path.id}</div>;
}
