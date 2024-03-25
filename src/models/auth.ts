import mongoose from "mongoose";
import validator from "validator";

const authSchemar = new mongoose.Schema(
  {
    username:{
      type: String,
    //   required: true
    },
    fullname: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please enter valid email address"]
    //   validate: [validate.isEmail, "Please enter valid email"],
    },
    password: {

      type: String,
      required: [true, "Please enter your password"]
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("auths", authSchemar);
