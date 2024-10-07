import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

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
                filteredRecipes.map((recipe) => (
                    <RecipeCard
                        key={recipe._id}
                        id={recipe._id}
                        rating={recipe.avgRating}
                        imageUrl={recipe.imageUrl}
                        title={recipe.title}
                        description={recipe.description}
                        time={recipe.timeInMins}
                    />
                ))
            ) : (
                <p>Inga recept hittades. Prova en annan sökterm.</p>
            )}
        </>
    );
}