const express = require("express");
const path = require("path");

const app = express();
const port = 3000

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views", "home.html"));
});

app.listen(port, (req, res) => {
    console.log(`listening on: http://localhost:${port}`);
});
