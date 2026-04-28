import navLinks from '../data/NavLinks';
import styles from './Header.module.css';

function Header() {
    return (
        <nav className='flex container justify-content-between'>
            <div >
                <img src="/img/dc-logo.png" alt="" className='mt-3 w-75' />
            </div>
            <ul className='flex gap-5 justify-content-around align-items-center mb-0 '>
                {navLinks.map((item, index) => {
                    console.log(item);

                    return (
                        <div className={styles.menu}>
                            <li key={index}>{item}</li>
                        </div>)
                }
                )}
            </ul>
        </nav>
    )
}
export default Header;