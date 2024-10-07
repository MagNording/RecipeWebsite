import React from 'react';
import { Link } from 'react-router-dom';
import style from './RecipeCard.module.css'
// Kör npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from "react-icons/fa";

function displayStarRating(rating) {
  const colors = {
    orange: "#ec9b19",
    grey: "rgb(192,192,192)"
  }
  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((_, index) => {
        const starFill = Math.min(Math.max(rating - index, 0), 1); // calculate how full this star should be

        return (
          <div key={index} style={{ position: 'relative', width: '24px', height: '24px' }}>
            {/* full grey star as background */}
            <FaStar size={24} color={colors.grey} />
            {/* partially filled star */}
            <FaStar
              size={24}
              color={colors.orange}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                clipPath: `inset(0 ${(1 - starFill) * 100}% 0 0)`, // Clip the star based on the fill percentage
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function RecipeCard(props) {

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
      <ul className={style['recipe-list']}>
        <li key={props.id}>
          <h3>{props.title}</h3>
          <p className={style['desc']}>{props.description}</p>
          <div className={style['stars']}>
            {displayStarRating(props.rating)}
          </div>
          <button className={`${style.button} ${style['recipe-button']}`}><Link to={`/recipes/${props.id}`} className={style['no-underline']}>Visa Recept</Link></button>
          <ul className={style.details}>
            <li className={style.time}>  <FontAwesomeIcon icon={faClock} />
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