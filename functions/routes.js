const express = require('express');
const routes = express.Router();
const { Products, Sales } = require("../models/product")

routes.route("/login").post((req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "admin") {
        res.status(200).json({ message: "login success" })

    } else {
        res.status(401).json({ message: "invalid credentials" })
    }
});

routes.route("/create").post((req, res) => {
    console.log(req.body)
    let newProduct = new Products(req.body)
    newProduct.save().then(product => {
            res.status(200).send(product);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

routes.route("/retrieve").get((req, res) => {
    Products.find({}, (error, products) => {
        if (error) return res.status(500).send(error);
        return res.json({ "data": products });
    });
});

routes.route("/update/:id").post((req, res) => {
    let productId = req.params.id;
    Products.findByIdAndUpdate(productId, { $set: req.body }, (error, product) => {
        if (error) return res.status(500).send(error);
        return res.json({ "last_update_product": product });
    });
});

routes.route("/delete/:id").get((req, res) => {
    let productId = req.params.id;
    Products.findByIdAndRemove(productId, (error, product) => {
        if (error) return res.status(500).send(error);
        return res.json({ p: "deleted a product" });
    })
    res.status(200).json({ ok: "test" })
});

routes.route("/").get((req, res) => {
    res.status(200).send("connected")
});

module.exports = routes;