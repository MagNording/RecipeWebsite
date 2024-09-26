import { useState } from 'react'
import '../styles/App.css';
import HomeHeader from './HomeHeader';
import RecipeCard from './RecipeCard';
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

      <div className='search-div'>
        <input type="text" placeholder="Search..." />
        <button type="submit" className='search-button'>Search</button>
      </div>

      <main className='card-container'>
        {recipeContent.map(createRecipeCard)}
      </main>

      <footer className='footer'>
        <p>Recipe Website &copy; 2024</p> 
        <p>GRUPP 3, JU23 & ITP24</p>
      </footer>

    </div>


  )
}

export default App;
