# Recipe List Application

This project is a full-stack recipe list application consisting of a **backend server** (Node.js) and a **frontend client** (Next.js). The application allows users to browse and filter recipes by ingredients, country, and category.

---

## 📂 Project Structure

```
Recipes/
│-- BE/          # Backend (Node.js API Server)
│-- FE/          # Frontend (Next.js Application)
│-- README.md    # Root documentation
```

---


## 🛠️ Installation

### **Quick Setup: Install npm (if not installed)**

If **npm** is not yet installed on your system, follow these steps:

1. **Download Node.js (npm is included)**  
   Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/) and download the latest LTS version for your operating system.

2. **Install Node.js**  
   Follow the installation instructions provided on the website. This will install both **Node.js** and **npm**.

3. **Verify npm Installation**  
   Once the installation is complete, verify that npm is correctly installed by running:
   ```sh
   npm --version
   ```

4. **Check if Node.js is installed**  
   Run this command to verify Node.js installation:
   ```sh
   node --version
   ```

5. If everything is set up correctly, you should see the version numbers for **npm** and **Node.js**. If any issues occur, reinstall Node.js following the instructions above.

---
## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/iiiuu/Resipes.git
cd Recipes
```

### 2️⃣ **Setup Backend**

1. Navigate to the backend folder:
   ```sh
   cd BE
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `BE` folder with the following content:
   ```ini
   PORT=4000
   API_URL=https://www.themealdb.com/api/json/v1/1
   ```
4. Start the backend server in development mode:
   ```sh
   npm run dev
   ```
5. The API will be available at `http://localhost:4000`

---

### 3️⃣ **Setup Frontend**

1. Navigate to the frontend folder:
   ```sh
   cd ../FE
   ```
2. Install dependencies:
   ```sh
   npm install
   npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
   ```
3. Start the **development server** or **build and start in product**:

   ```sh
   npm run dev
   ```
     ```bash
   npm run build
   npm run start
   ```
4. Open your browser and navigate to `http://localhost:3000`

---

## 🔥 API Endpoints

### Fetch All Recipes
```sh
GET http://localhost:4000/recipes
```

**Optional Filters:**
- `ingredient` → Filter by ingredient.
- `country` → Filter by country.
- `category` → Filter by category.

Example:
```sh
GET http://localhost:4000/recipes?ingredient=chicken
```

### Fetch Recipe Details
```sh
GET http://localhost:4000/recipes/:id
```
Example:
```sh
GET http://localhost:4000/recipes/52772
```

---

## ✅ Testing

To check if the API is working, use **Postman**, **cURL**, or open a browser and visit:
```sh
http://localhost:4000/recipes
```

---

## 🛠️ Development & Linting

### Linting
```sh
npm run lint
```

### Formatting with Prettier
```sh
npm run format
```

---

## 📖 Documentation

This `README.md` provides instructions on installing, running, and testing the application. Make sure to configure all dependencies and environment variables before running the project.

---

## 📝 License

This project is licensed under the **MIT License**.

---

### 🎯 Happy Coding! 🚀

