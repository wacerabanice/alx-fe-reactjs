import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Update local state if recipe prop changes
  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  // ✅ Form submission handler with event.preventDefault
  const handleSubmit = (event) => {
    event.preventDefault(); 
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Edit title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Edit description"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;
