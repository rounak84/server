import express from "express";
const mongoose = require('mongoose')

import reviews from '../models/review.js';
import feedbacks from '../models/feedback.js';
const app = express();
const portNo = 8080;
const DB_URL =''


app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery',true);
mongoose.connect(DB_Url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result)=>{
            app.listen(portNo)
        })
        .catch((err) => {
            console.log(err);
        });

app.post('./reviews',async(req,res)=>{
    const user_id = app.body.user_id
    const seller_id = app.body.seller_id
    var review = app.body.feedback 

    feedback.create({
        user_id:user_id,
        feedback: review,
    }).then((value)=>{
        doc_id=value._id
        try {
                reviews.findOne({seller_id},{}).then(value=>{
                current_feedbacklist = value.feedback_list
                current_feedbacklist.push(doc_id)
                
                reviews.UpdateOne({seller_id:seller_id},{feedback_list:current_feedbacklist}).then(value=>{
                    const result = {"response":"Updated feedback"}
                    res.status(200).json(result)
                })

            })
        } catch (error) {
            console.log(error)
            const result = {response:'could not find seller'}
            res.status(404).jason(result)
        } 

    })
})