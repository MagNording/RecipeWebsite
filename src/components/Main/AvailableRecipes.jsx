import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function createRecipeCard(content) {
    return(
      <RecipeCard
        key={content._id}
        id={content._id}
        imageUrl={content.imageUrl}
        title={content.title}
        description={content.description}
        time={content.timeInMins}
      />
    );
}  

export default function AvailableRecipes() {
    const [availableRecipes, setAvailableRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recept3-bolen.reky.se/recipes')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            setAvailableRecipes(responseData);
        })
    }, []);

    return (
        <>
            {availableRecipes.length > 0 ? (
                availableRecipes.map(createRecipeCard)
            ) : (
                <p>Loading recipes...</p>
            )}
        </>
    );
}