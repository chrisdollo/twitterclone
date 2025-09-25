import "./WelcomeUserPage.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import SignUpPage from "../SIgnUpPage/SignUpPage.jsx";
import LogInPage from '../LoginPage/LogInPage.jsx';


export default function WelcomeUserPage(){
    return (
        <div>
            <h1>Welcome to helacious</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias, ipsam pariatur doloremque aliquam at? Illo similique quia corporis, illum quaerat rerum laudantium deserunt tempore repudiandae voluptas adipisci sint quae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem unde sapiente eum architecto totam, facilis ut quidem quisquam ab corporis eos amet quae voluptatem consequatur possimus veritatis. Et, vitae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur, laboriosam unde inventore, maxime eveniet adipisci doloremque, aliquam optio totam architecto officia est autem omnis sed. Sit quasi saepe earum! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex iure libero provident quidem aliquam consectetur, nam doloribus possimus voluptate eos voluptas natus suscipit dolor fugit quasi accusantium rerum fuga.</p>
            <h2>Be a part of the adventure</h2>

            <p>jhnijkj</p>

            <Router>
                <nav>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">LogIn Up</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
                    <Route path="/login" element={<LogInPage></LogInPage>}></Route>
                </Routes>
            </Router>

        </div>

    )
}