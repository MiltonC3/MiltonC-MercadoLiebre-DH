const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve("public")));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("views", "home.html"));
});

app.listen(8080, (req, res) => {
    console.log("listening on: http://localhost:8080");
});
