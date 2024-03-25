import { Request, Response } from "express";
import bcrypt from "bcrypt"
import AuthSchema from "../models/auth";


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

  addNew: async (req: Request, res: Response) => {
    try {
      // Extract email from the request body
      const { username, fullname, email, password } = req.body;

      const salt = await bcrypt.genSaltSync();
      const hasPassword = await bcrypt.hashSync(password, salt);

      console.log(hasPassword);
      return;

      // Create a new authentication record in the database
      const auth = await AuthSchema.create({ email });

      // Send a JSON response with the success message and the newly created authentication record
      res.json({
        success: true,
        message: "Authentication record created successfully",
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
