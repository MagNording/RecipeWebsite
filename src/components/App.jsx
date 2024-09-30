import '../styles/App.css';
import HomeHeader from './HomeHeader';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className='body'>
      <HomeHeader />
      <NavBar />
      <SearchBar />

      <Main />

      <Footer />
    </div>
  )
}

export default App;