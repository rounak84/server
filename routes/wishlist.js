import express from "express";
const mongoose = require('mongoose')

import wishlist from '../models/wishlist.js';

const app = express();
const portNo = 8080;
const DB_URL =''

app.use(express.json());


app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery',true);
mongoose.connect(DB_Url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result)=>{
            app.listen(portNo)
        })
        .catch((err) => {
            console.log(err);
        });

app.post('/addtowishlist',async (req,res)=>{
    const user_id = req.body.user_id
    const product_id = req.body.product_id

    try {
        wishlist.findone({user_id}).then((value)=>{
            var wish_product = value.list_product; 
            wish_product.forEach(product => {
                if(product == product_id){
                    result={response:'Product already present in the Wishlist'}
                    res.status(200)
                    res.json(result)
                }else{
                    wish_product.push(product_id)
                    try {
                        wishlist.findOneAndUpdate({user_id: user_id}, {
                            list_product:wish_product
                        })
                    } catch (error) {
                        result = {response:'could not update wishlist'}
                        console.log(error)
                        res.status(404)
                        res.json(result)
                    }
                    result={response:'Product is added to the Wishlist'}
                    res.json(result)
                }
            });
        })
    } catch (error) {
        console.log(error)
        result = {response:'error'}
        res.status(400)
        res.json(result)
    };

    
})