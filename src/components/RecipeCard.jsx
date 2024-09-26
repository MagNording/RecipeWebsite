import React from 'react';

function RecipeCard(props) {
    return(
        <section className='card'>
          <img src={props.image} alt="Recipe 1" />
          <ul className='recipe-list'>
            <li>
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>
    );
}

export default RecipeCard;