const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    user_id:{type: Schema.Types.ObjectId,required:true},
    list_product:{type:Array,required:true}
},)

const Wishlist = mongoose.model('Wishlist',wishlistSchema);
module.export=Wishlist





