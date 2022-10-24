// import { Link } from 'react-router-dom';
import '../App.css';

export default function Header () {
    return (
        <>
            <nav className="nav-bar">
                <p>BB <span>Fitness</span></p>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </>
    );
}