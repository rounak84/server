import express from "express";
import auth from "../middleware/auth.js";
import { getProducts } from "../controllers/buycontroller.js";
const router = express.Router();


router.post("/getproducts", getProducts)

export default router;