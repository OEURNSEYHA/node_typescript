import { Request, Response } from "express";
import bcrypt from "bcrypt"
import AuthSchema from "../models/auth";
import { isStrongPassword } from "validator";


const authController = {



  getAll: async (req: Request, res: Response) => {
    try {
      // Retrieve all authentication data from the database
      // and send a JSON response
      res.json({ message: "Retrieved all authentication data successfully." });
    } catch (error: any) { // Specify 'any' type for 'error'
      // Handle errors gracefully
      res.status(500).json({
        errorMessage: "Internal server error",
        error: error.message,
      });
    }
  },

  register : async (req: Request, res: Response) => {
    try {
      // Extract email from the request body
      const { username, fullname, email, password } = req.body;

      if(!isStrongPassword(password)){
        throw new Error("Please enter strong password");
      }
      const salt = await bcrypt.genSaltSync();
      const hasPassword = await bcrypt.hashSync(password, salt);
      const maxOrder = await AuthSchema.findOne({}).sort({order:-1});
      const order = maxOrder ? maxOrder.order + 1: 1;
      // Create a new authentication record in the database
      const auth = await AuthSchema.create({ username, fullname, email, password: hasPassword, order });

      // Send a JSON response with the success message and the newly created authentication record
      res.json({
        success: true,
       
        auth,
      });
    } catch (error : any) { // Specify 'any' type for 'error'
      // Handle errors gracefully
      res.status(400).json({
        error: error.message,
        errorStack: error.stack
      });
    }
  },
};

export default authController;
