import {createPost} from './api/api'
import { useState } from 'react';


function PostForm({user}) {

    

    const [content, setContent] = useState("")

    console.log("Here", content)


    function handleSubmit(e) {

        console.log("Handle is being called")
        e.preventDefault();

        // post content 
        createPost(user.id, content);

        // empty out the UI
        setContent("");

        console.log("Form submitted");
    }

    return (
         <form className="post-form"
            onSubmit ={handleSubmit}>

            <textarea
                className="post-input"
                value={content}
                placeholder="Say something hellacious..."
                onChange={(e) => setContent(e.target.value)}
            />

            <button 
                type="submit" 
                className="post-submit"
                
                >
                    Post
            </button>
        </form>
    )
}


export default PostForm
 
 
 
