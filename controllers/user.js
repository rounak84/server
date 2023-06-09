import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // to store the user in the browser for a period of time... (else re login everytime)

import UserModel from "../models/user.js";
import cart from "../models/cart.js";

export const signin = async (req, res) => {
  const { email, password } = req.body; // get the email and password from the body/front end

  try {
    const existingUser = await UserModel.findOne({ email }); // check if the user exists
    if (!existingUser)
      return res.status(404).json({ message: "User not found" })

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Password is incorrect" });

      // send jwt to frontend
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    ); // info to store in token (.sign bracket part). In place of test it should be process.env.JWT_SECRET as its a secret key. Also will use this token in front end to verify the user n all
    // console.log("backend")
    // console.log(existingUser)
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, phone, address  } = req.body;
  
  try {
    const existingUser = await UserModel.findOne({ email });
  
    if (existingUser)
    return res.status(400).json({ message: "User already exists" });
    
    const hashedPassword = await bcrypt.hash(password, 12); // 12 level of difficulty
      
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: name,
      phone: parseInt(phone),
      address
    });

    const cartCreation = await cart.create({
      user: result._id,
      products: [],
      total_price: 0
    });

    // const reviewCreation = await review.create({
    //   seller_id: result._id,
    //   reviews: [],
    // })

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
