import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function createRecipeCard(content) {
    return(
      <RecipeCard
        key={content._id}
        id={content._id}
        rating={content.avgRating}
        imageUrl={content.imageUrl}
        title={content.title}
        description={content.description}
        time={content.timeInMins}
      />
    );
}  

export default function AvailableRecipes({ searchTerm }) {
    const [availableRecipes, setAvailableRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recept3-bolen.reky.se/recipes')
        .then((response) => response.json())
        .then((responseData) => {
            setAvailableRecipes(responseData);
            setFilteredRecipes(responseData);
        })
    }, []);

    useEffect(() => {
        const filtered = availableRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecipes(filtered);
    }, [searchTerm, availableRecipes]);

    return (
        <>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map(createRecipeCard)
            ) : (
                <p>No recipes found. Try a different search term.</p>
            )}
        </>
    );
}