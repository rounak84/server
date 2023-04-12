import express from "express";
import auth from "../middleware/auth.js";
import { getProducts, buyCart } from "../controllers/buycontroller.js";
const router = express.Router();


router.get("/getproducts", getProducts)
router.post("/user/buy",buyCart)

export default router;