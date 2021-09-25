import React, { useState,useEffect } from 'react'
import articlesContent from './Artical-content';
import NotFoundPage from './NotFoundPage';
import CommentList from '../components/commentList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';
const ArticalPage =({match})=>{ 
    const name = match.params.name;
    const article = articlesContent.find(article => article.name === name)
    
    const [articleInfo, setArticleInfo] = useState({ upvote:0, comment:[] })
    
    useEffect(()=>{ 
    const fetchData = async() => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      setArticleInfo(body)
    }
    fetchData();
    setArticleInfo({ upvote:Math.ceil(Math.random()*10) })
  },[name]);

    if(!article) return <NotFoundPage/>
    
    return (
      <>
        <h1>{article.title}</h1>
          <UpvoteSection articlesName={name} upvote={articleInfo.upvote} setArticleInfo={setArticleInfo}/>
        {article.content.map((para,key)=>(
            <p key={key}>{para}</p>
            ))}
            <CommentList comments={articleInfo.comment}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      </>
    )
    };

export default ArticalPage