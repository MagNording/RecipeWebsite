import './HomeHeader.css';

function HomeHeader() {
    return (
      <header className='header-top'>
        <h1 className='header-title'>Dessert Heaven</h1>
        <h2 className='header-citation'>"A Taste of Heaven in Every Bite"</h2>
        <h2 className='header-citation'>"Where Every Dessert Tells a Story"</h2>
        <span className='arrow'>&#x25BC;</span>
      </header>
    );
}

export default HomeHeader;