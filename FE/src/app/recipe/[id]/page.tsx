'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
type Recipe = {
  idMeal: number;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient: [];
};

const RecipeInfo = ({ params }: { params: Promise<{ id: string }> }) => {
  const [recipe, setRecipe] = useState<Recipe>({
    idMeal: 0,
    strMeal: '',
    strArea: '',
    strCategory: '',
    strInstructions: '',
    strMealThumb: '',
    strIngredient: [],
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = React.use(params); // Unwrap the params promise

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/recipes/` + id) // Assume you have an API endpoint to fetch a single recipe by ID
        .then((response) => {
          setRecipe(response.data[0]);
          console.log(response.data);
          setIsLoading(false);
        })
        .catch((error) => console.error('Error fetching recipe:', error));
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="recipe-info-page">
      <div className="recipe-details">
        <Image
          src={recipe.strMealThumb}
          width={100}
          height={100}
          alt={recipe.strMeal}
        />
        <h1>{recipe.strMeal}</h1>
        <Link href={`/recipe?country=${recipe.strArea}`}>
          <p>{recipe.strArea}</p>
        </Link>
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.strIngredient.length > 0 ? (
            recipe.strIngredient.map((ingredient: string, index) =>
              ingredient ? (
                <li key={index}>
                  <Link href={`/recipe?ingredient=${ingredient}`}>
                    <p>{ingredient}</p>
                  </Link>
                </li>
              ) : (
                <li key={index}></li>
              )
            )
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <RightSidebar category={recipe.strCategory} />
    </div>
  );
};
type RecipesByCategory = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};
const RightSidebar = ({ category }: { category: string }) => {
  const [recipes, setRecipes] = useState<RecipesByCategory[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes?category=${category}`)
      .then((response) => setRecipes(response.data))
      .catch((error) =>
        console.error('Error fetching recipes for category:', error)
      )
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <div className="right-sidebar">
      <h3>Other recipes in {category}</h3>
      <ul>
        {!isLoading ? (
          recipes.map((recipe: RecipesByCategory) => (
            <li key={recipe.idMeal}>
              <Link href={`/recipe/${recipe.idMeal}`}>
                <p>{recipe.strMeal}</p>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeInfo;
