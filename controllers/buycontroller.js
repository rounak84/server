import product from "../models/product";

export const getProducts = async (req, res) => {
  try {
    const prods = await product.find({});
    // console.log(AdminItem);
    res.status(200).json(prods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};