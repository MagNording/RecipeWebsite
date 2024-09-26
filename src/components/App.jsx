import { useState } from 'react'
import '../styles/App.css'

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

        <section className='card'>
          <h2>Namn</h2>
          <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
          <ul className='recipe-list'>
            <li>
              <h3>Recipe 1</h3>
              <p>Description of Recipe 1</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>

        <section className='card'>
          <h2>Namn</h2>
          <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 2" />
          <ul className='recipe-list'>
            <li>
              <h3>Recipe 2</h3>
              <p>Description of Recipe 2</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>

        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>


        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>


        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>


        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>


        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>


        <section className='card'>
          <h2>Namn</h2>
          <ul className='recipe-list'>
            <li>
              <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 3" />
              <h3>Recipe 3</h3>
              <p>Description of Recipe 3</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>
      </main>

      <footer className='footer'>
        <p>Recipe Website &copy; 2022 GRUPP 3, JU23 & ITP24</p>

      </footer>

    </div>


  )
}

export default App;
