import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import product from "../models/product.js";

router.post("/sell", auth, async (req,res) => {
    const { id, price, name, image  } = req.body;
    try {
        const prod = {
            name,
            price,
            owner: id,
            image
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