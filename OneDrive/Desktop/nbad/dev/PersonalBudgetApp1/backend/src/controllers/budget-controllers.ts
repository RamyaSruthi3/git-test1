import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import mongoose from "mongoose";


export const sendBudgetToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   
   
    // const newBudget = {
    //   eatout:req.body.eatout,
    //   rent:req.body.rent,
    //   grocery:req.body.grocery,
    //   movies:req.body.movies,
    //   electricity:req.body.electricity,
    //   gas:req.body.gas,
    //   misc:req.body.misc
    // }
  let _user = await User.findById(
       res.locals.jwtData.id,
      );
_user.budget.push(req.body.eatout)


  const user = await User.findByIdAndUpdate(
       res.locals.jwtData.id,
      { budget: _user.budget},
      { new: true },
      );
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    
    return res.status(201).json({ message: "OK", budget: user.budget });
   
  } 
  catch (error) {
  
    console.log(error);
    return res.status(400).json({ message: "ERROR", cause: error.message });
  }
};


export const getAllBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

  const users = await User.findById(res.locals.jwtData.id);


  return res.status(201).json({ message: "OK", budget: users.budget });
} catch (error) {
  console.log(error);
  return res.status(400).json({ message: "ERROR", cause: error.message });
}
};

