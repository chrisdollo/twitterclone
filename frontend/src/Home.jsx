import './Home.css'
import UserToggle from './components/UserToggle.jsx'
import DisplayFollow from './components/DisplayFollow.jsx'
import PostForm from './PostForm'
import { useState, useEffect } from 'react'
import { getUsers, getFollowing, getFollowers } from './api/api'
import PostCard from './PostCard.jsx'
import Feed from './Feed.jsx'

function Home() {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    // const [currentPost, setCurrentPost] = useState(null)

    // load all users when the component mounts
    useEffect(() => {
        getUsers().then(setUsers)
    }, [])

    // reload following and followers whenever the current user changes
    useEffect(() => {

        if (currentUser) {
            getFollowing(currentUser.id).then(setFollowing)
            getFollowers(currentUser.id).then(setFollowers)
        } else {
            setFollowing([])
            setFollowers([])
        }

        console.log(currentUser)
    }, [currentUser])




    function refreshFollowing() {
        if (currentUser) {
            getFollowing(currentUser.id).then(setFollowing)
            getFollowers(currentUser.id).then(setFollowers)
        }
    }

    return (
        <div className="home">

            <header className="home-header">
                <h1>Hellacious</h1>
                <div className="current-user">
                    <span className="current-user-label">Logged in as </span>
                    <span className="current-user-name">
                        {currentUser ? currentUser.display_name : 'nobody'}
                    </span>
                </div>
            </header>

            <div className="home-body">

                <aside className="home-left">
                    <UserToggle
                        users={users}
                        onSelect={setCurrentUser}
                    />
                </aside>

                <main className="home-main">
                    
                    <PostForm
                        user={currentUser}
                    />

                    <Feed />
                    
                    
                    

                   
    

                    {/* <section className="feed-section">
                        <h2>Feed</h2>
                        <div className="feed">
                            <div className="post-card">
                                <div className="post-author">anonymousGangsta</div>
                                <div className="post-content">This is some random stuff being posted</div>
                            </div>
                        </div>
                    </section> */}
                </main>

                <aside className="home-right">
                    {/* important: only shown when a user is selected */}
                    {currentUser && (
                        <DisplayFollow
                            following={following}
                            followers={followers}
                            users={users}
                            currentUserId={currentUser.id}
                            onRefresh={refreshFollowing}
                        />
                    )}
                </aside>

            </div>

        </div>
    )
}

export default Home
