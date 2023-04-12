import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  phone: {type: Number, required : true},
  address: {type: String, required: true}
});

export default mongoose.model("User", userSchema);