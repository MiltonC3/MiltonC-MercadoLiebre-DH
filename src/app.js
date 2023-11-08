const express = require("express");
const path = require("path");

const app = express();
const port = 3000

app.use(express.static(path.resolve("src/public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("src/views", "home.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("src/views", "login.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("src/views", "register.html"));
});

app.listen(port, (req, res) => {
    console.log(`Servidor escuchando en: http://localhost:${port}`);
});
