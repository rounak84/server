import mongoose, { Schema } from "mongoose";

const cartSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId, required: true},
    products: { type: Array, required: true },
    total_price: { type: Number, required: true },
});

export default mongoose.model("Cart", cartSchema);