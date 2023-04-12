import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js"
import sellRoutes from "./routes/sell.js";
import cartRoutes from "./routes/cartroute.js";
import constants from "./constants.js";



const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 8080;

// app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/user",sellRoutes)
app.use("/user",cartRoutes);
// app.use("/cart",cartroute);

const CONNECTION_URL = constants.DB_URL;
// console.log(CONNECTION_URL);


mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });


  
app.listen(PORT, () => {
    console.log("Server started on 8080");
  });
  