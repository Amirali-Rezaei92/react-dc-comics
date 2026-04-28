import styles from './Card.module.css';

function Card({ thumb, title }) {
    return (
        <div className={styles.card}>
            <img src={thumb} alt={title} />
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
}

export default Card;
