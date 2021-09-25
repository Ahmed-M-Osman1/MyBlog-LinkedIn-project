import React, {useState} from 'react';


const AddCommentForm =({ articleName, setArticleInfo })=>{
    const [username,setUsername]=useState('');
    const [commentText,setCommentText]=useState('');

    const addComment = async () => {
        const result = await fetch (`/api/articles/${articleName}/add-comment`,{
            method: 'POST',
            body: JSON.stringify({ username, text: commentText}),
            Headers: {
                'Content-Type':'application/json'
            }
        })
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }
    return (
    <div className="add-comment-form">
        <h3>Add Comment</h3>
        <label>
            Name:
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label>
            Comment:
    <textarea rows="4" cols="50" value={commentText} onChange={(e)=>setCommentText(e.target.value)}/>
        </label>
    <button onClick={()=>addComment()}>Add Comment</button>
    </div>
    )
}

export default AddCommentForm