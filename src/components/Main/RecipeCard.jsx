import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal } from '@fortawesome/free-solid-svg-icons';


function RecipeCard(props) {

  function categorizeDifficulty(minutes) {
    if (minutes <= 30) {
      return 'enkel';
    } else if (minutes > 30 && minutes <= 40) {
      return 'medelsvår';
    } else if (minutes > 40 && minutes <= 60) {
      return 'svår';
    } else {
      return 'extrem';
    }
  }

  return (
    <section className='card'>
      <img src={props.imageUrl} alt={props.title} width={250} height={250} />
      <ul className='recipe-list'>
        <li key={props._id}>
          <h3>{props.title}</h3>
          <p className='desc'>{props.description}</p>
          <p className='stars'>★★★★★</p>
          <div className='details'>
            <p><FontAwesomeIcon icon={faClock} /> {props.time} min</p>
            <p><FontAwesomeIcon icon={faSignal} />Tar {categorizeDifficulty(props.time)}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default RecipeCard;