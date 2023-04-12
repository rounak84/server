import express from "express";
const router = express.Router();

import product from "../models/product.js";

router.post("/sell", async (req,res) => {
    const { id, price, name  } = req.body;
    try {
        const prod = {
            name,
            price,
            owner: id
        }
        product.create(prod).then((value) => {
            const result = {"response":"Successful"}
            res.status(200).json(result);
        })
    } catch (error) {
        const result = {"error":"Unsuccessful"}
        res.status(404).json(result);
    }
    


})

export default router;