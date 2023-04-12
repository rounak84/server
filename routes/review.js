import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import reviews from '../models/review.js';
import feedback from '../models/feedback.js';

router.post('/reviews', async(req,res)=>{
    const user_id = req.body.user_id
    const seller_id = req.body.seller_id
    var review = req.body.review 
    if(review == ""){
        const result ={response:'the feeback is empty'}
        res.status(404).json(result)
    }else{
    feedback.create({
        user_id:user_id,
        feedback: review,
    }).then((value)=>{
        var doc_id=value._id
        try {
                reviews.findOne({seller_id},{}).then(value=>{
                    if(value==null)
                    {
                        var current_feedbacklist = []
                    }else{
                        var current_feedbacklist = value.feedback_list
                    }
                current_feedbacklist.push(doc_id)
                
                reviews.updateOne({seller_id:seller_id},{feedback_list:current_feedbacklist}).then(value=>{
                    const result = {"response":"Updated feedback"}
                    res.status(200).json(result)
                })

            })
        } catch (error) {
            console.log(error)
            const result = {response:'could not find seller'}
            res.status(404).json(result)
        } 

    })}
})

export default router;