import './AvailableCategories.css';

export default function AvailableCategories(props) {
    
    const handleCategoryClick = (event) => {
        props.categoryHandler(event.currentTarget.value);
    }

    return (
        <>
            {props.availableCategories.length > 0 ? (
                <ul className='nav-list'>
                    {props.availableCategories.map((item, index) => {
                    return <li key={index}><button className='category' onClick={handleCategoryClick} value={item}>{item}</button></li>;
                    })}
                </ul>
            ) : (
                <p>Loading categories...</p>
            )}
        </>
    );
}