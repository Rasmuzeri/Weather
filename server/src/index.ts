import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());

app.use(express.static("client/build"));

app.get("/api/data", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});