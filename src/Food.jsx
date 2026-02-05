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

/*
========== STYLING EXPLANATIONS ==========

1. OUTER WRAPPER (bg-white min-h-screen):
   - bg-white: White background for the entire page
   - min-h-screen: Ensures the container takes at least full viewport height

2. INNER CONTAINER (max-w-4xl mx-auto px-6 py-8):
   - max-w-4xl: Limits max width to 56rem (900px) for better readability
   - mx-auto: Centers the content horizontally
   - px-6: Padding on left/right sides (horizontal padding)
   - py-8: Padding on top/bottom (vertical padding)

3. IMAGE (w-full h-96 object-cover rounded-lg mb-8):
   - w-full: Image takes full width of container
   - h-96: Fixed height of 24rem (384px)
   - object-cover: Crops image to fill space without distortion
   - rounded-lg: Rounded corners
   - mb-8: Margin bottom for spacing below image

4. NAME/HEADING (text-5xl font-bold mb-8 text-gray-900):
   - text-5xl: Large heading size (3rem)
   - font-bold: Bold font weight
   - mb-8: Margin bottom for spacing
   - text-gray-900: Dark gray text color

5. SECTION HEADINGS (text-3xl font-bold mb-4 text-gray-900):
   - text-3xl: Medium-large heading size (1.875rem)
   - font-bold: Bold text
   - mb-4: Margin bottom spacing
   - text-gray-900: Dark gray color

6. INGREDIENT/INSTRUCTION LISTS (space-y-2/3 text-lg text-gray-700 ml-4):
   - space-y-2/3: Vertical spacing between list items
   - text-lg: Larger text for readability
   - text-gray-700: Medium gray text
   - ml-4: Left margin for indentation

7. RECIPE INFO SECTION (bg-gray-50 p-6 rounded-lg):
   - bg-gray-50: Light gray background to highlight info
   - p-6: Padding around all sides
   - rounded-lg: Rounded corners

8. RECIPE INFO GRID (grid grid-cols-1 md:grid-cols-2 gap-4):
   - grid: CSS Grid layout
   - grid-cols-1: Single column on mobile
   - md:grid-cols-2: Two columns on medium screens and up
   - gap-4: Space between grid items

9. INFO PARAGRAPHS (font-semibold inside <span>, text-lg text-gray-800):
   - font-semibold: Bold text for labels
   - text-lg: Large text size
   - text-gray-800: Dark gray text

10. TAGS & MEAL TYPE BADGES (rounded-full px-4 py-2 font-semibold):
    - rounded-full: Fully rounded corners (pill shape)
    - px-4 py-2: Horizontal and vertical padding for badge appearance
    - font-semibold: Bold text
    - flex flex-wrap gap-3: Flexbox layout with wrapping and spacing between badges
    - bg-yellow-400 text-gray-900: Yellow background with dark text (Tags)
    - bg-blue-100 text-blue-900: Light blue background with dark blue text (Meal Type)

11. MARGIN BOTTOM CLASSES (mb-12, mb-8, mb-4):
    - mb-12: Large margin for section separation (3rem)
    - mb-8: Medium margin (2rem)
    - mb-4: Small margin (1rem)

12. CONDITIONAL RENDERING ({recipe.tags && ...}, {recipe.mealType && ...}):
    - Only renders the section if the data exists
    - Prevents errors when data is undefined or null
*/

/*
  ========== API LOGIC EXPLANATION ==========
  
  1. useParams() Hook:
     - Extracts URL parameters from the current route
     - Example: if URL is "/food/1", then path.id = 1
     - Used to identify which recipe to fetch
  
  2. useState Hook:
     - recipe: Stores the fetched recipe data
     - food(): Function to update the recipe state
     - Initialized as empty object {}
  
  3. useEffect Hook:
     - Runs side effects (like API calls) after component renders
     - Dependency array [] means it runs ONCE when component first mounts
     - Without [], it would run infinitely; with [path.id], it would run when ID changes
  
  4. async/await Syntax:
     - Allows us to wait for the API response before continuing
     - Makes code more readable than .then() chains
  
  5. fetch() Function:
     - Makes an HTTP GET request to the API
     - URL: https://dummyjson.com/recipes/{id}
     - Example: https://dummyjson.com/recipes/1 fetches recipe with ID 1
  
  6. .json() Method:
     - Parses the API response from JSON text to JavaScript object
     - Returns a Promise, so we use await
  
  7. food(data):
     - Updates the recipe state with fetched data
     - Triggers component re-render to display new data
  
  8. try/catch Block:
     - try: Attempts to fetch and parse the API response
     - catch: If anything fails (network error, JSON parse error, etc.), logs error to console
     - Prevents the app from crashing on API failures
  
  9. API Response Structure:
     - Returns an object with properties like:
       - image, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes,
         difficulty, cuisine, caloriesPerServing, tags, rating, mealType
     - These properties are accessed in the JSX below (recipe.name, recipe.ingredients, etc.)
  */

     
        
          /* MEAL TYPE STYLING EXPLANATION:
            - recipe.mealType && (...): Only renders if mealType array exists
            - className="mb-12": Margin bottom (3rem) for section spacing
            - className="text-3xl font-bold mb-4 text-gray-900": Heading styling
            - className="flex flex-wrap gap-3": Flexbox layout that wraps items and adds 12px gap
            - .map((type, index) => ...): Loops through each meal type in the array
            - className="bg-blue-100 text-blue-900": Light blue background with dark blue text
            - className="px-4 py-2": Horizontal (16px) and vertical (8px) padding
            - className="rounded-full": Makes the span pill-shaped with full border radius
            - className="font-semibold": Bold text for emphasis
            - key={index}: React requires key for list items (though index is not ideal for dynamic lists)
            
            DIFFERENCE FROM TAGS:
            - Tags use bg-yellow-400 (bright yellow); Meal Type uses bg-blue-100 (light blue)
            - Tags use text-gray-900 (dark gray); Meal Type uses text-blue-900 (dark blue)
            - Same structure but different color scheme for visual distinction
        */
        

  /* TAGS STYLING EXPLANATION:
            - recipe.tags && (...): Only renders if tags array exists
            - className="mb-12": Margin bottom (3rem) for section spacing
            - className="text-3xl font-bold mb-4 text-gray-900": Heading styling
            - className="flex flex-wrap gap-3": Flexbox layout that wraps items and adds 12px gap
            - .map((tag, index) => ...): Loops through each tag in the array
            - className="bg-yellow-400 text-gray-900": Yellow background with dark text
            - className="px-4 py-2": Horizontal (16px) and vertical (8px) padding
            - className="rounded-full": Makes the span pill-shaped with full border radius
            - className="font-semibold": Bold text for emphasis
            - key={index}: React requires key for list items (though index is not ideal for dynamic lists)
        */
