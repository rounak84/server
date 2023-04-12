import express from "express";
import auth from "../middleware/auth.js";
import { getProducts } from "../controllers/buycontroller.js";
const router = express.Router();


router.get("/getproducts", getProducts)
router.post("/buy",auth ,getProducts)

export default router;