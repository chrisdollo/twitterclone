import {useState} from 'react';

// function from firebase, It creates a new user account using an email and password
import {signInWithEmailAndPassword} from 'firebase/auth';

// gives access to firebase user authentication services
import auth from '../../../../../auth/firebase.js';

export default function LogInPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let isLoggedIn = false;

    const handleLogIn = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            isLoggedIn = true;
            console.log("loged in")
        } catch(error){
            console.error("log in error: ", error.message)
        }
    };

    if (!isLoggedIn){

        return (
            <div>
                <form onSubmit={handleLogIn}>
                    <input name="email" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input name="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Login up</button>
                </form>
            </div>
        )
    }

    else{
        return (
            <h1>You are logged IN</h1>
        )
    }



    

    
}