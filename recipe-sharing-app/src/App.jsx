import React, { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      {/* Show AddRecipeForm only when no recipe is selected */}
      {!selectedRecipeId && <AddRecipeForm />}

      {/* Show RecipeList only when no recipe is selected */}
      {!selectedRecipeId && (
        <RecipeList onSelectRecipe={setSelectedRecipeId} />
      )}

      {/* Show RecipeDetails when a recipe is selected */}
      {selectedRecipeId && (
        <RecipeDetails
          recipeId={selectedRecipeId}
          onBack={() => setSelectedRecipeId(null)}
        />
      )}
    </div>
  );
}

export default App;
