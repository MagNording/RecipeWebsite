export const fetchRecipes = async () => {
    try {
        const response = await fetch('https://recept3-bolen.reky.se/recipes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes: ', error);
        return [];
    }
}

// get all available categories from database
export function getAllCategories(data) {
    const categoriesArray =  data.map(recipe => recipe.categories) ;
    let mergedCategories = [];
    
    categoriesArray.forEach(element => {
        mergedCategories.push(...element);
    });
                   
    let availableCategories = [];

    mergedCategories.forEach(category => {
        if(!availableCategories.includes(category)) {
            availableCategories.push(category);
        }
    });

    return availableCategories;
}

export const fetchRecipesByCategory = async (selectedCategory) => {
    try {
        const response = await fetch('https://recept3-bolen.reky.se/categories/' + selectedCategory + '/recipes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipes for category: ${category}`, error);
        return [];
    }
}

const unitConversionMap = {
    "gram": "gm",
    "deciliter": "dl",
    "teskedar": "tsk",
    "tesked": "tsk",
    "matsked": "msk",
    "matskedar": "msk",
    "stycken": "st"
};

export const getShortUnit = (unit) => {
    return unitConversionMap[unit] || unit;             // Default to original unit if not in map
};

export const fetchRecipeById = async (recipeId) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipe with id: ${recipeId}`, error);
        return null;
    }
}

export const fetchCommentsByRecipeId = async (recipeId) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching comments for recipe with id: ${recipeId}`, error);
        return [];
    }
}

// Här ska en fetch-request göra till en API som sparar ratingen
export const saveRecipeRating = async (recipeId, recipeRating) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/ratings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: recipeRating }),
        });

        if (response.status === 200) {
            return true;
        } else {
            console.error('Error saving rating:', error);
            return false;
        }

    } catch (error) {
        console.error('Error saving rating:', error);
        return false;
    }
}

// to submit a comment to the database
export const submitComment = async (recipeId, commentData) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });

        if (response.status === 200) {
            return { success: true, message: 'Tack för din kommentar!' };
        } else {
            return { success: false, message: 'Något gick fel. Försök igen.' };
        }
    } catch (error) {
        console.error('Error saving comment:', error);
        return { success: false, message: 'Ett fel uppstod vid sparning av kommentaren.' };
    }
} 

// to reset form fields
export function resetFormFields(setFirstName, setComment, setAnonymous) {
    setFirstName('');
    setComment('');
    setAnonymous(false);
}