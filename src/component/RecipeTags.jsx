import React from "react";

export default function RecipeTags({
  tags,
  mealType,
  cuisine,
  difficulty,
  rating,
}) {
  return (
    <div className="recipe-tags">
      {/* tags */}
      {tags && tags.length > 0 && (
        <div className="tags-container">
          <span className="font-bold">Tags: </span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* mealType */}
      {mealType && (
        <div className="meal-type">
          <span className="font-bold">Meal Type: </span>
          {Array.isArray(mealType) ? (
            mealType.map((type, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
              >
                {type}
              </span>
            ))
          ) : (
            <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
              {mealType}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
