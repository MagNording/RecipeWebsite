import { useState } from "react";
import "../styles/App.css";

function App() {
  const recipes = [
    {
      name: "Recipe 1",
      description: "Description of Recipe 1",
      img: "/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    },

    {
      name: "Recipe 2",
      description: "Description of Recipe 2",
      img: "/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    },

    {
      name: "Recipe 3",
      description: "Description of Recipe 3",
      img: "/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    },

    {
      name: "Recipe 4",
      description: "Description of Recipe 4",
      img: "/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    },

    {
      name: "Recipe 5",
      description: "Description of Recipe 5",
      img: "/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    },
  ];

  return (
    <div className="body">
      <header className="header-top">
        <h1 className="header-title">Dessert Heaven</h1>
        <h2 className="header-citation">"A Taste of Heaven in Every Bite"</h2>
        <h2 className="header-citation">"Where Every Dessert Tells a Story"</h2>
        <span className="arrow">&#x25BC;</span>
      </header>

      <nav className="nav">
        <hr />
        <ul className="nav-list">
          <li>
            <button className="category">Category 1</button>
          </li>
          <li>
            <button className="category">Category 2</button>
          </li>
          <li>
            <button className="category">Category 3</button>
          </li>
        </ul>
        <hr />
      </nav>

      <div className="search-div">
        <input type="text" placeholder="Search..." />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>

      <main className="card-container">
        {recipes.map((recipe, index) => (
          <section className="card" key={index}>
            <h2>{recipe.name}</h2>
            <img src={recipe.img} alt={recipe.name} />
            <ul className="recipe-list">
              <li>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <button>View Recipe</button>
              </li>
            </ul>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>Recipe Website &copy; 2022 GRUPP 3, JU23 & ITP24</p>
      </footer>
    </div>
  );
}

export default App;
