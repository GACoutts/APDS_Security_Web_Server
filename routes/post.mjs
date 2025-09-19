// this is a redo basically of fruit.mjs
//not right still. There is specfics that are diffrent
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
// gets input from post method under hhtp.localhost:3000/fruit/fruit
router.post("/post", async(req,res) => {
let newDocument = {
    name: req.body.name,
    comment: req.body.comment
};
let collection = await db.collection("fruit");
let results = await collection.insertOne(newDocument);
res.send(results).status(204);
});

//this is to update a single thing by id
router.patch("/:id", async(req,res) => {
    const query = {_id: new ObjectId(req.params.id)};
    const updates = {
        $set: {
            name: req.body.name,
            comment: req.body.comment
        }
    };

    let collection = await db.collection("fruit");
    let result = await collection.updateOne(query,updates);

    res.send(result).status(200)
});

//gets single record by id
router.get("/:id", async(req,res) => {
    let collection = await db.collection("fruit");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("not found").status(404);
    else res.send(result).status(200);
});

//deleteing by one
router.delete("/:id", async(req,res) => {
    const query = {_id: new ObjectId(req.params.id)};

    const collection = await db.collection("fruit");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
})
export default router;