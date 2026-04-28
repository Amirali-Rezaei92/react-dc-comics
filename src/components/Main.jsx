import comics from '../data/comics';
import Card from './Card/Card';
import './Main.css';

function Main() {
    return (
        <main className="main">
            <div className="container cards-grid">
                {comics.map((comic, index) => (
                    <Card key={index} thumb={comic.thumb} title={comic.title} />
                ))}
            </div>
        </main>
    );
}

export default Main;
