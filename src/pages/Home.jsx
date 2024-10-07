import HomeHeader from "../components/Header/HomeHeader";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/NavBar/SearchBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    return (
        <div className='body'>
            <HomeHeader />
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}