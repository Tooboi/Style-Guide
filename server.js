const express = require("express");
const path = require("path");
// const index = require("./public/js/index.js");
const db = require("./db/db.json");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile("./public/index.html"));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });



app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));