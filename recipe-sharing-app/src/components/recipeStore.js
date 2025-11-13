import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (updater) =>
    set((state) => ({
      recipes: typeof updater === 'function' ? updater(state.recipes) : updater,
    })),
}));
