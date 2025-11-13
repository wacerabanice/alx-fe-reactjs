import React from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId, onBack }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="border p-4 rounded shadow-md mt-4">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDeleted={onBack} // automatically go back after deletion
      />

      <button
        onClick={onBack}
        className="mt-2 bg-gray-500 text-white px-4 py-2 rounded w-full"
      >
        Back to List
      </button>
    </div>
  );
};

export default RecipeDetails;
