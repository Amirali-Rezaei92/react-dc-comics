import styles from './BlueBar.module.css';

function BlueBar() {

    const items = [
        { img: "/img/buy-comics-digital-comics.png", text: "DIGITAL COMICS" },
        { img: "/img/buy-comics-merchandise.png", text: "DC MERCHANDISE" },
        { img: "/img/buy-comics-subscriptions.png", text: "SUBSCRIPTIONS" },
        { img: "/img/buy-comics-shop-locator.png", text: "COMIC SHOP LOCATOR" },
        { img: "/img/buy-dc-power-visa.svg", text: "DC POWER VISA" }
    ];

    return (
        <div className={styles.bluebar}>
            <div className="container">
                <div className={styles.itemsWrapper}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.bluebarItem}>
                            <img src={item.img} alt={item.text} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlueBar;
