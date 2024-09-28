import React from 'react'
import '../styles/Landing.css'

export default function Landing() {
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
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>

                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>

                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
                <section className='card'>
                    <h2>Namn</h2>
                    <img src="../public/brooke-lark-pGM4sjt_BdQ-unsplash.jpg" alt="Recipe 1" />
                    <ul className='recipe-list'>
                        <li>
                            <h3>Recept 1</h3>
                            <p>recept detaljer</p>
                            <button>visa recept</button>
                        </li>
                    </ul>
                </section>
               
            </main>

            <footer className='footer'>
                <p>Recipe Website &copy; 2022 GRUPP 3, JU23 & ITP24</p>

            </footer>


        </div>)
}
