import React from 'react';
import { Link } from 'react-router-dom';
import style from './RecipeCard.module.css'
// Kör npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function RecipeCard(props) {

  function categorizeDifficulty(minutes) {
    if (minutes <= 30) {
      return 'Enkel';
    } else if (minutes > 30 && minutes <= 60) {
      return 'Medelsvår';
    } else if (minutes > 60 && minutes <= 90) {
      return 'Svår';
    } else {
      return 'Komplicerad';
    }
  }

  function renderDifficultyBars(minutes) {
    const difficultyLevels = categorizeDifficulty(minutes);
    const numberOfBars = {
      Enkel: 1,
      Medelsvår: 2,
      Svår: 3,
      Komplicerad: 4
    }[difficultyLevels];

    return (
      <div className={style['difficulty-level']}>
        <span className={style['difficulty-text']}>{difficultyLevels}</span>
        <div className={style['difficulty-bars']}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`${style.bar} ${i < numberOfBars ? style.filled : ''}`}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className={style.card}>
      <img src={props.imageUrl} alt={props.title} width={250} height={250} />
      <ul className={style ['recipe-list']}>
        <li key={props.id}>
          <h3>{props.title}</h3>
          <p className={style['desc']}>{props.description}</p>
          <p className={style['stars']}>★★★★★</p>
          <button className={`${style.button} ${style['recipe-button']}`}><Link to={`/recipes/${props.id}`} className={style['no-underline']}>Visa Recept</Link></button>
          <ul className={style.details}>
            <li>  <FontAwesomeIcon icon={faClock} />
              <span> {props.time} min</span>
            </li>
            <li>
              {renderDifficultyBars(props.time)}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default RecipeCard;