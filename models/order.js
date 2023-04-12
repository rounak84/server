import mongoose, { Schema } from "mongoose";

const orderSchema = mongoose.Schema({
    buyer: {type: Schema.Types.ObjectId, required: true},
    seller: {type: Schema.Types.ObjectId, required: true},
    product_id: { type: Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
});

export default mongoose.model("Order", orderSchema);