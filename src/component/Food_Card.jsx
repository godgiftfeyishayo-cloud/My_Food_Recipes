export default function Food_Card({ recipe }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
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
        <p className="mb-4">{recipe.instructions[0]}...</p>
        <div className="flex justify-between">
          <p className="w-fit">
            <span className="py-[0.5px] mr-2 px-2 bg-amber-200 rounded">
              {recipe.rating}
            </span>
            ⭐ Rating
          </p>
          <ul className="flex gap-3">
            <li className="py-[0.5px] px-2 bg-amber-500 text-white rounded">
              {recipe.tags[0]}
            </li>
            <li className="py-[0.5px] px-2 bg-amber-500 text-white rounded">
              {recipe.tags[1]}
            </li>
          </ul>
        </div>
        <button className="px-4 my-3 rounded bg-amber-400 py-1.5 text-white">
          View Recipe
        </button>
      </div>
    </div>
  );
}
