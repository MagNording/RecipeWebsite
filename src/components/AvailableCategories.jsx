import { useState, useEffect } from 'react';

export default function AvailableCategories() {
    const [availableCategories, setAvailableCategories] = useState([]);


    useEffect(() => {
        fetch('https://recept3-bolen.reky.se/recipes')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            const categoriesArray =  responseData.map(recipe => recipe.categories) ;
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

            setAvailableCategories(availableCategories);
        })
    }, []);

    return (
        <>
            {availableCategories.length > 0 ? (
                <ul className='nav-list'>
                    {availableCategories.map((item, index) => {
                    return <li key={index}><button className='category'>{item}</button></li>;
                    })}
                </ul>
            ) : (
                <p>Loading categories...</p>
            )}
        </>
    );
}