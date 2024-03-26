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
    },
    role:{
      type: String,
      default: "user",
      required: true
    },
    status: {
      type: Boolean,
      default: true,
      required: true
    },
    order: {
      type: Number,
      default: 1,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("auths", authSchemar);
