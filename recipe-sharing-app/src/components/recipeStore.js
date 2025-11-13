// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe CRUD actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Favorites actions
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock example based on favorites)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
