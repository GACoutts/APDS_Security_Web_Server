import express from "express";
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb";

const router= express.Router();

//getting all records of data ?to populate the site?

router.get("/", async(req,res) => {
    let collection = await db.collection("fruit");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//creating of a record
//Doesnt this need siyte input??
router.post("/upload", async(req,res) => {
let newDocument = {
    user: req.body.user,
    content: req.body.content,
    image: req.body.image
};
let collection = await db.collection("fruit");
let results = await collection.insertOne(newDocument);
res.send(results).status(204);
});

