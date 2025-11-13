import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes added yet.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 mb-2 rounded shadow-sm"
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
