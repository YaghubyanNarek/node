import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.static('public')); 
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(express.static("public"));

app.get("/index.html", (req, res) => {
    const filePath = path.join(__dirname, "index.html");

    fs.promises.access(filePath)
        .then(() => {
            res.sendFile(filePath); 
        })
        .catch((err) => {
            console.error("File not found:", err);
            res.status(404).send("File not found");
        });
});

async function getInfo(email, password) {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("example");
        const myCollection = db.collection("products"); 
        await myCollection.insertOne({ email: email, password: password });
        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

app.post("/test", (req, res) => {
    const { email, password } = req.body; 
    if (email && password) {
        getInfo(email, password); 
        res.status(200).json({ message: "Data received and inserted" }); 
    } else {
        res.status(400).json({ error: "Missing email or password" }); 
    }
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
