import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/index.html", (req, res) => {
  res.send("this is something really interesting");
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
