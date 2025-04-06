import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;
const API_URL = process.env.API_URL || "";

type Recipe = {
  idMeal: number;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient: string[];
};

const app = express();
// Enable CORS for cross-origin requests
app.use(cors());
// Enable JSON request body parsing
app.use(express.json());

/**
 * GET /recipes
 * Fetches a list of recipes from the external API.
 * Supports filtering by ingredient, country, or category.
 */

app.get("/recipes", async (req: Request, res: Response) => {
  console.log("All");

  try {
    const { ingredient, country, category } = req.query;

    let endpoint = `${API_URL}/search.php?s=`;

    // Modify the endpoint based on query parameters
    if (ingredient) {
      endpoint = `${API_URL}/filter.php?i=${ingredient}`;
    } else if (country) {
      endpoint = `${API_URL}/filter.php?a=${country}`;
    } else if (category) {
      endpoint = `${API_URL}/filter.php?c=${category}`;
    }

    // Fetch data from the external API
    await axios.get(endpoint).then((response) => {
      const recipes: Recipe[] = [];
      for (let i = 0; i < response.data.meals.length; i++) {
        const arrayIngredient = [];
        for (let j = 1; j <= 20; j++) {
          arrayIngredient.push(response.data.meals[i]["strIngredient" + j]);
        }
        recipes.push({
          idMeal: response.data.meals[i].idMeal,
          strMeal: response.data.meals[i].strMeal,
          strArea: response.data.meals[i].strArea,
          strCategory: response.data.meals[i].strCategory,
          strInstructions: response.data.meals[i].strInstructions,
          strMealThumb: response.data.meals[i].strMealThumb,
          strIngredient: arrayIngredient,
        });
      }
      res.json(recipes);
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes:" + error });
  }
});

/**
 * GET /recipe/:id
 * Fetches details for a specific recipe by ID.
 */
app.get("/recipes/:id", async (req: Request, res: Response) => {
  console.log("id:", req.params.id);
  try {
    const { id } = req.params;
    // Fetch detailed recipe info by ID from the external API
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
    const recipes: Recipe[] = [];
    const arrayIngredient: string[] = [];
    for (let j = 1; j < 20; j++) {
      arrayIngredient.push(response.data.meals[0]["strIngredient" + j]);
    }
    recipes.push({
      idMeal: response.data.meals[0].idMeal,
      strMeal: response.data.meals[0].strMeal,
      strArea: response.data.meals[0].strArea,
      strCategory: response.data.meals[0].strCategory,
      strInstructions: response.data.meals[0].strInstructions,
      strMealThumb: response.data.meals[0].strMealThumb,
      strIngredient: arrayIngredient,
    });

    // Return the fetched recipe details as JSON
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipe details:" + error });
  }
});

// Start the server and log available endpoints
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`All recipes: http://localhost:${PORT}/recipes`);
});
