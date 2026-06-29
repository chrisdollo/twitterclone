import { followUser, unfollowUser } from '../api/api'

function FollowButton({ currentUserId, targetUserId, isFollowing, onRefresh }) {

    async function handleClick() {
        if (isFollowing) {
            await unfollowUser(currentUserId, targetUserId)
        } else {
            await followUser(currentUserId, targetUserId)
        }
        // tell the parent to reload the following list
        onRefresh()
    }

    return (
        <button className="follow-btn" onClick={handleClick}>
            {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    )
}

export default FollowButton
