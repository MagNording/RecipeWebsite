import React from 'react';

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
            <p><strong>under {props.time} min {categorizeDifficulty(props.time)}</strong></p>
          </div>
        </li>
      </ul>

    </section>
  );
}

export default RecipeCard;