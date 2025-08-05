import http from "http"
//setting port thayt server listens to
const PORT = 3000;

//starting server 
//req = requeust
//res = response
const server = http.createServer((req,res) => {
    res.end('I can wriyte anything! MUAHAHAHHAHAHAHAHAHA')
})

server.listen(PORT)