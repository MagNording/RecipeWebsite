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
  return (
    <div className='body'>
      <HomeHeader />
      <NavBar categories={categoryList}/>
      <SearchBar />

      <main className='card-container'>
        {recipeContent.map(createRecipeCard)}
      </main>

      <Footer />
    </div>
  )
}

export default App;