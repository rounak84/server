import cart from "../models/cart.js";
import product from "../models/product.js";
import nodemailer from 'nodemailer';
import UserModel from "../models/user.js";

async function sendMailTo(destinationName , destinationEmail , subject, body){    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: "webathonrit@gmail.com",
        pass: process.env.EMAIL_PASS,
        }
    });
    
    var mailOptions = {
        from: 'GoodAsNew<webathonrit@gmail.com>',
        to: destinationEmail,
        subject: subject,
        html: body,
    };
    
    try{
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent ", info.messageId)
        return true
    }catch{
        console.log("Errored")
        return false
    }
    
    
}


export const getProducts = async (req, res) => {
  try {
    const prods = await product.find({bought: false});
    // console.log(AdminItem);
    res.status(200).json(prods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const buyCart = async (req, res) => {
    const { id } = req.body
    // const id = req.userId
  try {
    const user = await UserModel.findById(id);
    const c = await cart.findOne({"user":id});
        console.log(c);
        const prods = c.products
        var result = {}
        await prods.forEach( async p => {
            await product.findById(p).then(async (value)=>{
                const key = value.name + ' - ' + value._id
                result[key] = value.price
                // console.log(value.name);
            })
        });
        setTimeout(() => {  
            const body = "Items Bought: \n" + result.toString()
            sendMailTo(user.name,user.email,'Invoice',body).then((r)=>{
                cart.findByIdAndUpdate(c._id,{
                    products:[],
                    total_price : 0
                })
                if(r){
                    res.status(200).json({"response":"Bought"});
                }else{
                    res.status(200).json({"response":"Bought but mail not sent"});
                }
            })
        },5000 );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};