import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = ({ onSelectRecipe }) => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes added yet.</p>;

  return (
    <div className="space-y-2">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm cursor-pointer hover:bg-gray-50"
          onClick={() => onSelectRecipe(recipe.id)}
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
