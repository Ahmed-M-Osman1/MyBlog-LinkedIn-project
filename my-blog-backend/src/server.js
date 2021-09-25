import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';


const app = express();

app.use (express.static(path.join(__dirname,'/build')))
app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser:true })
        const db = client.db('my-blog');
        
        await operations(db);
        
        client.close();} catch (error){
            res.status(200).json({ message: 'Error connect to db',error })
        }
}

app.post('/api/articles/:name', async (req,res)=>{
    withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    res.status(200).json(articleInfo);
}, res)

}),

app.post('/api/articles/:name/upvote', async (req,res)=>{
    withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    await db.collection('articles').updateOne({ name: articleName }, {
        '$set': {
            upvote: articleInfo.upvote +1,
        },
    });
    const UpdateArticleInfo = await db.collection('articles').findOne({ name: articleName })
    res.status(200).json(UpdateArticleInfo);
}, res)

}),

app.post('/api/articles/:name/add-comment', (req,res)=>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        await db.collection('articles').updateOne({ name: articleName },{
            '$set': {
                comment: articleInfo.comment.concat({ username, text })
            }
        })
        const UpdateArticleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(UpdateArticleInfo);
    }, res)
    
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'))
})
app.listen(8000, () => console.log('Listening on port 8000!'))