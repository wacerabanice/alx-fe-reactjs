import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update an existing recipe by id
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
