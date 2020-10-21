const express = require('express');
const routes = express.Router();
const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "softype" //db name
});

//attempt to connect
con.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});


routes.route("/create").post((req, res) => {
    res.status(200).json({ ok: "test" })
});
routes.route("/retrieve").get((req, res) => {
    res.status(200).json({ ok: "test" })
});
routes.route("/update").put((req, res) => {
    res.status(200).json({ ok: "test" })
});
routes.route("/delete").get((req, res) => {
    res.status(200).json({ ok: "test" })
});
routes.route("/").get((req, res) => {
    res.status(200).send("connected")
});

module.exports = routes;