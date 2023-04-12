const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = Schema({
    user_id:{type:Schema.Types.ObjectId,required:true},
    feedback:{type:String,required:true}, 
},{timestamps: true})

const Feedback = mongoose.model('Feedback',feedbackSchema);
module.export=Feedback
