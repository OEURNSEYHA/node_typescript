import dotenv from "dotenv";
import app from "./app";
dotenv.config({path: "src/config/config.env"});
// ========================router==========
import authRoute from "./routes/authRoute";
import connectDatabase from "./config/database";
connectDatabase();
app.use("/api/v1", authRoute);


app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
