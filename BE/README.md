### `README.md` for Your Recipe API Server

# Recipe API Server

This project is a simple Node.js backend that fetches recipes from the **[TheMealDB API](https://www.themealdb.com/api.php)**. It provides endpoints to retrieve a list of recipes and details of a specific recipe.

## 📌 Features

- Fetch all available recipes.
- Filter recipes by ingredient, country, or category.
- Get detailed information about a specific recipe.

---

## 🛠️ Installation

After Clone the repository with Backend and Frontend:

1. Navigate to the project folder:
   ```sh
   cd BE
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## ⚙️ Configuration

1. If it doesn't exist, create a `.env` file in the project root and add the following:
   ```ini
   PORT=4000
   API_URL=https://www.themealdb.com/api/json/v1/1
   ```
2. Ensure that **Node.js** (v16+) is installed.

---

## 🚀 Running the Server

Start the development server:

```sh
npm run dev
```

Or run in production mode:

```sh
npm build
npm start
```

---

## 🔥 API Endpoints

### Fetch Recipes

#### `GET /recipes`

Retrieve all available recipes.

- **Optional Query Parameters:**
  - `ingredient`: Filter recipes by ingredient.
  - `country`: Filter recipes by country.
  - `category`: Filter recipes by category.

📌 **Example Requests:**

```sh
GET http://localhost:4000/recipes
GET http://localhost:4000/recipes?ingredient=chicken
GET http://localhost:4000/recipes?country=Canadian
GET http://localhost:4000/recipes?category=Seafood
```

### Fetch Recipe Details

#### `GET /recipe/:id`

Fetch details of a specific recipe.

📌 **Example Request:**

```sh
GET http://localhost:4000/recipes/52772
```

---

## ✅ Testing

To check if the API is working, use **Postman**, **cURL**, or open a browser and visit:

```sh
http://localhost:4000/recipes
```

You can also use **Jest** (if tests are implemented).

---

## 👨‍💻 Development

### Code Linting

```sh
npm run lint
```

### Formatting with Prettier

```sh
npm run format
```

---

## 📝 License

This project is licensed under the **MIT License**.

---

### 🎯 Happy Coding! 🚀

Let me know if you want any modifications! 😊
