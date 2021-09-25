import React from 'react'
import articles from '../pages/Artical-content';

const UpvoteSection =({ articlesName, upvote, setArticleInfo})=> {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articlesName}/upvote`, {
            method: 'POST',
        })
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
    <div id="upvotes-section">
        <button onClick={()=> upvoteArticle()}>Add upvote</button>
        <p>This post has been upvoted {upvote} time</p>
    </div>
    );
};

export default UpvoteSection