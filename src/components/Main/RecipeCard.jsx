import React from 'react';
import '../Main/RecipeCard.css'
import { Link } from 'react-router-dom';

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
      <div className="difficulty-level">
        <span className="difficulty-text">{difficultyLevels}</span>
        <div className="difficulty-bars">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`bar ${i < numberOfBars ? 'filled' : ''}`}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className='card'>
      <img src={props.imageUrl} alt={props.title} width={250} height={250} />
      <ul className='recipe-list'>
        <li key={props.id}>
          <h3>{props.title}</h3>
          <p className='desc'>{props.description}</p>
          <p className='stars'>★★★★★</p>
          <button className='button recipe-button'><Link to={`/recipes/${props.id}`} className="no-underline">Visa Recept</Link></button>
          <ul className='details'>
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