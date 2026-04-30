
import Card from './Card/Card.jsx';
import './Main.css';


function Main({comics}) {
    return (
        <main className="main">
            <div className='baner'>
            </div>
            <div className='lable container'>
                <span className='badge text-bg-primary rounded-0 p-2 fs-3'>CURRENT SERIES</span>
            </div>
            <div className="container cards-grid ">
                {comics.map((comic, index) => (
                    <Card key={index} thumb={comic.thumb} title={comic.series} />
                ))}
            </div>
            <div className='button-loadMore'>
                <button className='loadMore'>LOAD MORE</button>
            </div>

        </main>
    );
}

export default Main;
