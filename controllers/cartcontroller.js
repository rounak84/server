import express from 'express';

import cart from '../models/cart.js'
import product from '../models/product.js';

const router = express.Router();


export const getcartdata = async(req,res)=>{
    try{        
        // console.log(req.body)
        const cartitem = await cart.find({"user":req.params.uid});
        // console.log(cartitem);
        // req.params vs req.userId
        res.status(200).json(cartitem);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const updatecartdata = async (req,res)=>{
    try{
        const { pid } = req.body
        const id = req.userId
        cart.findOne({"user":id}).then((value) => {
            var cart_list = value.products
            var total_rate = value.total_price
            product.findById(pid).then((prod) => {
                const rate = prod.price
                total_rate += rate
                cart_list.push(pid);
                cart.updateOne({"user":id},{
                    total_price: total_rate,
                    products: cart_list
                }).then((value)=>{
                    const result = {"response":"Updated Cart"}
                    res.status(200).json(result)
                })
            });
        });
    }catch(e){
        console.log(e);
        const result = {"response":"Error updating cart"}
        res.status(404).json(result)
    }
};

export const deletecartdata = async (req,res)=>{
    try{
        await cart.deleteOne({user:req.userId})
        res.status(200).json({message:"deleted"});
    }catch(error){
        res.status(404).json({message:error.message});
    }
};


export default router;