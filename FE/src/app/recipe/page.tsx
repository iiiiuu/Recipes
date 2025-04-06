'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

type Recipe = {
  idMeal: number;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient: [];
};

type Filter = {
  country: string;
  ingredient: string;
  category: string;
};

const RecipeList = () => {
  const searchParams = useSearchParams();
  const ingredient = searchParams.get('ingredient');
  const country = searchParams.get('country');

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filter, setFilter] = useState<Filter>({
    country: country || '',
    ingredient: ingredient || '',
    category: '',
  });
  const [isLoading, setIsLoading] = React.useState(true);

  // Отримуємо рецепти при зміні фільтрів
  useEffect(() => {
    // Функція для формування URL з фільтрами
    const buildUrl = () => {
      let url = API_URL; // Ваш endpoint

      const params = new URLSearchParams();
      if (filter.ingredient) params.append('ingredient', filter.ingredient);
      if (filter.country) params.append('country', filter.country);
      if (filter.category) params.append('category', filter.category);

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      return url;
    };
    const url = buildUrl();
    const fetchData = async () => {
      try {
        const response = await axios
          .get(url)
          .finally(() => setIsLoading(false));
        setRecipes(response.data);
      } catch (error) {
        console.error('Error in fetching recipes:', error);
      }
    };
    fetchData();
  }, [filter]); // Перезапускається при зміні фільтрів
  useEffect(() => {
    console.log('Updated recipes:', recipes); // This log runs after recipes state is updated
  }, [recipes]); // Runs whenever recipes state changes
  return (
    <div>
      <h1>Recipe List</h1>
      <FilterBar setFilter={setFilter} />

      <div className="styles.recipe-list">
        {!isLoading ? (
          recipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

// Компонент для фільтрування
const FilterBar = ({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          setFilter((prev: Filter) => ({ ...prev, ingredient: e.target.value }))
        }
        placeholder="Filter by ingredient"
      />
      <input
        type="text"
        onChange={(e) =>
          setFilter((prev: Filter) => ({ ...prev, country: e.target.value }))
        }
        placeholder="Filter by country"
      />
      <input
        type="text"
        onChange={(e) =>
          setFilter((prev: Filter) => ({ ...prev, category: e.target.value }))
        }
        placeholder="Filter by category"
      />
    </div>
  );
};

// Компонент для відображення кожного рецепта
const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.strMeal}</h3>
      <Link href={BASE_URL + recipe.idMeal}>
        <p>View Recipe</p>
      </Link>
    </div>
  );
};

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeList />
    </Suspense>
  );
}
