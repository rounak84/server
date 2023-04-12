import express from 'express';

import product from '../models/product.js';

const router = express.Router();


export const addToAuction = async(req,res)=>{
    // const id = req.userId;
    const { pid, endtime, id} = req.body
    try{       
        const p = await product.findById(pid) 
        product.findByIdAndUpdate(pid,{
            auction: true,
            bought: true,
            endtime,
            currentbid: parseInt(p.price),
            highestbidder: id
        }).then((value)=>{
            const result = {response: "successful"}
            res.status(200).json(result)
        })        
        // req.params vs req.userId
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const getAuctionProducts = async (req, res) => {
    // const id = req.userId;
    try {
      const prods = await product.find({auction: true});
      // console.log(AdminItem);
      res.status(200).json(prods);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const bidProduct = async (req,res)=>{
    // const id = req.userId;
    
    try{
        const { pid, bidamount, id } = req.body
        product.findByIdAndUpdate(pid,{
            highestbidder: id,
            currentbid: bidamount
        }).then((value)=>{
            res.status(200).json({"response":"successful"})
        });
    }catch(e){
        console.log(e);
        const result = {"response":"Error updating cart"}
        res.status(404).json(result)
    }
};



export default router;