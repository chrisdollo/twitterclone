import "./WelcomeUserPage.css"
import {Link} from 'react-router-dom';


export default function WelcomeUserPage(){
    return (
        <div>
            <h1>Welcome to Hellacious</h1>
            <h2>Be a part of the adventure</h2>
            <nav>
                <Link to="/signup">Sign Up</Link>
                {' | '}
                <Link to="/login">Log In</Link>
            </nav>

        </div>

    )
}