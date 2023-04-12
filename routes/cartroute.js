import express from 'express';
import auth from '../middleware/auth.js';
import { getcartdata,updatecartdata, deletecartdata } from '../controllers/cartcontroller.js';
const router = express.Router();

router.post("/updatecart", updatecartdata);
router.get("/getcart/:uid", getcartdata);
router.delete("/deletecart", deletecartdata);


export default router;