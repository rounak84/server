import express from "express";
import auth from "../middleware/auth.js";
import { addToAuction,bidProduct, getAuctionProducts } from "../controllers/auctioncontroller.js";
const router = express.Router();


router.post("/putforauction",auth, addToAuction)
router.get("/getauction",auth, getAuctionProducts)
router.post("/bid" ,auth, bidProduct)

export default router;