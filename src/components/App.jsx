import { useState } from 'react'
import '../styles/App.css';
import HomeHeader from './HomeHeader';
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

function App() {
  return (
    <div className='body'>
      <HomeHeader />
      <nav className='nav'>
        <hr />
        <ul className='nav-list'>
          <li><button className='category'>Category</button></li>
          <li><button className='category'>Category</button></li>
          <li><button className='category'>Category</button></li>

          <li><button className='category'>Category</button></li>
          <li><button className='category'>Category</button></li>
          <li><button className='category'>Category</button></li>
        </ul>
        <hr />
      </nav>

      <SearchBar />

      <main className='card-container'>
        {recipeContent.map(createRecipeCard)}
      </main>

      <Footer />
    </div>
  )
}

export default App;
