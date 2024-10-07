import AvailableRecipes from './AvailableRecipes';
import './Main.css';

export default function Main(props) {
    return (
        <main>
            <h2>Populära Bakverk</h2>
            <div className='card-container'>
                <AvailableRecipes availableRecipes={props.recipes}/>
            </div>

            <div className="scroll-container">                  {/* upwards arrow symbol */}
                <a className="scroll-button" href="#top">
                    <span>&uarr;</span>
                </a>       
            </div>
        </main>
    );
}