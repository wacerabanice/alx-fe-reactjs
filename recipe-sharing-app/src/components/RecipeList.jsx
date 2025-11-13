// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );
  const navigate = useNavigate();

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="space-y-2">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm cursor-pointer hover:bg-gray-50"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
