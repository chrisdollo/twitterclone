import './PostCard.css'

function PostCard({user, content}) {

    console.log({user, content});

    return (
        <>
            <div className="post-card">
                <div className="post-author">{user}</div>
                <div className="post-content">{content}</div>
            </div>
        </>
    )
}


export default PostCard
