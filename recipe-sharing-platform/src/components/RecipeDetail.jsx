import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data/data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800 mt-4 inline-block"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800 text-sm"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-6">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-xl w-full h-64 object-cover shadow-lg mb-8"
      />

      {/* Summary */}
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        {recipe.summary}
      </p>

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
