
import '../styles/App.css';
import HomeHeader from './HomeHeader';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Footer from './Footer';
import AvailableRecipes from './AvailableRecipes';


function App() {
  return (
    <div className='body'>
    <HomeHeader />
    <NavBar />
    <SearchBar />

    <main>
      <h2>Populära Bakverk</h2>
      <div className='card-container'>
        <AvailableRecipes />
      </div>
    </main>

    <Footer />
  </div>
  )
}

export default App;
