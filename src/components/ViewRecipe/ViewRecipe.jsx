import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import CommentList from './CommentList.jsx';

import style from './ViewRecipe.module.css';

import RecipeRating from './Ratings';

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
    const [recipeRating, setRecipeRating] = useState(0);
    const [thankYouMessage, setThankYouMessage] = useState(false);
    const [comments, setComments] = useState([]);


    const params = useParams();
    console.log(params.recipeId);
    
    useEffect(() => {

        fetch('https://recept3-bolen.reky.se/recipes/' + params.recipeId + '/comments')
        .then((response) => response.json())
        .then((responseData) => {
            setComments(responseData);
        })
        .catch((error) => {
            console.error("Error fetching comments:", error);
        });
    }, []);

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

  
    



    const handleStarReview = () => {

        if (recipeRating === 0) {
            return
        }

        console.log(recipeRating + " stars");

        // Här ska en fetch-request göra till en API som sparar ratingen

        fetch('https://recept3-bolen.reky.se/recipes/' + params.recipeId + '/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: recipeRating
            })

        })
            .then(response => {
                if (response.ok) {
                    setThankYouMessage(true);
                }
            })
            .catch(err => {
                console.error('Error saving rating:', err);
            })

    }

    return (
        <div className={style.main}>
            <div className={style.container}>

                <h1 className={style['recipe-title']}>{desiredRecipe.title}</h1>
                <div className={style['image-container']}>
                    <img src={desiredRecipe.imageUrl} alt={desiredRecipe.title} className={style['recipe-image']} />
                </div>
                <h5>Kategorier: {desiredRecipe.categories.join(', ')}</h5>
                <div className={style['description-container']}>
                    <h2>Beskrivning</h2>
                    <p className={style.description}>
                        "{desiredRecipe.description}"
                    </p>
                </div>

                <div className={style['card-container']}>
                    <div className={style.card}>
                        <h2 className={style['section-title']}>Ingredienser</h2>
                        <p className={style['section-text']}>(4 portioner)</p>
                        <ul className={style['ingredient-list']}>
                            {desiredRecipe.ingredients.map((ingredient) => (
                                <li key={ingredient._id}>
                                    <strong>{ingredient.amount} {getShortUnit(ingredient.unit)}  </strong>{ingredient.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.card}>
                        <h2 className={style['section-title']}>Instruktioner</h2>
                        <ol className={style['instruction-list']}>
                            {desiredRecipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
                        </ol>
                        <FontAwesomeIcon icon={faUtensils} size="2x" style={{ marginTop: '20px', color: '#E63946' }} />
                    </div>
                </div>

                <div className={style['card-container']}>
                    <div className={`${style['card']} ${style['button-card-container']} ${style['container1']}`}>
                        <div>
                            <h2>Kommentarer</h2>
                            <CommentList comments={comments} />
                        </div>

                        <button>
                            <Link to={`/recipes/${params.recipeId}/comments`} className={style['no-underline']}>
                                Kommentera
                            </Link>
                        </button>
                    </div>

                    <div className={`${style['card']} ${style['button-card-container']} ${style['container2']}`}>
                        <div>
                            <h2>Vad tycker du ?</h2>
                            <div>
                                <p className={style['rating-text']}><i>Glöm inte att recensera eller lämna en kommentar.</i></p>
                                <p><i>Det kommer att hjälpa oss att bli ännu bättre.</i></p>
                            </div>
                            <RecipeRating setRecipeRatings={setRecipeRating} />
                        </div>
                        {thankYouMessage ? (
                            <p className={style['thank-you-message']}>Tack för din recension!</p>
                        ) : (
                            <button className={style['rating-button']} onClick={handleStarReview}>
                                Recensera
                            </button>
                        )}
                    </div>
                </div>

                <button><Link to="/" className={style['no-underline']}>Hem</Link></button>
            </div>
        </div>
    )
}

