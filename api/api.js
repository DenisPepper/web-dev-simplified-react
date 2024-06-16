import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000

app.use(cors());


app.get('/posts', (req, res) => {
    res.json([{ id: 1, title: 'post 1' }, { id: 2, title: 'post 2' }]);
})

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'user 1' }, { id: 2, name: 'user 2' }]);
})

app.get('/todos', (req, res) => {
    res.json([{ id: 1, title: 'to do 1' }, { id: 2, title: 'to do 2' }]);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})