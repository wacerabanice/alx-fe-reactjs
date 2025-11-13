// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="space-y-2">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="block border p-4 rounded shadow-sm hover:bg-gray-50"
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
