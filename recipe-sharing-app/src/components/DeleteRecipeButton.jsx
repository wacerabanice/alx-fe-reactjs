import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  const handleDelete = () => {
    setRecipes((prev) => prev.filter((r) => r.id !== recipeId));
    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
