import mongoose from "mongoose";
import 'dotenv/config'
export const dbConnection = () => {
 
  mongoose
    .connect(process.env.MONGO_URI)
    
    
};
