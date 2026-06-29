import { unfollowUser, followUser } from '../api/api'
import './DisplayFollow.css'

function DisplayFollowing({ following, users, currentUserId, onRefresh }) {
    const followingUsers = users.filter(u => following.includes(u.id))

    return (
        <div className="display-following">
            <h3>Following</h3>
          
            {

            /* if no followers */
            followingUsers.length === 0 ? (
                <p className="empty">Not following anyone yet.</p>
                
            ) : (

                // if followers
                <ul>
                    {followingUsers.map(user => (
                        <li key={user.id}>
                            <span>{user.display_name}</span>
                            <button onClick={async () => {
                                await unfollowUser(currentUserId, user.id)
                                onRefresh()
                            }}>
                                Unfollow
                            </button>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

function DisplayFollower({ followers, users }) {
    const followerUsers = users.filter(u => followers.includes(u.id))

    return (
        <div className="display-followers">
            <h3>Followers</h3>
            {followerUsers.length === 0 ? (
                <p className="empty">No followers yet.</p>
            ) : (
                <ul>
                    {followerUsers.map(user => (
                        <li key={user.id}>
                            <span>{user.display_name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}


function DisplayAllUsers({users, currentUserId, onRefresh}) {

    return (
        <div className="display-followers">
            <h3>Users</h3>
            {users.length === 0 ? (
                <p className="empty">No users yet.</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <span>{user.display_name}</span>

                            <button onClick={async () => {
                                await followUser(currentUserId, user.id)
                                onRefresh()
                            }}>
                                Follow
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

function DisplayFollow({ following, followers, users, currentUserId, onRefresh }) {
    return (
        <div className="display-follow">
            <DisplayFollowing
                following={following}
                users={users}
                currentUserId={currentUserId}
                onRefresh={onRefresh}
            />

            <DisplayFollower
                followers={followers}
                users={users}
            />

            <DisplayAllUsers
                users={users}
                currentUserId={currentUserId}
                onRefresh={onRefresh}
            />
        </div>
    )
}

export default DisplayFollow
