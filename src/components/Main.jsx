import comics from '../data/comics';
import Card from './Card/Card.jsx';
import './Main.css';


function Main() {
    return (
        <main className="main">
            <div className='baner'>
            </div>
            <div className="container cards-grid ">
                {comics.map((comic, index) => (
                    <Card key={index} thumb={comic.thumb} title={comic.series} />
                ))}
            </div>
            <div>

            </div>
        </main>
    );
}

export default Main;
