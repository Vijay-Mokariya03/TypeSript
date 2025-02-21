import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string)
    .then(() => {
        console.log("DataBase Connected.");
    })
    .catch((error) => {
        console.log(error);
    })
export default mongoose