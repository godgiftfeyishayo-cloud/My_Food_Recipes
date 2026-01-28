export default function Food_Card({ recipe }) {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden">
      {/* Food Image Container */}
      <div className="h-60 w-full">
        <img
          src={recipe.image}
          alt="Delicious Food"
          className="object-cover object-center h-full w-full"
        />
      </div>

      {/* Food Description */}
      <div className="p-4 space-y-2 px-7">
        <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
        <p className="mb-2">{recipe.instructions[0]}...</p>
        <p>
          <span className=" w-fit p bg-blue-100">{recipe.rating}</span>⭐
          Rating
        </p>
        <button className="px-5 my-3 rounded bg-amber-400 py-1.5 text-white">
          View Recipe
        </button>
      </div>
    </div>
  );
}
