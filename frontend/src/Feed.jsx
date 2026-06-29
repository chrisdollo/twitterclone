import { useState, useEffect} from 'react';
import { getPosts } from './api/api';
import PostCard from './PostCard';
import './Feed.css'


function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])



    return (

        <div className="feed">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    user={post.users.display_name}
                    content={post.content}
                />
            ))}
        </div>
        
        
    )
}


export default Feed