import mongoose, { Schema } from "mongoose";

const productSchema = mongoose.Schema({
    owner: {type: Schema.Types.ObjectId, required: true},
    name: { type: String, required: true },
    price: { type: String, required: true },
    id: { type: String },
    image: {type: String},
    bought: {type: Boolean},
    auction: {type: Boolean}
});

export default mongoose.model("Product", productSchema);