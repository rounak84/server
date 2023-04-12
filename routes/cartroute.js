import express from 'express';
import auth from '../middleware/auth.js';
import { getcartdata,updatecartdata, deletecartdata } from '../controllers/cartcontroller.js';
const router = express.Router();

router.post("/updatecart", auth,updatecartdata);
router.get("/getcart/:uid", auth,getcartdata);
router.delete("/deletecart",auth, deletecartdata);


export default router;