import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import product from "../models/product.js";

router.post("/sell", auth, async (req,res) => {
    const { id, price, name, image, auction  } = req.body;
    try {
        var val = false;
        if(auction == 'true'){
            val = true;
        }
        const prod = {
            name,
            price,
            owner: req.userId,
            image,
            auction: val ,
            bought: val
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