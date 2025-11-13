import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  if (!recipe) return null;

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes((prev) =>
      prev.map((r) => (r.id === recipe.id ? { ...r, title, description } : r))
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full"
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
