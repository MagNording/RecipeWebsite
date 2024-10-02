import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ViewRecipe.module.css';


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
        <div className={style.main}>
            <div className={style.container}>

                <h1 className={style['recipe-title']}>{desiredRecipe.title}</h1>

                <div className={style['image-container']}>
                    <img src={desiredRecipe.imageUrl} alt={desiredRecipe.title} className={style['recipe-image']} />
                </div>


                <div className={style['description-container']}>
                    <h2>Beskrivning</h2>
                    <p className={style.description}>
                        {desiredRecipe.description}
                    </p>
                </div>

                <div className={style['card-container']}>
                    <div className={style.card}>
                        <h2 className={style['section-title']}>Ingredienser</h2>
                        <ul className={style['ingredient-list']}>
                            {desiredRecipe.ingredients.map((ingredient) => (
                                <li key={ingredient._id}>
                                    <strong>{ingredient.amount} {getShortUnit(ingredient.unit)}</strong> {ingredient.name} 
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.card}>
                        <h2 className={style['section-title']}>Instruktioner</h2>
                        <ol className={style['instruction-list']}>
                            {desiredRecipe.instructions.map(step => <li key={desiredRecipe._id}>{step}</li>)}
                        </ol>
                    </div>

                    <div className={style.card}>
                        <h2>Kommentarer</h2>
                        <ul className={` ${style['scroll-list']} ${style.comments}`}>
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

                    <div className={style.card}>
                        <h2>Stjärnor</h2>
                        <p className={style.stars}>★★★★★</p>
                        <button >Recensera</button>
                    </div>
                </div>

                <button><Link to="/" className={style['no-underline']}>Hem</Link></button>
            </div>
        </div>
    )
}
