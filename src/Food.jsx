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

  // return <div>{path.id}</div>;
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* IMAGE */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* NAME */}
        <h1 className="text-5xl font-bold mb-8 text-gray-900">{recipe.name}</h1>

        {/* INGREDIENTS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ml-4">
                  {ingredient}
                </li>
              ))}
          </ul>
        </section>

        {/* INSTRUCTIONS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Instructions
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            {recipe.instructions &&
              recipe.instructions.map((step, index) => (
                <li key={index} className="ml-4">
                  {step}
                </li>
              ))}
          </ul>
        </section>

        {/* RECIPE INFO */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
            <p>
              <span className="font-semibold">Prep Time:</span>{" "}
              {recipe.prepTimeMinutes} minutes
            </p>
            <p>
              <span className="font-semibold">Cook Time:</span>{" "}
              {recipe.cookTimeMinutes} minutes
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span>{" "}
              {recipe.difficulty}
            </p>
            <p>
              <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
            </p>
            <p>
              <span className="font-semibold">Calories:</span>{" "}
              {recipe.caloriesPerServing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {recipe.rating} ⭐
            </p>
          </div>
        </section>

        {/* TAGS */}
        {recipe.tags && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Tags</h2>
            <div className="flex flex-wrap gap-3">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* MEAL TYPE */}
        {recipe.mealType && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meal Type</h2>
            <div className="flex flex-wrap gap-3">
              {recipe.mealType.map((type, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold"
                >
                  {type}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
