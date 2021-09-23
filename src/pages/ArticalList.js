import React from 'react'
import artircalContent from "./Artical-content"
import {Link} from 'react-router-dom'

const ArticalList =()=> (
    <>
    <h1>Articles</h1>
    {artircalContent.map((article,key)=>
    <div>
        <Link className="article-list-item" key={key} to={"/article/"+`${article.name}`}>
        <h2>{article.title}</h2>
            <p>{article.content[0].substring(0,150)} ... </p>
        </Link>
    </div>
        )}
    </>
);

export default ArticalList