import { useState, useEffect } from 'react';

import HomeHeader from "../components/Header/HomeHeader";
import CategoriesBar from "../components/Categories/CategoriesBar";
import SearchBar from "../components/Search/SearchBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function HomePage() {

    const [availableRecipes, setAvailableRecipes] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        fetch('https://recept3-bolen.reky.se/recipes')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            setAvailableRecipes(responseData);      // get all available recipes from database
            getAllCategories(responseData);
        })
    }, []);

    // get all available categories from database
    function getAllCategories(data) {
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

        setAvailableCategories(availableCategories);     
    }

    const handleCategoryClick = (selectedCategory) => {
        console.log(selectedCategory);

        fetch('https://recept3-bolen.reky.se/categories/' + selectedCategory + '/recipes')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            setAvailableRecipes(responseData);      // get all recipes in a specific category from database
        })

        const selectedRecipes = availableRecipes.filter(recipe => recipe.categories.includes(selectedCategory));
        setAvailableRecipes(selectedRecipes);
    }

    return (
        <div className='body'>
            <HomeHeader />
            <CategoriesBar categories={availableCategories} onCategorySelection={handleCategoryClick}/>
            <Main recipes={availableRecipes}/>
            <Footer />
        </div>
    );
}