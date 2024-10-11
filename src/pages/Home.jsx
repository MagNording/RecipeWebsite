import { useState, useEffect } from 'react';

import { fetchRecipes, getAllCategories, fetchRecipesByCategory } from '../components/Utils';

import HomeHeader from "../components/Header/HomeHeader";
import CategoriesBar from "../components/Categories/CategoriesBar";
import SearchBar from "../components/Search/SearchBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function HomePage() {

    const [availableRecipes, setAvailableRecipes] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        const recipes = await fetchRecipes();
        setAvailableRecipes(recipes);           // get all available recipes from database
        setAvailableCategories(getAllCategories(recipes));   // get categories from all recipes
    };

    const handleCategoryClick = async (selectedCategory) => {
        console.log(selectedCategory);

        if (selectedCategory == null) {
            loadRecipes();
        } else {
            const recipes = await fetchRecipesByCategory(selectedCategory);
            setAvailableRecipes(recipes);
        }
    };

    const handleSearch = (input) => {
        console.log(input);

        if (input === '') {
            loadRecipes();         // if the input is empty, i.e. no search term available
        } else {
            const filteredRecipes = availableRecipes.filter(recipe =>
                recipe.title.toLowerCase().includes(input.toLowerCase())
            );
            
            setAvailableRecipes(filteredRecipes);
        }
    };

    return (
        <div className='body'>
            <HomeHeader />
            <CategoriesBar categories={availableCategories} onCategorySelection={handleCategoryClick}/>
            <SearchBar onSearch={handleSearch}/>
            <Main recipes={availableRecipes}/>
            <Footer />
        </div>
    );
}