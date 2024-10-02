import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/* import './ViewRecipe.css'
 */
const unitConversionMap = {
    "gram": "gm",
    "deciliter": "dl",
    "teskedar": "tsk",
    "tesked": "tsk",
    "matsked": "msk",
    "matskedar": "msk",
    "stycken": "st"
};

export default function ViewRecipe() {
    const [desiredRecipe, setDesiredRecipe] = useState(null);

    const params = useParams();
    console.log(params.recipeId);

    useEffect(() => {
        fetch('https://recept3-bolen.reky.se/recipes/' + params.recipeId)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            setDesiredRecipe(responseData);
        });
    }, [params.recipeId]);

    if (!desiredRecipe) {
        return <p>Loading recipe...</p>;
    }

    const getShortUnit = (unit) => {
        return unitConversionMap[unit] || unit;             // Default to original unit if not in map
    };

    return (
        <div className='main'>
            <div className='container'>

                <h1 className='recipe-title'>{desiredRecipe.title}</h1>

                <div className='image-container'>
                    <img src={desiredRecipe.imageUrl} alt={desiredRecipe.title} className="recipe-image" />
                </div>


                <div className='description-container'>
                    <h2>Beskrivning</h2>
                    <p className='description'>
                        {desiredRecipe.description}
                    </p>
                </div>

                <div className='card-container'>
                    <div className='card'>
                        <h2 className='section-title'>Ingredienser</h2>
                        <ul className='ingredient-list'>
                            {desiredRecipe.ingredients.map((ingredient) => (
                                <li key={ingredient._id}>
                                    <strong>{ingredient.amount} {getShortUnit(ingredient.unit)}</strong> {ingredient.name} 
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='card'>
                        <h2 className='section-title'>Instruktioner</h2>
                        <ol className='instruction-list'>
                            {desiredRecipe.instructions.map(step => <li key={desiredRecipe._id}>{step}</li>)}
                        </ol>
                    </div>

                    <div className='card'>
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
                        <button>Kommentera här!</button>
                    </div>

                    <div className='card'>
                        <h2>Stjärnor</h2>
                        <p className='stars'>★★★★★</p>
                        <button >Recensera</button>
                    </div>
                </div>

                <button><Link to="/" className="no-underline">Hem</Link></button>
            </div>
        </div>
    )
}
