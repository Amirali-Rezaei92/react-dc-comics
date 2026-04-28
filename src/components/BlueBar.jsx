
import card-bluebar from './card-bluebar';

function BlueBar() {
    return (
    <div style={{ backgroundColor: 'rgb(47, 164, 215)', color: 'white', height: '140px', width: '100%' }} className="flex p-3 justify-content-around ">
        <div className="flex justify-content-start align-items-center gap-2" > 
            <img src="/img/buy-comics-digital-comics.png" alt="" style={{width:'50px'}}/>
        <span>DIGITAL COMICS</span>
        </div>
        
    </div>)
}
export default BlueBar;