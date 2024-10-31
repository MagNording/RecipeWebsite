import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import { displayStarRating, renderDifficultyBars } from '../Utils/RecipeCard.jsx';
import { RecipeTime } from '../RecipeMetaData/RecipeTime/RecipeTime.jsx';
import style from './RecipeMetaData.module.css';

export function RecipeMetaData(props) {
    const numberOfIngredients = props.recipe.ingredients.length;
    return (
        <>
            <div>
                <ul className={style['recipe-list']}>
                    <li key={props.recipe.id}>
                    <ul className={style.details}>
                        <li>
                            <RecipeTime timeInMins={ props.recipe.timeInMins }/>
                        </li>
                        <li className={style['ingredients-icon']}>
                            <FontAwesomeIcon icon={faCarrot} size="lg" /> 
                            <span>{numberOfIngredients} ingr</span>
                        </li>    
                        <li>
                            {renderDifficultyBars(props.recipe.timeInMins, style)}
                        </li>
                        <li className={style['stars']}>{displayStarRating(props.recipe.avgRating)}</li>
                    </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}