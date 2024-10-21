import React from 'react';
import { Link } from 'react-router-dom';

import style from './RecipeCard.module.css';

// Kör npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { displayStarRating, refactorRecipeTime, renderDifficultyBars } from '../Utils/RecipeCard.jsx';

export default function RecipeCard(props) {

  return (
    <Link to={`/recipes/${props.id}`} className={style['card-link']}>
      <section className={style.card}>
        <div>
          <img src={props.imageUrl} alt={props.title} />
          <ul className={style['recipe-list']}>
            <li key={props.id}>
              <h3>{props.title}</h3>
              <p className={style['desc']}>{props.description}</p>
              <div className={style['stars']}>
                {displayStarRating(props.rating)}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className={style['recipe-list']}>
            <li key={props.id}>
              <ul className={style.details}>
                <li className={style.time}>  <FontAwesomeIcon icon={faClock} />
                  <span>{refactorRecipeTime(props.time)}</span>
                </li>
                <li>
                  {renderDifficultyBars(props.time, style)}
                </li>
              </ul>
            </li>
          </ul>
        </div>        
      </section>
    </Link>
  );
}