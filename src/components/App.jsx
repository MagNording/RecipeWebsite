import './App.css';
import HomeHeader from './Header/HomeHeader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import SearchBar from './NavBar/SearchBar.jsx';
import Footer from './Footer/Footer.jsx';
import Main from './Main/Main.jsx';
import CommentForm from '../components/CommentForm'

function App() {
  return (
    <div className='body'>
      {/* <HomeHeader />
      <NavBar />
      <SearchBar />
      <Main />
      <Footer /> */}
      <CommentForm />
    </div>
  )
}

export default App;