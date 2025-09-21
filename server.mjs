import https from "https";
//gives us the ability to read and right files(how we do the . pem files)
import fs from "fs";
import fruits from "./routes/fruit.mjs";
import posts from "./routes/posts.mjs";
import express from "express";
//cross origin resource sharing
//secuirty feature that prebents web pages form making request to other things
//prevents malicious requests
import cors from "cors";

const PORT = 3001;
const app = express();

const options = {
    key: fs.readFileSync('keys/privateKey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
};

app.use(cors());
app.use(express.json());
//that '*' is a sucuity concern 
//dont knwp why yet

//the next send the stuff to the next thing that needs to happen
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});
//using route model for basis
//app.use("/fruit", fruits);
//set up the route for fruits
//app.route("/fruit", fruits);
app.use("/posts", posts);
app.route("/posts", posts);

//options needs to go through the create server for the keys stuff
let server = https.createServer(options, app);
console.log(PORT);

server.listen(PORT);