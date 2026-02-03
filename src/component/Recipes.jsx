import { useEffect, useState } from "react";
import Food_Card from "./Food_Card";
export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      // Logic to fetch recipes can be added here
      try {
        const recipes = await fetch("https://dummyjson.com/recipes");
        const data = await recipes.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-7">Our Recipes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {recipes.map((r) => (
          <Food_Card recipe={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}
