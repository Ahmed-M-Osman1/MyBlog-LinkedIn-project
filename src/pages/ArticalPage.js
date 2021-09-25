import React from 'react'
import articlesContent from './Artical-content';
import NotFoundPage from './NotFoundPage';

const ArticalPage =({match})=>{ 
    const name = match.params.name;
    const article = articlesContent.find(article => article.name === name)
    if(!article) return <NotFoundPage/>

    return (
      <>
        <h1>{article.title}</h1>
        {article.content.map((para,key)=>(
            <p key={key}>{para}</p>
            ))}
      </>
    )
    };

export default ArticalPage