import { useState } from 'react'
import '../styles/App.css';
import HomeHeader from './HomeHeader';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import Footer from './Footer';
import recipeContent from '../recipes-content';

function createRecipeCard(content) {
  return(
    <RecipeCard
      key={content.id}
      image={content.image}
      name={content.name}
      description={content.description}
    />
  );
}

const categoryList = ["category1", "category2", "category3", "category4", "category5"];

function App() {
<<<<<<<<< Temporary merge branch 1
  const [count, setCount] = useState(0)
=========
  //const [count, setCount] = useState(0)
>>>>>>>>> Temporary merge branch 2

  return (
    <div>
      <h1>Recipe Website</h1>
    </div>
  );
}

export default App;
