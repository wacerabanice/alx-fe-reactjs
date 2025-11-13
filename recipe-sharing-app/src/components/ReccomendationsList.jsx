// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      <div className="space-y-2">
        {recommendations.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block border p-4 rounded shadow-sm hover:bg-gray-50"
          >
            <h3 className="font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
