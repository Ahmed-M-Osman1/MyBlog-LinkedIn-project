import React from "react";
import {Link} from 'react-router-dom'

const ArticleList = ({articles}) => {
    return (
    <React.Fragment>
    {articles.map((article,key)=>
    <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
    <h2>{article.title}</h2>
        <p>{article.content[0].substring(0,150)} ... </p> 
    </Link>
    )};
    </React.Fragment>
    )
}

export default ArticleList