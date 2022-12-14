const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./public/js/index.js");

const db = require("./db/db.json");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(clog);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

app.post("/api/color", (req, res) => {

  console.log(`${req.method} request received to add colors`);

    const {} = req.body;

    const pageColors = {
        
    }
  fs.readFile("./db/db.json", "utf8", (err, data) => {});

  
});
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
