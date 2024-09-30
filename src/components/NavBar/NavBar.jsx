import './NavBar.css';
import AvailableCategories from './AvailableCategories';

function NavBar() {
    return (
        <nav className='nav'>
          <hr />
          <AvailableCategories />
          <hr />
        </nav>
    );
}

export default NavBar;