const Recipe = require("../models/Recipe");

const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({ createdBy: req.user.id });
  res.json(recipes);
};

const createRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const recipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    createdBy: req.user.id,
  });
  res.status(201).json(recipe);
};

const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  if (recipe.createdBy.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedRecipe);
};

const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  if (recipe.createdBy.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  await recipe.deleteOne();
  res.json({ message: "Recipe deleted successfully" });
};

module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
