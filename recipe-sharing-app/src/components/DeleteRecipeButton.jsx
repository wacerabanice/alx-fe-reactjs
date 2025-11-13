import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Go back to the recipe list after deletion
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
