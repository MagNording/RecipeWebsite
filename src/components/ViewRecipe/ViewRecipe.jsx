import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import style from './ViewRecipe.module.css';

import RecipeRating from './Ratings';
import CommentList from './CommentList.jsx';
import { fetchCommentsByRecipeId, fetchRecipeById, saveRecipeRating, getShortUnit } from '../Utils/ViewRecipe.jsx';

export default function ViewRecipe() {
    const [desiredRecipe, setDesiredRecipe] = useState(null);
    const [recipeRating, setRecipeRating] = useState(0);
    const [thankYouMessage, setThankYouMessage] = useState(false);
    const [comments, setComments] = useState([]);
    const [ingredientStates, setIngredientStates] = useState([]);

    const params = useParams();
    
    // getting recipe by Id
    useEffect(() => {
        const loadRecipe = async () => {
            const recipe = await fetchRecipeById(params.recipeId);
            setDesiredRecipe(recipe);

            if (recipe) {
                setIngredientStates(
                    recipe.ingredients.map((ingredient) => {
                        return {
                            _id: ingredient._id,
                            name: ingredient.name,
                            amount: ingredient.amount,
                            unit: ingredient.unit,
                            checked: false
                        };
                    })
                );        
            }
        };

        loadRecipe();
    }, [params.recipeId]);

    // getting comments of a recipe by recipeId
    useEffect(() => {
        const loadComments = async () => {
            const comments = await fetchCommentsByRecipeId(params.recipeId);
            setComments(comments);
        }

        loadComments();
    }, [params.recipeId]);

    if (!desiredRecipe) {
        return <p>Loading recipe...</p>;
    }

    // handling star-ratings
    const handleStarRating = async () => {
        if (recipeRating === 0) {
            return;
        }

        const isSaved = await saveRecipeRating(params.recipeId, recipeRating);
        if (isSaved) {
            setThankYouMessage(true);
        }
    }

    const handleCheckboxChange = (ingredientId) => {
        setIngredientStates((prevState) =>
            prevState.map((ingredient) =>
                ingredient._id === ingredientId
                    ? { ...ingredient, checked: !ingredient.checked }      // spread operator means all other properties of the ingredient object
                    : ingredient
            )
        );
    };

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
                        <p className={style['section-text']}>(6 portioner)</p>
                        <ul className={style['ingredient-list']}>
                            {ingredientStates.map((ingredient) => (
                                <li key={ingredient._id} className={style['ingredient-item']}>
                                    <input 
                                        type="checkbox" 
                                        className={style['ingredient-checkbox']}
                                        checked={ingredient.checked}
                                        onChange={() => handleCheckboxChange(ingredient._id)} 
                                    />
                                    <strong>{ingredient.amount} {getShortUnit(ingredient.unit)} </strong>
                                    <span>{ingredient.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.card}>
                        <h2 className={style['section-title']}>Gör så här</h2>
                        <ol className={style['instruction-list']}>
                            {desiredRecipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
                        </ol>
                        <FontAwesomeIcon icon={faUtensils} className="utensils-icon" size="2x" style={{ marginTop: '0.3em', color: '#E63946', fontSize: '2rem' }} />
                    </div>
                </div>

                <div className={style['card-container']}>
                    <div className={`${style['card']} ${style['button-card-container']} ${style['container1']}`}>
                        <div>
                            <h2>Kommentarer <span>({comments.length})</span></h2>
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
                            <button className={style['rating-button']} onClick={handleStarRating}>
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
