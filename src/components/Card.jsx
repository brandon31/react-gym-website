import '../App.css';
import PropTypes from 'prop-types';

function Card ({ title, textContent }) {
    return (
        <>
        <div className="card">
            <h1>{title}</h1>
            <p>{textContent}</p>
        </div>
        </>
    );
}

Card.defaultProps = {
    title: "Title",
    textContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam natus sint in quis animi quisquam, atque asperiores, dolores adipisci commodi facere illo! Veniam dolores neque at quidem, sint illum.",
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
}

export default Card;