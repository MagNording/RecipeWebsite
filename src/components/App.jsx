import '../styles/App.css';
import HomeHeader from './HomeHeader';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Footer from './Footer';
import AvailableRecipes from './AvailableRecipes';

const categoryList = ["category1", "category2", "category3", "category4", "category5"];

function App() {
  return (
    <div className='body'>
      <HomeHeader />
      <NavBar categories={categoryList}/>
      <SearchBar />

      <h2>Populära Bakverk</h2>
      <main className='card-container'>
        <AvailableRecipes />
      </main>

      <Footer />
    </div>
  )
}

export default App;
