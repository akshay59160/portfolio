import  express  from "express";
import cookieParser from "cookie-parser";
export const app = express();

app.use(express.json({ limit:"500mb "}));

// app.use(express.limit(10));
app.use(express.urlencoded({ extended:true,parameterLimit:100000, limit:"500mb"}))
app.use(cookieParser())




import { userRouter } from "./routes/User.js";


app.use("/api/v1",userRouter);