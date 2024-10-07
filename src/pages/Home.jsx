import { useState, useEffect } from 'react';

import HomeHeader from "../components/Header/HomeHeader";
import CategoriesBar from "../components/NavBar/CategoriesBar";
import SearchBar from "../components/NavBar/SearchBar";
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
            })

            setAvailableCategories(availableCategories);     // get all available categories from database
    }

    const handleCategoryClick = (selectedCategory) => {
        console.log(selectedCategory);       
    }

    return (
        <div className='body'>
            <HomeHeader />
            <CategoriesBar categories={availableCategories} onCategorySelection={handleCategoryClick}/>
            <SearchBar />
            <Main recipes={availableRecipes}/>
            <Footer />
        </div>
    );
}