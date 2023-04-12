import product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const prods = await product.find({bought: false});
    // console.log(AdminItem);
    res.status(200).json(prods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const buyProduct = async (req, res) => {
  try {
    const prods = await product.find({});
    // console.log(AdminItem);
    res.status(200).json(prods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};