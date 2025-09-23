import {useState} from 'react';


// function from firebase, It creates a new user account using an email and password
import {createUserWithEmailAndPassword} from 'firebase/auth';

// gives access to firebase user authentication services
import auth from '../../../backend/auth/firebase.js';




export default function SignUpPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("signed up")
        } catch(error){
            console.error("sign up error: ", error.message)
        }

        console.log(email)
    };

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Signd up</button>
            </form>
        </div>
    )
}