# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Contact details of the developers:
[Emanuel Sleyman](https://github.com/EmSley77), [Depinder Kaur](https://github.com/DepiKaur) and [Magnus Nording](https://github.com/MagNording)

## Project documentation:
This project contains a components folder. Each component has its own .jsx file and .css file.
To find the components folder, follow

`Project` --> `src` --> `components`

I) In the components folder, the following components can be found-

1) ### Categories
* <b>CategoriesBar</b> is parent to the `AvailableCategories` component and uses it to get value for the selected category (if any category is selected by user).

* <b>AvailableCategories</b> is child to the `CategoriesBar` component and passes the value of all available categories. It even handles category selection, by passing the value of <i>selected category</i> to its parent i.e. `CategoriesBar`.

2) ### Footer
It contains references to the developers and contributors and name of the contributors group.

3) ### Header
Contains only the `HomeHeader` component.
* <b>HomeHeader</b> contains header i.e. site name, some citations to the home page.

4) ### Main
Contains components `Main`, `AvailableRecipes` and `RecipeCard` which are explained below-

* <b>Main</b> uses `AvailableRecipes` component to print out all the available recipes on the home page. Even has a `ScrollButton` component to scroll to top of the page.

* <b>AvailableRecipes</b> contains a function to create a `RecipeCard`, function which gets all available recipes

* <b>RecipeCard</b> creates a recipe card (which itself is a link to the full-recipe) for each of the available recipes as displayed on the home page.

6) ### ScrollButton
When the button to scroll up automatically is available, how much to scroll until its visible position.

7) ### Search
Contains only the `SearchBar` component.
* <b>SearchBar</b> component is used to fetch input from user input and then update the state.
it also has a prop that allows parent components to be updated with certain values

8) ### Utils:
* <b>CommentForm</b>:
A component that takes in commentData and recipeId as parameters and the makes a post request to the server.

* <b>CommentList</b>:
Component takes in comments and the print them out in a list of comments with username/or anonymized username, comments and date of comment.

* <b>HomePage</b>:
A Component that has functions to fetch recipes, get sorted recipes and fetch by category.

* <b>RecipeCard</b>:
How the recipeCard will look like on the homepage, stars, difficulty and other attributes.

* <b>ViewRecipe</b>:
Important funtions when viewing the recipeCard and view a recipe in a seperate window, fetchComments, saveRecipeRatin, get ShortUnit and unit conversions.

9) ### ViewRecipe:
* <b>CommentForm</b>:
logic for handling and creating a new comment about a recipe

* <b>CommentList</b>:
component for retrieving comments and printing them out in a listed form

* <b>Ratings</b>:
Handle rating comment

* <b>ViewRecipe</b>:
parent component for creating a new recipe page with all components and having a function to create a pdf from the recipe template

* <b>RecipeMetaData</b>:
details about the recipe, rating, time to complete, ingredients

10) ### ScrollToTop:
This component is used in the Root.jsx file in the pages folder so that we land at the top of the newly opened page.

II) Navigate to the pages folder as follows-
`Project` --> `src` --> `pages`

### Pages

* <b>Error</b>: When a page not found, send the error message

* <b>Home</b>: The home page / landing page with contributing components

* <b>Root</b>:
Root includes React Outlet which is a component provided by React Router that serves as a placeholder for child routes within a parent route.

However, the following can be found in the src folder.

### App:
All links and routes will be available to see

### main:
the main component when running
