import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ViewRecipe from '../src/components/ViewRecipe';
{ /*
import HomeHeader from './Header/HomeHeader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import SearchBar from './NavBar/SearchBar.jsx';
import Footer from './Footer/Footer.jsx';
import Main from './Main/Main.jsx';
import CommentForm from '../components/CommentForm'   */ }

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/recipes/:recipeId', element: <ViewRecipe />}
    ]
  }
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;