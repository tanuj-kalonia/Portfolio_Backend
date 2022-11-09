import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(sucess => console.log(`Mongodb connected to ${sucess.connection.host}`))
        .catch(err => console.log(err));
}