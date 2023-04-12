const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    seller_id:{type:Schema.Types.ObjectId,required:true},
    feedback_list:{type:Array,required:true}, 
},)

const Reviews = mongoose.model('Review',reviewSchema);
module.export=Reviews
