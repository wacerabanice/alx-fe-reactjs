// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      <div className="space-y-2">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className="border p-4 rounded shadow-sm flex justify-between items-center"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <div>
                <h3 className="font-bold">{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </Link>
            <button
              className="text-red-500"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
