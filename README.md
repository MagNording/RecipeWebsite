# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

ScrollButton:
When the button to scroll up automatically is available, how much to scroll untilits visible position

Header:
HomeHeader:
header, some citations to the home page

Footer:
some references to the developers and contributors and name of the contributors group

Categories:
AvailableCategories:
available categories, and handle methods for available categories and recipes
CategoriesBar:
print out the categories and have method to handle the category when is selected

Main:
Main:
Prints out the avaible recipes in container use props to get recipes from available recipes list
AvailableRecipes:
function to create a recipeCard, function which gets all available recipes
Recipecard:
Everything that has to do with the recipe card and attributes

Utils:
CommentForm
A component that takes in commentData and recipeId as parameters and the makes a post request to the server
Commentlist:
Component takes in comments and the print them out in a list of comments with username/or anonymized username, comments and date of comment
Homepage:
A Component that has functions to fetch recipes, get sorted recipes and fetch by category
RecipeCard:
How the recipeCard will look like on the homepage, stars, difficulty and other attributes
ViewRecipe:
Important funtions when viewing the recipeCard and view a recipe in a seperate window, fetchComments, saveRecipeRatin, get ShortUnit and unit conversions:

SearchBar:
This component is used to fetch input from user input and then update the state
it also has a prop that allows parent components to be updated with certain values

ViewRecipe:
CommentForm:
logic for handling and creating a new comment about a recipe
CommentList:
component for retrieving comments and printing them out in a listed form
Ratings:
Handle rating comment
ViewRecipe:
parent component for creating a new recipe page with all components and having a function to create a pdf from the recipe template

ScrollToTop:
button component for scrolling back up automatically

Pages:
Error:
When a page not found, send the error message
Home:
the home page / landing page with contributing components
Root:
Root includes React Outlet which is a component provided by React Router that serves as a placeholder for child routes within a parent route.
App:
All links and routes will be available to see
main:
the main component when running
