import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    seller_id:{type:Schema.Types.ObjectId,required:true},
    feedback_list:{type:Array,required:true}, 
},)


export default mongoose.model("Review", reviewSchema);
