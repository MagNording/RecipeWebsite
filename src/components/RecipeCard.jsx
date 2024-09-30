import React from 'react';

function RecipeCard(props) {
    return(
        <section className='card'>
          <img src={props.imageUrl} alt={props.title} width={250} height={250} />
          <ul className='recipe-list'>
            <li key={props._id}>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
              <button>View Recipe</button>
            </li>
          </ul>
        </section>
    );
}

export default RecipeCard;