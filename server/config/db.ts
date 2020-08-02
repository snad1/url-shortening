import mongoose from "mongoose"
import config from "../config/default";

const db: any = config.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB connected...")
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

module .exports = connectDB
