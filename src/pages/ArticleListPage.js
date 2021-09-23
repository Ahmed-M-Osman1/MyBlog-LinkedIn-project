import React from 'react'
import ArticleList from '../components/ArticleList';
import ArticleContent from './Artical-content'
const ArticleListPage =()=> (
    <React.Fragment>
    <h1>Articles</h1>
    <ArticleList articles={ArticleContent}/>
    </React.Fragment>
);

export default ArticleListPage