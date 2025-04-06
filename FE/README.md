# Recipe List Application

## Overview

This is a Recipe List application built with Next.js. The app allows users to filter and view a list of recipes based on ingredients, country, and category. It fetches data from a specified API endpoint.

## Features

- **Filter Recipes**: Users can filter recipes by ingredient, country, and category.
- **View Recipe Details**: Users can click on a recipe to view its detailed information.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS Modules**: For styling components.

## Getting Started

### Prerequisites

- Node.js (version 23 or higher)
- npm

### Installation

1. After cloning the repository:

**First, set up the backend server. Follow the instructions provided
in the backend repository (if applicable) to configure and start the server.**

2. Install dependencies in terminal in folder Recipes/FE , after starting the backend server:

   ```bash
   npm install
   npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
   ```

3. Start the **development server** or **build and start in product**:

   ```bash
   npm run dev
   ```

   ```bash
   npm run build
   npm run start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## API Endpoint

The application fetches recipes from the following API endpoint:

```
http://localhost:4000/recipes
```

### API Parameters

- **ingredient**: Filter recipes by a specific ingredient.
- **country**: Filter recipes by the country of origin.
- **category**: Filter recipes by category.

## Usage

- Use the filter inputs to narrow down the recipe list based on your preferences.
- Click on the "View Recipe" link to see detailed information about each recipe.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of Next.js and Axios for their amazing frameworks.
