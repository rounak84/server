import express from "express";
import auth from "../middleware/auth.js";
import { addToAuction,bidProduct, getAuctionProducts } from "../controllers/auctioncontroller.js";
const router = express.Router();


router.post("/putforauction", addToAuction)
router.get("/getauction", getAuctionProducts)
router.post("/bid" , bidProduct)

export default router;