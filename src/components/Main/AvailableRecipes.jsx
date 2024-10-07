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

export default function AvailableRecipes(props) {
    return (
        <>
            {props.availableRecipes.length > 0 ? (
                props.availableRecipes.map(createRecipeCard)
            ) : (
                <p>Inga recept hittades. Prova en annan sökterm.</p>
            )}
        </>
    );
}