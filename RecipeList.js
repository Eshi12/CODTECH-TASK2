import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const { data } = await axiosInstance.get("/recipes", {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` },
    });
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Your Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
