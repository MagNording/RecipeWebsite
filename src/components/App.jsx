import { useState } from 'react'
import '../styles/App.css';
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
      <header className='header-top'>
        <h1 className='header-title'>Dessert Heaven</h1>
        <h2 className='header-citation'>"A Taste of Heaven in Every Bite"</h2>
        <h2 className='header-citation'>"Where Every Dessert Tells a Story"</h2>
        <span className='arrow'>&#x25BC;</span>
      </header>
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
        <p>Recipe Website &copy; 2022 GRUPP 3, JU23 & ITP24</p>
      </footer>

    </div>


  )
}

export default App;
