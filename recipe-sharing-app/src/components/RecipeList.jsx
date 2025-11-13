// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="space-y-2">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm flex justify-between items-center"
        >
          <Link to={`/recipe/${recipe.id}`}>
            <div>
              <h3 className="font-bold text-lg">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </Link>
          <button
            className="text-blue-500"
            onClick={() => addFavorite(recipe.id)}
            disabled={favorites.includes(recipe.id)}
          >
            {favorites.includes(recipe.id) ? 'Favorited' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
