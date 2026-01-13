import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';         
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import auth from '../../../../../auth/firebase.js';

export default function LogInPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);

            // if user is logged in navigate to their feed
            if(currentUser){
                navigate('/feed');
            }
        });
        return () => unsuscribe();
    }, [navigate]);


    const handleLogIn = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch(error){
            console.error("log in error: ", error.message)
        }
    };

    if (loading) return <h2>Loading ...</h2>

    // when user is not logged in yet
    if (!user){
        return (
            <div>
                <h2>login page</h2>
                <form onSubmit={handleLogIn}>
                    <input name="email" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input name="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Login up</button>
                </form>
            </div>
        );
    }

    // after logging in redirect the user
    return (
        <h1>You are logged IN</h1>
    )
    



    

    
}