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
const urlPrefix = '/api'

app.use(express.json());

//this '/' is the root for the site
app.get('/',(req,res) => {
res.send('How will this work for graphics?!?!?!?!?. Tetsting changes');
});

app.get(urlPrefix + '/orders', (req, res)=>{
    const orders = [
        {
            id: "1",
            name: "apple"
        },
        {
            id: "2",
            name: "orange"
        },
        {
            id: "3",
            name: "pear"
        },
        {
            id: "4",
            name: "banana"
        }
    ]
    res.json(
        {
            message: "Fruit",
            orders: orders
        }
    )
});

app.listen(PORT);
