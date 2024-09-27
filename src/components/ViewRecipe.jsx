import React from 'react'
import '../styles/ViewRecipe.css'

export default function
    () {
    return (
        <div className='main'>
            <div className='container'>
                <h1 className='recipe-title'>Recept Namn</h1>

                <div className='image-container'>
                    <img src="../public/kelvin-han-a-niLBbZF4o-unsplash.jpg" alt="Recipe" className="recipe-image" />
                </div>


                <div className='description-container'>
                    <h2>Beskrivning</h2>
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo vel tellus pharetra bibendum. Donec facilisis, quam vel pharetra malesuada, justo velit tempor velit, id tristique lectus lectus vel velit.
                    </p>
                </div>

                <div className='card-holder'>
                    <div className='card'>
                        <h2 className='section-title'>Ingredienser</h2>
                        <ul className='ingredient-list'>
                            <li>1/2 cup brown sugar</li>
                            <li>1/2 cup butter</li>
                            <li>1/4 cup flour</li>
                            <li>1/2 teaspoon salt</li>
                        </ul>
                    </div>

                    <div className='card'>
                        <h2 className='section-title'>Instruktioner</h2>
                        <ol className='instruction-list'>
                            <li>Preheat your oven to 350°F (175°C).</li>
                            <li>Cream together the brown sugar and butter until smooth.</li>
                            <li>Add the flour and salt, mixing well.</li>
                            <li>Pour the batter into a greased 9x13 inch baking dish.</li>
                            <li>Bake for 20-25 minutes, or until a toothpick inserted into the center comes out clean.</li>
                            <li>Cool for 5 minutes before serving.</li>
                            <li>Enjoy your delicious recipe!</li>
                        </ol>
                    </div>
                </div>

                <div className='card-holder-last '>
                    <div className='card-last'>
                        <h2>Kommentarer</h2>
                        <ul className='scroll-list comments'>
                            <li><p>kommentar 1 ugfudfgduigug</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>
                            <li><p>kommentar 1</p></li>

                        </ul>
                        <button>Kommentera</button>

                    </div>


                    <div className='card-last'>
                        <h2>Stjärnor</h2>
                        <p className='stars'>★★★★★</p>
                        <button >Recensera</button>

                    </div>
                </div>

                <button>Home</button>

            </div>
        </div>
    )
}
