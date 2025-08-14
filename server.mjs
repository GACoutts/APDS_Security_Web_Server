/*
import http from "http";
//setting port thayt server listens to
const PORT = 3000;

//console.log('This is a thing we can do')

//starting server 
//req = requeust
//res = response
const server = http.createServer((req,res) => {
    res.end('I can wriyte anything! MUAHAHAHHAHAHAHAHAHA')
})

server.listen(PORT)
*/

import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
res.send('How will this work for graphics?!?!?!?!?. Tetsting changes');
});

app.get('/test', (req, res)=>{
    res.send('Endpoint testing with /test endpoint');
});

app.listen(PORT);
