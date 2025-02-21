import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import router from "./routes/index";
import "./services/database";
const app = express();
app.use(express.json());

app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log(`server running......`);
});