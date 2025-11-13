import React, { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      {!selectedRecipeId && <AddRecipeForm />}

      {!selectedRecipeId && (
        <RecipeList onSelectRecipe={setSelectedRecipeId} />
      )}

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
